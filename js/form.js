async function submitForm(event){
  if (event) event.preventDefault();

  // Support both index.html (cf-) and page-specific (f-) IDs
  const nameField = document.getElementById('f-name') || document.getElementById('cf-name');
  const emailField = document.getElementById('f-email') || document.getElementById('cf-email');
  const messageField = document.getElementById('f-msg') || document.getElementById('cf-message');
  const phoneField = document.getElementById('f-phone') || document.getElementById('cf-phone');
  if (!nameField || !emailField || !messageField) return;

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();
  const phone = phoneField ? phoneField.value.trim() : '';
  const service = document.getElementById('cf-service') ? document.getElementById('cf-service').value : '';

  const btn = document.getElementById('submitBtn');
  const status = document.getElementById('formStatus');
  if (!name || !email || !message) {
    if (status) status.textContent = 'Please fill in your name, email, and message.';
    return;
  }
  if (!btn) return;

  // Show loading state
  const originalBtnText = btn.innerHTML;
  btn.innerHTML = '<i class="ti ti-loader-2 animate-spin"></i> Sending...';
  btn.disabled = true;

  // 3. Execution Logic
  try {
    // 1. Submit to Formspree 
    const response = await fetch('https://formspree.io/f/mnjynozp', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify({ name, email, phone, service, message })
    });

    if (!response.ok) throw new Error('Formspree submission failed');

    // 2. Secondary interaction: Open WhatsApp
    const whatsappNumber = "260978294747";
    const waText = `*New Website Enquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || 'N/A'}\n*Service:* ${service || 'General Enquiry'}\n\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(whatsappUrl, '_blank');

    // Success feedback
    if (status) status.textContent = 'Thank you. Your message has been sent successfully.';
    
    // Reset Form fields
    (document.getElementById('f-name') || document.getElementById('cf-name')).value = '';
    (document.getElementById('f-email') || document.getElementById('cf-email')).value = '';
    (document.getElementById('f-msg') || document.getElementById('cf-message')).value = '';
    (document.getElementById('f-phone') || document.getElementById('cf-phone')).value = '';

  } catch (err) {
    console.error("Submission error:", err);
    if (status) status.textContent = 'There was a problem sending your message. Please try again or reach out via WhatsApp.';
  } finally {
    // Restore button state
    btn.innerHTML = originalBtnText;
    btn.disabled = false;
  }
}
window.submitForm = submitForm;