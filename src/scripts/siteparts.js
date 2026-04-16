function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
}

function copyPageLink() {
  navigator.clipboard.writeText(window.location.href);
}

function setShareLinks() {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const facebook = document.getElementById("share-facebook");
  const twitter = document.getElementById("share-twitter");
  const email = document.getElementById("share-email");

  if (facebook) facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  if (twitter) twitter.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
  if (email) email.href = `mailto:?subject=${pageTitle}&body=${pageUrl}`;
}

async function loadSiteParts() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

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

document.addEventListener("DOMContentLoaded", loadSiteParts);