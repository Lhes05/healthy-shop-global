/* Santé inquiry form v4 — exact six-field flow + Messenger handoff */
(function(){
  const countries = [
    'Select your country','Australia','Austria','Belgium','Brazil','Brunei','Cambodia','Canada','China','Denmark','Finland','France','Germany','Hong Kong','India','Indonesia','Ireland','Italy','Japan','Malaysia','Mexico','Netherlands','New Zealand','Norway','Philippines','Poland','Portugal','Qatar','Saudi Arabia','Singapore','South Korea','Spain','Sweden','Switzerland','Taiwan','Thailand','United Arab Emirates','United Kingdom','United States','Vietnam','Other'
  ];

  function init(){
    const form=document.querySelector('.inquiry-form-card');
    if(!form || form.dataset.inquiryFixed==='4') return;
    form.dataset.inquiryFixed='4';

    form.innerHTML = `
      <div class="inquiry-field">
        <label for="inquiryName">Name</label>
        <input id="inquiryName" name="name" type="text" placeholder="Your name" autocomplete="name" required>
      </div>
      <div class="inquiry-field">
        <label for="inquiryFbName">FB Name</label>
        <input id="inquiryFbName" name="fbName" type="text" placeholder="Your Facebook name" autocomplete="nickname" required>
      </div>
      <div class="inquiry-field">
        <label for="inquiryContact">Contact #</label>
        <input id="inquiryContact" name="contact" type="tel" placeholder="Your contact number" autocomplete="tel" required>
      </div>
      <div class="inquiry-field inquiry-country">
        <label for="inquiryCountry">Where are you currently based?</label>
        <select id="inquiryCountry" name="country" required>
          ${countries.map((c,i)=>`<option value="${c === 'Select your country' ? '' : c}"${i===0 ? ' selected disabled' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="inquiry-field">
        <label for="inquiryHelp">What can we help with?</label>
        <select id="inquiryHelp" name="help" required>
          <option value="" selected disabled>Select an option</option>
          <option>How to order</option>
          <option>Become a Member</option>
          <option>Business Opportunity</option>
          <option>Other</option>
        </select>
      </div>
      <div class="inquiry-field">
        <label for="inquiryMessage">Message</label>
        <textarea id="inquiryMessage" name="message" placeholder="Tell us what you want to know..." required></textarea>
      </div>
      <button type="submit" class="inquiry-submit">Send Inquiry</button>
    `;

    const name=document.getElementById('inquiryName');
    const fbName=document.getElementById('inquiryFbName');
    const contact=document.getElementById('inquiryContact');
    const country=document.getElementById('inquiryCountry');
    const help=document.getElementById('inquiryHelp');
    const message=document.getElementById('inquiryMessage');
    const submit=form.querySelector('.inquiry-submit');

    const status=document.createElement('div');
    status.className='inquiry-status';
    status.setAttribute('role','status');
    status.setAttribute('aria-live','polite');
    status.style.cssText='display:none;margin-top:12px;padding:12px 14px;border-radius:11px;background:#e7f6e9;color:#087f45;font-size:12px;line-height:1.5;font-weight:800;';
    form.insertBefore(status,submit);

    function showStatus(text){status.textContent=text;status.style.display='block';}
    function clearStatus(){status.textContent='';status.style.display='none';}

    form.addEventListener('submit',function(e){
      e.preventDefault();
      clearStatus();
      if(!form.checkValidity()){form.reportValidity();return;}

      const inquiry=[
        'Hi Leslie, I’d like some help from Santé.','',
        'Name: '+name.value.trim(),
        'FB Name: '+fbName.value.trim(),
        'Contact #: '+contact.value.trim(),
        'Currently based: '+country.value,
        'What can we help with?: '+help.value,
        'Message: '+message.value.trim()
      ].join('\n');

      const original=submit.textContent;
      submit.disabled=true;
      submit.textContent='Preparing Messenger…';
      const openMessenger=function(){window.open('https://m.me/lesliecastroicalla','_blank','noopener,noreferrer');};

      if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(inquiry).then(function(){
          showStatus('Your inquiry is ready. The message was copied. Messenger will open next—paste it there and send it to Leslie.');
          openMessenger();
        }).catch(function(){
          showStatus('Messenger will open next. Please copy the details before sending.');
          openMessenger();
        }).finally(function(){submit.disabled=false;submit.textContent=original;});
      }else{
        const helper=document.createElement('textarea');
        helper.value=inquiry;
        helper.setAttribute('readonly','');
        helper.style.position='fixed';
        helper.style.opacity='0';
        document.body.appendChild(helper);
        helper.select();
        try{document.execCommand('copy');}catch(err){}
        helper.remove();
        showStatus('Your inquiry details were copied. Messenger will open next—paste them there and send to Leslie.');
        openMessenger();
        submit.disabled=false;
        submit.textContent=original;
      }
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
