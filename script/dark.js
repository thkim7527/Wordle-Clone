let isLight;
const toggle = document.querySelector("#dark");

window.addEventListener("load", () => {
    loadTheme();
    saveTheme();
});

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (event) => {
    isLight = event.matches;
    saveTheme();
});

toggle.addEventListener("click", () => {
    isLight = !isLight;
    saveTheme();
});

function saveTheme() {
    localStorage.setItem("theme", isLight);

    if (isLight) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
}

function loadTheme() {
    const userTheme = localStorage.getItem("theme");
    const prefersTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (userTheme === null) {
        isLight = prefersTheme;
    } else {
        if (userTheme === "true") {
            isLight = true;
        } else if (userTheme === "false") {
            isLight = false;
        }
    }
}
