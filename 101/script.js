function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle("hidden");
  const header = section.previousElementSibling;
  header.textContent = section.classList.contains("hidden")
    ? header.textContent.replace("-", "+")
    : header.textContent.replace("+", "-");
}
