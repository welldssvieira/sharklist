export function initHeaderScroll() {
    const header = document.getElementById("header_main");

    if (!header) return;

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}