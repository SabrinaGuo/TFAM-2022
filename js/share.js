const body = document.querySelector("body");
const doc = document.querySelector("html");
const meunBtn = document.querySelector(".meun-btn");
const meunListItem = document.querySelectorAll(".meun-list li");
const searchInput = document.querySelector(".search-box");

// const goTop = document.querySelector(".goTop");
let meunOpen = false; //選單開啟與否
let searchBarOpen = false; //search開啟與否

//開啟收合的選單
meunBtn.addEventListener("click", () => {
  if (meunOpen) {
    meunOpen = false;
    body.classList.remove("active");
    doc.classList.remove("active");
  } else {
    meunOpen = true;
    body.classList.add("active");
    doc.classList.add("active");
  }
});

//選單點擊 add class name:on
meunListItem.forEach((item) => {
  item.addEventListener("click", () => {
    meunListItem.forEach((i) => {
      i.classList.remove("on");
    });
    item.classList.add("on");
  });
});

//寬度小於 1200 時 開關 search input
searchInput.addEventListener("click", (e) => {
  if (body.clientWidth < 1200) {
    if (e.target.matches("img") && searchBarOpen) {
      searchInput.classList.remove("onFocus");
      searchBarOpen = false;
    } else {
      searchInput.classList.add("onFocus");
      searchBarOpen = true;
    }
  }
  return;
});

//關閉 search input
//寬度小於 1200 時 不是點擊search input or search icon 就會關閉 search input
body.addEventListener("mouseup", (e) => {
  if (body.clientWidth < 1200) {
    if (
      !e.target.matches(".search-icon") ||
      !e.target.matches(".search-input")
    ) {
      searchInput.classList.remove("onFocus");
      searchBarOpen = false;
    }
  }
  return;
});

// goTop.addEventListener("click", scrollToTop);

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }
