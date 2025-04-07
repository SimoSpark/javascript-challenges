const btn = document.getElementById("changeColorBtn");
    const colorText = document.getElementById("colorCode");

    function getRandomColor() {
      const hex = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + hex.padStart(6, "0");
    }

    btn.addEventListener("click", () => {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
      colorText.textContent = "Current color: " + randomColor;
    });