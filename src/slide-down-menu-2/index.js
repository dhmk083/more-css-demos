document.querySelectorAll('.nav__link:not(:only-child)').forEach(el =>
  el.addEventListener('click', e => {
    const dd = el.parentElement.querySelector('.nav__dropdown')
    dd.style.display =
      window.getComputedStyle(dd).display === 'block' ? 'none' : 'block'

    e.stopPropagation()
  })
)

document.documentElement.addEventListener('click', () => {
  document
    .querySelectorAll('.nav__dropdown')
    .forEach(el => (el.style.display = 'none'))
})

document.querySelector('.nav-toggle').addEventListener(
  'click',
  (() => {
    const el = document.querySelector('.nav')
    const measureHeight = () => {
      el.style.visibility = 'hidden'
      el.style.display = 'block'
      const height = el.scrollHeight
      el.style.removeProperty('display')
      el.style.removeProperty('visibility')
      return height
    }

    let tid
    let start

    return () => {
      const collapse = !!el.scrollHeight
      const base = measureHeight()
      const dur = 400
      start = start || Date.now()
      el.style.overflow = 'hidden'
      el.style.display = 'block'
      clearInterval(tid)

      const step = () => {
        const t = (Date.now() - start) / dur

        if (t >= 1) {
          el.style.removeProperty('overflow')
          el.style.removeProperty('height')
          collapse && el.style.removeProperty('display')
          clearInterval(tid)
          start = null
          return
        }

        el.style.height = base * (collapse ? 1 - t : t) + 'px'
      }

      step()
      tid = setInterval(step, 1000 / 60)
    }
  })()
)
