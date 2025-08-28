const skills = [
  {src: "bootstrap.png", alt: "bootstrap", title: "Bootstrap"},
  {src: "javas.png", alt: "java", title: "JAVA"},
  {src: "JavaFX.png", alt: "JavaFX", title: "JavaFX"},
  {src: "sql.png", alt: "SQL", title: "SQL"},
  {src: "js.png", alt: "JavaScript", title: "JavaScript"},
  {src: "html.png", alt: "html", title: "HTML"},
  {src: "css.png", alt: "css", title: "CSS"},
  {src: "sapr.png", alt: "SAP", title: "SAP"},
  {src: "JUnit.png", alt: "JUnit", title: "JUnit"},
  {src: "mySQL.png", alt: "MySQL", title: "MySQL"},
  {src: "trello.png", alt: "Trello", title: "Trello"},
  {src: "json.png", alt: "JSON", title: "JSON"},
  {src: "typescript.png", alt: "TypeScript", title: "TypeScript"},
  {src: "youtube.png", alt: "YouTube", title: "YouTube"},
  {src: "codecademy.png", alt: "Codecademy", title: "Codecademy"},
  {src: "jQuery.png", alt: "JQuery", title: "JQuery"},
  {src: "github.png", alt: "github", title: "GitHub"},
  {src: "formspree.png", alt: "formspree", title: "Formspree"},
  {src: "api.png", alt: "api", title: "API"},
  {src: "node.png", alt: "node", title: "NodeJS"},
  {src: "mongoDB.png", alt: "mongo", title: "MongoDB"},
];

const container = document.getElementById("skills-row");

skills.forEach((skill) => {
  const col = document.createElement("div");
  col.className = "col d-flex flex-column gap-2 text-center";
  col.innerHTML = `
    <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
      <img class="sm-img" src="assets/images/skills/${skill.src}" alt="${skill.alt}" title="${skill.title}">
    </div>
  `;
  container.appendChild(col);
});
