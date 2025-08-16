// there is to mail code
document.getElementById("contactMeJs").addEventListener("click", function(){
    const TO = "lukakhizanishvili0@gmail.com";
    const SUBJECT = "მსურს პროექტის შექმნა";
    const BODY = "აღწერეთ პროექტი: ";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
    window.location.href = url;

})



// for burger dropdown

// script.js
const dropdown = document.querySelector('.dropdown');
const burger   = document.querySelector('.hamburg');
const cancel   = document.querySelector('.cancel');

function hamburg() {
  const willOpen = !dropdown.classList.contains('open');
  dropdown.classList.toggle('open', willOpen);

  // გარედან ბურგერის აიკონის შეცვლა (bars <-> x)
  burger.classList.toggle('fa-bars', !willOpen);
  burger.classList.toggle('fa-xmark', willOpen);

  // Body scroll lock როცა მენიუ ღიაა (სურვილისამებრ)
  document.body.style.overflow = willOpen ? 'hidden' : '';
}

// რომ inline onclick იპოვოს ფუნქცია ყველგან
window.hamburg = hamburg;

// მენიუს ლინკზე დაჭერითაც დაიკეტოს
document.querySelectorAll('.dropdown .links a')
  .forEach(a => a.addEventListener('click', () => dropdown.classList.remove('open')));


  function hamburg() {
  const icon = document.querySelector(".hamburg");
  const menu = document.getElementById("menu");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
  menu.classList.toggle("show"); // აქ ვაჩვენებთ ან ვმალავთ
}

// there's move text



  const textElement = document.getElementById("intensText");
        const words = ["Web-Developer", "Troubleshooter", "Programmist"];
        let index = 0;

        setInterval(() => {
            index = (index + 1) % words.length; // ციკლური გადასვლა მასივზე
            textElement.innerHTML = `<span class="highlight">${words[index]}</span>`;
        }, 1500); // 2 წამი ყოველ გადასვლას