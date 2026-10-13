const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('[data-plan]').forEach(link => {
  link.addEventListener('click', () => {
    const planSelect = document.querySelector('#parcel-type');
    const plan = link.dataset.plan;
    const option = [...planSelect.options].find(item => item.text.includes(plan.split(' — ')[0]));
    if (option) planSelect.value = option.value;
  });
});

document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = (form.get('name') || '').trim();
  const plan = form.get('plan') || 'Not sure yet';
  const items = (form.get('items') || '').trim();
  const message = `Hi vee.RIYA! My name is ${name}. I'd like to enquire about shipping to Zimbabwe.\\n\\nParcel option: ${plan}\\nStore/items: ${items || 'Not decided yet'}\\n\\nPlease send me the delivery address and confirm the current rates, delivery timeline and any additional charges. Thank you!`;
  window.open(`https://wa.me/27842819273?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();