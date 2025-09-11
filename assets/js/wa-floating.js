// Tambah tombol WhatsApp melayang
const waBtn = document.createElement("a");
waBtn.href = "https://wa.me/6285864966633?text=Halo%20Salman,%20saya%20tertarik%20dengan%20truk%20Isuzu.";
waBtn.target = "_blank";
waBtn.className = "wa-float";
waBtn.innerHTML = "💬";
document.body.appendChild(waBtn);
