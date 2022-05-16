
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
    services: [
      { url: 'https://form.jotform.com/221350365719859', name: 'Visitor Registration' },
      { url: 'sip:aainapor@cisco.com', name: 'Call a Contact' },
       ],
  });

}

document.addEventListener('alpine:init', setup);

