const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-container img").forEach(img => {
    if (img.closest("a")) return;

    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
