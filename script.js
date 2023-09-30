// Data pendaftar
const pendaftar = [];

// Fungsi untuk membuka tab
function openTab(tabName) {
    const tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Fungsi untuk submit form
function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("registrationForm");
    const nama = form.nama.value;
    const umur = parseInt(form.umur.value);
    const uangSangu = parseInt(form.uangSangu.value);

    // Validasi data
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Data tidak memenuhi kriteria!");
        return;
    }

    // Tambahkan pendaftar ke array
    pendaftar.push({ nama, umur, uangSangu });

    // Reset form
    form.reset();

    // Perbarui tabel List Pendaftar
    updatePendaftarTable();

    // Perbarui resume
    updateResume();
}

// Fungsi untuk memperbarui tabel List Pendaftar
function updatePendaftarTable() {
    const table = document.getElementById("pendaftarList");
    table.innerHTML = "";
    for (const data of pendaftar) {
        const row = table.insertRow();
        row.insertCell(0).innerText = data.nama;
        row.insertCell(1).innerText = data.umur;
        row.insertCell(2).innerText = data.uangSangu;
    }
}

// Fungsi untuk memperbarui resume
function updateResume() {
    const resume = document.getElementById("resume");
    if (pendaftar.length === 0) {
        resume.innerText = "";
        return;
    }

    const totalUmur = pendaftar.reduce((total, data) => total + data.umur, 0);
    const rataRataUmur = totalUmur / pendaftar.length;

    const totalUangSangu = pendaftar.reduce((total, data) => total + data.uangSangu, 0);
    const rataRataUangSangu = totalUangSangu / pendaftar.length;

    resume.innerText = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu} dengan rata-rata umur ${rataRataUmur}`;
}

// Default: buka tab Registrasi
openTab('ListPendaftar');
