//start header menu button
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__menu-button');
    const menu = document.querySelector('.header__menu');
    const header = document.querySelector('.header');
    
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
        header.classList.toggle('active');
    });
});
//end header menu button

//start cta sticky section
document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.querySelector('.cta-section');
    let isSticky = false;
    let originalTop = 0;
    
    // Get the original position when page loads
    window.addEventListener('load', function() {
        originalTop = ctaSection.offsetTop;
    });
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const sectionHeight = ctaSection.offsetHeight;
        
        // Calculate when section should become sticky (when bottom of section reaches bottom of viewport + extra offset)
        const stickyPoint = originalTop + sectionHeight - windowHeight + 200;
        
        if (scrollTop >= stickyPoint && scrollTop > 100 && !isSticky) {
            // Make it sticky
            ctaSection.classList.add('sticky');
            isSticky = true;
        } else if ((scrollTop < stickyPoint || scrollTop <= 100) && isSticky) {
            // Return to original position
            ctaSection.classList.remove('sticky');
            isSticky = false;
        }
    });
});
//end cta sticky section