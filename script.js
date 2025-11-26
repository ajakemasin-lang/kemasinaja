// SHOW DETAIL POPUP
function showDetail(title, text) {
    document.getElementById("detailTitle").innerText = title;
    document.getElementById("detailText").innerText = text;
    document.getElementById("detailPopup").style.display = "flex";
}

// SHOW ORDER POPUP
function showOrder(product) {
    document.getElementById("orderTitle").innerText = "Pesan " + product;
    document.getElementById("finishText").innerText = "";
    document.getElementById("orderPopup").style.display = "flex";
}

// CLOSE ANY POPUP
function closePopup() {
    document.getElementById("detailPopup").style.display = "none";
    document.getElementById("orderPopup").style.display = "none";
}

// FINISH ORDER
function showFinal() {
    document.getElementById("finishText").innerText = "Pemesanan selesai, mohon tunggu...";
}
