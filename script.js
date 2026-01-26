const quizQuestions = [
    { question: "1. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ADVENTUROUS - orang yang suka tantangan, hal-hal baru, tekad kuat", type: "Choleric" }, { text: "ADAPTABLE - mudah menyesuaikan diri dalam setiap situasi", type: "Phlegmatic" }, { text: "ANIMATED - penuh gairah hidup, ekspresif", type: "Sanguine" }, { text: "ANALYTICAL - suka meneliti dan logis", type: "Melancholic" }] },
    { question: "2. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PERSISTENT - menyelesaikan pekerjaan sampai tuntas", type: "Melancholic" }, { text: "PLAYFUL - ceria, suka bercanda", type: "Sanguine" }, { text: "PERSUASIVE - meyakinkan dengan logika dan fakta", type: "Choleric" }, { text: "PEACEFUL - suasana hati damai, menghindari tantangan", type: "Phlegmatic" }] },
    { question: "3. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SUBMISSIVE - mudah menerima pandangan orang lain", type: "Phlegmatic" }, { text: "SELF SACRIFICING - rela berkorban demi orang lain", type: "Melancholic" }, { text: "SOCIABLE - suka tampil cerdas dan menyenangkan", type: "Sanguine" }, { text: "STRONG-WILLED - berkemauan keras untuk mencapai tujuan", type: "Choleric" }] },
    { question: "4. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CONSIDERATE - tanggap terhadap perasaan orang lain", type: "Phlegmatic" }, { text: "CONTROLLED - dapat mengendalikan emosi", type: "Melancholic" }, { text: "COMPETITIVE - selalu ingin menang dalam setiap lomba", type: "Choleric" }, { text: "CONVINCING - meyakinkan melalui daya tarik pribadi", type: "Sanguine" }] },
    { question: "5. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "REFRESHING - menyegarkan orang lain", type: "Sanguine" }, { text: "RESPECTFUL - sopan dan menghargai orang lain", type: "Phlegmatic" }, { text: "RESERVED - menahan diri dalam ekspresi", type: "Melancholic" }, { text: "RESOURCEFUL - bertindak cepat dan efektif", type: "Choleric" }] },
    { question: "6. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SATISFIED - mudah puas dengan keadaan", type: "Phlegmatic" }, { text: "SENSITIVE - peduli mendalam terhadap sekitar", type: "Melancholic" }, { text: "SELF-RELIANT - mandiri dan mengandalkan diri sendiri", type: "Choleric" }, { text: "SPIRITED - penuh kegembiraan yang menggelora", type: "Sanguine" }] },
    { question: "7. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PLANNER - suka membuat rencana terperinci", type: "Melancholic" }, { text: "PATIENT - sabar dan tetap tenang", type: "Phlegmatic" }, { text: "POSITIVE - yakin segala hal akan beres", type: "Choleric" }, { text: "PROMOTER - mengajak orang bergabung melalui daya tarik", type: "Sanguine" }] },
    { question: "8. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SURE - yakin dan tidak pernah ragu", type: "Choleric" }, { text: "SPONTANEOUS - menyukai hidup yang impulsif", type: "Sanguine" }, { text: "SCHEDULED - hidup sesuai rencana harian", type: "Melancholic" }, { text: "SHY - pendiam dan tidak mudah larut dalam percakapan", type: "Phlegmatic" }] },
    { question: "9. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ORDERLY - mengatur segalanya secara sistematis", type: "Melancholic" }, { text: "OBLIGING - mudah menampung saran orang lain", type: "Phlegmatic" }, { text: "OUTSPOKEN - berbicara terus terang", type: "Choleric" }, { text: "OPTIMISTIC - yakin semua akan beres", type: "Sanguine" }] },
    { question: "10. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "FRIENDLY - ramah dan suka menanggapi", type: "Phlegmatic" }, { text: "FAITHFUL - setia dan dapat diandalkan", type: "Melancholic" }, { text: "FUNNY - penuh humor dan kegembiraan", type: "Sanguine" }, { text: "FORCEFUL - berwibawa dan kuat", type: "Choleric" }] },
    { question: "11. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DARING - berani mengambil resiko", type: "Choleric" }, { text: "DELIGHTFUL - menyenangkan sebagai teman", type: "Sanguine" }, { text: "DIPLOMATIC - peka dan sabar berhubungan dengan orang", type: "Phlegmatic" }, { text: "DETAILED - melakukan sesuatu secara kronologis", type: "Melancholic" }] },
    { question: "12. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CHEERFUL - selalu bersemangat dan riang", type: "Sanguine" }, { text: "CONSISTENT - memiliki keseimbangan emosional", type: "Phlegmatic" }, { text: "CULTURED - menyukai hal intelek/berkelas", type: "Melancholic" }, { text: "CONFIDENT - percaya akan kemampuan diri", type: "Choleric" }] },
    { question: "13. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "IDEALISTIC - butuh tingkat kesempurnaan", type: "Melancholic" }, { text: "INDEPENDENT - mandiri dan percaya diri", type: "Choleric" }, { text: "INOFFENSIVE - tidak pernah memancing pertengkaran", type: "Phlegmatic" }, { text: "INSPIRING - memberi inspirasi kepada orang lain", type: "Sanguine" }] },
    { question: "14. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DEMONTRATIVE - terbuka mengungkapkan kasih sayang", type: "Sanguine" }, { text: "DECISIVE - mampu membuat keputusan cepat", type: "Choleric" }, { text: "DRY HUMOR - humor singkat dan menggigit", type: "Melancholic" }, { text: "DEEP - mendalam dan introspektif", type: "Phlegmatic" }] },
    { question: "15. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "MEDIATOR - posisi penengah konflik", type: "Phlegmatic" }, { text: "MUSICAL - menghargai seni dan musik", type: "Melancholic" }, { text: "MOVER - pemimpin yang produktif", type: "Choleric" }, { text: "MIXES EASILY - tidak menganggap orang lain asing", type: "Sanguine" }] },
    { question: "16. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "THOUGHTFUL - penuh perhatian dan tenggang rasa", type: "Melancholic" }, { text: "TENACIOUS - tak mau menyerah sebelum tercapai", type: "Choleric" }, { text: "TALKER - tak henti bicara dan menghibur", type: "Sanguine" }, { text: "TOLERANT - mudah menerima jalan pikiran orang", type: "Phlegmatic" }] },
    { question: "17. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "LISTENER - selalu bersedia mendengarkan", type: "Phlegmatic" }, { text: "LOYAL - setia pada gagasan atau pekerjaan", type: "Melancholic" }, { text: "LEADER - pemimpin alami yang bertanggung jawab", type: "Choleric" }, { text: "LIVELY - penuh gairah hidup dan cekatan", type: "Sanguine" }] },
    { question: "18. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "CONTENTED - mudah puas, jarang iri hati", type: "Phlegmatic" }, { text: "CHIEF - mengharapkan orang lain mengikutinya", type: "Choleric" }, { text: "CHARTMAKER - mengatur hidup dengan daftar/grafik", type: "Melancholic" }, { text: "CUTE - cerdas dan jadi pusat perhatian", type: "Sanguine" }] },
    { question: "19. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PERFECTIONIST - standar tinggi pada segala hal", type: "Melancholic" }, { text: "PLEASANT - menyenangkan untuk bergaul", type: "Phlegmatic" }, { text: "PRODUCTIVE - sulit untuk berdiam diri/istirahat", type: "Choleric" }, { text: "POPULAR - membuat pesta jadi menyenangkan", type: "Sanguine" }] },
    { question: "20. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "BOUNCY - kepribadian yang semangat besar", type: "Sanguine" }, { text: "BOLD - berani menanggung segala resiko", type: "Choleric" }, { text: "BEHAVED - membawa diri dengan baik", type: "Melancholic" }, { text: "BALANCED - kepribadian stabil", type: "Phlegmatic" }] },
    { question: "21. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "BLANK - jarang menunjukkan emosi", type: "Phlegmatic" }, { text: "BASHFUL - menghindar karena malu", type: "Melancholic" }, { text: "BRASSY - suka pamer dan suara keras", type: "Sanguine" }, { text: "BOSSY - sering memerintah/mendominasi", type: "Choleric" }] },
    { question: "22. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "UNDISCIPLINED - kurang disiplin/teratur", type: "Sanguine" }, { text: "UNSYMPATHETIC - sulit mengenali perasaan orang", type: "Choleric" }, { text: "UNENTHUSIASTIC - cenderung tidak bergairah", type: "Phlegmatic" }, { text: "UNFORGIVING - sulit melupakan luka batin", type: "Melancholic" }] },
    { question: "23. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "RETICENT - tidak ingin terlibat hal rumit", type: "Phlegmatic" }, { text: "RESENTFUL - memendam perasaan negatif", type: "Melancholic" }, { text: "RESISTANT - melawan cara orang lain", type: "Choleric" }, { text: "REPETITIOUS - menceritakan kembali kisah lama", type: "Sanguine" }] },
    { question: "24. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "FUSSY - menuntut perhatian pada detail sepele", type: "Melancholic" }, { text: "FEARFUL - merasa kurang percaya diri", type: "Phlegmatic" }, { text: "FORGETFUL - daya ingat lemah/cuek", type: "Sanguine" }, { text: "FRANK - terus terang bicara apa adanya", type: "Choleric" }] },
    { question: "25. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "IMPATIENT - tidak sabaran/susah menunggu", type: "Choleric" }, { text: "INSECURE - kurang percaya diri", type: "Melancholic" }, { text: "INDECISIVE - sulit membuat keputusan", type: "Phlegmatic" }, { text: "INTERRUPTS - suka menyela pembicaraan", type: "Sanguine" }] },
    { question: "26. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "UNPOPULAR - tuntutan sempurna membuatnya dijauhi", type: "Melancholic" }, { text: "UNINVOLVED - tidak punya keinginan terlibat", type: "Phlegmatic" }, { text: "UNPREDICTABLE - suasana hati berubah-ubah", type: "Sanguine" }, { text: "UNAFFECTIONATE - sulit menyatakan kasih sayang", type: "Choleric" }] },
    { question: "27. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "HEADSTRONG - bersikeras dengan caranya sendiri", type: "Choleric" }, { text: "HAPHAZARD - tidak punya cara konsisten", type: "Sanguine" }, { text: "HARD TO PLEASE - sulit disenangkan/standar tinggi", type: "Melancholic" }, { text: "HESITANT - sulit terlibat", type: "Phlegmatic" }] },
    { question: "28. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "PLAIN - tidak menonjol dan emosi datar", type: "Phlegmatic" }, { text: "PESSIMISTIC - melihat sisi buruk situasi", type: "Melancholic" }, { text: "PROUD - merasa dirinya selalu benar", type: "Choleric" }, { text: "PERMISSIVE - membiarkan orang lain melakukan apa saja", type: "Sanguine" }] },
    { question: "29. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "ANGERED EASILY - mudah marah meledak-ledak", type: "Sanguine" }, { text: "AIMLESS - tidak punya inisiatif/tujuan", type: "Phlegmatic" }, { text: "ARGUMENTATIVE - merangsang perdebatan", type: "Choleric" }, { text: "ALIENATED - merasa terkucilkan", type: "Melancholic" }] },
    { question: "30. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "NAIVE - perspektif polos seperti anak-anak", type: "Sanguine" }, { text: "NEGATIVE ATTITUDE - jarang bersikap positif", type: "Melancholic" }, { text: "NERVY - penuh keyakinan yang negatif", type: "Choleric" }, { text: "NONCHALANT - masa bodoh/cuek", type: "Phlegmatic" }] },
    { question: "31. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "WORRIER - selalu merasa risau/takut", type: "Melancholic" }, { text: "WITDRAWN - perlu waktu menyendiri", type: "Phlegmatic" }, { text: "WORKAHOLIC - agresif dan harus selalu produktif", type: "Choleric" }, { text: "WANTS CREDIT - berkembang jika dipuji", type: "Sanguine" }] },
    { question: "32. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "TOO SENSITIVE - mudah tersinggung", type: "Melancholic" }, { text: "TACTLESS - kurang peka perasaan orang", type: "Choleric" }, { text: "TIMID - takut akan konflik", type: "Phlegmatic" }, { text: "TALKACTIVE - pembicara menyenangkan/sulit dengar", type: "Sanguine" }] },
    { question: "33. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "DOUBTFUL - terpengaruh ketidakpastian", type: "Phlegmatic" }, { text: "DISORGANIZED - tidak mampu mengatur hidup", type: "Sanguine" }, { text: "DOMINEERING - memaksa menguasai orang lain", type: "Choleric" }, { text: "DEPRESSED - merasa negatif tanpa alasan", type: "Melancholic" }] },
    { question: "34. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "INCONSISTENT - emosi tidak logis", type: "Sanguine" }, { text: "INTROVERT - perhatian tertuju ke dalam diri", type: "Melancholic" }, { text: "INTOLERANT - tidak dapat menerima sudut pandang lain", type: "Choleric" }, { text: "INDIFFERENT - menganggap hal tidak penting", type: "Phlegmatic" }] },
    { question: "35. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "MESSY - hidup dalam keadaan berantakan", type: "Sanguine" }, { text: "MOODY - suasana hati mudah merosot", type: "Melancholic" }, { text: "MUMBLES - bicara tidak jelas", type: "Phlegmatic" }, { text: "MANIPULATIVE - licik demi keuntungan", type: "Choleric" }] },
    { question: "36. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SLOW - lamban bertindak", type: "Phlegmatic" }, { text: "STUBBORN - keras kepala", type: "Choleric" }, { text: "SHOW-OFFS - ingin tampil menonjol", type: "Sanguine" }, { text: "SKEPTICAL - mempertanyakan motivasi", type: "Melancholic" }] },
    { question: "37. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "LONER - butuh waktu sendiri", type: "Melancholic" }, { text: "LORD OVER - menyatakan dirinya benar", type: "Choleric" }, { text: "LAZY - menilai pekerjaan dari energi", type: "Phlegmatic" }, { text: "LOUD - suara melebihi orang lain", type: "Sanguine" }] },
    { question: "38. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "SLUGGISH - perlu dorongan agar bergerak", type: "Phlegmatic" }, { text: "SUSPICIOUS - mencurigai ide orang lain", type: "Melancholic" }, { text: "SHORT TEMPERED - mudah marah tak sabaran", type: "Choleric" }, { text: "SCATTERBRAINED - suka berubah-ubah", type: "Sanguine" }] },
    { question: "39. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "REVENGEFUL - menyimpan dendam", type: "Melancholic" }, { text: "RESTLESS - menyukai aktivitas baru", type: "Sanguine" }, { text: "RELUCTANT - tidak suka terlibat", type: "Phlegmatic" }, { text: "RASH - bertindak tergesa-gesa", type: "Choleric" }] },
    { question: "40. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:", options: [{ text: "COMPROMISING - menghindari konflik", type: "Phlegmatic" }, { text: "CRITICAL - sering menilai negatif", type: "Melancholic" }, { text: "CRAFTY - menghalalkan segala cara", type: "Choleric" }, { text: "CHANGEABLE - perlu variasi agar tidak bosan", type: "Sanguine" }] }
];

const personalityNames = { "Sanguine": "Populer Sanguine", "Choleric": "Kuat Choleric", "Melancholic": "Sempurna Melancholic", "Phlegmatic": "Damai Phlegmatic" };

const fullNarratives = {
    "Sanguine": "Anda individu yang optimis dan penuh semangat. Dalam dunia profesional, Anda adalah 'nyawa' tim yang hebat dalam membangun hubungan. \n\nLeadership: Pemimpin inspiratif yang memimpin dengan karisma. \nBusiness Insight: Sangat efektif sebagai garda depan promosi dan pencair suasana. Partner ideal: Melancholic & Choleric.",
    "Choleric": "Anda berorientasi pada hasil dan tegas. Dalam bisnis, Anda adalah eksekutor yang cepat mengambil keputusan. \n\nLeadership: Pemimpin visioner yang fokus pada efisiensi dan target. \nBusiness Insight: Eksekutor lapangan yang handal untuk mencapai tujuan sulit. Partner ideal: Phlegmatic & Melancholic.",
    "Melancholic": "Anda analitis dan memiliki standar kualitas tinggi. Sangat teliti dalam melihat detail. \n\nLeadership: Pemimpin terorganisir yang memastikan sistem berjalan sesuai SOP. \nBusiness Insight: Penjaga kualitas (Quality Control) terbaik dalam operasional bisnis. Partner ideal: Sanguine & Choleric.",
    "Phlegmatic": "Anda tenang, sabar, dan cinta damai. Pendengar luar biasa dan emosi stabil. \n\nLeadership: Pemimpin suportif yang menjaga keharmonisan tim. \nBusiness Insight: Stabilisator tim yang membuat suasana kerja tetap kondusif. Partner ideal: Choleric & Sanguine."
};

let currentQuestionIndex = 0;
let userName = "";
let scores = { "Sanguine": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0 };

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
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt.text;
        btn.classList.add('option-button');
        if(q.selectedType === opt.type) btn.classList.add('selected');
        btn.onclick = () => { q.selectedType = opt.type; showQuestion(); };
        optionsContainer.appendChild(btn);
    });

    document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / 40) * 100}%`;
    document.getElementById('prev-button').classList.toggle('hidden', currentQuestionIndex === 0);
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
    quizQuestions.forEach(q => scores[q.selectedType]++);
    let dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('result-title').textContent = `Hasil: ${personalityNames[dominant]}`;
    document.getElementById('result-description').textContent = `Halo ${userName}, kepribadian dominan Anda adalah ${personalityNames[dominant]}. Penjelasan lengkap ada di sertifikat.`;
}

document.getElementById('download-cert-button').onclick = async function() {
    const { jsPDF } = window.jspdf;
    let dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('cert-user-name').textContent = userName;
    document.getElementById('cert-type').textContent = personalityNames[dominant];
    document.getElementById('cert-narrative').innerText = fullNarratives[dominant];
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
    document.getElementById('cert-id').textContent = "ARAYA-" + Math.floor(Math.random() * 9000 + 1000);
    const canvas = await html2canvas(document.getElementById('cert-content'), { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
    pdf.save(`Sertifikat_${userName}_Araya.pdf`);
};

document.getElementById('restart-button').onclick = () => location.reload();
