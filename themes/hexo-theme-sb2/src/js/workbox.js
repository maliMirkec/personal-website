import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const displayMessage = () => {
    const $swButton = document.createElement('div')
    $swButton.className = 'cta cta--beta cta--omega';
    $swButton.innerHTML = '<div class="cta__content"><p><span>The content has been updated. To see the latest changes, refresh the page, please.</span></p></div><button class="btn" type="button" onclick="window.location.reload()"><span>Refresh</span><span>To see updates</span></button>';
    document.body.appendChild($swButton)
  }

  const wb = new Workbox('/sw.js');

  wb.addEventListener('installed', event => {
    console.log('installed');
    if (!event.isUpdate) {
      displayMessage()
    }
  });

  wb.addEventListener('activated', (event) => {
    console.log('activated');
    if (!event.isUpdate) {
      console.log('Service Worker has been installed successfully.')
    } else {
      displayMessage()
    }
  });

  wb.addEventListener('message', (event) => {
    console.log('message');
    if (event.data.type === 'CACHE_UPDATED') {
      displayMessage()
    }
  });

  wb.addEventListener('waiting', () => {
    console.log('waiting');
    displayMessage()
  });

  wb.addEventListener('externalinstalled', (event) => {
    console.log('externalinstalled');
    if (!event.isUpdate) {
      displayMessage()
    }
  });

  wb.addEventListener('externalactivated', (event) => {
    console.log('externalactivated');
    if (!event.isUpdate) {
      console.log('Service Worker has been installed successfully.')
    } else {
      displayMessage()
    }
  });

  wb.addEventListener('externalwaiting', () => {
    console.log('externalwaiting');
    displayMessage()
  });

  wb.register();
}
