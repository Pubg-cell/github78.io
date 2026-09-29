let selectedProduct = "";

function buyUC(product) {

    selectedProduct = product;

    document.getElementById("selectedProduct").textContent =
        "محصول انتخاب‌شده: " + product;

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
}

function submitOrder() {

    const playerID = document.getElementById("playerID").value;
    const playerName = document.getElementById("playerName").value;

    if (!selectedProduct) {
        alert("ابتدا یک بسته UC انتخاب کنید.");
        return;
    }

    if (!playerID || !playerName) {
        alert("لطفاً Player ID و نام داخل بازی را وارد کنید.");
        return;
    }

    alert(
        "سفارش شما ثبت اولیه شد!\n\n" +
        "محصول: " + selectedProduct +
        "\nPlayer ID: " + playerID
    );
}
