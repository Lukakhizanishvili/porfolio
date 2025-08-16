// ელ.ფოსტის კოდი
document.getElementById("contactMeJs").addEventListener("click", function () {
    const TO = "lukakhizanishvili0@gmail.com";
    const SUBJECT = "მსურს პროექტის შექმნა";
    const BODY = "აღწერეთ პროექტი: ";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
    window.location.href = url;
});

// დინამიური teksti-ს ცვლილება
const textElement = document.getElementById("intensText");
const words = ["ვებ-დეველოპერი", "თრაბელშუთერი", "პროგრამისტი"];
let index = 0;

setInterval(() => {
    index = (index + 1) % words.length;
    textElement.innerHTML = `<span class="highlight">${words[index]}</span>`; // დამატებული "I'm a"
}, 1500);

// ბურგერ მენუ
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');

    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        hamburg.classList.remove('hidden');
        cancel.classList.add('hidden');
    } else {
        dropdown.classList.add('open');
        hamburg.classList.add('hidden');
        cancel.classList.remove('hidden');
    }
}

// დამატებითი კლასები CSS-თვის
const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        display: none !important;
    }
    .visible {
        display: block !important;
    }
`;
document.head.appendChild(style);

// ეკრანის სიგანის მიხედვით გამოცდა
function checkScreenSize() {
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    if (window.innerWidth <= 968) {
        hamburg.classList.remove('hidden');
        cancel.classList.add('hidden');
    } else {
        hamburg.classList.add('hidden');
        cancel.classList.add('hidden');
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);