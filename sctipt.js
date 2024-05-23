"use-strict";



const planets = {
  moon: {
    planetName: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    image: "IMG/destination/image-moon.webp",
  },
  mars: {
    planetName: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
    image: "IMG/destination/image-mars.webp",
  },
  europa: {
    planetName: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
    image: "IMG/destination/image-europa.webp",
  },
  titan: {
    planetName: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
    image: "IMG/destination/image-titan.webp",
  },
};

const crewMembers = {
  commander: {
    memberName: "Douglas Hurley",
    position: "Commander",
    about:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    memberImage: "IMG/crew/image-douglas-hurley.webp",
  },
  specialist: {
    memberName: "Mark Shuttleworth",
    position: "Mission Specialist",
    about:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    memberImage: "IMG/crew/image-mark-shuttleworth.webp",
  },
  pilot: {
    memberName: "Victor Glover",
    position: "Pilot",
    about:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    memberImage: "IMG/crew/image-victor-glover.webp",
  },
  engineer: {
    memberName: "Anousheh Ansari",
    position: "Flight Engineer",
    about:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    memberImage: "IMG/crew/image-anousheh-ansari.webp",
  },
};

const tech = {
  launch: {
    heading: "launch vehicle",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    photo: "IMG/technology/image-launch-vehicle-portrait.jpg",
    photoLandscape: "IMG/technology/image-launch-vehicle-landscape.jpg",
  },

  spaceport: {
    heading: "spaceport",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    photo: "IMG/technology/image-spaceport-portrait.jpg",
    photoLandscape: "IMG/technology/image-spaceport-landscape.jpg",
  },

  capsule: {
    heading: "space capsule",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    photo: "IMG/technology/image-space-capsule-portrait.jpg",
    photoLandscape: "IMG/technology/image-space-capsule-landscape.jpg",
  },
};

const screenWidth = window.innerWidth;
const exploreBTN = document.querySelector(".home-explore");

const planetName = document.querySelector(".planet-name");
const planetDescription = document.querySelector(".planet-description");
const planetDistance = document.querySelector(".distance-num");
const planetTime = document.querySelector(".travel-num");
const planetImage = document.querySelector(".planet-image");

const crewMemberName = document.querySelector(".member-name");
const crewMemberPosition = document.querySelector(".member-position");
const aboutMember = document.querySelector(".about-member");
const memberImage = document.querySelector(".member-image");

const techHeading = document.querySelector(".info-heading");
const techInfo = document.querySelector(".technology-info");
const techImage = document.querySelector(".tech-image");
const nums = document.querySelectorAll(".slide-number");

const pages = document.querySelectorAll(".nav-list");
const homePage = document.querySelector(".home");
const destinationPage = document.querySelector(".destination");
const crewPage = document.querySelector(".crew");
const techPage = document.querySelector(".technology");

const planetList = document.querySelectorAll(".planet-name-list");
const slideDots = document.querySelectorAll(".dot");

// HOME PAGE

function hidePage(page) {
  page.classList.add("hide");
}

function showPage(page) {
  page.classList.remove("hide");
}

function transitionPage(pageToShow) {
  const pagesArray = [homePage, destinationPage, crewPage, techPage];
  pagesArray.forEach((page) => {
    if (page === pageToShow) {
      showPage(page);
    } else {
      hidePage(page);
    }
  });
}

pages.forEach((page) =>
  page.addEventListener("click", function () {
    pages.forEach((p) => p.classList.remove("active-link"));
    page.classList.add("active-link");
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    nav.classList.remove("nav-open");
    blur.classList.remove("blur-in");
    menuOpen = false;

    if (page.textContent.includes("HOME")) {
      if (screenWidth <= 768) {
        document.body.style.backgroundImage =
          "url(IMG/home/background-home-tablet.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(IMG/home/background-home-desktop.jpg)";
      }
      transitionPage(homePage);
    } else if (page.textContent.includes("DESTINATION")) {
      if (screenWidth <= 768) {
        document.body.style.backgroundImage =
          "url(IMG/destination/background-destination-tablet.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(IMG/destination/background-destination-desktop.jpg)";
      }
      transitionPage(destinationPage);
    } else if (page.textContent.includes("CREW")) {
        if (screenWidth <= 768) {
            document.body.style.backgroundImage =
              "url(IMG/crew/background-crew-tablet.jpg)";
          } else {
            document.body.style.backgroundImage =
              "url(IMG/crew/background-crew-desktop.jpg)";
          }
      transitionPage(crewPage);
    } else if (page.textContent.includes("TECHNOLOGY")) {
        if (screenWidth <= 768) {
            document.body.style.backgroundImage =
              "url(IMG/technology/background-technology-tablet.jpg)";
          } else {
            document.body.style.backgroundImage =
              "url(IMG/technology/background-technology-desktop.jpg)";
          }
      transitionPage(techPage);
    }
  })
);

exploreBTN.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(IMG/destination/background-destination-desktop.jpg)";
  transitionPage(destinationPage);

  pages.forEach((p) => p.classList.remove("active-link"));
  pages.forEach((page) => {
    if (page.textContent.includes("DESTINATION")) {
      page.classList.add("active-link");
    }
  });
});

