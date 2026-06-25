const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

if (arrows.length && movieLists.length) {
    arrows.forEach((arrow, i) => {
        const list = movieLists[i];
        const itemNumber = list ? list.querySelectorAll("img").length : 0;
        let clickCounter = 0;
        arrow.addEventListener("click", () => {
            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                list.style.transform = `translateX(${list.offsetWidth - (300 * (clickCounter + ratio))}px)`;
            } else {
                list.style.transform = "translateX(0)";
                clickCounter = 0;
            }
        });
    });
}

// toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle");
if (ball) {
    ball.addEventListener("click", () => {
        items.forEach(item => item.classList.toggle("active"));
        ball.classList.toggle("active");
    });
}