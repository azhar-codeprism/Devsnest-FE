let container = document.getElementById("container");
let remaining = document.getElementById("remaining");
let booked = document.getElementById("booked");

for (let i = 0; i < 36; i++) {
  container.innerHTML += '<div class="box"></div>';
}

let seats = document.querySelectorAll(".box");

let seatsLeft = parseInt(remaining.innerText);
let bookedSeats = parseInt(booked.innerText);

let updateContent = function () {
  remaining.innerText = seatsLeft;
  booked.innerText = bookedSeats;
};
let upCounter = function () {
  seatsLeft += 1;
  bookedSeats -= 1;
  updateContent();
};
let downCounter = function () {
  bookedSeats += 1;
  seatsLeft -= 1;
  updateContent();
};
seats.forEach((seat) =>
  seat.addEventListener("click", () => {
    if (seat.classList.contains("clicked")) {
      seat.classList.remove("clicked");
      upCounter();
    } else {
      seat.classList.add("clicked");
      downCounter();
    }
  })
);
