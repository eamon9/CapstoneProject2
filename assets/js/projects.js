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
      url: "myWork Projects/Project Mondrian/index.html",
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
          `<li class="me-auto"><img src="assets/images/skills/${skill}.png" alt="${skill}" width="32" height="32"></li>`
      )
      .join("");

    col.innerHTML = `
  <a href="${proj.url}" target="_blank">
    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
         style="background-image: url('assets/images/myWork/${proj.bg}'); background-size: cover;">
      <div class="card-content d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${proj.title}</h3>
        <ul class="d-flex list-unstyled mt-auto">
          ${skillIcons}
        </ul>
      </div>
    </div>
  </a>
`;

    rowContainer.appendChild(col);
  });
})();
