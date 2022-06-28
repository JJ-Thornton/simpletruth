// grabs image
let img = document.getElementById("imageHover")

if(img) {
    console.log("im an image id")
    img.onmouseover = function hover() {
    img.style.display = "block";
    img.style.height = "100%";
    img.style.width = "100%";
    }
}

