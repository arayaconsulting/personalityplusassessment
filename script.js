/**
 * ARAYA CONSULTING - AUTOMATIC CODE VERSION (MULTI-MODE ENGINE V3)
 * Sistem: Sinkronasi Google Sheets + Kode Aktivasi Unik + Robust Multi-Mode Detection
 */

// --- KONFIGURASI UTAMA ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsJfQT1jNlUEV97vbOR3SuAFDBAz5G3cyUJSd0ceColcNbAfk9FWsGwkHkV6N5ga7x/exec"; 
const ADMIN_WA = "6285232526003"; 

// Fungsi Deteksi Mode Kebal Huruf Besar/Kecil, Query Param (?mode=) & Hash (#)
function getActiveMode() {
    const fullUrl = (window.location.search + " " + window.location.hash).toLowerCase();
    
    if (fullUrl.includes('parenting') || fullUrl.includes('family') || fullUrl.includes('orangtua')) return 'parenting';
    if (fullUrl.includes('youth') || fullUrl.includes('pemuda') || fullUrl.includes('mahasiswa')) return 'youth';
    if (fullUrl.includes('business') || fullUrl.includes('bisnis') || fullUrl.includes('hcm') || fullUrl.includes('sbs')) return 'business';
    return 'general';
}

// Tampilkan Indikator Mode di Halaman Awal agar tidak perlu menebak
window.addEventListener('DOMContentLoaded', () => {
    const activeMode = getActiveMode();
    const introDesc = document.querySelector('#intro-container p');
    if (introDesc) {
        let badgeText = "Mode: Umum & Pengembangan Diri";
        let badgeColor = "#1a2a6c";
        if (activeMode === 'business') { badgeText = "Mode: Pengusaha & HCM"; badgeColor = "#c5a059"; }
        else if (activeMode === 'parenting') { badgeText = "Mode: Parenting & Keluarga"; badgeColor = "#27ae60"; }
        else if (activeMode === 'youth') { badgeText = "Mode: Pemuda & Self-Leadership"; badgeColor = "#e67e22"; }

        const badge = document.createElement('div');
        badge.innerHTML = `<span style="display:inline-block; margin-top:8px; padding:4px 12px; background:${badgeColor}; color:#fff; font-size:12px; font-weight:bold; border-radius:20px;">${badgeText}</span>`;
        introDesc.appendChild(badge);
    }
});
// -------------------------

