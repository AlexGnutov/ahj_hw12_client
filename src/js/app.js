import NewsBlock from './newsblock/newsblock';

// Init service worker
if (navigator.serviceWorker) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register(
        '/service-worker.js', { scope: './' },
      );
    } catch (e) {
      // console.log(e);
    }
  });
}

window.addEventListener('load', async () => {
  const container = document.getElementById('container');
  const newsBlock = new NewsBlock();
  newsBlock.bindToDOM(container);
  await newsBlock.init();
});
