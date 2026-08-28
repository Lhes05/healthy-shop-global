/* Leslie contact submenu + Chat Here automation */
(function () {
  function initLeslieChat() {
    const panel = document.getElementById('helpChatPanel');
    if (!panel || panel.dataset.leslieEnhanced === '1') return;

    const options = panel.querySelector('.help-chat-options');
    if (!options) return;

    const leslieButton = Array.from(options.querySelectorAll('.help-chat-option'))
      .find(btn => (btn.textContent || '').toLowerCase().includes('talk to leslie'));
    if (!leslieButton) return;

    panel.dataset.leslieEnhanced = '1';

    const submenu = document.createElement('div');
    submenu.className = 'leslie-submenu';
    submenu.setAttribute('aria-hidden', 'true');
    submenu.innerHTML = `
      <button type="button" class="leslie-back">← How can we help?</button>
      <a class="leslie-contact-option" href="https://m.me/lesliecastroicalla" target="_blank" rel="noopener noreferrer">
        <span class="leslie-contact-icon">💬</span>
        <span><strong>Messenger</strong><small>Message Leslie directly</small></span>
      </a>
      <button type="button" class="leslie-contact-option leslie-chat-here">
        <span class="leslie-contact-icon">💬</span>
        <span><strong>Chat Here</strong><small>Start a quick automated chat</small></span>
      </button>
    `;

    const chatBox = document.createElement('div');
    chatBox.className = 'leslie-chat-box';
    chatBox.setAttribute('aria-hidden', 'true');
    chatBox.innerHTML = `
      <div class="leslie-chat-head">
        <button type="button" class="leslie-chat-back" aria-label="Back">←</button>
        <strong>Chat with Leslie</strong>
      </div>
      <div class="leslie-chat-messages">
        <div class="leslie-message leslie-bot">Hi! 👋 Thanks for reaching out. How can I help you today?</div>
      </div>
      <div class="leslie-chat-quick">
        <button type="button" data-msg="I’d like to order Santé Barley.">I want to order</button>
        <button type="button" data-msg="I’d like to know about discounts.">Ask about discounts</button>
        <button type="button" data-msg="I’d like to become a distributor.">Become a distributor</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .leslie-submenu{display:none;padding:4px 0 0}.leslie-submenu.is-open{display:block}
      .leslie-back{display:block;width:100%;border:0;background:transparent;color:#087f45;text-align:left;padding:5px 7px 10px;font:inherit;font-size:12px;font-weight:900;cursor:pointer}
      .leslie-contact-option{display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;border:1px solid #dbe8df;border-radius:12px;background:#fff;color:#102018;text-align:left;text-decoration:none;padding:10px;margin-bottom:7px;cursor:pointer;font:inherit}
      .leslie-contact-icon{width:30px;height:30px;border-radius:9px;background:#e7f6e9;display:flex;align-items:center;justify-content:center;flex:0 0 30px}
      .leslie-contact-option span:last-child{display:flex;flex-direction:column;gap:2px}.leslie-contact-option strong{font-size:12px;font-weight:950}.leslie-contact-option small{font-size:10px;color:#66736d}
      .leslie-chat-box{display:none;margin-top:4px;border:1px solid #dbe8df;border-radius:14px;background:#fff;overflow:hidden}.leslie-chat-box.is-open{display:block}
      .leslie-chat-head{display:flex;align-items:center;gap:8px;padding:10px 11px;background:#f1f8f3;color:#102018;font-size:12px}.leslie-chat-back{border:0;background:transparent;color:#087f45;font-size:17px;cursor:pointer;padding:0 4px}
      .leslie-chat-messages{padding:10px;max-height:155px;overflow:auto}.leslie-message{max-width:90%;border-radius:11px;padding:9px 10px;font-size:11px;line-height:1.45}.leslie-bot{background:#f1f8f3;color:#102018}
      .leslie-chat-quick{display:grid;gap:6px;padding:0 10px 10px}.leslie-chat-quick button{border:1px solid #d7e5dc;border-radius:9px;background:#fff;color:#087f45;text-align:left;padding:8px 9px;font:inherit;font-size:10px;font-weight:850;cursor:pointer}.leslie-chat-quick button:hover{background:#f1f8f3}
    `;
    document.head.appendChild(style);
    panel.appendChild(submenu);
    panel.appendChild(chatBox);

    function closeDetails() {
      const orderDetails = document.getElementById('helpOrderDetails');
      if (orderDetails) {
        orderDetails.classList.remove('is-open');
        orderDetails.setAttribute('aria-hidden', 'true');
      }
    }
    function showSubmenu() {
      options.style.display = 'none';
      closeDetails();
      submenu.classList.add('is-open');
      submenu.setAttribute('aria-hidden', 'false');
      chatBox.classList.remove('is-open');
      chatBox.setAttribute('aria-hidden', 'true');
    }
    function showMain() {
      submenu.classList.remove('is-open');
      submenu.setAttribute('aria-hidden', 'true');
      chatBox.classList.remove('is-open');
      chatBox.setAttribute('aria-hidden', 'true');
      options.style.display = 'grid';
    }
    function showChat() {
      submenu.classList.remove('is-open');
      submenu.setAttribute('aria-hidden', 'true');
      chatBox.classList.add('is-open');
      chatBox.setAttribute('aria-hidden', 'false');
    }

    // Capture Talk to Leslie before the existing panel-level menu handler.
    if (!window.__leslieTalkCaptureInstalled) {
      window.__leslieTalkCaptureInstalled = true;
      document.addEventListener('click', function (e) {
        const btn = e.target.closest && e.target.closest('.help-chat-option');
        if (!btn) return;
        if (!btn.closest('#helpChatPanel')) return;
        if (!(btn.textContent || '').toLowerCase().includes('talk to leslie')) return;
        const currentPanel = document.getElementById('helpChatPanel');
        if (!currentPanel || !currentPanel.dataset.leslieEnhanced) return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentOptions = currentPanel.querySelector('.help-chat-options');
        const currentSubmenu = currentPanel.querySelector('.leslie-submenu');
        const currentChat = currentPanel.querySelector('.leslie-chat-box');
        if (currentOptions) currentOptions.style.display = 'none';
        if (currentSubmenu) {
          currentSubmenu.classList.add('is-open');
          currentSubmenu.setAttribute('aria-hidden', 'false');
        }
        if (currentChat) {
          currentChat.classList.remove('is-open');
          currentChat.setAttribute('aria-hidden', 'true');
        }
        const orderDetails = document.getElementById('helpOrderDetails');
        if (orderDetails) {
          orderDetails.classList.remove('is-open');
          orderDetails.setAttribute('aria-hidden', 'true');
        }
      }, true);
    }

    leslieButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      showSubmenu();
    }, true);

    submenu.querySelector('.leslie-back').addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation(); showMain();
    });
    submenu.querySelector('.leslie-chat-here').addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation(); showChat();
    });
    chatBox.querySelector('.leslie-chat-back').addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation(); showSubmenu();
    });

    chatBox.querySelectorAll('.leslie-chat-quick button').forEach(function (button) {
      button.addEventListener('click', function () {
        const messages = chatBox.querySelector('.leslie-chat-messages');
        const userMsg = document.createElement('div');
        userMsg.className = 'leslie-message';
        userMsg.style.cssText = 'margin:7px 0 0 auto;background:#087f45;color:#fff;';
        userMsg.textContent = button.dataset.msg;
        messages.appendChild(userMsg);
        const reply = document.createElement('div');
        reply.className = 'leslie-message leslie-bot';
        reply.style.marginTop = '7px';
        reply.textContent = 'Thanks! 💚 Please send your details through the inquiry form and Leslie will assist you.';
        messages.appendChild(reply);
        messages.scrollTop = messages.scrollHeight;
      });
    });

    const toggle = document.getElementById('helpChatToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        window.setTimeout(function () {
          if (!panel.classList.contains('is-open')) showMain();
        }, 0);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLeslieChat);
  else initLeslieChat();
  const observer = new MutationObserver(initLeslieChat);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/* Restore the Watch Testimonies YouTube video.
   The current index uses a <video> element but passes it a YouTube embed URL,
   which browsers cannot play as a native video source. Intercept the button
   before the old handler and replace the player with a YouTube iframe. */
(function () {
  function installTestimonyFix() {
    const button = document.getElementById('testimonyOpen');
    const modal = document.getElementById('testimonyModal');
    if (!button || !modal || window.__testimonyYouTubeFixInstalled) return;
    window.__testimonyYouTubeFixInstalled = true;

    document.addEventListener('click', function (event) {
      const target = event.target.closest && event.target.closest('#testimonyOpen');
      if (!target) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const oldPlayer = document.getElementById('testimonyFrame');
      if (!oldPlayer) return;

      const iframe = document.createElement('iframe');
      iframe.id = 'testimonyFrame';
      iframe.src = 'https://www.youtube.com/embed/pH9Pi4dTuRg?autoplay=1&rel=0';
      iframe.title = 'Santé Testimony';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000';
      oldPlayer.replaceWith(iframe);

      modal.classList.add('is-open');
      document.body.classList.add('modal-open');
    }, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installTestimonyFix);
  else installTestimonyFix();
})();
