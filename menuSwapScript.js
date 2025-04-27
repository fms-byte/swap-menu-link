function swapReferenceAndCommunity() {
  if (sessionStorage.getItem('menuSwapped') === 'true') {
    console.log('Menu items were already swapped in this session.');
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', performSwap);
  } else {
    performSwap();
  }

  function performSwap() {
    try {
      const menuContainer = document.querySelector('div.mx-2\\.5.gap-1\\.5.hidden.lg\\:flex');
      
      if (!menuContainer) {
        console.log('Navigation menu container not found.');
        return;
      }

      let referenceItem = null;
      let communityItem = null;

      const menuItems = menuContainer.querySelectorAll(':scope > div');
      
      for (const item of menuItems) {
        const link = item.querySelector('a');
        if (!link) continue;
        
        if (link.getAttribute('href') === '/reference/react') {
          referenceItem = item;
        } else if (link.getAttribute('href') === '/community') {
          communityItem = item;
        }
      }

      if (!referenceItem || !communityItem) {
        console.log('Reference and/or Community menu items not found.');
        return;
      }

      const parent = referenceItem.parentNode;

      const referenceIndex = Array.from(parent.children).indexOf(referenceItem);
      const communityIndex = Array.from(parent.children).indexOf(communityItem);

      const placeholder = document.createElement('div');
      placeholder.style.display = 'none';
      
      if (referenceIndex < communityIndex) {
        parent.insertBefore(placeholder, referenceItem);
        parent.insertBefore(referenceItem, communityItem.nextSibling);
        parent.insertBefore(communityItem, placeholder);
      } else {
        parent.insertBefore(placeholder, communityItem);
        parent.insertBefore(communityItem, referenceItem.nextSibling);
        parent.insertBefore(referenceItem, placeholder);
      }

      parent.removeChild(placeholder);

      sessionStorage.setItem('menuSwapped', 'true');
      console.log('Successfully swapped Reference and Community menu items!');
    } catch (error) {
      console.error('Error while swapping menu items:', error);
    }
  }
}

swapReferenceAndCommunity();