//   DESTINATION PAGE

let currentPlanet = planets["moon"];

function updateInfo(planet) {
  planetName.textContent = planet.planetName;
  planetDescription.textContent = planet.description;
  planetDistance.textContent = planet.distance;
  planetTime.textContent = planet.time;
  planetImage.src = planet.image;
}

planetName.textContent = currentPlanet.planetName;
planetDescription.textContent = currentPlanet.description;
planetDistance.textContent = currentPlanet.distance;
planetTime.textContent = currentPlanet.time;
planetImage.src = currentPlanet.image;

planetList.forEach((planet) =>
  planet.addEventListener("click", function () {
    planetList.forEach((p) => p.classList.remove("active-link"));
    planet.classList.add("active-link");
    if (planet.classList.contains("active-link")) {
      const currentPlanetName = planet.textContent.toLowerCase();
      currentPlanet = planets[currentPlanetName];

      planetName.classList.add("hidden");
      planetDescription.classList.add("hidden");
      planetDistance.classList.add("hidden");
      planetTime.classList.add("hidden");
      planetImage.classList.add("hidden");

      setTimeout(() => {
        updateInfo(currentPlanet);

        planetName.classList.remove("hidden");
        planetDescription.classList.remove("hidden");
        planetDistance.classList.remove("hidden");
        planetTime.classList.remove("hidden");
        planetImage.classList.remove("hidden");
      }, 500);
    }
  })
);

// CREW PAGE

let currentMember = crewMembers["commander"];
let currentDotIndex = 0;

function updateMemberInfo(member) {
  crewMemberName.textContent = member.memberName;
  crewMemberPosition.textContent = member.position;
  aboutMember.textContent = member.about;
  memberImage.src = member.memberImage;
}

crewMemberName.textContent = currentMember.memberName;
crewMemberPosition.textContent = currentMember.position;
aboutMember.textContent = currentMember.about;
memberImage.src = currentMember.memberImage;

function showMemberInfo(index) {
  slideDots.forEach((d) => d.classList.remove("active-dot"));
  slideDots[index].classList.add("active-dot");

  crewMemberName.classList.add("hidden");
  crewMemberPosition.classList.add("hidden");
  aboutMember.classList.add("hidden");
  memberImage.classList.add("hidden");

  setTimeout(() => {
    const dot = slideDots[index];

    if (dot.classList.contains("commander")) {
      updateMemberInfo(crewMembers["commander"]);
    } else if (dot.classList.contains("specialist")) {
      updateMemberInfo(crewMembers["specialist"]);
    } else if (dot.classList.contains("pilot")) {
      updateMemberInfo(crewMembers["pilot"]);
    } else if (dot.classList.contains("engineer")) {
      updateMemberInfo(crewMembers["engineer"]);
    }

    crewMemberName.classList.remove("hidden");
    crewMemberPosition.classList.remove("hidden");
    aboutMember.classList.remove("hidden");
    memberImage.classList.remove("hidden");
  }, 500);
}

slideDots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    currentDotIndex = index;
    showMemberInfo(currentDotIndex);
    autoSlideInterval = setInterval(() => {
      currentDotIndex = (currentDotIndex + 1) % slideDots.length;
      showMemberInfo(currentDotIndex);
    }, 5000);
  });
});

let autoSlideInterval = setInterval(() => {
  currentDotIndex = (currentDotIndex + 1) % slideDots.length;
  showMemberInfo(currentDotIndex);
}, 5000);

// TECH PAGE

let currentTech = tech["launch"];

techHeading.textContent = currentTech.heading;
techInfo.textContent = currentTech.info;

if (screenWidth <= 768) {
  techImage.src = currentTech.photoLandscape;
} else {
  techImage.src = currentTech.photo;
}

function updateTech(techName) {
  techHeading.textContent = techName.heading;
  techInfo.textContent = techName.info;
  if (screenWidth <= 768) {
    techImage.src = techName.photoLandscape;
  } else {
    techImage.src = techName.photo;
  }
}

let currentNumIndex = 0;

nums.forEach((num) =>
  num.addEventListener("click", function () {
    nums.forEach((n) => n.classList.remove("active-num"));
    num.classList.add("active-num");

    techHeading.classList.add("hidden");
    techInfo.classList.add("hidden");
    techImage.classList.add("hidden");

    setTimeout(() => {
      if (num.classList.contains("launch")) {
        updateTech(tech["launch"]);
      } else if (num.classList.contains("spaceport")) {
        updateTech(tech["spaceport"]);
      } else if (num.classList.contains("capsule")) {
        updateTech(tech["capsule"]);
      }

      techHeading.classList.remove("hidden");
      techImage.classList.remove("hidden");
      techInfo.classList.remove("hidden");
    }, 500);
  })
);


const nav = document.querySelector(".header-content");
const blur = document.querySelector(".blur");
const menuBtn = document.querySelector(".menu");
let menuOpen = undefined;

menuBtn.addEventListener("click", function () {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuBtn.classList.remove("close");
      nav.classList.add("nav-open");
      blur.classList.add("blur-in");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuBtn.classList.add("close");
      nav.classList.remove("nav-open");
      blur.classList.remove("blur-in");
      menuOpen = false;
    }
  });
  