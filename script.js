const closeButton = document.querySelector('#close-letter');
const envelope = document.querySelector('#envelope');
const invitation = document.querySelector('#invitation');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function openLetter() {
  if (envelope.disabled || invitation.open) return;
  envelope.disabled = true;
  envelope.classList.add('is-open');

  window.setTimeout(() => {
    invitation.showModal();
    document.body.classList.add('letter-is-open');
    envelope.disabled = false;
  }, reducedMotion.matches ? 0 : 650);
}

envelope.addEventListener('click', openLetter);

closeButton.addEventListener('click', () => invitation.close());

invitation.addEventListener('click', (event) => {
  if (event.target !== invitation) return;
  const bounds = invitation.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    invitation.close();
  }
});

invitation.addEventListener('close', () => {
  document.body.classList.remove('letter-is-open');
  envelope.classList.remove('is-open');
  envelope.focus({ preventScroll: true });
});
