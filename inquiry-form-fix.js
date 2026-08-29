/* Santé inquiry form v5 — six fields + Google Sheet submission */
(function(){
  const SHEET_ENDPOINT='https://script.google.com/macros/s/AKfycbx4fwfMJG5CiJRUCYBa1dAXgwfYAnWKJyYv6qH_jiQcrTIZ0lnB-ofrrKD0ktJd-bl2XA/exec';
  const countries=['Select your country','Australia','Austria','Belgium','Brazil','Brunei','Cambodia','Canada','China','Denmark','Finland','France','Germany','Hong Kong','India','Indonesia','Ireland','Italy','Japan','Malaysia','Mexico','Netherlands','New Zealand','Norway','Philippines','Poland','Portugal','Qatar','Saudi Arabia','Singapore','South Korea','Spain','Sweden','Switzerland','Taiwan','Thailand','United Arab Emirates','United Kingdom','United States','Vietnam','Other'];
  function init(){
    const form=document.querySelector('.inquiry-form-card');
    if(!form||form.dataset.inquiryFixed==='5')return;
    form.dataset.inquiryFixed='5';
    form.innerHTML=`
      <div class="inquiry-field"><label for="inquiryName">Name</label><input id="inquiryName" name="name" type="text" placeholder="Your name" autocomplete="name" required></div>
      <div class="inquiry-field"><label for="inquiryFbName">FB Name</label><input id="inquiryFbName" name="fbName" type="text" placeholder="Your Facebook name" autocomplete="nickname" required></div>
      <div class="inquiry-field"><label for="inquiryContact">Contact #</label><input id="inquiryContact" name="contact" type="tel" placeholder="Your contact number" autocomplete="tel" required></div>
      <div class="inquiry-field inquiry-country"><label for="inquiryCountry">Where are you currently based?</label><select id="inquiryCountry" name="country" required>${countries.map((c,i)=>`<option value="${c==='Select your country'?'':c}"${i===0?' selected disabled':''}>${c}</option>`).join('')}</select></div>
      <div class="inquiry-field"><label for="inquiryHelp">What can we help with?</label><select id="inquiryHelp" name="help" required><option value="" selected disabled>Select an option</option><option>How to order</option><option>Become a Member</option><option>Business Opportunity</option><option>Other</option></select></div>
      <div class="inquiry-field"><label for="inquiryMessage">Message</label><textarea id="inquiryMessage" name="message" placeholder="Tell us what you want to know..." required></textarea></div>
      <button type="submit" class="inquiry-submit">Send Inquiry</button>`;
    const name=form.querySelector('#inquiryName'),fbName=form.querySelector('#inquiryFbName'),contact=form.querySelector('#inquiryContact'),country=form.querySelector('#inquiryCountry'),help=form.querySelector('#inquiryHelp'),message=form.querySelector('#inquiryMessage'),submit=form.querySelector('.inquiry-submit');
    const status=document.createElement('div');status.className='inquiry-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.style.cssText='display:none;margin-top:12px;padding:12px 14px;border-radius:11px;background:#e7f6e9;color:#087f45;font-size:12px;line-height:1.5;font-weight:800;';form.insertBefore(status,submit);
    const show=t=>{status.textContent=t;status.style.display='block';};
    const clear=()=>{status.textContent='';status.style.display='none';};
    form.addEventListener('submit',function(e){
      e.preventDefault();clear();if(!form.checkValidity()){form.reportValidity();return;}
      const payload=JSON.stringify({name:name.value.trim(),fbName:fbName.value.trim(),contact:contact.value.trim(),country:country.value,inquiryType:help.value,message:message.value.trim()});
      submit.disabled=true;submit.textContent='Sending…';
      let queued=false;
      try{if(navigator.sendBeacon)queued=navigator.sendBeacon(SHEET_ENDPOINT,new Blob([payload],{type:'text/plain;charset=UTF-8'}));}catch(err){queued=false;}
      if(!queued)fetch(SHEET_ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:payload,keepalive:true}).catch(function(){});
      show('Thank you. Your inquiry has been submitted successfully.');
      form.reset();submit.disabled=false;submit.textContent='Send Inquiry';
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
