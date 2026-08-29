/* Santé inquiry form: client-side validation + Messenger handoff */
(function(){
  function init(){
    const form=document.querySelector('.inquiry-form-card');
    if(!form || form.dataset.inquiryFixed==='1') return;
    form.dataset.inquiryFixed='1';
    const name=document.getElementById('inquiryName');
    const contact=document.getElementById('inquiryContact');
    const country=document.getElementById('inquiryCountry');
    const help=document.getElementById('inquiryHelp');
    const message=document.getElementById('inquiryMessage');
    const submit=form.querySelector('.inquiry-submit');
    if(!name||!contact||!country||!help||!message||!submit) return;
    name.required=true; contact.required=true; country.required=true; help.required=true; message.required=true;
    name.setAttribute('autocomplete','name'); contact.setAttribute('autocomplete','tel');
    const status=document.createElement('div');
    status.className='inquiry-status'; status.setAttribute('role','status'); status.setAttribute('aria-live','polite');
    status.style.cssText='display:none;margin-top:12px;padding:12px 14px;border-radius:11px;background:#e7f6e9;color:#087f45;font-size:12px;line-height:1.5;font-weight:800;';
    form.insertBefore(status,submit);
    function showStatus(text){status.textContent=text;status.style.display='block'}
    function clearStatus(){status.textContent='';status.style.display='none'}
    form.addEventListener('submit',function(e){
      e.preventDefault(); clearStatus();
      if(!form.checkValidity()){form.reportValidity();return;}
      const inquiry=['Hi Leslie, I’d like some help from Santé.','','Name: '+name.value.trim(),'Messenger / Contact: '+contact.value.trim(),'Based in: '+country.value,'Concern: '+help.value,'Message: '+message.value.trim()].join('\n');
      const original=submit.textContent; submit.disabled=true; submit.textContent='Preparing Messenger…';
      const openMessenger=function(){window.open('https://m.me/lesliecastroicalla','_blank','noopener,noreferrer')};
      if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(inquiry).then(function(){showStatus('Your inquiry is ready. The message was copied. Messenger will open next—paste it there and send it to Leslie.');openMessenger();}).catch(function(){showStatus('Messenger will open next. Please copy the details before sending.');openMessenger();}).finally(function(){submit.disabled=false;submit.textContent=original;});
      }else{
        const helper=document.createElement('textarea'); helper.value=inquiry; helper.setAttribute('readonly',''); helper.style.position='fixed'; helper.style.opacity='0'; document.body.appendChild(helper); helper.select(); try{document.execCommand('copy')}catch(err){} helper.remove();
        showStatus('Your inquiry details were copied. Messenger will open next—paste them there and send to Leslie.'); openMessenger(); submit.disabled=false; submit.textContent=original;
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
// form-fix-v3
