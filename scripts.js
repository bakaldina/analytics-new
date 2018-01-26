// $(document).ready(function () {
//   var $button1 = document.querySelector(".button-1"),
//     $container1 = document.querySelector(".container-1"),
//     $button2 = document.querySelector(".button-2"),
//     $container2 = document.querySelector(".container-2");

//   $button1.addEventListener("click", function () {
//     $container1.classList.add("active");
//     $container2.classList.remove("active");

//     $button1.classList.add("active");
//     $button2.classList.remove("active");
//   });

//   $button2.addEventListener("click", function () {
//     $container1.classList.remove("active");
//     $container2.classList.add("active");

//     $button1.classList.remove("active");
//     $button2.classList.add("active");
//   });

$("#userInfo").on("click", function () {
  $(this)
    .closest("li")
    .toggleClass("active");
});
$('.menu__item_text').on('click', function () {
  $(this).toggleClass('grey');
});

$('.nav_text').on('click', function () {
  $(this).toggleClass('grey');
});

$("#menu_icon").on("click", function () {
  $(this)
    .closest(".header__menu")
    .toggleClass("active");
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
