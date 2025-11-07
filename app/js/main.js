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

//start faq section
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item-header');
    
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const faqItem = this.closest('.faq__item');
            const faqContent = faqItem.querySelector('.faq__item-content');
            faqItem.classList.toggle('active');
            faqContent.classList.toggle('active');
        });
    });
});
//end faq section


//start sticky header on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    if (!header) return;

    const updateSticky = () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
});
//end sticky header on scroll


//start sticky cta on scroll
document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.querySelector('.cta-section');
    if (!ctaSection) return;

    const updateCtaSticky = () => {
        if (window.scrollY > 250) {
            ctaSection.classList.add('sticky');
        } else {
            ctaSection.classList.remove('sticky');
        }
    };

    updateCtaSticky();
    window.addEventListener('scroll', updateCtaSticky, { passive: true });
});
//end sticky cta on scroll