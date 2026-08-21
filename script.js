/**
 * ARAYA CONSULTING - AUTOMATIC CODE VERSION (DUAL MODE: UMUM & BISNIS)
 * Sistem: Sinkronasi Google Sheets + Kode Aktivasi Unik Otomatis + Deteksi Mode Bisnis
 */

// --- KONFIGURASI UTAMA ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsJfQT1jNlUEV97vbOR3SuAFDBAz5G3cyUJSd0ceColcNbAfk9FWsGwkHkV6N5ga7x/exec"; 
const ADMIN_WA = "6285232526003"; 

// Deteksi Mode dari URL Parameter (?mode=business)
const urlParams = new URLSearchParams(window.location.search);
const isBusinessMode = urlParams.get('mode') === 'business';
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
        leftStandard: `<b>Karakteristik Dasar:</b> Pribadi yang antusias, ekspresif, optimis, dan membawa energi positif ke lingkungan sekitar. Memiliki dorongan alami pada interaksi sosial, fleksibilitas, dan komunikasi terbuka.<br><br>
<b>Kekuatan Natural:</b> Cepat membangun kedekatan (rapport) dengan relasi baru, persuasif dalam menyampaikan ide, adaptif terhadap perubahan, dan efektif mencairkan ketegangan suasana kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran representasi publik, promosi, negosiasi awal, penguatan keterlibatan relasi, dan fungsi-fungsi dinamis yang membutuhkan keluwesan komunikasi tatap muka.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terhadap inkonsistensi eksekusi harian, mudah terdistraksi dari target utama, serta cenderung menghindari administrasi detail dan kepatuhan alur kerja rutin.<br><br>
<b>Saran Pengembangan:</b> Bangun kebiasaan menggunakan checklist kerja tertulis dan pasangkan dengan rekan kerja yang kuat dalam pengawalan detail operasional.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang antusias, ekspresif, optimis, dan membawa energi positif ke lingkungan sekitar. Memiliki dorongan alami pada interaksi sosial, fleksibilitas, dan komunikasi terbuka.<br><br>
<b>Kekuatan Natural:</b> Cepat membangun kedekatan (rapport) dengan relasi baru, persuasif dalam menyampaikan ide, adaptif terhadap perubahan, dan efektif mencairkan ketegangan suasana kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran representasi publik, promosi, negosiasi awal, penguatan keterlibatan relasi, dan fungsi-fungsi dinamis yang membutuhkan keluwesan komunikasi tatap muka.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terhadap inkonsistensi eksekusi harian, mudah terdistraksi dari target utama, serta cenderung menghindari administrasi detail dan kepatuhan alur kerja rutin.<br><br>
<b>Saran Pengembangan:</b> Bangun kebiasaan menggunakan checklist kerja tertulis dan pasangkan dengan rekan kerja yang kuat dalam pengawalan detail operasional.`,

        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan lingkungan kerja melalui energi antusiasme, optimisme, dan kedekatan relasional.<br><br><b>Sinergi Tim Ideal:</b> Sangat memerlukan mitra kerja yang kuat dalam disiplin sistem, pengawasan administrasi, dan eksekusi tindak lanjut (follow-up).<br><br><b>Panduan Komunikasi:</b> Berikan apresiasi secara terbuka dan sampaikan evaluasi perbaikan secara personal dengan nada dialogis yang menyemangati.</div>`
    },

    "Choleric": {
        leftStandard: `<b>Karakteristik Dasar:</b> Pribadi yang tegas, dinamis, mandiri, dan berorientasi kuat pada pencapaian target. Memiliki dorongan alami untuk mengambil kendali, memecahkan kebuntuan, dan menghasilkan progres nyata.<br><br>
