function toggleMenu () {
    const menu = document.getElementById("menu")
    const isMenuHidden = menu.classList.contains("hidden")

    if (isMenuHidden)
        menu.classList.remove("hidden")
    else
        menu.classList.add("hidden")
}
