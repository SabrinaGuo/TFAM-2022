$(".menuBtn").click(function() {
	$("html,body").toggleClass('active listOpen');
});

//點擊 li 即關閉meun
$(".lists li a ,.sub_list li a").click(function() {
	$("html,body").removeClass('active listOpen');
});
$(".lists>li>a").click(function() {
	$(this).parent('li').addClass('on').siblings().removeClass('on');
});

//meun 滑鼠點擊與滑入都可打開子選單
$('.lists li').on('mouseover click',function(){
	if($(this).children().hasClass('sub_list')){
		$('.nav_list').addClass('subOpen')
	}else{
		$('.nav_list').removeClass('subOpen')
	}
})

// 點空白關meun
$(document).mouseup(function (e) {
    var container = $("nav");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
		$("html,body").removeClass('active listOpen');
    }
});

// 錨點下滑
$("a[href^=#]").click(function(){
    $("html,body").stop().animate({scrollTop:$(this.hash).offset().top},800);
    return false;
});

//分頁 
// show_tabct、show_tab=>顯示內容
// var tab_on = $(".tab_title li");
// tab_on.click(function(){
// 	var nm = $(this).index();
// 	$(".tab_content").eq(nm).addClass('show_tabct').siblings().removeClass('show_tabct');
// 	$(this).addClass('show_tab').siblings().removeClass('show_tab');
// });

var $window = $(window);
$window.on('scroll', function () {

	if ($window.scrollTop() > 0) {
		$(".gotop").addClass('show');
	} else {
		$(".gotop").removeClass('show');
	}
}).scroll();

$(".gotop").click(function () {
	$("html, body").animate({
		scrollTop: 0 //屬性
	});
	return false;
});

