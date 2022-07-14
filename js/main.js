const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
const url = "https://aws.random.cat/meow";
let result = JSON.parse(localStorage.getItem("list")) || [];
async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        img.src = data.file
    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener("click", () =>{
    let isLoaded = img.complete;
    if(isLoaded) {
        localStorage.setItem("list", JSON.stringify(img.src))
        fetchHandler()
    }
})
fetchHandler()