/* Santé Everyday Wellness — clean section + chat interactions */
(function () {
  function initChat() {
    const panel = document.getElementById('helpChatPanel');
    const options = panel && panel.querySelector('.help-chat-options');
    const details = document.getElementById('helpOrderDetails');
    const order = panel && panel.querySelector('.help-chat-option[data-target="products"]');
    const back = document.getElementById('helpOrderBack');
    if (!panel || !options || !details || !order || !back) return;

    order.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      options.style.display = 'none';
      details.style.display = 'block';
      details.setAttribute('aria-hidden', 'false');
    }, true);

    back.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      details.style.display = 'none';
      details.setAttribute('aria-hidden', 'true');
      options.style.display = 'grid';
    }, true);
  }

  function addCleanStories() {
    if (document.getElementById('real-stories')) return;
    const anchor = document.getElementById('three-simple-steps');
    if (!anchor) return;

    const style = document.createElement('style');
    style.textContent = `
      #real-stories{background:#f5fbf7;color:#102018;padding:72px 0 80px;scroll-margin-top:76px}
      .real-stories-heading{margin:0 0 28px}
      .real-stories-eyebrow{display:block;margin:0 0 9px;color:#087f45;font-size:10px;letter-spacing:2px;font-weight:950}
      .real-stories-heading h2{margin:0 0 9px;font-size:clamp(40px,5vw,62px);line-height:1.02;letter-spacing:-3px;font-weight:950}
      .real-stories-heading p{margin:0;color:#52605a;font-size:14px;line-height:1.5}
      .real-stories-shell{background:#fff;border:1px solid #e0ebe4;border-radius:26px;padding:14px;box-shadow:0 16px 38px rgba(7,75,47,.08)}
      .real-stories-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
      .real-story-card{min-height:330px;border-radius:17px;background:linear-gradient(180deg,#003824 0%,#002c1d 100%);color:#fff;padding:20px;display:flex;flex-direction:column;overflow:hidden}
      .real-story-quote-mark{font-size:40px;line-height:.7;color:#7ecb31;font-weight:950;margin-bottom:12px}
      .real-story-quote{margin:0;color:#f7fbf8;font-size:13px;line-height:1.6;flex:1}
      .real-story-quote em{font-style:normal;color:#fff}
      .real-story-footer{display:flex;align-items:flex-end;gap:12px;margin-top:18px}
      .real-story-photo{width:118px;height:118px;border-radius:50%;object-fit:cover;object-position:50% 30%;border:2px solid rgba(255,255,255,.72);flex:0 0 118px;background:#184d37;display:block}
      .real-story-meta{min-width:0}.real-story-name{margin:0;color:#7ecb31;font-size:12px;font-weight:950}.real-story-from{margin-top:4px;color:#fff;font-size:11px}.real-story-stars{margin-top:7px;color:#ffc400;font-size:17px;letter-spacing:1px}
      @media(max-width:900px){#real-stories{padding:60px 0 68px}.real-stories-grid{grid-template-columns:1fr;gap:12px}.real-story-card{min-height:0}}
      @media(max-width:600px){#real-stories{padding:50px 0 58px}.real-stories-shell{padding:10px;border-radius:21px}.real-story-card{padding:18px 16px}.real-story-photo{width:108px;height:108px;flex-basis:108px}}
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.id = 'real-stories';
    section.innerHTML = `
      <div class="wrap">
        <div class="real-stories-heading">
          <span class="real-stories-eyebrow">REAL STORIES</span>
          <h2>Real people. Real experiences.</h2>
          <p>Stories from members of the Santé community.</p>
        </div>
        <div class="real-stories-shell"><div class="real-stories-grid">
          <article class="real-story-card"><div class="real-story-quote-mark">“</div><p class="real-story-quote">Hindi ko akalain na ang isang desisyon na gawin ang negosyo ng Santé Barley, ang magbibigay sa akin ng magandang income bukod sa salary ko dito sa Dubai. <em>“Always give yourself and your dreams a chance.”</em><br><br>Sa mga kapwa ko OFW, kayang-kaya nyo din ito.</p><div class="real-story-footer"><img class="real-story-photo" src="assets/images/SALLY.png" alt="Sally OFW"><div class="real-story-meta"><p class="real-story-name">SALLY OFW</p><div class="real-story-from">U.A.E.</div><div class="real-story-stars">★★★★★</div></div></div></article>
          <article class="real-story-card"><div class="real-story-quote-mark">“</div><p class="real-story-quote">Hindi naman ako naghahanap ng malaking pera. <em>“Ang gusto ko lang noon ay magkaroon ng ibang option. Nag-start ako by learning first and understanding how the business works. Hindi naging overnight ang results, pero at least may sinimulan akong buuin para sa future ko.”</em></p><div class="real-story-footer"><img class="real-story-photo" src="assets/images/ALTHEA.png" alt="Althea OFW"><div class="real-story-meta"><p class="real-story-name">ALTHEA OFW</p><div class="real-story-from">Singapore</div><div class="real-story-stars">★★★★★</div></div></div></article>
          <article class="real-story-card"><div class="real-story-quote-mark">“</div><p class="real-story-quote">Akala ko kailangan kong hintayin munang makauwi bago ako magsimula! <em>“OFW ako at dati, ang focus ko lang talaga ay kumita para sa pamilya. Pero habang tumatagal, naisip ko rin, paano naman kapag dumating yung panahon na gusto ko nang umuwi? Kaya nagsimula akong mag-explore ng opportunity na pwede kong matutunan habang nagtatrabaho pa ako abroad.”</em></p><div class="real-story-footer"><img class="real-story-photo" src="assets/images/SUSAN.png" alt="Susan OFW"><div class="real-story-meta"><p class="real-story-name">SUSAN OFW</p><div class="real-story-from">Hong Kong</div><div class="real-story-stars">★★★★★</div></div></div></article>
        </div></div>
      </div>`;
    anchor.insertAdjacentElement('afterend', section);
  }

  function addOpportunity() {
    if (document.getElementById('opportunity-section')) return;
    const anchor = document.getElementById('barley-feature');
    if (!anchor) return;

    const style = document.createElement('style');
    style.textContent = `
      #opportunity-section{background:#fff;color:#102018;padding:72px 0 82px;scroll-margin-top:76px}
      .opportunity-heading{text-align:center;margin:0 auto 26px;max-width:980px}.opportunity-heading h2{margin:0;color:#303631;font-size:clamp(36px,4.5vw,60px);line-height:1;letter-spacing:-2.8px;font-weight:950;text-transform:uppercase}.opportunity-heading p{margin:13px 0 0;color:#52605a;font-size:18px}
      .opportunity-gallery{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:0 auto 18px;max-width:1320px}.opportunity-card{border-radius:16px;overflow:hidden;background:#f2f2f2;box-shadow:0 8px 20px rgba(0,0,0,.08)}.opportunity-card img{display:block;width:100%;aspect-ratio:1.55/1;object-fit:cover}
      .opportunity-video{display:flex;justify-content:center;margin-top:10px}.opportunity-video-link{position:relative;display:block;width:min(100%,1000px);aspect-ratio:16/8.4;border-radius:22px;overflow:hidden;background:#f2f2f2 url('https://img.youtube.com/vi/VZGViq5kzHA/maxresdefault.jpg') center/cover no-repeat;box-shadow:0 18px 42px rgba(0,0,0,.12);text-decoration:none}.opportunity-video-link:after{content:'';position:absolute;inset:0;background:rgba(0,0,0,.06)}.opportunity-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:82px;height:82px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;color:#087f45;font-size:37px;padding-left:5px;z-index:2;box-shadow:0 8px 24px rgba(0,0,0,.18)}.opportunity-video-label{position:absolute;left:22px;bottom:20px;z-index:2;background:rgba(255,255,255,.94);color:#102018;border-radius:10px;padding:7px 10px;font-size:10px;font-weight:950;letter-spacing:.5px}
      @media(max-width:900px){#opportunity-section{padding:60px 0 70px}.opportunity-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}.opportunity-video-link{aspect-ratio:16/9}}
      @media(max-width:600px){#opportunity-section{padding:50px 0 60px}.opportunity-heading h2{font-size:34px;letter-spacing:-1.6px}.opportunity-heading p{font-size:16px}.opportunity-gallery{grid-template-columns:1fr;gap:10px}.opportunity-video-link{border-radius:16px}.opportunity-play{width:64px;height:64px;font-size:29px}.opportunity-video-label{left:12px;bottom:12px;font-size:9px}}
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.id = 'opportunity-section';
    section.innerHTML = `
      <div class="wrap">
        <div class="opportunity-heading"><h2>DO YOU HAVE ANY OTHER OPTION<br>BESIDES YOUR SALARY?</h2><p>Explore the opportunity and decide what is right for you.</p></div>
        <div class="opportunity-gallery">
          <div class="opportunity-card"><img src="assets/images/1.png" alt="Santé business system guide"></div>
          <div class="opportunity-card"><img src="assets/images/2.png" alt="Santé training and learning"></div>
          <div class="opportunity-card"><img src="assets/images/3.png" alt="Santé online system"></div>
          <div class="opportunity-card"><img src="assets/images/4.png" alt="Santé business tools"></div>
        </div>
        <div class="opportunity-video"><a class="opportunity-video-link" href="https://www.youtube.com/watch?v=VZGViq5kzHA" aria-label="Watch Santé opportunity video"><span class="opportunity-play" aria-hidden="true">▶</span><span class="opportunity-video-label">WATCH THE VIDEO</span></a></div>
      </div>`;
    anchor.insertAdjacentElement('afterend', section);

    const videoLink = section.querySelector('.opportunity-video-link');
    if (videoLink) videoLink.addEventListener('click', function (event) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
      const modal = document.getElementById('testimonyModal');
      const dialog = modal && modal.querySelector('.testimony-dialog');
      if (!modal || !dialog) return;
      const old = document.getElementById('testimonyFrame'); if (old) old.remove();
      const player = document.createElement('iframe');
      player.id = 'testimonyFrame'; player.src = 'https://www.youtube.com/embed/VZGViq5kzHA?autoplay=1&rel=0'; player.title = 'Santé opportunity video'; player.allow = 'autoplay; encrypted-media; picture-in-picture'; player.allowFullscreen = true; player.style.cssText = 'display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000';
      dialog.appendChild(player); modal.classList.add('is-open'); document.body.classList.add('modal-open');
    }, true);
  }

  function wireBusiness() {
    document.querySelectorAll('.navlinks a[href="#business"], .mobile-nav-menu a[href="#business"]').forEach(function (link) {
      link.setAttribute('href', '#opportunity-section');
      link.addEventListener('click', function (event) { event.preventDefault(); const target = document.getElementById('opportunity-section'); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, true);
    });
  }

  function start() { initChat(); addCleanStories(); addOpportunity(); wireBusiness(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
