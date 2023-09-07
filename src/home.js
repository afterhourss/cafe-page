function home() {
  const landingPage = document.createElement("div");
  const textLanding = document.createElement("h1");
  const paraLanding = document.createElement("p");

  landingPage.classList.add("landing-page");

  textLanding.textContent = "hello-resto";
  paraLanding.textContent = "coffee bar and comfy public space";

  landingPage.appendChild(textLanding);
  landingPage.appendChild(paraLanding);

  return landingPage;
}

function loadHome() {
  const content = document.querySelector("#content");
  content.appendChild(home());
}
export { loadHome };
