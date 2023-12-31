console.log("script running");
document.addEventListener("DOMContentLoaded", function() {
  console.log("script running");

  var crossElement = document.querySelector(".cross");

  if (crossElement) {
    crossElement.style.display = "none";
  } else {
    console.error('Element with class "cross" not found.');
  }

  document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");

    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
      document.querySelector(".ham").style.display = "inline";
      document.querySelector(".cross").style.display = "none";
    } else {
      document.querySelector(".ham").style.display = "none";
      setTimeout(() => {
        document.querySelector(".cross").style.display = "inline";
      }, 300);
    }
  });

  document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");

    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
      document.querySelector(".ham").style.display = "inline";
      document.querySelector(".cross").style.display = "none";
    } else {
      document.querySelector(".ham").style.display = "none";
      setTimeout(() => {
        document.querySelector(".cross").style.display = "inline";
      }, 200);
    }
  });
});
