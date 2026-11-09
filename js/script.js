const imagen = document.getElementById("imagen");
const btnImg = document.getElementById("btnImg");
btnImg.addEventListener("click", function () {
    if (imagen.style.display === "none") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
});
