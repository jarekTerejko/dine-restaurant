const eventsContent = [
  {
    imgSrc: "./images/homepage/family-gathering-desktop@2x.jpg",
    heading: "Family gathering",
    description:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  },
  {
    imgSrc: "./images/homepage/special-events-desktop@2x.jpg",
    heading: "Special events",
    description:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
  },
  {
    imgSrc: "./images/homepage/social-events-desktop@2x.jpg",
    heading: "Social events",
    description:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
  },
];

const eventsBtns = document.querySelectorAll(".events__btn-trigger");
const eventsImg = document.querySelector(".events__img");
const eventsHeading = document.querySelector(".events__heading");
const eventsDescription = document.querySelector(".events__description");

eventsImg.src = eventsContent[0].imgSrc;
eventsHeading.textContent = eventsContent[0].heading;
eventsDescription.textContent = eventsContent[0].description;

eventsBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) return;

    eventsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");

    const imgSrc = eventsContent[i].imgSrc;
    const heading = eventsContent[i].heading;
    const description = eventsContent[i].description;

    eventsImg.src = imgSrc;
    eventsHeading.textContent = heading;
    eventsDescription.textContent = description;
  });
});
