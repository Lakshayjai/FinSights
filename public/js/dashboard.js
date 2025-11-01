setInterval(() => {
  fetch("/")
    .then((res) => res.text())
    .then((html) => {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      const newSection = temp.querySelector("#dashboard-preview");
      document.querySelector("#dashboard-preview").innerHTML =
        newSection.innerHTML;
    });
}, 60000); // every 60 seconds
