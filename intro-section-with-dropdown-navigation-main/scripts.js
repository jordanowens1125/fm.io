const handleNavExtension = (e) => {
  var dropdown = e.querySelector(".dropdown");
  const closed = dropdown.classList.contains("closed");
  rotateDrodownIcon(e);
  if (closed) {
    expandedElement(dropdown);
  } else {
    closeElement(dropdown);
  }
};

const expandedElement = (e) => {
  e.classList.remove("closed");
  e.classList.add("expanded");
};

const closeElement = (e) => {
  e.classList.remove("expanded");
  e.classList.add("closed");
};

const rotateDrodownIcon = (e) => {
  const dropdownIcon = e.querySelector("img");
  const open = dropdownIcon.classList.contains("extended-icon");
  if (open) {
    dropdownIcon.classList.remove("extended-icon");
    dropdownIcon.classList.add("closed-icon");
  } else {
    dropdownIcon.classList.remove("closed-icon");
    dropdownIcon.classList.add("extended-icon");
  }
};
