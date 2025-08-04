document.addEventListener("DOMContentLoaded", () => {
  // Fade-in
  document.body.classList.add("loaded");

  // Fade-out
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto')) return;
      e.preventDefault();
      document.body.classList.remove("loaded");
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = href, 400);
    });
  });
});




const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
    nav.classList.toggle('hidden')

})