const quizQuestions = [
    { question: "1. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ADVENTUROUS - orang yang suka tantangan, hal-hal baru, tekad kuat", type: "Choleric" }, { text: "ADAPTABLE - mudah menyesuaikan diri dalam setiap situasi", type: "Phlegmatic" }, { text: "ANIMATED - penuh gairah hidup, ekspresif", type: "Sanguine" }, { text: "ANALYTICAL - suka meneliti dan logis", type: "Melancholic" }] },
    { question: "2. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PERSISTENT - menyelesaikan pekerjaan sampai tuntas", type: "Melancholic" }, { text: "PLAYFUL - ceria, suka bercanda", type: "Sanguine" }, { text: "PERSUASIVE - meyakinkan dengan logika dan fakta", type: "Choleric" }, { text: "PEACEFUL - suasana hati damai, menghindari tantangan", type: "Phlegmatic" }] },
    { question: "3. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SUBMISSIVE - mudah menerima pandangan orang lain", type: "Phlegmatic" }, { text: "SELF SACRIFICING - rela berkorban demi orang lain", type: "Melancholic" }, { text: "SOCIABLE - suka tampil cerdas dan menyenangkan", type: "Sanguine" }, { text: "STRONG-WILLLED - berkemauan keras untuk mencapai tujuan", type: "Choleric" }] },
    { question: "4. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CONSIDERATE - tanggap terhadap perasaan orang lain", type: "Phlegmatic" }, { text: "CONTROLLED - dapat mengendalikan emosi", type: "Melancholic" }, { text: "COMPETITIVE - selalu ingin menang dalam setiap lomba", type: "Choleric" }, { text: "CONVINCING - meyakinkan melalui daya tarik pribadi", type: "Sanguine" }] },
    { question: "5. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "REFRESHING - menyegarkan orang lain", type: "Sanguine" }, { text: "RESPECTFUL - sopan dan menghargai orang lain", type: "Phlegmatic" }, { text: "RESERVED - menahan diri dalam ekspresi", type: "Melancholic" }, { text: "RESOURCEFUL - bertindak cepat dan efektif", type: "Choleric" }] },
    { question: "6. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SATISFIED - mudah menerima keadaan", type: "Phlegmatic" }, { text: "SENSITIVE - peduli mendalam terhadap orang lain", type: "Melancholic" }, { text: "SELF-RELIANT - mandiri dan percaya kemampuan sendiri", type: "Choleric" }, { text: "SPIRITED - penuh gairah dan kegembiraan", type: "Sanguine" }] },
    { question: "7. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PLANNER - suka membuat rencana terperinci", type: "Melancholic" }, { text: "PATIENT - sabar dan tetap tenang", type: "Phlegmatic" }, { text: "POSITIVE - yakin segala hal akan beres", type: "Choleric" }, { text: "PROMOTER - mendorong orang lain bergabung", type: "Sanguine" }] },
    { question: "8. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SURE - yakin dan hampir tidak pernah ragu", type: "Choleric" }, { text: "SPONTANEOUS - lebih menyukai hidup impulsif", type: "Sanguine" }, { text: "SCHEDULED - hidup sesuai rencana harian", type: "Melancholic" }, { text: "SHY - pendiam dan pemalu", type: "Phlegmatic" }] },
    { question: "9. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ORDERLY - mengatur segalanya secara sistematis", type: "Melancholic" }, { text: "OBLIGING - mudah menampung saran orang lain", type: "Phlegmatic" }, { text: "OUTSPOKEN - berbicara terus terang", type: "Choleric" }, { text: "OPTIMISTIC - yakin semua akan beres", type: "Sanguine" }] },
    { question: "10. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "FRIENDLY - ramah dan suka menanggapi", type: "Phlegmatic" }, { text: "FAITHFUL - setia dan dapat diandalkan", type: "Melancholic" }, { text: "FUNNY - penuh humor dan tawa", type: "Sanguine" }, { text: "FORCEFUL - berwibawa dan kuat", type: "Choleric" }] },
    { question: "11. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DARING - berani mengambil resiko", type: "Choleric" }, { text: "DELIGHTFUL - menyenangkan sebagai teman", type: "Sanguine" }, { text: "DIPLOMATIC - peka dan sabar", type: "Phlegmatic" }, { text: "DETAILED - melakukan sesuatu secara urut", type: "Melancholic" }] },
    { question: "12. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CHEERFUL - riang dan bersemangat", type: "Sanguine" }, { text: "CONSISTENT - seimbang secara emosional", type: "Phlegmatic" }, { text: "CULTURED - menyukai hal-hal berkelas", type: "Melancholic" }, { text: "CONFIDENT - percaya akan kemampuan diri", type: "Choleric" }] },
    { question: "13. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "IDEALISTIC - butuh tingkat kesempurnaan", type: "Melancholic" }, { text: "INDEPENDENT - mandiri dan berdikari", type: "Choleric" }, { text: "INOFFENSIVE - tidak menyebabkan pertengkaran", type: "Phlegmatic" }, { text: "INSPIRING - memberi inspirasi bagi orang lain", type: "Sanguine" }] },
    { question: "14. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DEMONTRATIVE - terbuka menyatakan kasih sayang", type: "Sanguine" }, { text: "DECISIVE - mampu membuat keputusan cepat", type: "Choleric" }, { text: "DRY HUMOR - humor singkat dan menggigit", type: "Melancholic" }, { text: "DEEP - mendalam dan introspektif", type: "Phlegmatic" }] },
    { question: "15. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "MEDIATOR - penengah konflik yang baik", type: "Phlegmatic" }, { text: "MUSICAL - menghargai seni dan musik", type: "Melancholic" }, { text: "MOVER - pemimpin yang produktif", type: "Choleric" }, { text: "MIXES EASILY - senang bertemu orang baru", type: "Sanguine" }] },
    { question: "16. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "THOUGHTFUL - perhatian dan tenggang rasa", type: "Melancholic" }, { text: "TENACIOUS - keras kepala mencapai tujuan", type: "Choleric" }, { text: "TALKER - senang bercerita dan menghibur", type: "Sanguine" }, { text: "TOLERANT - mudah menerima cara orang lain", type: "Phlegmatic" }] },
    { question: "17. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "LISTENER - selalu bersedia mendengarkan", type: "Phlegmatic" }, { text: "LOYAL - setia pada gagasan atau pekerjaan", type: "Melancholic" }, { text: "LEADER - pemimpin alami yang dominan", type: "Choleric" }, { text: "LIVELY - penuh gairah dan cekatan", type: "Sanguine" }] },
    { question: "18. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CONTENTED - mudah puas, jarang iri hati", type: "Phlegmatic" }, { text: "CHIEF - memegang tampuk pimpinan", type: "Choleric" }, { text: "CHARTMAKER - mengatur hidup dengan daftar", type: "Melancholic" }, { text: "CUTE - cerdas dan jadi pusat perhatian", type: "Sanguine" }] },
    { question: "19. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PERFECTIONIST - standar tinggi pada segalanya", type: "Melancholic" }, { text: "PLEASANT - menyenangkan untuk bergaul", type: "Phlegmatic" }, { text: "PRODUCTIVE - sulit untuk diam/istirahat", type: "Choleric" }, { text: "POPULAR - sumber hidup sebuah pesta", type: "Sanguine" }] },
    { question: "20. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "BOUNCY - kepribadian yang semangat besar", type: "Sanguine" }, { text: "BOLD - berani menanggung resiko", type: "Choleric" }, { text: "BEHAVED - membawa diri dengan baik", type: "Melancholic" }, { text: "BALANCED - stabil dan seimbang", type: "Phlegmatic" }] },
    { question: "21. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "BLANK - jarang menunjukkan emosi wajah", type: "Phlegmatic" }, { text: "BASHFUL - menghindar dari perhatian", type: "Melancholic" }, { text: "BRASSY - suka pamer dan menarik perhatian", type: "Sanguine" }, { text: "BOSSY - suka memerintah/mendominasi", type: "Choleric" }] },
    { question: "22. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "UNDISCIPLINED - kurang disiplin dan teratur", type: "Sanguine" }, { text: "UNSYMPATHETIC - sulit mengenali perasaan orang", type: "Choleric" }, { text: "UNENTHUSIASTIC - cenderung tidak bergairah", type: "Phlegmatic" }, { text: "UNFORGIVING - sulit melupakan luka batin", type: "Melancholic" }] },
    { question: "23. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "RETICENT - tidak ingin terlibat hal rumit", type: "Phlegmatic" }, { text: "RESENTFUL - sering memendam perasaan negatif", type: "Melancholic" }, { text: "RESISTANT - melawan cara orang lain", type: "Choleric" }, { text: "REPETITIOUS - menceritakan kisah yang sama", type: "Sanguine" }] },
    { question: "24. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "FUSSY - menuntut perhatian pada hal detail", type: "Melancholic" }, { text: "FEARFUL - merasa kurang percaya diri", type: "Phlegmatic" }, { text: "FORGETFUL - daya ingat lemah/cuek", type: "Sanguine" }, { text: "FRANK - terus terang bicara apa adanya", type: "Choleric" }] },
    { question: "25. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "IMPATIENT - tidak sabaran/susah menunggu", type: "Choleric" }, { text: "INSECURE - merasa tidak aman", type: "Melancholic" }, { text: "INDECISIVE - sulit membuat keputusan", type: "Phlegmatic" }, { text: "INTERRUPTS - suka menyela pembicaraan", type: "Sanguine" }] },
    { question: "26. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "UNPOPULAR - standar perfeksionis membuatnya dijauhi", type: "Melancholic" }, { text: "UNINVOLVED - tidak punya keinginan terlibat", type: "Phlegmatic" }, { text: "UNPREDICTABLE - suasana hati berubah cepat", type: "Sanguine" }, { text: "UNAFFECTIONATE - sulit menyatakan kasih sayang", type: "Choleric" }] },
    { question: "27. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "HEADSTRONG - bersikeras dengan caranya sendiri", type: "Choleric" }, { text: "HAPHAZARD - tidak punya cara konsisten", type: "Sanguine" }, { text: "HARD TO PLEASE - sulit disenangkan/puas", type: "Melancholic" }, { text: "HESITANT - sulit untuk terlibat", type: "Phlegmatic" }] },
    { question: "28. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PLAIN - tidak menonjol/emosi datar", type: "Phlegmatic" }, { text: "PESSIMISTIC - melihat sisi buruk situasi", type: "Melancholic" }, { text: "PROUD - merasa dirinya selalu benar", type: "Choleric" }, { text: "PERMISSIVE - membiarkan orang lain agar diterima", type: "Sanguine" }] },
    { question: "29. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ANGERED EASILY - mudah marah meledak-ledak", type: "Sanguine" }, { text: "AIMLESS - tidak punya inisiatif/tujuan", type: "Phlegmatic" }, { text: "ARGUMENTATIVE - suka mendebat orang lain", type: "Choleric" }, { text: "ALIENATED - merasa terkucilkan", type: "Melancholic" }] },
    { question: "30. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "NAIVE - perspektif polos seperti anak-anak", type: "Sanguine" }, { text: "NEGATIVE ATTITUDE - jarang melihat sisi positif", type: "Melancholic" }, { text: "NERVY - penuh keyakinan yang negatif", type: "Choleric" }, { text: "NONCHALANT - masa bodoh dan cuek", type: "Phlegmatic" }] },
    { question: "31. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "WORRIER - selalu merasa risau/takut", type: "Melancholic" }, { text: "WITDRAWN - perlu waktu menyendiri", type: "Phlegmatic" }, { text: "WORKAHOLIC - agresif dan harus selalu produktif", type: "Choleric" }, { text: "WANTS CREDIT - berkembang jika dipuji", type: "Sanguine" }] },
    { question: "32. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "TOO SENSITIVE - mudah tersinggung", type: "Melancholic" }, { text: "TACTLESS - kurang peka perasaan orang", type: "Choleric" }, { text: "TIMID - takut akan konflik", type: "Phlegmatic" }, { text: "TALKACTIVE - pembicara menyenangkan/sulit dengar", type: "Sanguine" }] },
    { question: "33. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DOUBTFUL - terpengaruh ketidakpastian", type: "Phlegmatic" }, { text: "DISORGANIZED - tidak mampu mengatur hidup", type: "Sanguine" }, { text: "DOMINEERING - memaksa menguasai orang lain", type: "Choleric" }, { text: "DEPRESSED - merasa negatif tanpa alasan", type: "Melancholic" }] },
    { question: "34. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "INCONSISTENT - emosi tidak logis", type: "Sanguine" }, { text: "INTROVERT - perhatian tertuju ke dalam diri", type: "Melancholic" }, { text: "INTOLERANT - tidak menerima sudut pandang lain", type: "Choleric" }, { text: "INDIFFERENT - menganggap hal tidak penting", type: "Phlegmatic" }] },
    { question: "35. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "MESSY - hidup dalam keadaan berantakan", type: "Sanguine" }, { text: "MOODY - suasana hati mudah merosot", type: "Melancholic" }, { text: "MUMBLES - bicara tidak jelas", type: "Phlegmatic" }, { text: "MANIPULATIVE - licik demi keuntungan", type: "Choleric" }] },
    { question: "36. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SLOW - lamban bertindak", type: "Phlegmatic" }, { text: "STUBBORN - keras kepala", type: "Choleric" }, { text: "SHOW-OFFS - ingin tampil menonjol", type: "Sanguine" }, { text: "SKEPTICAL - mempertanyakan motivasi", type: "Melancholic" }] },
    { question: "37. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "LONER - butuh waktu sendiri", type: "Melancholic" }, { text: "LORD OVER - menyatakan dirinya benar", type: "Choleric" }, { text: "LAZY - menilai pekerjaan dari energi", type: "Phlegmatic" }, { text: "LOUD - suara melebihi orang lain", type: "Sanguine" }] },
    { question: "38. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SLUGGISH - perlu dorongan agar bergerak", type: "Phlegmatic" }, { text: "SUSPICIOUS - mencurigai ide orang lain", type: "Melancholic" }, { text: "SHORT TEMPERED - mudah marah tak sabaran", type: "Choleric" }, { text: "SCATTERBRAINED - suka berubah-ubah", type: "Sanguine" }] },
    { question: "39. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "REVENGEFUL - menyimpan dendam", type: "Melancholic" }, { text: "RESTLESS - menyukai aktivitas baru", type: "Sanguine" }, { text: "RELUCTANT - tidak suka terlibat", type: "Phlegmatic" }, { text: "RASH - bertindak tergesa-gesa", type: "Choleric" }] },
    { question: "40. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "COMPROMISING - menghindari konflik", type: "Phlegmatic" }, { text: "CRITICAL - sering menilai negatif", type: "Melancholic" }, { text: "CRAFTY - menghalalkan segala cara", type: "Choleric" }, { text: "CHANGEABLE - perlu variasi agar tidak bosan", type: "Sanguine" }] }
];

const personalityNames = { "Sanguine": "Populer Sanguine", "Choleric": "Kuat Choleric", "Melancholic": "Sempurna Melancholic", "Phlegmatic": "Damai Phlegmatic" };

const fullNarratives = {
    "Sanguine": {
        leftGeneral: `<b>Karakteristik Dasar:</b> Pribadi yang antusias, ekspresif, optimis, dan membawa energi positif ke lingkungan sekitar. Memiliki dorongan alami pada interaksi sosial, fleksibilitas, dan komunikasi terbuka.<br><br>
<b>Kekuatan Natural:</b> Cepat membangun kedekatan (rapport) dengan relasi baru, persuasif dalam menyampaikan ide, adaptif terhadap perubahan, dan efektif mencairkan ketegangan suasana kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran representasi publik, promosi, negosiasi awal, penguatan keterlibatan relasi, dan fungsi-fungsi dinamis yang membutuhkan keluwesan komunikasi tatap muka.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terhadap inkonsistensi eksekusi harian, mudah terdistraksi dari target utama, serta cenderung menghindari administrasi detail dan kepatuhan alur kerja rutin.<br><br>
<b>Saran Pengembangan:</b> Bangun kebiasaan menggunakan checklist kerja tertulis dan pasangkan dengan rekan kerja yang kuat dalam pengawalan detail operasional.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang antusias, ekspresif, optimis, dan membawa energi positif ke lingkungan sekitar. Memiliki dorongan alami pada interaksi sosial, fleksibilitas, dan komunikasi terbuka.<br><br>
<b>Kekuatan Natural:</b> Cepat membangun kedekatan (rapport) dengan relasi baru, persuasif dalam menyampaikan ide, adaptif terhadap perubahan, dan efektif mencairkan ketegangan suasana kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran representasi publik, promosi, negosiasi awal, penguatan keterlibatan relasi, dan fungsi-fungsi dinamis yang membutuhkan keluwesan komunikasi tatap muka.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terhadap inkonsistensi eksekusi harian, mudah terdistraksi dari target utama, serta cenderung menghindari administrasi detail dan kepatuhan alur kerja rutin.<br><br>
<b>Saran Pengembangan:</b> Bangun kebiasaan menggunakan checklist kerja tertulis dan pasangkan dengan rekan kerja yang kuat dalam pengawalan detail operasional.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang hangat, ekspresif, ceria, dan secara alami mampu menciptakan atmosfer rumah yang penuh tawa, optimisme, serta interaksi sosial yang menyenangkan bagi anak.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Sangat mudah menjalin kedekatan emosional dan menjadi teman cerita bagi anak. Kreatif dalam merancang aktivitas bermain bersama, gemar memberikan apresiasi, serta tidak canggung mengekspresikan kasih sayang dan pelukan hangat.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat mudah tertekan saat suasana rumah terasa kaku, monoton, atau ketika dibebani terlalu banyak rutinitas teknis. Titik kritisnya adalah sering kurang konsisten dalam menegakkan batasan/aturan harian, mudah lupa kesepakatan konsekuensi, serta suasana hati (mood) yang mudah berubah ketika melihat rumah berantakan atau anak sedang rewel.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Bangun rutinitas pengasuhan menggunakan papan jadwal atau aturan tertulis yang disepakati bersama pasangan. Latihlah jeda emosi untuk menghadirkan ketenangan diri sebelum merespons kerewelan anak agar suasana rumah tidak ikut gaduh.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang energetik, spontan, ramah, dan memancarkan aura positif di sekitarnya. Sumber energi utamanya berasal dari interaksi sosial yang dinamis, pertemanan luas, dan kebebasan mengekspresikan ide-ide kreatif secara terbuka.<br><br>
<b>Kekuatan Potensi & Keunggulan Alami:</b> Memiliki kecerdasan sosial yang tinggi, luwes beradaptasi di lingkungan baru, sangat persuasif dalam mengomunikasikan gagasan, cepat membangun jejaring (networking), serta mampu mencairkan suasana kaku dalam berbagai kelompok pergaulan maupun organisasi.<br><br>
<b>Ekosistem Belajar & Tumbuh Ideal:</b> Sangat berkembang pesat dalam aktivitas yang melibatkan diskusi interaktif, proyek kreatif kolaboratif, bidang hubungan masyarakat (public relations), kepanitiaan event, panggung presentasi, dan metode pembelajaran visual-praktis.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Rentan terjebak fenomena FOMO (tertarik mencoba banyak hal sekaligus namun sering berhenti di tengah jalan). Cepat merasa jenuh saat dituntut konsistensi pada detail tugas rutin, serta mudah teralihkan fokusnya oleh distraksi lingkungan media sosial atau ajakan pertemanan.<br><br>
<b>Saran Self-Leadership:</b> Tumbuhkan komitmen untuk menuntaskan setiap tanggung jawab yang telah dimulai (finisher mindset). Buat daftar prioritas harian yang terukur dan pilihlah 1–2 fokus keahlian utama agar potensi besar tidak tersebar tanpa hasil nyata.`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan lingkungan kerja melalui energi antusiasme, optimisme, dan kedekatan relasional.<br><br><b>Sinergi Tim Ideal:</b> Sangat memerlukan mitra kerja yang kuat dalam disiplin sistem, pengawasan administrasi, dan eksekusi tindak lanjut (follow-up).<br><br><b>Panduan Komunikasi:</b> Berikan apresiasi secara terbuka dan sampaikan evaluasi perbaikan secara personal dengan nada dialogis yang menyemangati.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan penerimaan tulus dan kehadiran orang tua yang utuh, bukan hanya perhatian saat suasana hati orang tua sedang ceria atau gembira.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Libatkan pasangan untuk mengimbangi pengawasan kedisiplinan dan jadwal belajar. Hindari melonggarkan izin atau aturan anak secara sepihak di belakang pasangan.<br><br><b>Panduan Merespons Anak:</b> Berikan perhatian penuh dan dengarkan cerita anak sampai tuntas tanpa tergesa-gesa memotongnya. Tahan diri dari bereaksi spontan yang memicu keributan saat anak rewel.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Growth Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penggerak antusiasme dan inisiator ide dalam tim; sangat efektif menjadi juru bicara kelompok atau garda depan relasi eksternal organisasi.<br><br><b>Sinergi Partner Ideal:</b> Membutuhkan mitra kerja yang terstruktur, teliti, dan disiplin waktu agar ide-ide besar dapat dieksekusi secara nyata sesuai jadwal.<br><br><b>Panduan Komunikasi:</b> Latihlah menyampaikan gagasan secara ringkas, to-the-point, dan berstruktur. Dengarkan perspektif rekan tim secara seksama tanpa menyela pembicaraan.</div>`
    },

    "Choleric": {
        leftGeneral: `<b>Karakteristik Dasar:</b> Pribadi yang tegas, dinamis, mandiri, dan berorientasi kuat pada pencapaian target. Memiliki dorongan alami untuk mengambil kendali, memecahkan kebuntuan, dan menghasilkan progres nyata.<br><br>
<b>Kekuatan Natural:</b> Berani mengambil risiko terukur, cepat mengambil keputusan di bawah tekanan, pragmatis mencari solusi, dan tangguh menghadapi hambatan operasional.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran eksekutor target strategis, inisiator proyek baru, penanganan krisis/masalah darurat, dan fungsi pendorong akselerasi ritme kerja.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung tidak sabar terhadap proses bertahap, berisiko mengabaikan empati interpersonal, serta rawan memicu resistensi tim karena memaksakan standar tanpa dialog.<br><br>
<b>Saran Pengembangan:</b> Latihlah kesabaran mendengarkan masukan sebelum memutuskan, serta hargai pentingnya kepatuhan alur sistem (SOP) di samping sekadar mengejar hasil akhir.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang tegas, dinamis, mandiri, dan berorientasi kuat pada pencapaian target. Memiliki dorongan alami untuk mengambil kendali, memecahkan kebuntuan, dan menghasilkan progres nyata.<br><br>
<b>Kekuatan Natural:</b> Berani mengambil risiko terukur, cepat mengambil keputusan di bawah tekanan, pragmatis mencari solusi, dan tangguh menghadapi hambatan operasional.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran eksekutor target strategis, inisiator proyek baru, penanganan krisis/masalah darurat, dan fungsi pendorong akselerasi ritme kerja.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung tidak sabar terhadap proses bertahap, berisiko mengabaikan empati interpersonal, serta rawan memicu resistensi tim karena memaksakan standar tanpa dialog.<br><br>
<b>Saran Pengembangan:</b> Latihlah kesabaran mendengarkan masukan sebelum memutuskan, serta hargai pentingnya kepatuhan alur sistem (SOP) di samping sekadar mengejar hasil akhir.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang tegas, berpendirian teguh, visioner, dan memiliki fokus yang sangat kuat untuk membentuk kemandirian, tanggung jawab, serta ketangguhan mental anak sejak dini.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Menjadi pelindung keluarga yang sigap dan tidak ragu mengambil keputusan penting di masa sulit. Sangat handal dalam melatih kedisiplinan hidup, menanamkan etos kerja keras, dan mendorong anak untuk berprestasi.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat tertekan saat anak bergerak lamban, menolak arahan, atau ketika rencana keluarga tidak berjalan lancar. Titik kritisnya adalah mudah terjebak adu ego (power struggle) dengan anak, kurang sabar saat anak lambat memahami instruksi, serta cenderung menuntut kepatuhan mutlak secara sepihak.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Gantikan instruksi searah dengan memberikan opsi pilihan yang terkontrol agar anak merasa dihargai kemandiriannya. Dengarkan sudut pandang dan perasaan anak sebelum memberikan konsekuensi atau aturan baru.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang berorientasi kuat pada target, mandiri, berani, dan dinamis. Didorong oleh motivasi alami untuk memimpin, memecahkan tantangan rumit, mandiri secara tindakan, dan melihat kemajuan konkret dari setiap usaha.<br><br>
<b>Kekuatan Potensi & Keunggulan Alami:</b> Sangat cepat mengambil keputusan taktis di bawah tekanan, tangguh menghadapi penolakan maupun kegagalan, tidak mudah menyerah oleh keterbatasan, dan memiliki daya juang kepemimpinan yang tinggi.<br><br>
<b>Ekosistem Belajar & Tumbuh Ideal:</b> Sangat terasah dalam wadah kepemimpinan organisasi, program kewirausahaan/proyek nyata, kompetisi/perlombaan yang menantang, serta peran sebagai penggerak eksekusi lapangan.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Cenderung tidak sabaran terhadap rekan tim yang bekerja lebih lambat, rawan bertindak otoriter, serta enggan mengakui kelemahan atau meminta pertolongan karena gengsi dan ego pembuktian diri.<br><br>
<b>Saran Self-Leadership:</b> Latihlah kerendahan hati untuk mendengarkan masukan rekan sebaya. Sadari bahwa kepemimpinan sejati dibangun atas dasar empati, kepercayaan tim, dan apresiasi terhadap proses bersama, bukan sekadar perintah.`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan organisasi melalui ketegasan arah, standar target tinggi, dan kecepatan tindakan nyata.<br><br><b>Sinergi Tim Ideal:</b> Membutuhkan mitra kerja yang kuat dalam penataan alur SOP dan kestabilan ritme tim agar akselerasi tetap terukur.<br><br><b>Panduan Komunikasi:</b> Sampaikan pesan langsung ke pokok persoalan (to-the-point), berbasis data ringkas, dan fokus pada solusi konkret.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan ruang aman untuk menyatakan perasaannya tanpa takut langsung dihakimi, dikritik tajam, atau dimarahi secara agresif.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Turunkan kontrol dominasi di rumah. Diskusikan dan sepakati pola asuh bersama pasangan secara setara tanpa saling menyalahkan di depan anak.<br><br><b>Panduan Merespons Anak:</b> Kendalikan intonasi suara saat menegur anak. Jelaskan alasan rasional dan konsekuensi logis di balik sebuah aturan dengan nada yang tenang namun tegas.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Growth Insight:</b><br><br><b>Gaya Kolaborasi:</b> Pendorong akselerasi target kelompok dan penentu arah tindakan taktis saat tim menghadapi kebuntuan atau tenggat waktu (deadline).<br><br><b>Sinergi Partner Ideal:</b> Memerlukan rekan tim yang tenang, analitis, dan cermat dalam manajemen risiko agar keputusan yang diambil tidak memicu gesekan relasi.<br><br><b>Panduan Komunikasi:</b> Gunakan gaya komunikasi yang lugas namun santun. Hindari nada bicara meremehkan agar tidak menciptakan resistensi atau merusak pertemanan.</div>`
    },

    "Melancholic": {
        leftGeneral: `<b>Karakteristik Dasar:</b> Pribadi yang mendalam, analitis, terstruktur, dan memiliki standar kualitas mutu yang tinggi. Menghargai ketepatan data, logika, dan perencanaan yang matang.<br><br>
<b>Kekuatan Natural:</b> Presisi mendeteksi celah risiko sebelum masalah terjadi, disiplin menegakkan standar kualitas, tertib administrasi, dan konsisten menjaga akurasi proses kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran perancangan sistem/SOP, audit operasional, kendali mutu (quality control), mitigasi risiko, dan analisis data atau keuangan.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terjebak overthinking (terlalu lama menimbang keputusan), perfeksionisme yang memperlambat laju eksekusi, serta sensitif terhadap kritik langsung.<br><br>
<b>Saran Pengembangan:</b> Terapkan prinsip tindakan cepat pada hal-hal yang butuh pengujian lapangan dan bangun fleksibilitas terhadap perubahan situasi yang dinamis.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang mendalam, analitis, terstruktur, dan memiliki standar kualitas mutu yang tinggi. Menghargai ketepatan data, logika, dan perencanaan yang matang.<br><br>
<b>Kekuatan Natural:</b> Presisi mendeteksi celah risiko sebelum masalah terjadi, disiplin menegakkan standar kualitas, tertib administrasi, dan konsisten menjaga akurasi proses kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran perancangan sistem/SOP, audit operasional, kendali mutu (quality control), mitigasi risiko, dan analisis data atau keuangan.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terjebak overthinking (terlalu lama menimbang keputusan), perfeksionisme yang memperlambat laju eksekusi, serta sensitif terhadap kritik langsung.<br><br>
<b>Saran Pengembangan:</b> Terapkan prinsip tindakan cepat pada hal-hal yang butuh pengujian lapangan dan bangun fleksibilitas terhadap perubahan situasi yang dinamis.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang mendalam, penuh pertimbangan, sangat teliti memperhatikan kebutuhan tumbuh kembang anak, dan memegang teguh nilai moral, keteraturan, serta adab keluarga.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Sangat terencana dalam mempersiapkan kebutuhan masa depan anak, teliti mendampingi proses belajar, konsisten menanamkan nilai-nilai kebaikan, serta menjadi teladan keteraturan yang baik di rumah.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat tertekan saat rumah berantakan, anak tidak tertib, atau saat merasa belum mampu menjadi orang tua yang ideal. Titik kritisnya adalah mudah terjebak rasa cemas berlebih (overparenting), menetapkan ekspektasi terlalu tinggi yang membuat anak takut salah, serta sensitif merasa gagal.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Berikan apresiasi pada usaha dan proses belajar anak daripada hanya menuntut hasil sempurna. Terapkan penerimaan bahwa rumah yang sesekali berantakan atau anak yang berbuat salah adalah bagian wajar dari proses eksplorasi tumbuh kembang.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang mendalam, reflektif, analitis, dan memiliki standar kualitas yang tinggi. Didorong oleh komitmen untuk mencari kebenaran fakta, kejelasan logika, dan ketertiban sistemik dalam setiap karya.<br><br>
<b>Kekuatan Potensi & Keunggulan Alami:</b> Memiliki ketelitian tinggi dalam mendeteksi potensi risiko, tekun menyelesaikan studi/tugas yang rumit, disiplin menjaga integritas data, serta konsisten menghasilkan karya dengan mutu yang rapi dan teruji.<br><br>
<b>Ekosistem Belajar & Tumbuh Ideal:</b> Sangat berkembang dalam ranah riset/karya ilmiah, analisis data, teknologi/pemrograman, administrasi keuangan, manajemen mutu organisasi, dan karya kreatif yang menuntut ketelitian tinggi.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Rentan terjebak dalam pusaran overthinking (terlalu banyak analisis hingga menunda eksekusi), takut mencoba hal baru karena cemas berbuat salah (fear of failure), serta sangat sensitif dan mudah patah semangat saat menerima kritik.<br><br>
<b>Saran Self-Leadership:</b> Tanamkan prinsip progress over perfection dalam berkarya. Latihlah keberanian untuk segera mempublikasikan atau mengeksekusi ide tanpa harus menunggu kondisi 100% sempurna.`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Memberi dampak melalui validitas data yang akurat, metodologi yang jelas, dan penegakan standar mutu baku.<br><br><b>Sinergi Tim Ideal:</b> Memerlukan rekan kerja yang berani mengambil keputusan cepat guna mencegah kebuntuan eksekusi.<br><br><b>Panduan Komunikasi:</b> Sediakan fakta dan data terstruktur, jelaskan alasan logis secara objektif, dan hindari instruksi mendadak tanpa parameter yang jelas.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan rasa aman dan kepastian bahwa cinta orang tua bersifat tanpa syarat, bukan hanya bergantung pada prestasi atau kesempurnaan perilaku anak.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Hindari mengkritik gaya pengasuhan pasangan secara berlebihan di depan anak. Hargai niat baik pasangan meski caranya berbeda dengan standar Anda.<br><br><b>Panduan Merespons Anak:</b> Hindari tatapan atau kata-kata yang menyiratkan kekecewaan mendalam saat anak berbuat salah. Berikan bimbingan perbaikan dengan penuh kelembutan.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Growth Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penjaga mutu dan perancang strategi kelompok agar karya tim tersusun secara sistematis, akurat, dan bebas dari cacat teknis.<br><br><b>Sinergi Partner Ideal:</b> Memerlukan rekan tim yang berani bertindak cepat dan optimis guna menarik diri dari keraguan atau analisis yang berlarut-larut.<br><br><b>Panduan Komunikasi:</b> Sampaikan saran perbaikan dengan nada suportif. Pisahkan antara kritik terhadap kualitas karya dengan penilaian terhadap harga diri personal.</div>`
    },

    "Phlegmatic": {
        leftGeneral: `<b>Karakteristik Dasar:</b> Pribadi yang tenang, sabar, cinta damai, dan konsisten. Memiliki stabilitas emosi yang tinggi, dapat diandalkan dalam ritme rutin, dan menjunjung keharmonisan hubungan kerja.<br><br>
<b>Kekuatan Natural:</b> Pendengar yang objektif, sangat loyal, konsisten menjaga keberlangsungan proses kerja harian, dan menjadi penengah yang efektif dalam meredam gesekan internal.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran koordinasi alur operasional rutin, pelayanan pelanggan, pemeliharaan budaya kerja tim, dan fungsi pendukung organisasi.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung pasif memulai inisiatif baru tanpa instruksi, enggan menghadapi konfrontasi langsung (menunda menegur masalah), dan lambat merespons perubahan drastis.<br><br>
<b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) dalam menyatakan batas standar kerja dan biasakan mengambil inisiatif proaktif dalam pemecahan masalah harian.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang tenang, sabar, cinta damai, dan konsisten. Memiliki stabilitas emosi yang tinggi, dapat diandalkan dalam ritme rutin, dan menjunjung keharmonisan hubungan kerja.<br><br>
<b>Kekuatan Natural:</b> Pendengar yang objektif, sangat loyal, konsisten menjaga keberlangsungan proses kerja harian, dan menjadi penengah yang efektif dalam meredam gesekan internal.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran koordinasi alur operasional rutin, pelayanan pelanggan, pemeliharaan budaya kerja tim, dan fungsi pendukung organisasi.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung pasif memulai inisiatif baru tanpa instruksi, enggan menghadapi konfrontasi langsung (menunda menegur masalah), dan lambat merespons perubahan drastis.<br><br>
<b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) dalam menyatakan batas standar kerja dan biasakan mengambil inisiatif proaktif dalam pemecahan masalah harian.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang sabar, cinta damai, menerima anak apa adanya, menjadi pendengar yang menenangkan, serta memiliki stabilitas emosi yang tidak mudah terpancing amarah.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Menciptakan lingkungan rumah yang damai, hangat, dan bebas dari tekanan emosional. Menjadi tempat bersandar yang aman bagi anak, tidak memaksakan kehendak, serta adil dalam menengahi perselisihan antaranak.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat tertekan saat terjadi pertengkaran, bentakan, atau konflik terbuka di rumah. Titik kritisnya adalah cenderung bersikap terlalu longgar/membiarkan (permissive), ragu menegakkan aturan tegas karena menghindari drama, serta menunda pendisiplinan anak.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Latihlah ketegasan (asertif) dalam menegakkan batasan yang telah disepakati tanpa merasa bersalah. Dampingi anak menuntaskan tugas dan tanggung jawabnya secara konsisten setiap hari.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang tenang, adaptif, sabar, dan cinta damai. Memiliki ketenangan emosional yang stabil, sangat menghargai kenyamanan relasi pertemanan, dan dapat diandalkan dalam menjaga keberlangsungan alur tugas.<br><br>
<b>Kekuatan Potensi & Keunggulan Alami:</b> Menjadi pendengar yang objektif dan suportif, sangat setia kawan pada komitmen kelompok, tidak mudah panik saat menghadapi masalah mendadak, serta piawai menjadi penengah di tengah konflik antarteman.<br><br>
<b>Ekosistem Belajar & Tumbuh Ideal:</b> Sangat optimal dalam lingkungan yang harmonis dan bebas intimidasi, kerja sama tim yang saling mendukung, fungsi koordinasi operasional/logistik, sekretariat organisasi, dan aktivitas mediasi sosial.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Rawan terjebak dalam menunda-nunda pengerjaan tugas (procrastination), cenderung pasif menunggu instruksi, serta enggan menyatakan pendapat atau ketidaksetujuan secara terbuka demi menghindari perdebatan.<br><br>
<b>Saran Self-Leadership:</b> Latihlah keberanian untuk bersikap asertif dalam menyuarakan ide dan batasan diri di forum. Tetapkan target tenggat waktu mandiri dan ambil inisiatif tindakan tanpa harus menunggu disuruh.`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan lingkungan melalui kestabilan ritme kerja, kesabaran, dan pendekatan suportif yang menjaga loyalitas tim.<br><br><b>Sinergi Tim Ideal:</b> Membutuhkan inisiator yang berani mendorong target baru dan akselerasi agar performa tim tidak stagnan dalam kenyamanan rutin.<br><br><b>Panduan Komunikasi:</b> Sampaikan instruksi secara runut dan terstruktur tanpa tekanan agresif. Ciptakan rasa aman saat meminta pendapat.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan kepastian arahan dan ketegasan batasan dari orang tua agar merasa terlindungi dan memiliki panduan perilaku yang jelas.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Ambil inisiatif proaktif dalam menerapkan disiplin harian agar pasangan tidak merasa berjuang sendirian memikul peran pembimbing di rumah.<br><br><b>Panduan Merespons Anak:</b> Tetap tenang namun konsisten memegang teguh aturan saat anak mulai merajuk atau mencoba bernegosiasi melanggar kesepakatan keluarga.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Growth Insight:</b><br><br><b>Gaya Kolaborasi:</b> Perekat keharmonisan kelompok yang meredakan ketegangan, menjaga atmosfer tim tetap kondusif, dan setia menuntaskan tugas bagiannya.<br><br><b>Sinergi Partner Ideal:</b> Memerlukan inisiator yang dinamis dan bersemangat untuk memberi dorongan motivasi serta menantang potensi diri keluar dari zona nyaman.<br><br><b>Panduan Komunikasi:</b> Beranikan diri menyampaikan masukan atau kritik konstruktif secara santun dan terstruktur saat ada keputusan kelompok yang kurang tepat.</div>`
    }
};

let currentQuestionIndex = 0;
let userName = "";
let userWA = "";
let generatedCode = "";
let scores = { "Sanguine": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0 };
let radarChartInstance = null;

function makeUniqueCode() {
    return "AY-" + Math.floor(100 + Math.random() * 900);
}

document.getElementById('start-form').addEventListener('submit', function(e) {
    e.preventDefault();
    userName = document.getElementById('user-name').value.trim();
    userWA = document.getElementById('user-whatsapp').value.trim();
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = `(${currentQuestionIndex + 1}/40) Pilih satu yang PALING mewakili diri Anda:`;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt.text;
        btn.classList.add('option-button');
        if (q.selectedType === opt.type) btn.classList.add('selected');
        btn.onclick = () => { q.selectedType = opt.type; showQuestion(); };
        container.appendChild(btn);
    });
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex + 1) / 40) * 100}%`;
    
    // Tampilkan/sembunyikan tombol 'Sebelumnya'
    if (currentQuestionIndex > 0) {
        document.getElementById('prev-button').classList.remove('hidden');
    } else {
        document.getElementById('prev-button').classList.add('hidden');
    }
}

document.getElementById('next-button').onclick = () => {
    if (!quizQuestions[currentQuestionIndex].selectedType) { alert("Pilih jawaban dahulu!"); return; }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) showQuestion();
    else showResult();
};

document.getElementById('prev-button').onclick = () => { 
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; 
        showQuestion(); 
    }
};

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    scores = { "Sanguine": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0 };
    quizQuestions.forEach(q => { if (q.selectedType) scores[q.selectedType]++; });
    
    let dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('result-title').textContent = `Hasil: ${personalityNames[dominant]}`;
    document.getElementById('result-description').textContent = `Halo ${userName}, peta spektrum kepribadian Anda telah terpetakan.`;

    generatedCode = makeUniqueCode();

    const activeMode = getActiveMode();
    let modeLabel = "General";
    if (activeMode === 'business') modeLabel = "Business/HCM";
    else if (activeMode === 'parenting') modeLabel = "Parenting/Family";
    else if (activeMode === 'youth') modeLabel = "Youth/Self-Development";

    fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            nama: userName,
            whatsapp: userWA,
            tipe: personalityNames[dominant],
            s: scores.Sanguine,
            c: scores.Choleric,
            m: scores.Melancholic,
            p: scores.Phlegmatic,
            kode: generatedCode,
            mode: modeLabel
        })
    });

    const waMessage = `Halo Mas Ali, saya sudah selesai tes Personality Plus dengan nama *${userName}*. Saya ingin membeli kode aktivasi untuk mendownload sertifikat.`;
    document.getElementById('wa-link').href = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(waMessage)}`;
}

