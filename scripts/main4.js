document.getElementById('name').addEventListener('change', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('surname').addEventListener('change', function() {
    this.value = this.value.toUpperCase();
});

function showPopup(message) {
    let popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;
    document.body.appendChild(popup);
    popup.classList.add('active');
}

document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let age = document.getElementById('age').value;

    if(age < 18) {
        alert("Карта выдается только после 18 лет");
        return;
    }

    let cardNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000; 
    alert("Номер карты: " + cardNumber +
        "\nФамилия и имя: " + document.getElementById('surname').value +
        ' ' + document.getElementById('name').value);
});

function resetForm(){
    document.getElementById("customerForm").reset();
}