<b>Kekuatan Natural:</b> Berani mengambil risiko terukur, cepat mengambil keputusan di bawah tekanan, pragmatis mencari solusi, dan tangguh menghadapi hambatan operasional.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran eksekutor target strategis, inisiator proyek baru, penanganan krisis/masalah darurat, dan fungsi pendorong akselerasi ritme kerja.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung tidak sabar terhadap proses bertahap, berisiko mengabaikan empati interpersonal, serta rawan memicu resistensi tim karena memaksakan standar tanpa dialog.<br><br>
<b>Saran Pengembangan:</b> Latihlah kesabaran mendengarkan masukan sebelum memutuskan, serta hargai pentingnya kepatuhan alur sistem (SOP) di samping sekadar mengejar hasil akhir.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang tegas, dinamis, mandiri, dan berorientasi kuat pada pencapaian target. Memiliki dorongan alami untuk mengambil kendali, memecahkan kebuntuan, dan menghasilkan progres nyata.<br><br>
<b>Kekuatan Natural:</b> Berani mengambil risiko terukur, cepat mengambil keputusan di bawah tekanan, pragmatis mencari solusi, dan tangguh menghadapi hambatan operasional.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran eksekutor target strategis, inisiator proyek baru, penanganan krisis/masalah darurat, dan fungsi pendorong akselerasi ritme kerja.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung tidak sabar terhadap proses bertahap, berisiko mengabaikan empati interpersonal, serta rawan memicu resistensi tim karena memaksakan standar tanpa dialog.<br><br>
<b>Saran Pengembangan:</b> Latihlah kesabaran mendengarkan masukan sebelum memutuskan, serta hargai pentingnya kepatuhan alur sistem (SOP) di samping sekadar mengejar hasil akhir.`,

        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan organisasi melalui ketegasan arah, standar target tinggi, dan kecepatan tindakan nyata.<br><br><b>Sinergi Tim Ideal:</b> Membutuhkan mitra kerja yang kuat dalam penataan alur SOP dan kestabilan ritme tim agar akselerasi tetap terukur.<br><br><b>Panduan Komunikasi:</b> Sampaikan pesan langsung ke pokok persoalan (to-the-point), berbasis data ringkas, dan fokus pada solusi konkret.</div>`
    },

    "Melancholic": {
        leftStandard: `<b>Karakteristik Dasar:</b> Pribadi yang mendalam, analitis, terstruktur, dan memiliki standar kualitas mutu yang tinggi. Menghargai ketepatan data, logika, dan perencanaan yang matang.<br><br>
<b>Kekuatan Natural:</b> Presisi mendeteksi celah risiko sebelum masalah terjadi, disiplin menegakkan standar kualitas, tertib administrasi, dan konsisten menjaga akurasi proses kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran perancangan sistem/SOP, audit operasional, kendali mutu (quality control), mitigasi risiko, dan analisis data atau keuangan.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terjebak overthinking (terlalu lama menimbang keputusan), perfeksionisme yang memperlambat laju eksekusi, serta sensitif terhadap kritik langsung.<br><br>
<b>Saran Pengembangan:</b> Terapkan prinsip tindakan cepat pada hal-hal yang butuh pengujian lapangan dan bangun fleksibilitas terhadap perubahan situasi yang dinamis.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang mendalam, analitis, terstruktur, dan memiliki standar kualitas mutu yang tinggi. Menghargai ketepatan data, logika, dan perencanaan yang matang.<br><br>
<b>Kekuatan Natural:</b> Presisi mendeteksi celah risiko sebelum masalah terjadi, disiplin menegakkan standar kualitas, tertib administrasi, dan konsisten menjaga akurasi proses kerja.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran perancangan sistem/SOP, audit operasional, kendali mutu (quality control), mitigasi risiko, dan analisis data atau keuangan.<br><br>
<b>Leadership & Operational Blind Spot:</b> Rentan terjebak overthinking (terlalu lama menimbang keputusan), perfeksionisme yang memperlambat laju eksekusi, serta sensitif terhadap kritik langsung.<br><br>
<b>Saran Pengembangan:</b> Terapkan prinsip tindakan cepat pada hal-hal yang butuh pengujian lapangan dan bangun fleksibilitas terhadap perubahan situasi yang dinamis.`,

        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Memberi dampak melalui validitas data yang akurat, metodologi yang jelas, dan penegakan standar mutu baku.<br><br><b>Sinergi Tim Ideal:</b> Memerlukan rekan kerja yang berani mengambil keputusan cepat guna mencegah kebuntuan eksekusi.<br><br><b>Panduan Komunikasi:</b> Sediakan fakta dan data terstruktur, jelaskan alasan logis secara objektif, dan hindari instruksi mendadak tanpa parameter yang jelas.</div>`
    },

    "Phlegmatic": {
        leftStandard: `<b>Karakteristik Dasar:</b> Pribadi yang tenang, sabar, cinta damai, dan konsisten. Memiliki stabilitas emosi yang tinggi, dapat diandalkan dalam ritme rutin, dan menjunjung keharmonisan hubungan kerja.<br><br>
<b>Kekuatan Natural:</b> Pendengar yang objektif, sangat loyal, konsisten menjaga keberlangsungan proses kerja harian, dan menjadi penengah yang efektif dalam meredam gesekan internal.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran koordinasi alur operasional rutin, pelayanan pelanggan, pemeliharaan budaya kerja tim, dan fungsi pendukung organisasi.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung pasif memulai inisiatif baru tanpa instruksi, enggan menghadapi konfrontasi langsung (menunda menegur masalah), dan lambat merespons perubahan drastis.<br><br>
<b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) dalam menyatakan batas standar kerja dan biasakan mengambil inisiatif proaktif dalam pemecahan masalah harian.`,

        leftBusiness: `<b>Karakteristik Dasar:</b> Pribadi yang tenang, sabar, cinta damai, dan konsisten. Memiliki stabilitas emosi yang tinggi, dapat diandalkan dalam ritme rutin, dan menjunjung keharmonisan hubungan kerja.<br><br>
