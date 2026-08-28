/* Leslie contact submenu + Chat Here automation */
(function () {
  function installPremiumPolish(){
    if(document.getElementById('premium-polish-styles'))return;
    const style=document.createElement('style');
    style.id='premium-polish-styles';
    style.textContent=`
      html{scroll-padding-top:76px}body{overflow-x:hidden}.nav{position:sticky;top:0;z-index:100;backdrop-filter:saturate(120%) blur(8px);background:rgba(255,255,255,.96)}
      .wrap{width:min(1320px,100%);padding-left:24px;padding-right:24px}
      .navin{min-height:74px}.navlinks{gap:24px}
      .hero{padding-top:34px}.hero-grid{gap:42px;padding-bottom:40px}.hero-copy{padding:30px 0 54px}.hero h1{margin-bottom:24px}.hero-lead{margin-bottom:28px;line-height:1.6}.hero-actions{gap:14px}
      .stats-strip{padding:24px 0 22px}.stats-grid{gap:16px}
      .why-section{padding:76px 0 88px}.why-heading{margin-bottom:36px}.why-grid{gap:18px}.why-card{height:176px;min-height:176px;padding:22px}
      .products-section{padding:88px 0 100px}.products-heading{margin-bottom:38px}.products-grid{gap:20px}.product-card{box-shadow:0 14px 32px rgba(7,75,47,.07)}.product-info{padding:18px 16px 16px}
      .barley-wellness-section{padding:96px 0 108px}.barley-wellness-grid{gap:68px}.barley-wellness-copy>p{line-height:1.65;margin-bottom:28px}.wellness-benefits{gap:12px}
      .simple-grain-section{padding:96px 0 108px}.simple-grain-grid{gap:78px}.simple-grain-copy>p{line-height:1.65;margin-bottom:32px}.simple-grain-benefits{gap:14px}
      .discount-section{padding:88px 0 104px}.discount-heading{margin-bottom:38px}.discount-grid{gap:22px}
      .more-than-section{padding:88px 0 100px}.more-than-heading{margin-bottom:36px}.more-than-grid{gap:16px}.more-than-card{padding:20px 18px}
      .three-simple-steps-section{background:#fff;color:#102018;padding:88px 0 96px;scroll-margin-top:76px}.three-simple-steps-heading{margin:0 0 34px}.three-simple-steps-heading h2{margin:0;font-size:clamp(42px,4.8vw,62px);line-height:1.02;letter-spacing:-3px;font-weight:950}.three-simple-steps-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.three-simple-step-card{border:1px solid #d7e5dc;border-radius:18px;background:#fff;padding:24px;box-shadow:0 12px 28px rgba(7,75,47,.06)}.three-simple-step-card>span{display:block;color:#087f45;font-size:10px;letter-spacing:1.5px;font-weight:950;margin-bottom:12px}.three-simple-step-card h3{margin:0 0 8px;font-size:20px;line-height:1.15}.three-simple-step-card p{margin:0;color:#52605a;font-size:13px;line-height:1.6}
      .stories-section{padding:88px 0 100px}.stories-heading{margin-bottom:36px}.stories-grid{gap:18px}.story-card{box-shadow:0 14px 30px rgba(7,75,47,.08)}
      #real-stories{padding:88px 0 100px}.real-stories-heading{margin-bottom:36px}.real-stories-shell{padding:18px;border-radius:30px}.real-stories-grid{gap:16px}.real-story-card{min-height:350px;padding:24px 22px 20px}.real-story-quote{line-height:1.7}.real-story-footer{margin-top:20px}.real-story-photo{width:126px;height:126px;flex-basis:126px}
      .barley-feature-section{padding:96px 0 108px}.barley-feature-grid{gap:72px}.inquiry-section{padding:96px 0 108px}.inquiry-grid{gap:82px}.inquiry-form-card{padding:28px 24px 24px}
      @media(max-width:1180px){.wrap{padding-left:24px;padding-right:24px}.hero-grid{gap:28px}.barley-wellness-grid{gap:42px}.simple-grain-grid{gap:52px}.inquiry-grid{gap:52px}}
      @media(max-width:900px){.navin{min-height:68px}.navlinks{display:none}.hero{padding-top:26px}.hero-grid{gap:18px;padding-bottom:30px}.hero-copy{padding:18px 0 24px}.hero-lead{line-height:1.55}.stats-strip{padding:20px 0}.why-section{padding:64px 0 74px}.why-heading{margin-bottom:30px}.why-grid{gap:14px}.products-section{padding:70px 0 82px}.products-heading{margin-bottom:30px}.barley-wellness-section{padding:70px 0 82px}.barley-wellness-grid{gap:42px}.simple-grain-section{padding:70px 0 82px}.simple-grain-grid{gap:42px}.discount-section{padding:70px 0 82px}.discount-heading{margin-bottom:30px}.more-than-section{padding:70px 0 82px}.more-than-heading{margin-bottom:30px}.three-simple-steps-section{padding:70px 0 82px}.three-simple-steps-grid{grid-template-columns:1fr;gap:14px}.stories-section{padding:70px 0 82px}.stories-heading{margin-bottom:30px}.real-stories-grid{gap:14px}.barley-feature-section{padding:70px 0 82px}.barley-feature-grid{gap:42px}.inquiry-section{padding:70px 0 82px}.inquiry-grid{gap:42px}}
      @media(max-width:600px){.wrap{padding-left:16px;padding-right:16px}.navin{min-height:64px}.hero{padding-top:20px}.hero-grid{gap:10px;padding-bottom:22px}.hero-copy{padding:14px 0 18px}.hero h1{margin-bottom:18px}.hero-lead{margin-bottom:22px;line-height:1.55}.hero-actions{gap:9px}.stats-strip{padding:16px 0 18px}.why-section{padding:54px 0 62px}.why-heading{margin-bottom:24px}.why-grid{gap:10px}.products-section{padding:58px 0 70px}.products-heading{margin-bottom:24px}.products-grid{gap:12px}.barley-wellness-section{padding:58px 0 70px}.barley-wellness-grid{gap:32px}.simple-grain-section{padding:58px 0 70px}.simple-grain-grid{gap:32px}.discount-section{padding:58px 0 70px}.discount-heading{margin-bottom:24px}.discount-grid{gap:14px}.more-than-section{padding:58px 0 70px}.more-than-heading{margin-bottom:24px}.three-simple-steps-section{padding:58px 0 70px}.three-simple-steps-heading{margin-bottom:24px}.three-simple-step-card{padding:20px}.stories-section{padding:58px 0 70px}.stories-heading{margin-bottom:24px}.real-stories-grid{gap:12px}.real-story-card{padding:20px 17px 16px}.real-story-photo{width:112px;height:112px;flex-basis:112px}.barley-feature-section{padding:58px 0 70px}.barley-feature-grid{gap:32px}.inquiry-section{padding:58px 0 70px}.inquiry-grid{gap:30px}.inquiry-form-card{padding:22px 16px 18px}}
      .mobile-nav-toggle{display:none}
      @media(max-width:900px){.mobile-nav-toggle{display:inline-flex;align-items:center;justify-content:center;width:42px;height:38px;border:1px solid #d7e5dc;border-radius:10px;background:#fff;color:#087f45;font:inherit;font-size:18px;cursor:pointer}.mobile-nav-menu{display:none;position:absolute;left:16px;right:16px;top:calc(100% + 8px);padding:10px;border:1px solid #d7e5dc;border-radius:16px;background:#fff;box-shadow:0 16px 36px rgba(7,75,47,.12)}.mobile-nav-menu.is-open{display:grid;gap:4px}.mobile-nav-menu a{padding:11px 12px;border-radius:10px;font-size:13px;font-weight:850}.mobile-nav-menu a:hover{background:#f1f8f3}.nav{position:sticky}.navin{position:relative}}
    `;
    document.head.appendChild(style);
    const nav=document.querySelector('.nav .navin');
    if(nav&&!document.getElementById('mobileNavToggle')){
      const button=document.createElement('button');button.id='mobileNavToggle';button.className='mobile-nav-toggle';button.type='button';button.setAttribute('aria-label','Open menu');button.setAttribute('aria-expanded','false');button.textContent='☰';
      const menu=document.createElement('div');menu.id='mobileNavMenu';menu.className='mobile-nav-menu';menu.setAttribute('aria-hidden','true');
      menu.innerHTML='<a href="#why-sante">Why Santé</a><a href="#products">Products</a><a href="#business">Business</a><a href="#wellness">Wellness</a><a href="#barley">Barley</a>';
      nav.appendChild(button);nav.appendChild(menu);
      button.addEventListener('click',function(){const open=menu.classList.toggle('is-open');button.setAttribute('aria-expanded',open?'true':'false');button.setAttribute('aria-label',open?'Close menu':'Open menu');menu.setAttribute('aria-hidden',open?'false':'true')});
      menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',function(){menu.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open menu');menu.setAttribute('aria-hidden','true')}));
    }
  }

  function initLeslieChat() {
    const panel = document.getElementById('helpChatPanel');
    if (!panel || panel.dataset.leslieEnhanced === '1') return;
    const options = panel.querySelector('.help-chat-options');
    if (!options) return;
    const leslieButton = Array.from(options.querySelectorAll('.help-chat-option')).find(btn => (btn.textContent || '').toLowerCase().includes('talk to leslie'));
    if (!leslieButton) return;
    panel.dataset.leslieEnhanced = '1';
    const submenu = document.createElement('div');
    submenu.className = 'leslie-submenu'; submenu.setAttribute('aria-hidden', 'true');
    submenu.innerHTML = `<button type="button" class="leslie-back">← How can we help?</button><a class="leslie-contact-option" href="https://m.me/lesliecastroicalla" target="_blank" rel="noopener noreferrer"><span class="leslie-contact-icon">💬</span><span><strong>Messenger</strong><small>Message Leslie directly</small></span></a><button type="button" class="leslie-contact-option leslie-chat-here"><span class="leslie-contact-icon">💬</span><span><strong>Chat Here</strong><small>Start a quick automated chat</small></span></button>`;
    const chatBox = document.createElement('div');
    chatBox.className = 'leslie-chat-box'; chatBox.setAttribute('aria-hidden', 'true');
    chatBox.innerHTML = `<div class="leslie-chat-head"><button type="button" class="leslie-chat-back" aria-label="Back">←</button><strong>Chat with Leslie</strong></div><div class="leslie-chat-messages"><div class="leslie-message leslie-bot">Hi! 👋 Thanks for reaching out. How can I help you today?</div></div><div class="leslie-chat-quick"><button type="button" data-msg="I’d like to order Santé Barley.">I want to order</button><button type="button" data-msg="I’d like to know about discounts.">Ask about discounts</button><button type="button" data-msg="I’d like to become a distributor.">Become a distributor</button></div>`;
    const style = document.createElement('style');
    style.textContent = `.leslie-submenu{display:none;padding:4px 0 0}.leslie-submenu.is-open{display:block}.leslie-back{display:block;width:100%;border:0;background:transparent;color:#087f45;text-align:left;padding:5px 7px 10px;font:inherit;font-size:12px;font-weight:900;cursor:pointer}.leslie-contact-option{display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;border:1px solid #dbe8df;border-radius:12px;background:#fff;color:#102018;text-align:left;text-decoration:none;padding:10px;margin-bottom:7px;cursor:pointer;font:inherit}.leslie-contact-icon{width:30px;height:30px;border-radius:9px;background:#e7f6e9;display:flex;align-items:center;justify-content:center;flex:0 0 30px}.leslie-contact-option span:last-child{display:flex;flex-direction:column;gap:2px}.leslie-contact-option strong{font-size:12px;font-weight:950}.leslie-contact-option small{font-size:10px;color:#66736d}.leslie-chat-box{display:none;margin-top:4px;border:1px solid #dbe8df;border-radius:14px;background:#fff;overflow:hidden}.leslie-chat-box.is-open{display:block}.leslie-chat-head{display:flex;align-items:center;gap:8px;padding:10px 11px;background:#f1f8f3;color:#102018;font-size:12px}.leslie-chat-back{border:0;background:transparent;color:#087f45;font-size:17px;cursor:pointer;padding:0 4px}.leslie-chat-messages{padding:10px;max-height:155px;overflow:auto}.leslie-message{max-width:90%;border-radius:11px;padding:9px 10px;font-size:11px;line-height:1.45}.leslie-bot{background:#f1f8f3;color:#102018}.leslie-chat-quick{display:grid;gap:6px;padding:0 10px 10px}.leslie-chat-quick button{border:1px solid #d7e5dc;border-radius:9px;background:#fff;color:#087f45;text-align:left;padding:8px 9px;font:inherit;font-size:10px;font-weight:850;cursor:pointer}.leslie-chat-quick button:hover{background:#f1f8f3}`;
    document.head.appendChild(style); panel.appendChild(submenu); panel.appendChild(chatBox);
    function closeDetails(){const d=document.getElementById('helpOrderDetails');if(d){d.classList.remove('is-open');d.setAttribute('aria-hidden','true')}}
    function showSubmenu(){options.style.display='none';closeDetails();submenu.classList.add('is-open');submenu.setAttribute('aria-hidden','false');chatBox.classList.remove('is-open');chatBox.setAttribute('aria-hidden','true')}
    function showMain(){submenu.classList.remove('is-open');submenu.setAttribute('aria-hidden','true');chatBox.classList.remove('is-open');chatBox.setAttribute('aria-hidden','true');options.style.display='grid'}
    function showChat(){submenu.classList.remove('is-open');submenu.setAttribute('aria-hidden','true');chatBox.classList.add('is-open');chatBox.setAttribute('aria-hidden','false')}
    if(!window.__leslieTalkCaptureInstalled){window.__leslieTalkCaptureInstalled=true;document.addEventListener('click',function(e){const btn=e.target.closest&&e.target.closest('.help-chat-option');if(!btn||!btn.closest('#helpChatPanel')||!(btn.textContent||'').toLowerCase().includes('talk to leslie'))return;const p=document.getElementById('helpChatPanel');if(!p||!p.dataset.leslieEnhanced)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();const o=p.querySelector('.help-chat-options'),s=p.querySelector('.leslie-submenu'),c=p.querySelector('.leslie-chat-box');if(o)o.style.display='none';if(s){s.classList.add('is-open');s.setAttribute('aria-hidden','false')}if(c){c.classList.remove('is-open');c.setAttribute('aria-hidden','true')}const d=document.getElementById('helpOrderDetails');if(d){d.classList.remove('is-open');d.setAttribute('aria-hidden','true')}},true)}
    leslieButton.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();showSubmenu()},true);
    submenu.querySelector('.leslie-back').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();showMain()});
    submenu.querySelector('.leslie-chat-here').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();showChat()});
    chatBox.querySelector('.leslie-chat-back').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();showSubmenu()});
    chatBox.querySelectorAll('.leslie-chat-quick button').forEach(button=>button.addEventListener('click',function(){const messages=chatBox.querySelector('.leslie-chat-messages');const userMsg=document.createElement('div');userMsg.className='leslie-message';userMsg.style.cssText='margin:7px 0 0 auto;background:#087f45;color:#fff;';userMsg.textContent=button.dataset.msg;messages.appendChild(userMsg);const reply=document.createElement('div');reply.className='leslie-message leslie-bot';reply.style.marginTop='7px';reply.textContent='Thanks! 💚 Please send your details through the inquiry form and Leslie will assist you.';messages.appendChild(reply);messages.scrollTop=messages.scrollHeight}));
    const toggle=document.getElementById('helpChatToggle');if(toggle)toggle.addEventListener('click',()=>window.setTimeout(()=>{if(!panel.classList.contains('is-open'))showMain()},0));
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initLeslieChat);else initLeslieChat();
  installPremiumPolish();
  const observer=new MutationObserver(function(){initLeslieChat();installPremiumPolish()});observer.observe(document.documentElement,{childList:true,subtree:true});

  /* Stable testimony/story player: every open creates a fresh player and every close destroys it. */
  function installTestimonyFix(){
    const modal=document.getElementById('testimonyModal');
    if(!modal||window.__stableTestimonyPlayerInstalled)return;
    window.__stableTestimonyPlayerInstalled=true;

    function stopAndReset(){
      const player=document.getElementById('testimonyFrame');
      if(player){
        try{ if(typeof player.pause==='function') player.pause(); }catch(_e){}
        player.src='about:blank';
        player.removeAttribute('src');
        player.load?.();
        player.remove();
      }
      const dialog=modal.querySelector('.testimony-dialog');
      if(dialog){
        const close=dialog.querySelector('.testimony-close');
        const blank=document.createElement('video');
        blank.id='testimonyFrame';blank.controls=true;blank.playsInline=true;
        blank.style.cssText='display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000';
        dialog.appendChild(blank);
      }
      modal.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    }

    function openPlayer(source){
      const dialog=modal.querySelector('.testimony-dialog');
      if(!dialog)return;
      const old=document.getElementById('testimonyFrame');
      if(old){try{old.pause?.()}catch(_e){};old.remove()}
      let player;
      if(/^https:\/\/www\.youtube\.com\/embed\//i.test(source)){
        player=document.createElement('iframe');
        player.src=source;player.title='Santé Testimony';player.allow='autoplay; encrypted-media; picture-in-picture';player.allowFullscreen=true;
      }else{
        player=document.createElement('video');player.src=source;player.controls=true;player.playsInline=true;player.autoplay=true;
      }
      player.id='testimonyFrame';
      player.style.cssText='display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000';
      dialog.appendChild(player);
      modal.classList.add('is-open');document.body.classList.add('modal-open');
      if(player.tagName==='VIDEO')player.play().catch(()=>{});
    }

    document.addEventListener('click',function(event){
      const story=event.target.closest&&event.target.closest('.story-card');
      if(story){
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        openPlayer(story.dataset.video||'');return;
      }
      const testimony=event.target.closest&&event.target.closest('#testimonyOpen');
      if(testimony){
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        openPlayer('https://www.youtube.com/embed/pH9Pi4dTuRg?autoplay=1&rel=0');return;
      }
      if(event.target.closest&&event.target.closest('#testimonyClose')){
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();stopAndReset();return;
      }
      if(event.target===modal){stopAndReset();}
    },true);
    document.addEventListener('keydown',function(event){if(event.key==='Escape'&&modal.classList.contains('is-open')){event.preventDefault();event.stopPropagation();stopAndReset();}},true);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installTestimonyFix);else installTestimonyFix();
})();
