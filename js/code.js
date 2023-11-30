  /* https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/ */

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = '2023-12-24';
  initializeClock('clockdiv', deadline);

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