function openDetail(title, desc) {
    document.getElementById("detailTitle").innerText = title;
    document.getElementById("detailDesc").innerText = desc;
    document.getElementById("detailModal").style.display = "flex";
}

function openOrder(product) {
    document.getElementById("orderTitle").innerText = "Pesan " + product;
    document.getElementById("finishMsg").innerText = "";
    document.getElementById("orderModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("detailModal").style.display = "none";
    document.getElementById("orderModal").style.display = "none";
}

function finishOrder() {
    document.getElementById("finishMsg").innerText = "Pemesanan selesai, mohon tunggu...";
}
