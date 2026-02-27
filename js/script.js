// Простая функция очистки
function cleanInput(text) {
    return text
        .replace(/</g, '&lt;')   // < → &lt;
        .replace(/>/g, '&gt;')   // > → &gt;
        .replace(/"/g, '&quot;') // " → &quot;
        .replace(/'/g, '&#039;');// ' → &#039;
}


const form = document.querySelector('.cta-form');

form.addEventListener('submit', function(e) {
    const nameInput = document.querySelector('input[name="full-name"]').value;
    const safeName = cleanInput(nameInput);
    console.log("Очищенное имя:", safeName);
});