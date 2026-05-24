// Simple i18n loader scaffold. Languages live in /lang/*.json
const i18n = {
  locale: 'en',
  data: {},
  async load(locale){
    this.locale = locale || this.locale;
    try{
      const res = await fetch(`lang/${this.locale}.json`);
      this.data = await res.json();
      this.apply();
    }catch(err){
      console.warn('i18n load failed',err);
    }
  },
  apply(){
    // Replace elements with data-i18n keys
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const txt = this.data[key];
      if(typeof txt === 'string') el.textContent = txt;
    });
  }
};

document.addEventListener('DOMContentLoaded',()=>{
  // default load english (file created)
  i18n.load('en');
});

window.i18n = i18n;