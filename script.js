document.getElementById("contactMeJs").addEventListener("click", function(){
    const TO = "lukakhizanishvili0@gmail.com";
    const SUBJECT = "მსურს პროექტის შექმნა";
    const BODY = "აღწერეთ პროექტი: ";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
    window.location.href = url;

})