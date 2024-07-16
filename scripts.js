document.addEventListener('DOMContentLoaded', function() {
    let menuButton = document.getElementById('menuButton');
    let popupMenu = document.getElementById('popupMenu');
    
    menuButton.addEventListener('click', function() {
        let computedStyle = window.getComputedStyle(popupMenu);
        let displayStyle = computedStyle.getPropertyValue('display');
        
        if (displayStyle === 'block') {
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    });
    
    document.addEventListener('click', function(event) {
        if (event.target !== menuButton && !menuButton.contains(event.target) && event.target !== popupMenu && !popupMenu.contains(event.target)) {
            popupMenu.style.display = 'none';
        }
    });
});
