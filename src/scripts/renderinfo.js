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
  //  take ID of newspage
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
// render news for front page
function showRecentNew() {
  const container = document.getElementById("recentnew");
  const recent = newsData.slice(0, 4); //  pick 4s news
  container.innerHTML = recent.map(item => `
        <div class="flex items-start gap-4 p-4 rounded transition duration-200 hover:bg-base-100 group min-h-[90px]">
              <svg class="flex-shrink-0 w-10 h-10 text-pink-600 transition-transform duration-200 group-hover:translate-x-1"
        fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z"/>
          <path d="M8 8h8M8 12h8M8 16h4"/>
        </svg>
        <div class="flex flex-col justify-center">
        <a href="${item.link}" class="font-semibold text-lg hover:underline">
          ${item.title}
        </a>
        <p class="text-sm italic text-base-content/70">${item.date}</p>
      </div>
    </div>
    </div>
  `).join("");
}