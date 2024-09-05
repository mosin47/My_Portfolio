document.getElementById("mongo").classList.add("hidden")
document.getElementById("exp").classList.add("hidden")
document.getElementById("react").classList.add("hidden")
document.getElementById("node").classList.add("hidden")





document.getElementById("mongosvg").addEventListener("mouseover", () => {
    document.getElementById("mongo").classList.remove("hidden")
})

document.getElementById("mongosvg").addEventListener("mouseleave", () => {
    document.getElementById("mongo").classList.add("hidden")
})

document.getElementById("expsvg").addEventListener("mouseover", () => {
    document.getElementById("exp").classList.remove("hidden")
})

document.getElementById("expsvg").addEventListener("mouseleave", () => {
    document.getElementById("exp").classList.add("hidden")
})

document.getElementById("reactsvg").addEventListener("mouseover", () => {
    document.getElementById("react").classList.remove("hidden")
})

document.getElementById("reactsvg").addEventListener("mouseleave", () => {
    document.getElementById("react").classList.add("hidden")
})
document.getElementById("nodesvg").addEventListener("mouseover", () => {
    document.getElementById("node").classList.remove("hidden")
})

document.getElementById("nodesvg").addEventListener("mouseleave", () => {
    document.getElementById("node").classList.add("hidden")
})

