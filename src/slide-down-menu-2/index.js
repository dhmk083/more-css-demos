$(() => {
  $('.nav__link:not(:only-child)').click(function(e) {
    $(this)
      .siblings('.nav__dropdown')
      .toggle()

    e.stopPropagation()
  })

  $('html').click(() => {
    $('.nav__dropdown').hide()
  })

  $('.nav-toggle').click(() => {
    $('.nav').slideToggle()
  })
})
