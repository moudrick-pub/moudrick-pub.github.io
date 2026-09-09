// Copy-to-clipboard for attribution snippets. No dependencies, degrades to nothing.
document.addEventListener('click', function (event) {
  var button = event.target.closest('.copy');
  if (!button || !navigator.clipboard) return;
  navigator.clipboard.writeText(button.getAttribute('data-copy')).then(function () {
    var original = button.textContent;
    button.textContent = 'Copied';
    button.setAttribute('data-copied', 'true');
    setTimeout(function () {
      button.textContent = original;
      button.removeAttribute('data-copied');
    }, 1600);
  });
});
