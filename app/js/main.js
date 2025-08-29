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

