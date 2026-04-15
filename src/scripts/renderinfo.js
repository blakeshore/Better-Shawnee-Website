// Date
function filterDates() {
  const month = document.getElementById("monthbar").value;
  const year = document.getElementById("yearbar").value;
  // perfomance filter
  const filtered = newsData.filter(item => {
    const matchMonth = !month || item.month === month;
    const matchYear = !year || item.year === year;
    return matchMonth && matchYear;
  });

  renderInfo(filtered);
}
// this function will used to filter date
function renderInfo(data = newsData) {
  //  take ID of  newspage
  newspage.innerHTML = data.map(item => `
    <div class="border-b pb-4">
      <a href="${item.link}" class="text-xl font-semibold text-blue-600 hover:underline">
        ${item.title}
      </a>
      <p class="text-sm text-base-content/70">${item.date}</p>
      <p class="mt-2">${item.summary}</p>
    </div>
  `).join("");
}
//  return  current file name
function getCurrentPage() {
  const path = window.location.pathname;
  return path.substring(path.lastIndexOf("/") + 1);
}
// load info from newData
function loadNews() {
  const currentPage = getCurrentPage();
  // serach and find news#.html
  const article = newsData.find(n => n.link === currentPage);
  document.getElementById("newsTitle").innerText = article.title;
  document.getElementById("newsDate").innerText = "Date " + article.date;
}