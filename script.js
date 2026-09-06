/**
 * ARAYA CONSULTING - AUTOMATIC CODE VERSION (5-MODE ENGINE: UMUM, BISNIS, PARENTING, PEMUDA, & GURU)
 * Sistem: Sinkronasi Google Sheets + Kode Aktivasi Unik + Robust Multi-Mode Detection
 */

// --- KONFIGURASI UTAMA ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsJfQT1jNlUEV97vbOR3SuAFDBAz5G3cyUJSd0ceColcNbAfk9FWsGwkHkV6N5ga7x/exec"; 
const ADMIN_WA = "6285232526003"; 

// Fungsi Deteksi Mode Kebal Huruf Besar/Kecil, Query Param (?mode=) & Hash (#)
function getActiveMode() {
    const fullUrl = (window.location.search + " " + window.location.hash).toLowerCase();
    
    if (fullUrl.includes('educator') || fullUrl.includes('guru') || fullUrl.includes('pendidik') || fullUrl.includes('dosen')) return 'educator';
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
        else if (activeMode === 'educator') { badgeText = "Mode: Guru & Pendidik"; badgeColor = "#16a085"; }

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
        leftGeneral: `<b>Fitrah Temperamen Dasar:</b> Pribadi yang hangat, ceria, dan penuh energi hidup. Memperoleh kesegaran diri dari keterhubungan sosial, percakapan terbuka, dan atmosfer pergaulan yang menyenangkan.<br><br>
<b>Kekuatan Karakter Alami:</b> Piawai mencairkan suasana canggung, ramah menyapa siapa pun, persuasif, optimis melihat masa depan, serta cepat memulihkan semangat dari rasa kecewa.<br><br>
<b>Respons Menghadapi Tekanan:</b> Cenderung mengalihkan stres dengan mencari keramaian atau obrolan baru. Rawan tertekan bila menghadapi suasana sepi, kaku, atau terkungkung rutinitas monoton.<br><br>
<b>Blind Spot Pribadi:</b> Kerap kurang disiplin mengelola waktu, mudah teralihkan dari komitmen awal, dan cenderung menghindari urusan administrasi detail atau hal-hal yang rumit.<br><br>
<b>Langkah Pengembangan Diri:</b> Biasakan membuat daftar kegiatan harian sederhana dan latih komitmen menyelesaikan satu urusan tuntas sebelum memulai hal baru.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang antusias, ekspresif, optimis, dan membawa energi positif ke lingkungan sekitar. Memiliki dorongan alami pada interaksi sosial, fleksibilitas, dan komunikasi terbuka.<br><br>
<b>Kekuatan Natural:</b> Cepat membangun kedekatan (rapport) dengan relasi baru, persuasif dalam menyampaikan ide, adaptif terhadap perubahan, dan efektif mencairkan ketegangan suasana kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran representasi publik, promosi, negosiasi awal, penguatan keterlibatan relasi, dan fungsi-fungsi dinamis yang membutuhkan keluwesan komunikasi tatap muka.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terhadap inkonsistensi eksekusi harian, mudah terdistraksi dari target utama, serta cenderung menghindari administrasi detail dan kepatuhan alur kerja rutin.<br><br>
<b>Saran Pengembangan:</b> Bangun kebiasaan menggunakan checklist kerja tertulis dan pasangkan dengan rekan kerja yang kuat dalam pengawalan detail operasional.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang hangat, ekspresif, ceria, dan secara alami mampu menciptakan atmosfer rumah yang penuh tawa, optimisme, serta interaksi sosial yang menyenangkan bagi anak.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Sangat mudah menjalin kedekatan emosional dan menjadi teman cerita bagi anak. Kreatif dalam merancang aktivitas bermain bersama, gemar memberikan apresiasi, serta tidak canggung mengekspresikan kasih sayang dan pelukan hangat.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat mudah tertekan saat suasana rumah terasa kaku, monoton, atau ketika dibebani terlalu banyak rutinitas teknis. Titik kritisnya adalah sering kurang konsisten dalam menegakkan batasan/aturan harian, mudah lupa kesepakatan konsekuensi, serta suasana hati (mood) yang mudah berubah ketika melihat rumah berantakan atau anak sedang rewel.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Bangun rutinitas pengasuhan menggunakan papan jadwal atau aturan tertulis yang disepakati bersama pasangan. Latihlah jeda emosi untuk menghadirkan ketenangan diri sebelum merespons kerewelan anak agar suasana rumah tidak ikut gaduh.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang energetik, ramah, dan memancarkan aura optimis. Sumber energi utamanya berasal dari interaksi sosial luas, dinamika kelompok, dan kebebasan mengekspresikan ide kreatif.<br><br>
<b>Keunggulan Potensi Alami:</b> Memiliki kecerdasan sosial tinggi, luwes beradaptasi di lingkungan baru, persuasif menyampaikan gagasan, dan cepat membangun relasi pertemanan bermakna.<br><br>
<b>Arah Minat Studi & Karier:</b> Sangat berkembang di bidang Ilmu Komunikasi, Public Relations, Hubungan Internasional, Marketing Kreatif, Broadcasting/Media, Event Management, Pariwisata, dan Seni Pertunjukan.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Rentan sindrom FOMO (ikut semua kegiatan namun terbengkalai), cepat jenuh pada rutinitas akademis yang monoton, dan mudah terdistraksi media sosial.<br><br>
<b>Saran Self-Leadership:</b> Tumbuhkan prinsip menuntaskan apa yang dimulai (finisher mindset). Pilih 1-2 fokus keahlian utama dan kelola waktu menggunakan agenda harian tertulis.`,

        leftEducator: `<b>Gaya Mengajar Alami:</b> Guru yang ekspresif, antusias, humoris, dan pandai menghidupkan suasana kelas sehingga proses belajar tidak membosankan dan siswa merasa nyaman berinteraksi.<br><br>
<b>Kekuatan Pedagogis Natural:</b> Cepat membangun kedekatan emosional dengan siswa, kreatif dalam menyajikan analogi menarik, dan mahir memantik keberanian siswa yang pemalu untuk berbicara di depan kelas.<br><br>
<b>Tantangan Kelas & Pemicu Stres:</b> Tertekan bila dibebani tumpukan administrasi RPP/evaluasi yang kaku atau saat kelas pasif tanpa respons. Rawan kurang terstruktur dalam alokasi waktu jam pelajaran.<br><br>
<b>Blind Spot Interaksi Siswa:</b> Sering secara spontan lebih memfavoritkan siswa yang aktif berbicara dan mudah melupakan tindak lanjut janji atau tugas yang pernah diberikan ke siswa.<br><br>
<b>Saran Transformasi Pembelajaran:</b> Gunakan pengingat waktu (timer) untuk setiap modul materi, serta buat catatan rekapitulasi tugas agar evaluasi belajar tetap konsisten dan tertib.`,

        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Social Harmony Insight:</b><br><br><b>Gaya Relasi Sosial:</b> Luwes mencairkan suasana pergaulan keluarga dan masyarakat, mudah memaafkan, serta menjadi penghidup keakraban sosial.<br><br><b>Partner Pelengkap:</b> Sangat cocok berdampingan dengan pribadi yang tenang dan teratur agar saling mengimbangi dalam perencanaan hidup.<br><br><b>Kunci Damai Batin:</b> Ruang berekspresi secara tulus tanpa dihakimi serta hubungan hangat yang saling mengapresiasi.</div>`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan lingkungan kerja melalui energi antusiasme, optimisme, dan kedekatan relasional.<br><br><b>Sinergi Tim Ideal:</b> Sangat memerlukan mitra kerja yang kuat dalam disiplin sistem, pengawasan administrasi, dan eksekusi tindak lanjut (follow-up).<br><br><b>Panduan Komunikasi:</b> Berikan apresiasi secara terbuka dan sampaikan evaluasi perbaikan secara personal dengan nada dialogis yang menyemangati.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan penerimaan tulus dan kehadiran orang tua yang utuh, bukan hanya perhatian saat suasana hati orang tua sedang ceria atau gembira.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Libatkan pasangan untuk mengimbangi pengawasan kedisiplinan dan jadwal belajar. Hindari melonggarkan izin atau aturan anak secara sepihak di belakang pasangan.<br><br><b>Panduan Merespons Anak:</b> Berikan perhatian penuh dan dengarkan cerita anak sampai tuntas tanpa tergesa-gesa memotongnya. Tahan diri dari bereaksi spontan yang memicu keributan saat anak rewel.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penggerak antusiasme dan inisiator ide dalam tim; sangat efektif sebagai juru bicara kelompok atau garda depan relasi eksternal organisasi.<br><br><b>Rekomendasi Ekosistem Tumbuh:</b> Organisasi kemahasiswaan/kepemudaan, komunitas kreatif, program pertukaran, atau kegiatan kepanitiaan berbasis relasi publik.<br><br><b>Panduan Komunikasi:</b> Sampaikan ide secara ringkas dan terstruktur. Latihlah mendengarkan pandangan rekan tanpa tergesa-gesa memotong pembicaraan.</div>`,

        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa Beragam:</b> Berikan perhatian lebih kepada siswa pendiam (Melankolis/Plegmatis) dengan mendatangi mejanya secara personal tanpa memaksa mereka langsung tampil ke depan.<br><br><b>Blind Spot Saat Menegur:</b> Rawan memarahi siswa secara emosional sesaat, lalu setelah itu membiarkan sanksi terlupakan begitu saja sehingga siswa meremehkan ketegasan guru.<br><br><b>Disiplin Adaptif:</b> Tenangkan diri sebelum berbicara, panggil siswa secara empat mata, dan pastikan setiap konsekuensi yang telah disepakati benar-benar dijalankan tuntas.<br><br><b>Sinergi Ruang Guru:</b> Jalin kerja sama erat dengan rekan guru yang teliti dalam administrasi agar dokumen kurikulum dan berkas evaluasi sekolah selesai tepat waktu.</div>`
    },

    "Choleric": {
        leftGeneral: `<b>Fitrah Temperamen Dasar:</b> Pribadi yang mandiri, berpendirian teguh, praktis, dan berorientasi kuat pada pencapaian hasil. Memiliki dorongan alami mengatasi tantangan dan menuntaskan rintangan.<br><br>
<b>Kekuatan Karakter Alami:</b> Tegas mengambil keputusan, tangguh menghadapi kesulitan, tidak mudah gentar oleh kritik, percaya diri tinggi, serta piawai memimpin langkah penyelesaian masalah.<br><br>
<b>Respons Menghadapi Tekanan:</b> Mengambil alih kendali dan bergerak cepat mencari solusi praktis. Rawan tertekan bila menghadapi ketidakjelasan arah, hambatan kerja, atau orang yang lamban.<br><br>
<b>Blind Spot Pribadi:</b> Kerap kurang sabar terhadap proses bertahap, berbicara terlalu tajam/frontal tanpa disadari, dan enggan meminta bantuan karena mengandalkan kekuatan diri sendiri.<br><br>
<b>Langkah Pengembangan Diri:</b> Latihlah empati dengan mendengarkan perasaan orang terdekat sebelum berpendapat, serta hargai kecepatan langkah orang lain yang berbeda.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang tegas, dinamis, mandiri, dan berorientasi kuat pada pencapaian target. Memiliki dorongan alami untuk mengambil kendali, memecahkan kebuntuan, dan menghasilkan progres nyata.<br><br>
<b>Kekuatan Natural:</b> Berani mengambil risiko terukur, cepat mengambil keputusan di bawah tekanan, pragmatis mencari solusi, dan tangguh menghadapi hambatan operasional.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran eksekutor target strategis, inisiator proyek baru, penanganan krisis/masalah darurat, dan fungsi pendorong akselerasi ritme kerja.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung tidak sabar terhadap proses bertahap, berisiko mengabaikan empati interpersonal, serta rawan memicu resistensi tim karena memaksakan standar tanpa dialog.<br><br>
<b>Saran Pengembangan:</b> Latihlah kesabaran mendengarkan masukan sebelum memutuskan, serta hargai pentingnya kepatuhan alur sistem (SOP) di samping sekadar mengejar hasil akhir.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang tegas, berpendirian teguh, visioner, dan memiliki fokus yang sangat kuat untuk membentuk kemandirian, tanggung jawab, serta ketangguhan mental anak sejak dini.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Menjadi pelindung keluarga yang sigap dan tidak ragu mengambil keputusan penting di masa sulit. Sangat handal dalam melatih kedisiplinan hidup, menanamkan etos kerja keras, dan mendorong anak untuk berprestasi.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat tertekan saat anak bergerak lamban, menolak arahan, atau ketika rencana keluarga tidak berjalan lancar. Titik kritisnya adalah mudah terjebak adu ego (power struggle) dengan anak, kurang sabar saat anak lambat memahami instruksi, serta cenderung menuntut kepatuhan mutlak secara sepihak.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Gantikan instruksi searah dengan memberikan opsi pilihan yang terkontrol agar anak merasa dihargai kemandiriannya. Dengarkan sudut pandang dan perasaan anak sebelum memberikan konsekuensi atau aturan baru.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang visioner, mandiri, berani, dan terpacu oleh target konkret. Didorong oleh tekad kuat untuk mandiri, memecahkan masalah rumit, dan meraih prestasi nyata.<br><br>
<b>Keunggulan Potensi Alami:</b> Cepat memutuskan tindakan di bawah tekanan, memiliki mental pantang menyerah, lugas mengeksekusi rencana, dan berjiwa kepemimpinan alami.<br><br>
<b>Arah Minat Studi & Karier:</b> Sangat berkembang di bidang Manajemen Bisnis, Ilmu Hukum/Advokasi, Teknik Industri, Militer/Kepolisian, Kewirausahaan, Manajemen Proyek, dan Eksekutif Operasional.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Cenderung tidak sabar pada rekan kelompok yang lamban, enggan mengakui kelemahan diri karena gengsi, dan rawan bersikap mendominasi diskusi.<br><br>
<b>Saran Self-Leadership:</b> Bangun kerendahan hati untuk menghargai proses tim. Sadari bahwa keberhasilan jangka panjang membutuhkan kerja sama dan empati, bukan hanya kecepatan pribadi.`,

        leftEducator: `<b>Gaya Mengajar Alami:</b> Guru yang tegas, lugas, berwibawa, dan sangat berorientasi pada pencapaian target belajar. Membawa dinamika kelas yang fokus, disiplin, dan terarah jelas.<br><br>
<b>Kekuatan Pedagogis Natural:</b> Sangat handal mengendalikan ketertiban kelas, menumbuhkan etos kerja keras siswa, melatih kemandirian, dan berani mengambil tindakan cepat saat terjadi krisis belajar.<br><br>
<b>Tantangan Kelas & Pemicu Stres:</b> Sangat tertekan bila melihat siswa bergerak lamban, menyepelekan tenggat waktu tugas, atau tidak menunjukkan daya juang dalam belajar.<br><br>
<b>Blind Spot Interaksi Siswa:</b> Cenderung menuntut kepatuhan mutlak tanpa ruang dialog, serta gaya bicara yang terlalu tajam/frontal hingga membuat siswa merasa takut bukan termotivasi.<br><br>
<b>Saran Transformasi Pembelajaran:</b> Berikan apresiasi pada progres usaha siswa, bukan hanya pada nilai akhir. Terapkan komunikasi dua arah sebelum menetapkan sanksi agar siswa merasa dimengerti.`,

        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Social Harmony Insight:</b><br><br><b>Gaya Relasi Sosial:</b> Lugas, to-the-point, berfokus pada aksi nyata, dan menjadi pelindung yang sigap saat keluarga/sahabat membutuhkan pertolongan.<br><br><b>Partner Pelengkap:</b> Selaras dengan pribadi penyabar dan bijaksana yang mampu meredam ketegangan serta menghadirkan suasana sejuk.<br><br><b>Kunci Damai Batin:</b> Kebebasan mengambil keputusan hidup secara mandiri dan melihat kemajuan nyata dari ikhtiar yang dijalani.</div>`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan organisasi melalui ketegasan arah, standar target tinggi, dan kecepatan tindakan nyata.<br><br><b>Sinergi Tim Ideal:</b> Membutuhkan mitra kerja yang kuat dalam penataan alur SOP dan kestabilan ritme tim agar akselerasi tetap terukur.<br><br><b>Panduan Komunikasi:</b> Sampaikan pesan langsung ke pokok persoalan (to-the-point), berbasis data ringkas, dan fokus pada solusi konkret.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan ruang aman untuk menyatakan perasaannya tanpa takut langsung dihakimi, dikritik tajam, atau dimarahi secara agresif.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Turunkan kontrol dominasi di rumah. Diskusikan dan sepakati pola asuh bersama pasangan secara setara tanpa saling menyalahkan di depan anak.<br><br><b>Panduan Merespons Anak:</b> Kendalikan intonasi suara saat menegur anak. Jelaskan alasan rasional dan konsekuensi logis di balik sebuah aturan dengan nada yang tenang namun tegas.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Pendorong ritme kerja tim dan penentu arah taktis saat kelompok menghadapi kebuntuan atau tenggat waktu mendesak.<br><br><b>Rekomendasi Ekosistem Tumbuh:</b> Inkubator bisnis muda, dewan pimpinan organisasi mahasiswa, kompetisi debat/kasus bisnis, atau proyek riset lapangan.<br><br><b>Panduan Komunikasi:</b> Sampaikan kritik secara santun dan konstruktif. Hindari nada memerintah agar relasi kolaborasi tetap terjaga hangat.</div>`,

        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa Beragam:</b> Pahami bahwa siswa Plegmatis dan Melankolis butuh waktu berpikir; hindari langsung melabeli mereka 'malas' hanya karena ritmenya tenang.<br><br><b>Blind Spot Saat Menegur:</b> Spontan meledak di depan kelas dan mempermalukan siswa yang berbuat salah, yang justru memicu dendam atau mogok belajar.<br><br><b>Disiplin Adaptif:</b> Panggil siswa secara privat, gunakan nada bicara rendah namun lugas, jelaskan konsekuensi logisnya, dan berikan opsi perbaikan yang terukur.<br><br><b>Sinergi Ruang Guru:</b> Berikan ruang bagi rekan guru lain untuk menyampaikan ide dalam rapat; hindari memaksakan cara kerja pribadi pada seluruh tim pendidik.</div>`
    },

    "Melancholic": {
        leftGeneral: `<b>Fitrah Temperamen Dasar:</b> Pribadi yang mendalam, analitis, tertib, dan memiliki standar moral serta kualitas yang tinggi. Mengutamakan ketelitian, kejelasan logika, dan ketenangan batin.<br><br>
<b>Kekuatan Karakter Alami:</b> Peka mendeteksi risiko sebelum terjadi, tertib menata rencana hidup, setia memegang janji, memiliki empati rasa yang mendalam, dan bertanggung jawab penuh atas tugas.<br><br>
<b>Respons Menghadapi Tekanan:</b> Cenderung menarik diri untuk merenung dan menimbang ulang situasi. Rawan tertekan bila menghadapi ketidakteraturan, ingkar janji, atau kritik tajam tak berdasar.<br><br>
<b>Blind Spot Pribadi:</b> Rentan terjebak overthinking, perfeksionisme berlebih yang menunda tindakan nyata, serta mudah menyimpan kekecewaan batin dalam waktu lama.<br><br>
<b>Langkah Pengembangan Diri:</b> Tanamkan prinsip 'progress over perfection' (kemajuan lebih bernilai daripada kesempurnaan mutlak) dan bangun keterbukaan hati memaafkan ketidaksempurnaan.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang mendalam, analitis, terstruktur, dan memiliki standar kualitas mutu yang tinggi. Menghargai ketepatan data, logika, dan perencanaan yang matang.<br><br>
<b>Kekuatan Natural:</b> Presisi mendeteksi celah risiko sebelum masalah terjadi, disiplin menegakkan standar kualitas, tertib administrasi, dan konsisten menjaga akurasi proses kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran perancangan sistem/SOP, audit operasional, kendali mutu (quality control), mitigasi risiko, dan analisis data atau keuangan.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terjebak overthinking (terlalu lama menimbang keputusan), perfeksionisme yang memperlambat laju eksekusi, serta sensitif terhadap kritik langsung.<br><br>
<b>Saran Pengembangan:</b> Terapkan prinsip tindakan cepat pada hal-hal yang butuh pengujian lapangan dan bangun fleksibilitas terhadap perubahan situasi yang dinamis.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang mendalam, penuh pertimbangan, sangat teliti memperhatikan kebutuhan tumbuh kembang anak, dan memegang teguh nilai moral, keteraturan, serta adab keluarga.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Sangat terencana dalam mempersiapkan kebutuhan masa depan anak, teliti mendampingi proses belajar, konsisten menanamkan nilai-nilai kebaikan, serta menjadi teladan keteraturan yang baik di rumah.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat tertekan saat rumah berantakan, anak tidak tertib, atau saat merasa belum mampu menjadi orang tua yang ideal. Titik kritisnya adalah mudah terjebak rasa cemas berlebih (overparenting), menetapkan ekspektasi terlalu tinggi yang membuat anak takut salah, serta sensitif merasa gagal.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Berikan apresiasi pada usaha dan proses belajar anak daripada hanya menuntut hasil sempurna. Terapkan penerimaan bahwa rumah yang sesekali berantakan atau anak yang berbuat salah adalah bagian wajar dari proses eksplorasi tumbuh kembang.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang reflektif, teliti, dan mengutamakan mutu tinggi. Termotivasi mendalami ilmu pengetahuan secara runtut, rapi, dan bertanggung jawab atas hasil karya.<br><br>
<b>Keunggulan Potensi Alami:</b> Memiliki daya konsentrasi tinggi pada tugas rumit, teliti menguji keakuratan informasi, jujur, setia pada prinsip nilai, dan tekun merancang strategi terstruktur.<br><br>
<b>Arah Minat Studi & Karier:</b> Sangat berkembang di bidang Sains Data, Akuntansi/Keuangan, Teknologi Informasi/Software, Farmasi/Kedokteran, Desain Arsitektur, Penulisan Akademis, dan Riset Mutu.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Rentan overthinking hingga menunda eksekusi (analysis paralysis), takut mencoba hal baru karena cemas berbuat salah, dan mudah patah semangat oleh kritik.<br><br>
<b>Saran Self-Leadership:</b> Biasakan berani mempublikasikan atau mencoba karya tanpa menunggu kondisi 100% sempurna. Pahami bahwa kegagalan kecil adalah tangga penting dalam pembelajaran.`,

        leftEducator: `<b>Gaya Mengajar Alami:</b> Guru yang sistematis, runtut, mendalam, dan menjunjung tinggi standar kualitas materi. Mengajar dengan data akurat, persiapan matang, dan rujukan yang jelas.<br><br>
<b>Kekuatan Pedagogis Natural:</b> Mampu membedah konsep rumit menjadi penjelasan bertahap yang detail, sangat rapi mengelola administrasi nilai, serta objektif dan adil dalam menilai hasil tugas siswa.<br><br>
<b>Tantangan Kelas & Pemicu Stres:</b> Sangat tertekan saat kelas gaduh/tidak tertib, siswa mengerjakan tugas asal-asalan, atau ada perubahan kurikulum dan jadwal yang mendadak tanpa panduan baku.<br><br>
<b>Blind Spot Interaksi Siswa:</b> Standar kesempurnaan yang terlalu tinggi membuat siswa takut berbuat salah, serta guru mudah merasa gagal atau kecewa mendalam saat nilai rata-rata kelas menurun.<br><br>
<b>Saran Transformasi Pembelajaran:</b> Tanamkan growth mindset bahwa kekeliruan siswa adalah jembatan penting untuk belajar. Rayakan proses usaha siswa tanpa menuntut hasil yang instan sempurna.`,

        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Social Harmony Insight:</b><br><br><b>Gaya Relasi Sosial:</b> Sopan, menjaga adab pergaulan, pendengar yang mendalam, dan menjalin persahabatan sejati yang setia dalam jangka panjang.<br><br><b>Partner Pelengkap:</b> Selaras dengan pribadi yang ceria dan optimis untuk membantu mencairkan ketegangan pikiran dan rasa cemas.<br><br><b>Kunci Damai Batin:</b> Suasana lingkungan yang tenang, kepastian janji, keteraturan hidup, dan ruang personal yang dihormati.</div>`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Memberi dampak melalui validitas data yang akurat, metodologi yang jelas, dan penegakan standar mutu baku.<br><br><b>Sinergi Tim Ideal:</b> Memerlukan rekan kerja yang berani mengambil keputusan cepat guna mencegah kebuntuan eksekusi.<br><br><b>Panduan Komunikasi:</b> Sediakan fakta dan data terstruktur, jelaskan alasan logis secara objektif, dan hindari instruksi mendadak tanpa parameter yang jelas.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan rasa aman dan kepastian bahwa cinta orang tua bersifat tanpa syarat, bukan hanya bergantung pada prestasi atau kesempurnaan perilaku anak.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Hindari mengkritik gaya pengasuhan pasangan secara berlebihan di depan anak. Hargai niat baik pasangan meski caranya berbeda dengan standar Anda.<br><br><b>Panduan Merespons Anak:</b> Hindari tatapan atau kata-kata yang menyiratkan kekecewaan mendalam saat anak berbuat salah. Berikan bimbingan perbaikan dengan penuh kelembutan.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penjaga mutu dan ketelitian karya kelompok agar seluruh tugas tim tersusun rapi, valid, dan minim kekeliruan teknis.<br><br><b>Rekomendasi Ekosistem Tumbuh:</b> Lembaga riset kampus/ilmiah, forum studi tematik, kompetisi karya tulis ilmiah, atau divisi pengendali mutu organisasi.<br><br><b>Panduan Komunikasi:</b> Sampaikan saran perbaikan dengan nada suportif. Pisahkan evaluasi karya dari penilaian terhadap harga diri pribadi.</div>`,

        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa Beragam:</b> Berikan ruang adaptasi bagi siswa Sanguinis yang aktif bergerak; jangan menganggap gerakan mereka semata-mata sebagai pembangkangan.<br><br><b>Blind Spot Saat Menegur:</b> Menceramahi dengan menunjukkan deretan kesalahan masa lalu secara terperinci, yang membuat siswa merasa putus asa dan dicap buruk.<br><br><b>Disiplin Adaptif:</b> Batasi poin teguran pada masalah saat ini secara ringkas, fokuskan pada cara memperbaiki tugas, dan tunjukkan keyakinan bahwa siswa mampu bangkit.<br><br><b>Sinergi Ruang Guru:</b> Salurkan keahlian presisi Anda untuk merancang kisi-kisi dan materi ajar bersama guru lain tanpa bersikap terlalu kritis terhadap kekurangan rekan kerja.</div>`
    },

    "Phlegmatic": {
        leftGeneral: `<b>Fitrah Temperamen Dasar:</b> Pribadi yang tenang, sabar, cinta damai, dan emosinya stabil. Menghargai kenyamanan kebersamaan, tidak menyukai konflik, dan menjadi penyejuk suasana.<br><br>
<b>Kekuatan Karakter Alami:</b> Pendengar yang tulus tanpa menghakimi, mudah menerima orang lain apa adanya, setia, konsisten dalam rutinitas, serta tidak mudah terhasut emosi sesaat.<br><br>
<b>Respons Menghadapi Tekanan:</b> Cenderung mengalah atau bersikap pasif demi menjaga kedamaian. Rawan tertekan bila dipaksa berkonfrontasi atau menghadapi tuntutan serba mendadak.<br><br>
<b>Blind Spot Pribadi:</b> Cenderung menunda mengambil keputusan penting, sulit berkata 'tidak' sehingga membebani diri sendiri, dan enggan keluar dari zona nyaman rutinitas.<br><br>
<b>Langkah Pengembangan Diri:</b> Latihlah ketegasan (asertif) dalam menyuarakan kebutuhan diri sendiri dan mulailah mengambil inisiatif kecil tanpa menunggu dorongan orang lain.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang tenang, sabar, cinta damai, dan konsisten. Memiliki stabilitas emosi yang tinggi, dapat diandalkan dalam ritme rutin, dan menjunjung keharmonisan hubungan kerja.<br><br>
<b>Kekuatan Natural:</b> Pendengar yang objektif, sangat loyal, konsisten menjaga keberlangsungan proses kerja harian, dan menjadi penengah yang efektif dalam meredam gesekan internal.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran koordinasi alur operasional rutin, pelayanan pelanggan, pemeliharaan budaya kerja tim, dan fungsi pendukung organisasi.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung pasif memulai inisiatif baru tanpa instruksi, enggan menghadapi konfrontasi langsung (menunda menegur masalah), dan lambat merespons perubahan drastis.<br><br>
<b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) dalam menyatakan batas standar kerja dan biasakan mengambil inisiatif proaktif dalam pemecahan masalah harian.`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b> Orang tua yang sabar, cinta damai, menerima anak apa adanya, menjadi pendengar yang menenangkan, serta memiliki stabilitas emosi yang tidak mudah terpancing amarah.<br><br>
<b>Kekuatan Pengasuhan Natural:</b> Menciptakan lingkungan rumah yang damai, hangat, dan bebas dari tekanan emosional. Menjadi tempat bersandar yang aman bagi anak, tidak memaksakan kehendak, serta adil dalam menengahi perselisihan antaranak.<br><br>
<b>Parenting Blind Spot & Pemicu Stres:</b> Sangat tertekan saat terjadi pertengkaran, bentakan, atau konflik terbuka di rumah. Titik kritisnya adalah cenderung bersikap terlalu longgar/membiarkan (permissive), ragu menegakkan aturan tegas karena menghindari drama, serta menunda pendisiplinan anak.<br><br>
<b>Saran Transformasi Pola Asuh:</b> Latihlah ketegasan (asertif) dalam menegakkan batasan yang telah disepakati tanpa merasa bersalah. Dampingi anak menuntaskan tugas dan tanggung jawabnya secara konsisten setiap hari.`,

        leftYouth: `<b>Fitrah Karakter & Gaya Energi:</b> Pribadi yang tenang, sabar, adaptif, dan cinta harmoni. Memiliki stabilitas emosional yang matang, loyal pada pertemanan, dan dapat diandalkan dalam tugas berkelanjutan.<br><br>
<b>Keunggulan Potensi Alami:</b> Pendengar objektif, tidak mudah panik menghadapi krisis, penengah yang bijak saat ada perselisihan antarteman, dan konsisten menuntaskan amanah kelompok.<br><br>
<b>Arah Minat Studi & Karier:</b> Sangat berkembang di bidang Ilmu Pendidikan/Keguruan, Psikologi/Konseling, Administrasi Negara/Publik, Pelayanan Medis/Kesehatan, Mediasi Sosial, dan Manajemen SDM Operasional.<br><br>
<b>Youth Blind Spot & Jebakan Diri:</b> Cenderung menunda pengerjaan tugas (procrastination), pasif menunggu arahan, dan ragu menyuarakan pendapat sendiri demi menghindari perdebatan.<br><br>
<b>Saran Self-Leadership:</b> Latihlah keberanian bersikap asertif di forum. Tetapkan target tenggat waktu mandiri dan ambil inisiatif tindakan nyata tanpa harus menunggu disuruh.`,

        leftEducator: `<b>Gaya Mengajar Alami:</b> Guru yang sabar, teduh, ramah, dan menjadi pendengar yang aman bagi seluruh siswa. Menghadirkan atmosfer kelas yang bebas dari intimidasi dan penuh penerimaan.<br><br>
<b>Kekuatan Pedagogis Natural:</b> Mampu meredakan kecemasan belajar siswa, sabar mengulang materi sampai siswa paham, dan sangat piawai menjadi penengah yang adil saat terjadi konflik antarsiswa.<br><br>
<b>Tantangan Kelas & Pemicu Stres:</b> Tertekan bila harus menghadapi konflik keras antarsiswa, dituntut mengambil keputusan darurat di bawah tekanan waktu, atau menghadapi kelas yang gaduh tak terkendali.<br><br>
<b>Blind Spot Interaksi Siswa:</b> Cenderung terlalu memaklumi pelanggaran aturan (permissive), enggan menegur sejak dini karena menghindari ketegangan, sehingga kedisiplinan kelas mudah kendor.<br><br>
<b>Saran Transformasi Pembelajaran:</b> Terapkan batasan kelas yang tegas dan jelas sejak awal. Latihlah keberanian bersikap asertif saat menegakkan tata tertib tanpa merasa bersalah pada siswa.`,

        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Social Harmony Insight:</b><br><br><b>Gaya Relasi Sosial:</b> Ramah, bersahaja, tidak menuntut, menjadi tempat curhat yang aman, serta perekat kerukunan di keluarga maupun lingkungan tetangga.<br><br><b>Partner Pelengkap:</b> Sangat cocok berdampingan dengan pribadi yang aktif dan bersemangat untuk memotivasi langkah serta target hidupnya.<br><br><b>Kunci Damai Batin:</b> Suasana kehidupan yang rukun, bebas dari intrik perselisihan, kepastian ritme harian, dan ketenteraman batin.</div>`,

        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan lingkungan melalui kestabilan ritme kerja, kesabaran, dan pendekatan suportif yang menjaga loyalitas tim.<br><br><b>Sinergi Tim Ideal:</b> Membutuhkan inisiator yang berani mendorong target baru dan akselerasi agar performa tim tidak stagnan dalam kenyamanan rutin.<br><br><b>Panduan Komunikasi:</b> Sampaikan instruksi secara runut dan terstruktur tanpa tekanan agresif. Ciptakan rasa aman saat meminta pendapat.</div>`,

        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan panduan yang jelas dan batasan yang tegas agar merasa aman serta memiliki arah perilaku yang pasti.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Ambil inisiatif aktif dalam menegakkan disiplin bersama agar pasangan tidak merasa memikul beban pengasuhan sendirian.<br><br><b>Panduan Merespons Anak:</b> Tetap tenang namun teguh pada aturan yang telah disepakati bersama saat anak merajuk atau menolak instruksi.</div>`,

        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Perekat soliditas kelompok yang menjaga ketenangan, meredakan ketegangan antarteman, dan setia mengawal kelancaran tugas harian.<br><br><b>Rekomendasi Ekosistem Tumbuh:</b> Komunitas sosial kemasyarakatan, divisi sekretariat/keanggotaan organisasi, atau kerja sama tim kerja yang suportif.<br><br><b>Panduan Komunikasi:</b> Beranikan diri menyatakan opini dan batas kemampuan secara santun dan jelas saat ada keputusan kelompok yang kurang tepat.</div>`,

        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa Beragam:</b> Dampingi siswa Koleris dengan memberikan tantangan peran kepemimpinan di kelas agar energinya yang meluap tersalurkan secara positif.<br><br><b>Blind Spot Saat Menegur:</b> Menunda menegur siswa yang berbuat salah karena berharap situasi akan membaik sendiri, yang justru membuat pelanggaran kian berulang.<br><br><b>Disiplin Adaptif:</b> Tegur pelanggaran seketika dengan tenang, tatap mata siswa dengan hangat namun mantap, dan terapkan konsekuensi yang adil tanpa keraguan.<br><br><b>Sinergi Ruang Guru:</b> Jadilah penyeimbang dan penyejuk di ruang dewan guru saat terjadi beda pendapat, namun tetap berani menyuarakan aspirasi pengajaran Anda.</div>`
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
    else if (activeMode === 'educator') modeLabel = "Educator/Teacher";

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
    btn.disabled = true; 
    btn.textContent = "Proses...";
    try {
        let dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        document.getElementById('cert-user-name').textContent = userName.toUpperCase();
        document.getElementById('cert-type').textContent = personalityNames[dominant];
        
        // Logika pemilihan narasi yang dinamis dan presisi untuk ke-5 mode
        const activeMode = getActiveMode();
        let leftContent = fullNarratives[dominant].leftGeneral;
        let rightContent = fullNarratives[dominant].rightGeneral;

        if (activeMode === 'business') {
            leftContent = fullNarratives[dominant].leftBusiness;
            rightContent = fullNarratives[dominant].rightBusiness;
        } else if (activeMode === 'parenting') {
            leftContent = fullNarratives[dominant].leftParenting;
            rightContent = fullNarratives[dominant].rightParenting;
        } else if (activeMode === 'youth') {
            leftContent = fullNarratives[dominant].leftYouth;
            rightContent = fullNarratives[dominant].rightYouth;
        } else if (activeMode === 'educator') {
            leftContent = fullNarratives[dominant].leftEducator;
            rightContent = fullNarratives[dominant].rightEducator;
        }
        
        document.getElementById('cert-col-left').innerHTML = leftContent;
        document.getElementById('cert-col-right').innerHTML = rightContent;
        document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
        document.getElementById('cert-id').textContent = "ARAYA-" + Math.floor(Math.random() * 9000 + 1000);

        createRadarChart(scores);
        await new Promise(resolve => setTimeout(resolve, 800));

        const canvas = await html2canvas(document.getElementById('cert-content'), {
            scale: 2, 
            useCORS: true, 
            allowTaint: true, 
            backgroundColor: "#ffffff"
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
        pdf.save(`Sertifikat_${userName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) { 
        console.error(error); 
        alert("Gagal unduh sertifikat."); 
    } finally { 
        btn.disabled = false; 
        btn.textContent = "Unduh Sertifikat (PDF)"; 
    }
};

document.getElementById('restart-button').onclick = () => location.reload();
