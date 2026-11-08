const languageLink = document.querySelector('.language');
const languagePage = languageLink.getAttribute('href');

function syncLanguageLink() {
  const section = window.location.hash;
  const destination = section.startsWith('#publication-') ? '#publications' : section;
  languageLink.setAttribute('href', languagePage + destination);
}

syncLanguageLink();
window.addEventListener('hashchange', syncLanguageLink);
