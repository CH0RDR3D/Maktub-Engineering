function submitForm(){
  // Support both index.html (cf-) and page-specific (f-) IDs
  const name = (document.getElementById('f-name') || document.getElementById('cf-name')).value.trim();
  const email = (document.getElementById('f-email') || document.getElementById('cf-email')).value.trim();
  const message = (document.getElementById('f-msg') || document.getElementById('cf-message')).value.trim();
  const phone = (document.getElementById('f-phone') || document.getElementById('cf-phone')).value.trim();
  const service = document.getElementById('cf-service') ? document.getElementById('cf-service').value : '';

  if (!name || !email || !message) { alert('Please fill in name, email and message.'); return; }

  const subject = encodeURIComponent('Enquiry from ' + name + (service ? ' — ' + service : ''));
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + (phone || 'N/A') + '\nService: ' + (service || 'N/A') + '\n\nMessage:\n' + message);
  window.location.href = `mailto:maktubengineering@gmail.com?subject=${subject}&body=${body}`;
  
  const success = document.getElementById('form-success');
  if(success) { success.style.display='block'; setTimeout(()=> success.style.display='none', 4000); }
}
window.submitForm = submitForm;