function changeMenuLinksStyle() {
  const menuLinkAll = document.querySelectorAll(".menu__link");

  for (const item of menuLinkAll) {
    item.addEventListener("click", changeMenuLinkStyle);
  }

  function changeMenuLinkStyle(event) {
    menuLinkAll.forEach((item) => {
      item.classList.remove("_active");
    });
    event.target.classList.add("_active");
  }
}

export default changeMenuLinksStyle;
