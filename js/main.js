const previewButton = document.getElementById("preview-button");
const resumePreview = document.getElementById("resume-preview");
let isPreviewing = false;

previewButton.addEventListener("click", () => {
    if (!isPreviewing) {
        resumePreview.style.display = "block";
        previewButton.textContent = "Fechar Pré-visualização";
    } else {
        resumePreview.style.display = "none";
        previewButton.textContent = "Pré-visualizar Currículo";
    }
    isPreviewing = !isPreviewing;
});