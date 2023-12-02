var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();
var x;

function startCountdown() {
  function updateTimer() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "0";
      document.getElementById("minutes").innerHTML = "0";
      document.getElementById("seconds").innerHTML = "0";
    }
  }

  // Call updateTimer immediately to display initial values
  updateTimer();

  // Set up interval to update the timer values every second
  x = setInterval(updateTimer, 1000);
}

function activateXmasNow() {
  clearInterval(x); // Stop the existing countdown
  countDownDate = new Date().getTime(); // Set the countdown to now
  startCountdown(); // Start the new countdown
}

function toggleCountdown() {
  var switchButton = document.getElementById("toggleSwitch");
  if (switchButton.checked) {
    let activate = document.getElementById("activate");
    if(activate.innerHTML === "Activate Christmas Now!") {
      activate.innerHTML = "Proficiat je hebt kerst gehackt!"
    }
    // If the switch is checked, start the countdown
    activateXmasNow();
    
  } else {
    activate.innerHTML = "Activate Christmas Now!";
    // If the switch is unchecked, stop the countdown and reset to the original Xmas countdown
    clearInterval(x);
    countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();
    startCountdown();
  }
}
// Start the initial countdown when the page loads
startCountdown();


//SPREUKEN
// Een array met kerstspreuken
const kerstspreuken = [
  "Vrolijk kerstfeest en een gelukkig nieuwjaar!",
  "Geniet van de feestdagen met je geliefden.",
  "Laat vrede en vreugde in je hart zijn deze kerst.",
  "Een warme kerstgroet en de beste wensen voor het nieuwe jaar.",
  "Moge je dagen gevuld zijn met liefde en licht deze kersttijd.",
  "Kerstmis is niet zozeer over het ontvangen van geschenken, maar over het geven van liefde.",
  "Laat de geest van Kerstmis in je hart wonen, het hele jaar door.",
  "Kerstmis geeft ons de kans om te pauzeren en de magie van het moment te omarmen.",
  "Licht een kaars aan voor vrede en laat de vreugde van Kerstmis de wereld verlichten.",
  "In de glimlach van een kind vind je de ware betekenis van Kerstmis.",
  "Kerstmis is de tijd van het jaar waarin liefde het meest tastbaar is.",
  "Moge je hart verwarmd worden door de liefde van vrienden en familie tijdens deze feestelijke tijd.",
  "Een warme kop chocolademelk is de perfecte metgezel op een koude kerstavond.",
  "Laat ons dankbaar zijn voor het gezelschap dat Kerstmis zo speciaal maakt.",
  "De mooiste geschenken zijn geen materiële dingen, maar momenten van liefde en vreugde.",
  "Kerstmis is als een magisch sprookje dat elk jaar opnieuw verteld wordt.",
  "In de ogen van hen die van ons houden, vinden we de ware betekenis van Kerstgeluk.",
  "Geef liefde op Kerstmis en je zult het dubbel terugkrijgen.",
  "Laat vrede je leiden tijdens deze kerstperiode en altijd.",
  "Kerstmis herinnert ons eraan dat het de kleine dingen zijn die het leven groot maken.",
  "Een kerstboom schittert niet alleen vanwege de lichten, maar ook vanwege de liefde die eromheen wordt gedeeld.",
  "Moge je dagen gevuld zijn met gelach, liefde en betovering deze kersttijd.",
  "Kerstmis is de tijd om te geloven in wonderen en dromen die uitkomen.",
  "Geniet van de magie van Kerstmis, want het is de tijd waarin harten het meest open staan.",
  "Laten we de ster van vrede volgen en de wereld vullen met hoop en liefde deze kerst.",
  // Voeg hier meer kerstspreuken toe
];

// Functie om een willekeurige spreuk te krijgen
function getRandomSpreuk() {
  const randomIndex = Math.floor(Math.random() * kerstspreuken.length);
  return kerstspreuken[randomIndex];
}

// Functie om de spreuk op de pagina weer te geven
function toonKerstspreuk() {
  const kerstspreukElement = document.getElementById('kerstspreuk');
  const willekeurigeSpreuk = getRandomSpreuk();
  kerstspreukElement.textContent = willekeurigeSpreuk;
}

// Voer de functie uit bij het laden van de pagina
document.addEventListener('DOMContentLoaded', toonKerstspreuk);