document.getElementById('unlock-button').onclick = function() {
    const inputCode = document.getElementById('activation-code').value.trim();
    if (inputCode.toUpperCase() === generatedCode.toUpperCase()) {
        document.getElementById('lock-section').classList.add('hidden');
        document.getElementById('download-section').classList.remove('hidden');
    } else {
        alert("Kode aktivasi salah. Silakan hubungi Mas Ali untuk mendapatkan kode aktivasi Anda.");
    }
};

function createRadarChart(scoreData) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChartInstance) { radarChartInstance.destroy(); }
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Sanguine', 'Choleric', 'Melancholic', 'Phlegmatic'],
            datasets: [{
                data: [scoreData.Sanguine, scoreData.Choleric, scoreData.Melancholic, scoreData.Phlegmatic],
                backgroundColor: 'rgba(26, 42, 108, 0.2)',
                borderColor: 'rgba(26, 42, 108, 1)',
                borderWidth: 2,
                pointBackgroundColor: '#c5a059',
                pointRadius: 3
            }]
        },
        options: {
            responsive: false,
            animation: false,
            scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 15, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

document.getElementById('download-cert-button').onclick = async function() {
    const btn = this;
    btn.disabled = true; btn.textContent = "Proses...";
    try {
        let dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        document.getElementById('cert-user-name').textContent = userName.toUpperCase();
        document.getElementById('cert-type').textContent = personalityNames[dominant];
        
        // Logika pemilihan narasi yang dinamis saat tombol unduh ditekan
        const activeMode = getActiveMode();
        let leftContent = fullNarratives[dominant].leftGeneral;
        let rightContent = fullNarratives[dominant].rightBusiness;

        if (activeMode === 'business') {
            leftContent = fullNarratives[dominant].leftBusiness;
            rightContent = fullNarratives[dominant].rightBusiness;
        } else if (activeMode === 'parenting') {
            leftContent = fullNarratives[dominant].leftParenting;
            rightContent = fullNarratives[dominant].rightParenting;
        } else if (activeMode === 'youth') {
            leftContent = fullNarratives[dominant].leftYouth;
            rightContent = fullNarratives[dominant].rightYouth;
        }
        
        document.getElementById('cert-col-left').innerHTML = leftContent;
        document.getElementById('cert-col-right').innerHTML = rightContent;
        document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
        document.getElementById('cert-id').textContent = "ARAYA-" + Math.floor(Math.random() * 9000 + 1000);

        createRadarChart(scores);
        await new Promise(resolve => setTimeout(resolve, 800));

        const canvas = await html2canvas(document.getElementById('cert-content'), {
            scale: 2, useCORS: true, allowTaint: true, backgroundColor: "#ffffff"
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
        pdf.save(`Sertifikat_${userName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) { console.error(error); alert("Gagal unduh sertifikat."); }
    finally { btn.disabled = false; btn.textContent = "Unduh Sertifikat (PDF)"; }
};

document.getElementById('restart-button').onclick = () => location.reload();
