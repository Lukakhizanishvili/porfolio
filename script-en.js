// ელ.ფოსტის კოდი
document.getElementById("contactMeJs").addEventListener("click", function () {
    const TO = "lukakhizanishvili0@gmail.com";
    const SUBJECT = "მსურს პროექტის შექმნა";
    const BODY = "აღწერეთ პროექტი: ";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
    window.location.href = url;
});

// WhatsApp-ის ღილაკის ფუნქცია
document.getElementById("whatsappButton").addEventListener("click", function () {
    const phoneNumber = "+995555455007"; // შეცვალეთ თქვენი ნომრით
    const message = encodeURIComponent("გამარჯობა, მსურს პროექტის შესახებ გასაუბრება");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
});

// დინამიური teksti-ს ცვლილება
const textElement = document.getElementById("intensText");
const words = ["Web-Developer", "Troubleshooter", "Programist"];
let index = 0;

setInterval(() => {
    index = (index + 1) % words.length;
    textElement.innerHTML = `<span class="highlight">${words[index]}</span>`;
}, 1500);

// ბურგერ მენუ
// function hamburg() {
//     const dropdown = document.querySelector('.dropdown');
//     const hamburg = document.querySelector('.hamburg');
//     const cancel = document.querySelector('.cancel');

//     if (dropdown.classList.contains('open')) {
//         dropdown.classList.remove('open');
//         hamburg.style.display = 'block';
//         cancel.style.display = 'none';
//     } else {
//         dropdown.classList.add('open');
//         hamburg.style.display = 'none';
//         cancel.style.display = 'block';
//     }
// }

// ბურგერ მენუ
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');

    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        hamburg.style.opacity = '1'; // ბურგერი ხელახლა ჩანს
        hamburg.style.pointerEvents = 'auto';
        cancel.style.opacity = '0'; // იქსი გაქრეს
        cancel.style.pointerEvents = 'none';
    } else {
        dropdown.classList.add('open');
        hamburg.style.opacity = '0'; // ბურგერი გაქრეს
        hamburg.style.pointerEvents = 'none';
        cancel.style.opacity = '1'; // იქსი ჩანს
        cancel.style.pointerEvents = 'auto';
    }
}

// ეკრანის ზომის შემოწმება
function checkScreenSize() {
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    if (window.innerWidth > 968) {
        hamburg.style.opacity = '0';
        hamburg.style.pointerEvents = 'none';
        cancel.style.opacity = '0';
        cancel.style.pointerEvents = 'none';
    } else {
        hamburg.style.opacity = '1';
        hamburg.style.pointerEvents = 'auto';
        cancel.style.opacity = '0';
        cancel.style.pointerEvents = 'none';
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);