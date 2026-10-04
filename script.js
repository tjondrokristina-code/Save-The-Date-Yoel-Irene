// =========================
// ELEMENT
// =========================

const video = document.getElementById("invitationVideo");
const soundButton = document.getElementById("soundButton");
const openButton = document.getElementById("openButton");
const invitationContent = document.getElementById("invitationContent");


// =========================
// SOUND BUTTON
// =========================

soundButton.addEventListener("click", () => {

  video.muted = !video.muted;

  if (video.muted) {
    soundButton.textContent = "🔇";
  } else {
    soundButton.textContent = "🔊";
  }

});


// =========================
// OPEN INVITATION
// =========================

openButton.addEventListener("click", () => {

  invitationContent.classList.add("active");

  // Scroll perlahan ke bagian undangan
  setTimeout(() => {
    invitationContent.scrollIntoView({
      behavior: "smooth"
    });
  }, 100);

});


// =========================
// COUNTDOWN
// =========================

// Tanggal acara:
// 31 Oktober 2026
// Jam 10:00 WIB

const eventDate = new Date("October 31, 2026 10:00:00 GMT+0700").getTime();

const countdownTimer = setInterval(() => {

  const now = new Date().getTime();

  const distance = eventDate - now;


  // Jika acara sudah dimulai
  if (distance <= 0) {

    clearInterval(countdownTimer);

    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";

    return;
  }


  // Hitung waktu
  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );


  // Tampilkan
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

}, 1000);


// =========================
// RSVP
// =========================

const rsvpForm = document.querySelector(".rsvp-form");

if (rsvpForm) {

  rsvpForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;
    const guests = document.getElementById("guests").value;


    alert(
      `Terima kasih, ${name}!\n\n` +
      `Konfirmasi kehadiran: ${attendance}\n` +
      `Jumlah tamu: ${guests}`
    );

    rsvpForm.reset();

  });

}


// =========================
// VIDEO AUTOPLAY
// =========================

video.play().catch(() => {

  console.log(
    "Autoplay membutuhkan interaksi pengguna."
  );

});
