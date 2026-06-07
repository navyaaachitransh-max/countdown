const targetDate =
new Date("2026-06-10T16:30:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days =
  Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
  Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60)
  );

  const minutes =
  Math.floor(
    (distance % (1000 * 60 * 60))
    /
    (1000 * 60)
  );

  const seconds =
  Math.floor(
    (distance % (1000 * 60))
    /
    1000
  );

  document.getElementById("days").innerText =
  String(days).padStart(2, "0");

  document.getElementById("hours").innerText =
  String(hours).padStart(2, "0");

  document.getElementById("minutes").innerText =
  String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerText =
  String(seconds).padStart(2, "0");
}

function updateClock() {

  const now = new Date();

  document.getElementById("clock").innerText =
  now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

updateCountdown();
updateClock();

setInterval(updateCountdown, 1000);
setInterval(updateClock, 1000);
