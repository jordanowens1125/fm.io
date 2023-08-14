const handleSubmit = (e) => {
  const el = document.getElementById("email");
    const valid = /\S+@\S+\.\S+/.test(el.value);
  if (valid) {
      document.getElementById("error").style.display = "none";
      document.getElementById("error-icon").style.display = "none";
      el.classList.remove("error-input");
      el.value = ''
  } else {
      document.getElementById("error").style.display = "block";
      document.getElementById("error-icon").style.display = "block";
      el.classList.add('error-input')
  }
};
