
    function toggleDarkLight() {
        let body = document.querySelector("html");
        let currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
      }