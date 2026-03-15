const jaBtn = document.getElementById("jaBtn");
const enBtn = document.getElementById("enBtn");
const jaContent = document.querySelector(".lang-ja");
const enContent = document.querySelector(".lang-en");

function setLanguage(lang) {
    if (lang === "ja") {
        jaContent.classList.remove("hidden");
        enContent.classList.add("hidden");
        jaBtn.classList.add("active");
        enBtn.classList.remove("active");
        document.documentElement.lang = "ja";
        localStorage.setItem("preferredLanguage", "ja");
    } else {
        enContent.classList.remove("hidden");
        jaContent.classList.add("hidden");
        enBtn.classList.add("active");
        jaBtn.classList.remove("active");
        document.documentElement.lang = "en";
        localStorage.setItem("preferredLanguage", "en");
    }
}

jaBtn.addEventListener("click", () => setLanguage("ja"));
enBtn.addEventListener("click", () => setLanguage("en"));

const savedLanguage = localStorage.getItem("preferredLanguage");
if (savedLanguage === "en") {
    setLanguage("en");
} else {
    setLanguage("ja");
}
