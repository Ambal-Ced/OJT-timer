(function () {
  function removePageSkeleton() {
    var el = document.getElementById('page-skeleton-overlay');
    if (!el) return;
    el.classList.add('hidden');
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('aria-busy', 'false');
  }

  window.removePageSkeleton = removePageSkeleton;

  document.addEventListener('DOMContentLoaded', function () {
    if (document.body.getAttribute('data-page-skeleton') === 'defer') {
      setTimeout(removePageSkeleton, 12000);
      return;
    }
    requestAnimationFrame(removePageSkeleton);
  });
})();
