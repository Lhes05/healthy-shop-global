/* Keep the four Chat with us options visible while showing How to order details. */
(function () {
  function init() {
    const panel = document.getElementById('helpChatPanel');
    const options = panel && panel.querySelector('.help-chat-options');
    const details = document.getElementById('helpOrderDetails');
    const order = panel && panel.querySelector('.help-chat-option[data-target="products"]');
    const back = document.getElementById('helpOrderBack');
    if (!panel || !options || !details || !order || !back) return;

    order.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      options.style.display = 'grid';
      details.style.display = 'block';
      details.setAttribute('aria-hidden', 'false');
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
    }, true);

    back.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      details.style.display = 'none';
      details.setAttribute('aria-hidden', 'true');
      options.style.display = 'grid';
    }, true);

    panel.addEventListener('click', function () {
      if (!details.contains(document.activeElement)) {
        options.style.display = 'grid';
      }
    }, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