<b>Kekuatan Natural:</b> Pendengar yang objektif, sangat loyal, konsisten menjaga keberlangsungan proses kerja harian, dan menjadi penengah yang efektif dalam meredam gesekan internal.<br><br>
<b>Kecenderungan Peran & Kontribusi Alami:</b> Optimal pada peran koordinasi alur operasional rutin, pelayanan pelanggan, pemeliharaan budaya kerja tim, dan fungsi pendukung organisasi.<br><br>
<b>Leadership & Operational Blind Spot:</b> Cenderung pasif memulai inisiatif baru tanpa instruksi, enggan menghadapi konfrontasi langsung (menunda menegur masalah), dan lambat merespons perubahan drastis.<br><br>
<b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) dalam menyatakan batas standar kerja dan biasakan mengambil inisiatif proaktif dalam pemecahan masalah harian.`,

        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Pengaruh:</b> Menggerakkan lingkungan melalui kestabilan ritme kerja, kesabaran, dan pendekatan suportif yang menjaga loyalitas tim.<br><br><b>Sinergi Tim Ideal:</b> Membutuhkan inisiator yang berani mendorong target baru dan akselerasi agar performa tim tidak stagnan dalam kenyamanan rutin.<br><br><b>Panduan Komunikasi:</b> Sampaikan instruksi secara runut dan terstruktur tanpa tekanan agresif. Ciptakan rasa aman saat meminta pendapat.</div>`
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
            mode: isBusinessMode ? "Business/SBS" : "General"
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
        
        // Memilih teks narasi kiri berdasarkan mode URL (?mode=business)
        const leftContent = isBusinessMode ? fullNarratives[dominant].leftBusiness : fullNarratives[dominant].leftStandard;
        
        document.getElementById('cert-col-left').innerHTML = leftContent;
        document.getElementById('cert-col-right').innerHTML = fullNarratives[dominant].right;
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
