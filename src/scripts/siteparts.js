// head and footer functions
// tell it to change theme
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
// take light and dark theme
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
}
// copy current link page
function copyPageLink() {
  navigator.clipboard.writeText(window.location.href);
}
//
function setShareLinks() {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);
  // get the navaigte to share external site or email
  const facebook = document.getElementById("share-facebook");
  const twitter = document.getElementById("share-twitter");
  const email = document.getElementById("share-email");

  if (facebook) facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  if (twitter) twitter.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
  if (email) email.href = `mailto:?subject=${pageTitle}&body=${pageUrl}`;
}

//For making submenus in the left side nav bar on content pages
function toggleSubmenu(id, button) {
  const target = document.getElementById(id);
  const isOpening = target.classList.contains("hidden");

    // Close all submenus
    document.querySelectorAll(".submenu").forEach((submenu) => {
      submenu.classList.add("hidden");
    });

    // Reset all arrows
    document.querySelectorAll('button[aria-controls] svg').forEach((icon) => {
      icon.classList.remove("rotate-180");
    });

    document.querySelectorAll('button[aria-controls]').forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
    });

    // Open clicked submenu if it was previously closed
    if (isOpening) {
      target.classList.remove("hidden");
      button.setAttribute("aria-expanded", "true");

      const icon = button.querySelector("svg");
      if (icon) {
        icon.classList.add("rotate-180");
      }
  }
}
// This will load header and foot when called on all site
async function loadSiteParts() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  //load
  if (header) {
    const headerHtml = await fetch("components/header.html").then((res) => res.text());
    header.innerHTML = headerHtml;
  }

  if (footer) {
    const footerHtml = await fetch("components/footer.html").then((res) => res.text());
    footer.innerHTML = footerHtml;
  }

  setShareLinks();
}
// wait until html load
document.addEventListener("DOMContentLoaded", loadSiteParts);