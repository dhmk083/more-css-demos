$(() => {
  $(".menu-toggle").click(() => {
    $(".menu-toggle, .site-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
