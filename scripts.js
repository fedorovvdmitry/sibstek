document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var popupMenu = document.getElementById('popupMenu');
    
    menuButton.addEventListener('click', function() {
        var computedStyle = window.getComputedStyle(popupMenu);
        var displayStyle = computedStyle.getPropertyValue('display');
        
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
