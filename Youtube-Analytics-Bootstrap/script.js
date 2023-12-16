let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function(){
        navLinks.forEach((navLink) => {
            navLink.classList.remove(
                'border-top', 
                'border-4', 
                'border-warning', 
                'border-bottom-0', 
                'border-start-0', 
                'border-end-0'
            );
        });
        navLink.classList.add(
            'border-top', 
            'border-4', 
            'border-warning', 
            'border-bottom-0', 
            'border-start-0', 
            'border-end-0'
        );
    });
});