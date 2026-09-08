/* Santé inquiry form v6 — six fields + Google Sheet submission + homepage conversion path */
(function(){
  const SHEET_ENDPOINT='https://script.google.com/macros/s/AKfycbx4fwfMJG5CiJRUCYBa1dAXgwfYAnWKJyYv6qH_jiQcrTIZ0lnB-ofrrKD0ktJd-bl2XA/exec';
  const countries=['Select your country','Australia','Austria','Belgium','Brazil','Brunei','Cambodia','Canada','China','Denmark','Finland','France','Germany','Hong Kong','India','Indonesia','Ireland','Italy','Japan','Malaysia','Mexico','Netherlands','New Zealand','Norway','Philippines','Poland','Portugal','Qatar','Saudi Arabia','Singapore','South Korea','Spain','Sweden','Switzerland','Taiwan','Thailand','United Arab Emirates','United Kingdom','United States','Vietnam','Other'];

  function initForm(){
    const form=document.querySelector('.inquiry-form-card');
    if(!form||form.dataset.inquiryFixed==='6')return;
    form.dataset.inquiryFixed='6';
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

  function addHomepageConversionPath(){
    const path='/healthy-shop-global/';
    if(!location.pathname.endsWith(path) && location.pathname!=='/healthy-shop-global' && location.pathname!=='/healthy-shop-global/')return;
    if(document.getElementById('barley-buy'))return;

    const style=document.createElement('style');
    style.textContent=`
      .sales-path-section{background:#f5fbf7;color:#102018;padding:34px 0 40px;border-top:1px solid #e2eee7;border-bottom:1px solid #e2eee7;scroll-margin-top:76px}
      .sales-path-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;max-width:1200px;margin:0 auto;padding:0 24px}
      .sales-path-card{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px;border:1px solid #d7e5dc;border-radius:18px;background:#fff;box-shadow:0 8px 22px rgba(7,75,47,.06);text-decoration:none;color:#102018}
      .sales-path-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(7,75,47,.09)}
      .sales-path-kicker{display:block;margin-bottom:5px;color:#087f45;font-size:9px;letter-spacing:1.4px;font-weight:950;text-transform:uppercase}
      .sales-path-title{display:block;font-size:15px;font-weight:950;line-height:1.2}.sales-path-desc{display:block;margin-top:4px;color:#52605a;font-size:11px;line-height:1.4}
      .sales-path-arrow{width:34px;height:34px;flex:0 0 34px;border-radius:50%;background:#e7f6e9;color:#087f45;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900}
      .hero-order-note{display:block;margin-top:12px;color:#52605a;font-size:10px;line-height:1.4;font-weight:750}.barley-feature-cta-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.barley-feature-cta-row a{text-decoration:none}.barley-feature-cta-secondary{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:10px;background:#fff;color:#087f45;border:1px solid #bcd8c8;text-decoration:none;font-size:14px;font-weight:950}
      @media(max-width:700px){.sales-path-section{padding:24px 0 28px}.sales-path-grid{grid-template-columns:1fr;gap:9px;padding:0 16px}.sales-path-card{padding:15px}.barley-feature-cta-row{justify-content:center}.barley-feature-cta,.barley-feature-cta-secondary{width:100%;box-sizing:border-box;text-align:center}}
    `;
    document.head.appendChild(style);

    const heroActions=document.querySelector('.hero-actions');
    if(heroActions){
      const primary=heroActions.querySelector('.hero-shop');
      const secondary=heroActions.querySelector('.hero-why');
      if(primary){primary.href='sante-barley-order-philippines.html';primary.removeAttribute('target');primary.removeAttribute('rel');primary.textContent='Order Santé Barley →';}
      if(secondary){secondary.href='sante-barley-philippines/';secondary.textContent='Learn about Barley';}
      if(!document.querySelector('.hero-order-note')){
        const note=document.createElement('small');note.className='hero-order-note';note.textContent='Need help first? We can guide you before you order.';heroActions.insertAdjacentElement('afterend',note);
      }
    }

    const stats=document.querySelector('.stats-strip');
    if(stats){
      const section=document.createElement('section');section.id='barley-buy';section.className='sales-path-section';section.setAttribute('aria-label','Santé Barley next steps');
      section.innerHTML=`<div class="sales-path-grid">
        <a class="sales-path-card" href="sante-barley-order-philippines.html"><span><span class="sales-path-kicker">Ready to buy?</span><span class="sales-path-title">Order Santé Barley</span><span class="sales-path-desc">See the simple ordering path for the Philippines.</span></span><span class="sales-path-arrow" aria-hidden="true">→</span></a>
        <a class="sales-path-card" href="sante-barley-philippines/"><span><span class="sales-path-kicker">Want to learn?</span><span class="sales-path-title">Explore Santé Barley</span><span class="sales-path-desc">Product information, wellness guidance and details.</span></span><span class="sales-path-arrow" aria-hidden="true">→</span></a>
        <a class="sales-path-card" href="#inquiry"><span><span class="sales-path-kicker">Still deciding?</span><span class="sales-path-title">Ask our team</span><span class="sales-path-desc">Tell us what you need and we’ll point you in the right direction.</span></span><span class="sales-path-arrow" aria-hidden="true">→</span></a>
      </div>`;
      stats.insertAdjacentElement('afterend',section);
    }

    const barleyCta=document.querySelector('.barley-feature-cta');
    if(barleyCta){
      barleyCta.href='sante-barley-order-philippines.html';barleyCta.removeAttribute('target');barleyCta.removeAttribute('rel');barleyCta.textContent='How to Order Santé Barley →';
      const row=document.createElement('div');row.className='barley-feature-cta-row';barleyCta.parentNode.insertBefore(row,barleyCta);row.appendChild(barleyCta);
      const secondary=document.createElement('a');secondary.className='barley-feature-cta-secondary';secondary.href='sante-barley-philippines/';secondary.textContent='View Product Page';row.appendChild(secondary);
    }

    const inquiryCopy=document.querySelector('.inquiry-copy');
    if(inquiryCopy){
      const h2=inquiryCopy.querySelector('h2'),p=inquiryCopy.querySelector('p');
      if(h2)h2.innerHTML='Ready to take<br>the next step?';
      if(p)p.textContent='Tell us what you need—ordering help, product information, membership or business questions. We’ll help you choose the right next step without pressure.';
    }
  }

  function init(){
    initForm();
    addHomepageConversionPath();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
