$("#userInfo").on("click", function() {
  $(this).closest("li").toggleClass("active");
});
$(".menu__item_text").on("click", function() {
  $(this).toggleClass("grey");
});

$(".nav_text").on("click", function() {
  $(this).toggleClass("grey");
});

$("#menu_icon").on("click", function() {
  $(this).closest(".header__menu").toggleClass("active");
  return false;
});

// function modalCreate(id) {
//   console.log(id);
//   var html =
//     '<div id="' +
//     id +
//     '" style="width: 100%; height: 500px; background-color:#FFFFFF; "></div>';
//   $(".modals__content").html(html);
//   $(".modals").show();
//   m_chartdiv()();
// }
