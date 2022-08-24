let meunOpen = false; //選單開啟與否
let searchBarOpen = false; //search開啟與否

//開啟收合的選單
$(".meun-btn").on("click", function () {
  if (meunOpen) {
    meunOpen = false;
    $("body,html").removeClass("active");
  } else {
    meunOpen = true;
    $("body,html").addClass("active");
  }
});
//寬度小於 1200 時的search input
$(".search-box").on("click", function (e) {
  if ($("body").width() < 1200) {
    if (e.target.matches("img") && searchBarOpen) {
      $(".search-box").removeClass("onFocus");
      searchBarOpen = false;
    } else {
      $(".search-box").addClass("onFocus");
      searchBarOpen = true;
    }
  }
  return;
});

//關閉 search input
//寬度小於 1200 時 不是點擊search input or search icon 就會關閉 search input
$("body").on("mouseup, touchend", function (e) {
  if ($("body").width() < 1200) {
    if (
      !e.target.matches(".search-icon") ||
      !e.target.matches(".search-input")
    ) {
      $(".search-box").removeClass("onFocus");
      searchBarOpen = false;
    }
  }
  return;
});
//表格篩選圖示 toggle 切換
let sortHead = $(".sort-table-wrap thead th");
sortHead.on("click", function () {
  $(this).toggleClass("sort-up");
});

// 二層選單控制
$(".double-lists li").on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("active open");
  $(this).siblings().removeClass("active open");
});
// 三層選單控制
$(".triple-lists li").on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("active open");
  $(this).siblings().removeClass("active open");
});
$(".third-lists li").on("click", function (e) {
  $(this).parents("li").removeClass("actve");
});

// //目前螢幕寬度
function checkScreenWidth() {
  if ($(window).width() > 1024) {
    return "desk";
  } else if ($(window).width() > 576 && $(window).height() > 420) {
    return "padPortrait"; //直
  } else if ($(window).width() > 768 && $(window).height() > 420) {
    return "padLandscape"; //橫
  } else if ($(window).height() < 420) {
    return "phone";
  } else {
    return "desk";
  }
}
//加入按鈕 more
function addMoreBtn(target) {
  if (target.data("hadmore") == false) {
    $(target).append(
      `<button class="more" data-seemore="false" title="查看更多按鈕" onclick="moreStatus($(this))">more +</button>`
    );
    target.data("hadmore", true);
  }
}
//more 狀況控制
function moreStatus(target) {
  const parents = target.parents(".countText");
  const counTextcontent = target.parents(".countText").find("p");
  const countRow = String(target.parents(".countText").data("rows"));
  if (target.data("seemore") == false) {
    target.text("more -");
    parents.removeClass("ellipsis");
    target.data("seemore", true);
  } else {
    target.text("more +");
    parents.addClass("ellipsis");
    target.data("seemore", false);
  }
}
//字數計算
function countTextNumber() {
  $(".countText p").each(function () {
    let parents = $(this).parents(".countText");
    if (parents.hasClass("content-article")) {
      console.log($(this).text());
      switch (checkScreenWidth()) {
        case "desk":
          if ($(this).height() > 762) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        case "padPortrait":
          if ($(this).height() > 762) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        case "padLandscape":
          if ($(this).height() > 576) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        case "phone":
          if ($(this).height() > 700) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        default:
          if ($(this).height() > 762) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
      }
    } else {
      switch (checkScreenWidth()) {
        case "desk":
          if ($(this).height() > 179.55) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        case "padPortrait":
          if ($(this).height() > 136) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        case "padLandscape":
          if ($(this).height() > 136) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        case "phone":
          if ($(this).height() > 136) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
          break;
        default:
          if ($(this).height() > 179) {
            parents.addClass("ellipsis");
            addMoreBtn(parents);
          }
      }
    }
  });
}
countTextNumber();

//連結數量計算
function countLinkRows() {
  let linkRows = $(".countRows .ex-link");
  let parents = $(".countRows");
  let maxRows = 5;
  if (linkRows.length > maxRows) {
    addMoreBtnForLinkRows(parents);
    linkRows.each(function (idx) {
      if (idx > maxRows - 1) {
        linkRows.eq(idx).addClass("dis-no");
      }
    });
  }
}
countLinkRows();
//加入按鈕 link more
function addMoreBtnForLinkRows(target) {
  if (target.data("hadmore") == false) {
    $(target).append(
      `<button class="more" data-seemore="false" title="查看更多按鈕" onclick="moreStatusForLinkRows($(this))">more +</button>`
    );
    target.data("hadmore", true);
  }
}
//連結 more 狀況控制
function moreStatusForLinkRows(target) {
  const counTextcontent = target.parents(".countRows").find(".ex-link");
  if (target.data("seemore") == false) {
    target.text("more -");
    counTextcontent.removeClass("dis-no");
    target.data("seemore", true);
  } else {
    target.text("more +");
    counTextcontent.each(function (idx) {
      if (idx > 4) {
        counTextcontent.eq(idx).addClass("dis-no");
      }
    });
    target.data("seemore", false);
  }
}
// 瀏覽器 resize 時呼叫
$(window).on("resize", function () {
  countTextNumber();
  countLinkRows();
});
