async function submitForm(){
  // Support both index.html (cf-) and page-specific (f-) IDs
  const name = (document.getElementById('f-name') || document.getElementById('cf-name')).value.trim();
  const email = (document.getElementById('f-email') || document.getElementById('cf-email')).value.trim();
  const message = (document.getElementById('f-msg') || document.getElementById('cf-message')).value.trim();
  const phone = (document.getElementById('f-phone') || document.getElementById('cf-phone')).value.trim();
  const service = document.getElementById('cf-service') ? document.getElementById('cf-service').value : '';

  const btn = document.getElementById('submitBtn');
  if (!name || !email || !message) { alert('Please fill in your name, email, and message.'); return; }

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
    alert('Thank you! Your message has been sent successfully.');
    
    // Reset Form fields
    (document.getElementById('f-name') || document.getElementById('cf-name')).value = '';
    (document.getElementById('f-email') || document.getElementById('cf-email')).value = '';
    (document.getElementById('f-msg') || document.getElementById('cf-message')).value = '';
    (document.getElementById('f-phone') || document.getElementById('cf-phone')).value = '';

  } catch (err) {
    console.error("Submission error:", err);
    alert('Oops! There was a problem sending your message. Please try again or reach out via WhatsApp.');
  } finally {
    // Restore button state
    btn.innerHTML = originalBtnText;
    btn.disabled = false;
  }
}
window.submitForm = submitForm;