(function () {
  const projects = [
    {
      title: "Amazing Numbers",
      url: "https://eamon9.github.io/AmazingNumbers/index.html",
      bg: "amazingNumbersProject.png",
      skills: ["html", "css", "js"],
    },
    {
      title: "Mondrian",
      url: "./myWork Projects/Project Mondrian/index.html",
      bg: "project-mondrian.png",
      skills: ["html", "css"],
    },
    {
      title: "Dice Roll Game",
      url: "./myWork Projects/Diece Roller From Scrach/index.html",
      bg: "diceRoll.png",
      skills: ["html", "css", "js"],
    },
    {
      title: "Vecmāmiņas.lv Homepage",
      url: "https://vecmaminas.lv",
      bg: "project-grannies-homepage.png",
      skills: ["js", "bootstrap", "jQuery", "json", "github", "formspree"],
    },
    {
      title: "Schedule tracker",
      url: "https://scheduletracker-v1xz.onrender.com/index.html",
      bg: "project-schedule-tracker.png",
      skills: ["html", "css", "js", "bootstrap", "api", "node"],
    },
    {
      title: "Family Board Games Website",
      url: "https://boardgamesweb.onrender.com",
      bg: "boardGamesWebsite.png",
      skills: [
        "html",
        "css",
        "js",
        "bootstrap",
        "node",
        "api",
        "github",
        "json",
      ],
    },
    {
      title: "...",
      url: "#",
      bg: "to-be-continued.jpeg",
      skills: ["html", "css", "js"],
    },
    {
      title: "...",
      url: "#",
      bg: "to-be-continued.jpeg",
      skills: ["html", "css", "js"],
    },
    {
      title: "...",
      url: "#",
      bg: "to-be-continued.jpeg",
      skills: ["html", "css", "js"],
    },
  ];

  const rowContainer = document.getElementById("projects-row");
  if (!rowContainer) return;

  projects.forEach((proj) => {
    const col = document.createElement("div");
    col.className = "col";

    const skillIcons = proj.skills
      .map(
        (skill) =>
          `<img src="assets/images/skills/${skill}.png" alt="${skill}" width="32" height="32">`
      )
      .join("");

    // Ģenerē “icon-track” saturu, lai būtu vismaz 2 pilni cikli
    const repeatCount =
      Math.ceil(window.innerWidth / (proj.skills.length * 40)) * 2; // Dinamisks atkārtojums
    let repeatedIcons = "";
    for (let i = 0; i < repeatCount; i++) {
      repeatedIcons += skillIcons;
    }

    col.innerHTML = `
    <a href="${proj.url}" target="_blank">
      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
           style="background-image: url('assets/images/myWork/${proj.bg}'); background-size: cover;">
        <div class="card-content d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${proj.title}</h3>
        </div>
        <div class="white-background">
          <div class="icon-track">
            ${repeatedIcons}
          </div>
        </div>
      </div>
    </a>
  `;

    // Aprēķini animācijas ilgumu un pielieto to .icon-track
    const animationDuration = proj.skills.length * repeatCount * 1.0; // 0.5s uz ikonu, pielāgo pēc vajadzības
    col.querySelector(
      ".icon-track"
    ).style.animationDuration = `${animationDuration}s`;

    rowContainer.appendChild(col);
  });
})();
