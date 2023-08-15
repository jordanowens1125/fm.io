let annual = true;
const MONTHLY = "monthly";
const ANNUALLY = "annually";

const handleToggle = () => {
  if (annual) {
    //show monthly classes
    removeHiddenFromSelectedElements(MONTHLY);
    //hide annual classes
    addHiddenToSelectedElements(ANNUALLY);
  } else {
    //hide monthly classes
    addHiddenToSelectedElements(MONTHLY);
    //show annual classes
    removeHiddenFromSelectedElements(ANNUALLY);
  }
  annual = !annual;
};

const removeHiddenClass = (el) => {
  el.classList.remove("hidden");
};

const addHiddenClass = (el) => {
  el.classList.add("hidden");
};

const addHiddenToSelectedElements = (classname) => {
  const selectedElements = document.getElementsByClassName(classname);
  for (let i = 0; i < selectedElements.length; i++) {
    addHiddenClass(selectedElements[i]);
  }
};

const removeHiddenFromSelectedElements = (classname) => {
  const selectedElements = document.getElementsByClassName(classname);
  for (let i = 0; i < selectedElements.length; i++) {
    removeHiddenClass(selectedElements[i]);
  }
};
