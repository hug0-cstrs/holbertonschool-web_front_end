function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowecase", "white", "black");

  /* Create all elements */
  const paragraph = document.createElement("p");
  const btnSpooky = document.createElement("button");
  const btnDarkMode = document.createElement("button");
  const btnScreamMode = document.createElement("button");

  /* Add caracteristics */
  paragraph.innerHTML = "Welcome Holberton!";
  btnSpooky.innerHTML = "Spooky";
  btnDarkMode.innerHTML = "Dark Mode";
  btnScreamMode.innerHTML = "Scream Mode";

  /* Add to body */
  document.body.appendChild(paragraph);
  document.body.appendChild(btnSpooky);
  document.body.appendChild(btnDarkMode);
  document.body.appendChild(btnScreamMode);

  /* Behaviors */
  btnSpooky.onclick = spooky;
  btnDarkMode.onclick = darkMode;
  btnScreamMode.onclick = screamMode;
}
main();
