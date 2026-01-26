/**
 * ARAYA CONSULTING - MINDPRINT ANALYSIS ENGINE
 * Version: 6.0 (Radar Chart & Perfect Signature Layout)
 */

const quizQuestions = [
    { question: "1. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ADVENTUROUS - Tantangan, hal baru, tekad kuat", type: "Choleric" }, { text: "ADAPTABLE - Mudah menyesuaikan diri", type: "Phlegmatic" }, { text: "ANIMATED - Penuh gairah hidup, ekspresif", type: "Sanguine" }, { text: "ANALYTICAL - Suka meneliti dan logis", type: "Melancholic" }] },
    { question: "2. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PERSISTENT - Menyelesaikan pekerjaan sampai tuntas", type: "Melancholic" }, { text: "PLAYFUL - Ceria, suka bercanda", type: "Sanguine" }, { text: "PERSUASIVE - Meyakinkan dengan logika dan fakta", type: "Choleric" }, { text: "PEACEFUL - Damai, menghindari tantangan", type: "Phlegmatic" }] },
    { question: "3. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SUBMISSIVE - Mudah menerima pandangan orang", type: "Phlegmatic" }, { text: "SELF SACRIFICING - Rela berkorban demi orang lain", type: "Melancholic" }, { text: "SOCIABLE - Tampil cerdas dan menyenangkan", type: "Sanguine" }, { text: "STRONG-WILLED - Berkemauan keras mencapai tujuan", type: "Choleric" }] },
    { question: "4. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CONSIDERATE - Tanggap perasaan orang lain", type: "Phlegmatic" }, { text: "CONTROLLED - Dapat mengendalikan emosi", type: "Melancholic" }, { text: "COMPETITIVE - Selalu ingin menang lomba", type: "Choleric" }, { text: "CONVINCING - Meyakinkan melalui daya tarik pribadi", type: "Sanguine" }] },
    { question: "5. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "REFRESHING - Menyegarkan orang lain", type: "Sanguine" }, { text: "RESPECTFUL - Sopan dan menghargai orang lain", type: "Phlegmatic" }, { text: "RESERVED - Menahan diri dalam ekspresi", type: "Melancholic" }, { text: "RESOURCEFUL - Bertindak cepat dan efektif", type: "Choleric" }] },
    { question: "6. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SATISFIED - Mudah menerima keadaan", type: "Phlegmatic" }, { text: "SENSITIVE - Peduli mendalam terhadap sekitar", type: "Melancholic" }, { text: "SELF-RELIANT - Mandiri, percaya kemampuan sendiri", type: "Choleric" }, { text: "SPIRITED - Penuh gairah dan kegembiraan", type: "Sanguine" }] },
    { question: "7. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PLANNER - Suka membuat rencana terperinci", type: "Melancholic" }, { text: "PATIENT - Sabar dan tetap tenang", type: "Phlegmatic" }, { text: "POSITIVE - Yakin segala hal akan beres", type: "Choleric" }, { text: "PROMOTER - Mendorong orang lain bergabung", type: "Sanguine" }] },
    { question: "8. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SURE - Yakin dan hampir tidak pernah ragu", type: "Choleric" }, { text: "SPONTANEOUS - Lebih menyukai hidup impulsif", type: "Sanguine" }, { text: "SCHEDULED - Hidup sesuai rencana harian", type: "Melancholic" }, { text: "SHY - Pendiam dan pemalu", type: "Phlegmatic" }] },
    { question: "9. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ORDERLY - Mengatur secara sistematis", type: "Melancholic" }, { text: "OBLIGING - Mudah menampung saran orang", type: "Phlegmatic" }, { text: "OUTSPOKEN - Berbicara terus terang", type: "Choleric" }, { text: "OPTIMISTIC - Yakin semua akan beres", type: "Sanguine" }] },
    { question: "10. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "FRIENDLY - Ramah dan suka menanggapi", type: "Phlegmatic" }, { text: "FAITHFUL - Setia dan dapat diandalkan", type: "Melancholic" }, { text: "FUNNY - Penuh humor dan tawa", type: "Sanguine" }, { text: "FORCEFUL - Berwibawa dan kuat", type: "Choleric" }] },
    { question: "11. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DARING - Berani mengambil resiko", type: "Choleric" }, { text: "DELIGHTFUL - Menyenangkan sebagai teman", type: "Sanguine" }, { text: "DIPLOMATIC - Peka dan sabar", type: "Phlegmatic" }, { text: "DETAILED - Melakukan sesuatu secara urut", type: "Melancholic" }] },
    { question: "12. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CHEERFUL - Riang dan bersemangat", type: "Sanguine" }, { text: "CONSISTENT - Seimbang secara emosional", type: "Phlegmatic" }, { text: "CULTURED - Menyukai hal-hal berkelas", type: "Melancholic" }, { text: "CONFIDENT - Percaya kemampuan diri", type: "Choleric" }] },
    { question: "13. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "IDEALISTIC - Butuh kesempurnaan", type: "Melancholic" }, { text: "INDEPENDENT - Mandiri dan berdikari", type: "Choleric" }, { text: "INOFFENSIVE - Tidak memancing pertengkaran", type: "Phlegmatic" }, { text: "INSPIRING - Memberi inspirasi bagi orang", type: "Sanguine" }] },
    { question: "14. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DEMONTRATIVE - Terbuka menyatakan kasih", type: "Sanguine" }, { text: "DECISIVE - Membuat keputusan cepat", type: "Choleric" }, { text: "DRY HUMOR - Humor singkat menggigit", type: "Melancholic" }, { text: "DEEP - Mendalam dan introspektif", type: "Phlegmatic" }] },
    { question: "15. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "MEDIATOR - Penengah konflik yang baik", type: "Phlegmatic" }, { text: "MUSICAL - Menghargai seni dan musik", type: "Melancholic" }, { text: "MOVER - Pemimpin yang produktif", type: "Choleric" }, { text: "MIXES EASILY - Senang bertemu orang baru", type: "Sanguine" }] },
    { question: "16. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "THOUGHTFUL - Perhatian dan tenggang rasa", type: "Melancholic" }, { text: "TENACIOUS - Keras kepala mencapai tujuan", type: "Choleric" }, { text: "TALKER - Senang bercerita menghibur", type: "Sanguine" }, { text: "TOLERANT - Menerima cara orang lain", type: "Phlegmatic" }] },
    { question: "17. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "LISTENER - Bersedia mendengarkan", type: "Phlegmatic" }, { text: "LOYAL - Setia pada gagasan/pekerjaan", type: "Melancholic" }, { text: "LEADER - Pemimpin alami dominan", type: "Choleric" }, { text: "LIVELY - Penuh gairah dan cekatan", type: "Sanguine" }] },
    { question: "18. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CONTENTED - Mudah puas, jarang iri", type: "Phlegmatic" }, { text: "CHIEF - Memegang tampuk pimpinan", type: "Choleric" }, { text: "CHARTMAKER - Mengatur hidup dengan daftar", type: "Melancholic" }, { text: "CUTE - Cerdas dan jadi pusat perhatian", type: "Sanguine" }] },
    { question: "19. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PERFECTIONIST - Standar tinggi segalanya", type: "Melancholic" }, { text: "PLEASANT - Menyenangkan untuk bergaul", type: "Phlegmatic" }, { text: "PRODUCTIVE - Sulit untuk diam", type: "Choleric" }, { text: "POPULAR - Sumber hidup pesta", type: "Sanguine" }] },
    { question: "20. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "BOUNCY - Semangat bola memantul", type: "Sanguine" }, { text: "BOLD - Berani menanggung resiko", type: "Choleric" }, { text: "BEHAVED - Membawa diri dengan baik", type: "Melancholic" }, { text: "BALANCED - Stabil dan seimbang", type: "Phlegmatic" }] },
    { question: "21. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "BLANK - Jarang menunjukkan emosi", type: "Phlegmatic" }, { text: "BASHFUL - Menghindar karena malu", type: "Melancholic" }, { text: "BRASSY - Suka pamer, menarik perhatian", type: "Sanguine" }, { text: "BOSSY - Suka memerintah/mendominasi", type: "Choleric" }] },
    { question: "22. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "UNDISCIPLINED - Kurang disiplin", type: "Sanguine" }, { text: "UNSYMPATHETIC - Sulit kenali perasaan orang", type: "Choleric" }, { text: "UNENTHUSIASTIC - Tidak bergairah", type: "Phlegmatic" }, { text: "UNFORGIVING - Sulit ampuni luka batin", type: "Melancholic" }] },
    { question: "23. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "RETICENT - Tidak ingin terlibat hal rumit", type: "Phlegmatic" }, { text: "RESENTFUL - Memendam perasaan negatif", type: "Melancholic" }, { text: "RESISTANT - Melawan cara orang lain", type: "Choleric" }, { text: "REPETITIOUS - Cerita kisah yang sama", type: "Sanguine" }] },
    { question: "24. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "FUSSY - Perhatian pada detail sepele", type: "Melancholic" }, { text: "FEARFUL - Kurang percaya diri", type: "Phlegmatic" }, { text: "FORGETFUL - Daya ingat lemah/cuek", type: "Sanguine" }, { text: "FRANK - Bicara apa adanya", type: "Choleric" }] },
    { question: "25. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "IMPATIENT - Tidak sabaran/susah menunggu", type: "Choleric" }, { text: "INSECURE - Merasa tidak aman", type: "Melancholic" }, { text: "INDECISIVE - Sulit buat keputusan", type: "Phlegmatic" }, { text: "INTERRUPTS - Suka menyela bicara", type: "Sanguine" }] },
    { question: "26. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "UNPOPULAR - Perfeksionisnya buat dijauhi", type: "Melancholic" }, { text: "UNINVOLVED - Tidak ingin terlibat", type: "Phlegmatic" }, { text: "UNPREDICTABLE - Suasana hati berubah cepat", type: "Sanguine" }, { text: "UNAFFECTIONATE - Sulit nyatakan kasih", type: "Choleric" }] },
    { question: "27. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "HEADSTRONG - Bersikeras dengan caranya", type: "Choleric" }, { text: "HAPHAZARD - Tidak punya cara konsisten", type: "Sanguine" }, { text: "HARD TO PLEASE - Sulit disenangkan", type: "Melancholic" }, { text: "HESITANT - Sulit untuk terlibat", type: "Phlegmatic" }] },
    { question: "28. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PLAIN - Tidak menonjol/emosi datar", type: "Phlegmatic" }, { text: "PESSIMISTIC - Melihat sisi buruk situasi", type: "Melancholic" }, { text: "PROUD - Merasa dirinya selalu benar", type: "Choleric" }, { text: "PERMISSIVE - Membiarkan orang lain agar diterima", type: "Sanguine" }] },
    { question: "29. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ANGERED EASILY - Marah meledak-ledak", type: "Sanguine" }, { text: "AIMLESS - Tidak punya inisiatif/tujuan", type: "Phlegmatic" }, { text: "ARGUMENTATIVE - Suka mendebat orang", type: "Choleric" }, { text: "ALIENATED - Merasa terkucilkan", type: "Melancholic" }] },
    { question: "30. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "NAIVE - Polos seperti anak-anak", type: "Sanguine" }, { text: "NEGATIVE ATTITUDE - Jarang lihat sisi positif", type: "Melancholic" }, { text: "NERVY - Penuh keyakinan negatif", type: "Choleric" }, { text: "NONCHALANT - Masa bodoh dan cuek", type: "Phlegmatic" }] },
    { question: "31. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "WORRIER - Selalu risau/takut", type: "Melancholic" }, { text: "WITDRAWN - Perlu menyendiri", type: "Phlegmatic" }, { text: "WORKAHOLIC - Agresif, harus produktif", type: "Choleric" }, { text: "WANTS CREDIT - Berkembang jika dipuji", type: "Sanguine" }] },
    { question: "32. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "TOO SENSITIVE - Mudah tersinggung", type: "Melancholic" }, { text: "TACTLESS - Kurang peka perasaan orang", type: "Choleric" }, { text: "TIMID - Takut akan konflik", type: "Phlegmatic" }, { text: "TALKACTIVE - Pembicara menyenangkan", type: "Sanguine" }] },
    { question: "33. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DOUBTFUL - Terpengaruh ketidakpastian", type: "Phlegmatic" }, { text: "DISORGANIZED - Tak mampu atur hidup", type: "Sanguine" }, { text: "DOMINEERING - Kuasai orang lain", type: "Choleric" }, { text: "DEPRESSED - Negatif tanpa alasan", type: "Melancholic" }] },
    { question: "34. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "INCONSISTENT - Emosi tidak logis", type: "Sanguine" }, { text: "INTROVERT - Tertutup ke dalam diri", type: "Melancholic" }, { text: "INTOLERANT - Tak terima sudut pandang lain", type: "Choleric" }, { text: "INDIFFERENT - Anggap hal tidak penting", type: "Phlegmatic" }] },
    { question: "35. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "MESSY - Hidup berantakan", type: "Sanguine" }, { text: "MOODY - Suasana hati mudah merosot", type: "Melancholic" }, { text: "MUMBLES - Bicara tidak jelas", type: "Phlegmatic" }, { text: "MANIPULATIVE - Licik demi keuntungan", type: "Choleric" }] },
    { question: "36. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SLOW - Lamban bertindak", type: "Phlegmatic" }, { text: "STUBBORN - Keras kepala", type: "Choleric" }, { text: "SHOW-OFFS - Ingin tampil menonjol", type: "Sanguine" }, { text: "SKEPTICAL - Pertanyakan motivasi", type: "Melancholic" }] },
    { question: "37. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "LONER - Butuh waktu sendiri", type: "Melancholic" }, { text: "LORD OVER - Nyatakan diri benar", type: "Choleric" }, { text: "LAZY - Nilai kerja dari energi", type: "Phlegmatic" }, { text: "LOUD - Suara melebihi orang lain", type: "Sanguine" }] },
    { question: "38. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SLUGGISH - Siput, perlu dorongan", type: "Phlegmatic" }, { text: "SUSPICIOUS - Curigai ide orang lain", type: "Melancholic" }, { text: "SHORT TEMPERED - Mudah marah tak sabar", type: "Choleric" }, { text: "SCATTERBRAINED - Suka berubah-ubah", type: "Sanguine" }] },
    { question: "39. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "REVENGEFUL - Simpan dendam", type: "Melancholic" }, { text: "RESTLESS - Suka aktivitas baru", type: "Sanguine" }, { text: "RELUCTANT - Tidak suka terlibat", type: "Phlegmatic" }, { text: "RASH - Bertindak tergesa-gesa", type: "Choleric" }] },
    { question: "40. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "COMPROMISING - Hindari konflik", type: "Phlegmatic" }, { text: "CRITICAL - Sering menilai negatif", type: "Melancholic" }, { text: "CRAFTY - Halalkan segala cara", type: "Choleric" }, { text: "CHANGEABLE - Perlu banyak variasi", type: "Sanguine" }] }
];

const personalityNames = { "Sanguine": "Populer Sanguine", "Choleric": "Kuat Choleric", "Melancholic": "Sempurna Melancholic", "Phlegmatic": "Damai Phlegmatic" };

const fullNarratives = {
    "Sanguine": {
        left: `<b>Karakteristik Dasar:</b> Individu yang ekstrovert, optimis, dan penuh semangat. Mereka adalah "nyawa" dalam setiap pertemuan, sangat menyukai interaksi sosial, dan memiliki kemampuan komunikasi yang persuasif secara alami.<br><br>
               <b>Kekuatan & Kelemahan:</b> Sangat hebat dalam membangun hubungan baru dan memotivasi orang lain. Namun, seringkali kurang teratur dalam administrasi, mudah kehilangan fokus, dan cenderung menghindari hal-hal yang terlalu teknis atau membosankan.<br><br>
               <b>Rekomendasi Karir & Akademik:</b> Bidang Komunikasi, Marketing, Public Relations, Penjualan, atau Seni Pertunjukan.<br><br>
               <b>Saran Pengembangan:</b> Berlatihlah untuk lebih disiplin pada waktu dan fokus menyelesaikan satu tugas hingga tuntas sebelum berpindah ke hal lain.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin yang demokratis dan inspiratif. Mereka memimpin dengan energi dan karisma.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Sangat baik sebagai garda depan (frontliner) atau bagian promosi. Mereka mampu mencairkan suasana tim yang kaku.<br><br>
                <b>Panduan Komunikasi:</b> Berikan apresiasi atau pujian secara terbuka. Jika memberi kritik, lakukan secara personal dan tetap dengan nada yang menyemangati.</div>`
    },
    "Choleric": {
        left: `<b>Karakteristik Dasar:</b> Individu yang berorientasi pada hasil, dinamis, dan memiliki kemauan yang sangat kuat. Mereka sangat praktis, mandiri, dan tidak takut mengambil risiko untuk mencapai tujuan.<br><br>
               <b>Kekuatan & Kelemahan:</b> Sangat cepat dalam mengambil keputusan dan mampu bekerja di bawah tekanan. Namun, terkadang terlihat tidak sabar, kurang empati terhadap perasaan orang lain, dan cenderung mendominasi.<br><br>
               <b>Rekomendasi Karir & Akademik:</b> Manajemen, Kewirausahaan, Bidang Militer, atau posisi eksekutif yang membutuhkan pengambilan keputusan cepat.<br><br>
               <b>Saran Pengembangan:</b> Belajarlah untuk mendengarkan masukan orang lain dan menyadari bahwa setiap orang memiliki kecepatan kerja yang berbeda-beda.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin yang visioner dan otoriter (tegas). Fokus pada target dan efektivitas.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Sangat bagus untuk memimpin proyek baru atau mengejar target yang sulit. Mereka adalah eksekutor lapangan yang handal.<br><br>
                <b>Panduan Komunikasi:</b> Bicara langsung ke poin utama (to-the-point). Hindari basa-basi yang terlalu lama dan fokuslah pada solusi atau hasil.</div>`
    },
    "Melancholic": {
        left: `<b>Karakteristik Dasar:</b> Individu yang mendalam, analitis, dan memiliki standar kualitas yang sangat tinggi. Mereka sangat menghargai keteraturan, data, dan logika di atas segalanya.<br><br>
               <b>Kekuatan & Kelemahan:</b> Sangat teliti dan mampu melihat potensi masalah yang diabaikan orang lain. Namun, sering terjebak dalam overthinking, cenderung perfeksionis yang berlebihan, dan sulit menerima perubahan mendadak.<br><br>
               <b>Rekomendasi Karir & Akademik:</b> Akuntansi, Analis Data, Riset, Penulisan, Teknik, atau bidang hukum.<br><br>
               <b>Saran Pengembangan:</b> Belajarlah untuk menerima bahwa "selesai lebih baik daripada sempurna" dan cobalah untuk lebih terbuka terhadap ide-ide yang spontan.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin yang terorganisir dan berbasis data. Mereka memastikan sistem berjalan sesuai standar operasi (SOP).<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Penjaga kualitas (Quality Control) yang terbaik dalam tim. Mereka memastikan tidak ada kesalahan detail dalam pekerjaan.<br><br>
                <b>Panduan Komunikasi:</b> Sediakan data dan fakta yang akurat. Berikan waktu bagi mereka untuk memproses informasi sebelum menuntut jawaban atau keputusan.</div>`
    },
    "Phlegmatic": {
        left: `<b>Karakteristik Dasar:</b> Individu yang tenang, sabar, dan cinta damai. Mereka adalah pendengar yang luar biasa dan memiliki emosi yang stabil, jarang meledak-ledak.<br><br>
               <b>Kekuatan & Kelemahan:</b> Mampu bekerja sama dengan siapa saja dan sangat handal dalam meredam konflik. Namun, seringkali kurang memiliki inisiatif, cenderung menunda pekerjaan, dan sulit berkata "tidak".<br><br>
               <b>Rekomendasi Karir & Akademik:</b> Pendidikan (Guru/Dosen), Konseling, Administrasi, Layanan Pelanggan (CS), atau Mediator.<br><br>
               <b>Saran Pengembangan:</b> Berlatihlah untuk lebih tegas (asertif) dalam menyatakan pendapat dan belajar untuk memulai sesuatu tanpa menunggu perintah.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin yang mendukung (supportive) dan menjaga keharmonisan tim. Sangat baik dalam mendengarkan keluhan bawahan.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Stabilisator dalam tim. Mereka adalah "perekat" yang membuat suasana kerja tetap nyaman dan bebas stres.<br><br>
                <b>Panduan Komunikasi:</b> Berikan instruksi yang jelas dan bertahap. Jangan mendesak mereka dengan cara yang agresif, melainkan berikan dukungan dan rasa aman.</div>`
    }
};

let currentQuestionIndex = 0;
let userName = "";
let scores = { "Sanguine": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0 };
let radarChartInstance = null;

document.getElementById('start-form').addEventListener('submit', function(e) {
    e.preventDefault();
    userName = document.getElementById('user-name').value.trim();
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
}

document.getElementById('next-button').onclick = () => {
    if (!quizQuestions[currentQuestionIndex].selectedType) { alert("Pilih jawaban dahulu!"); return; }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) showQuestion();
    else showResult();
};

document.getElementById('prev-button').onclick = () => { currentQuestionIndex--; showQuestion(); };

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    scores = { "Sanguine": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0 };
    quizQuestions.forEach(q => { if (q.selectedType) scores[q.selectedType]++; });
    let dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('result-title').textContent = `Hasil: ${personalityNames[dominant]}`;
    document.getElementById('result-description').textContent = `Halo ${userName}, peta spektrum kepribadian Anda telah terpetakan.`;
}

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
        document.getElementById('cert-col-left').innerHTML = fullNarratives[dominant].left;
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
        pdf.save(`Sertifikat_MindPrint_${userName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) { console.error(error); alert("Gagal unduh sertifikat."); }
    finally { btn.disabled = false; btn.textContent = "Unduh Sertifikat (PDF)"; }
};

document.getElementById('restart-button').onclick = () => location.reload();
