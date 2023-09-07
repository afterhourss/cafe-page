import imgProfile from "./img/coffe-1354786_640.jpg";

function contact() {
  const contactPage = document.createElement("div");
  const profile = new Image();
  const title = document.createElement("p");
  const desc = document.createElement("p");
  const contactNumber = document.createElement("p");

  title.textContent = "contact-page";
  desc.textContent = "bisa contact di bawah njirrr";
  contactNumber.textContent = "0823-2939-0391";

  contactPage.classList.add("contact");
  title.classList.add("contact-title");
  desc.classList.add("contact-desc");
  contactNumber.classList.add("contact-number");

  profile.src = imgProfile;

  contactPage.appendChild(title);
  contactPage.appendChild(profile);
  contactPage.appendChild(desc);
  contactPage.appendChild(contactNumber);

  return contactPage;
}

function loadContact() {
  const content = document.querySelector("#content");
  content.appendChild(contact());
}

export { loadContact };
