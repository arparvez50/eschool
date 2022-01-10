// Mobile Menu Button event here
let mobileMenuBtn = document.getElementById('mobile-menu');
let mobileMenuCrossBtn = document.getElementById('cross-btn');
let mobileMenuBody = document.querySelector('.mobile-menu-body');
let mobileMenuLinks = document.querySelectorAll('.mobile-menu-links');
// Mobile menu button clicked
mobileMenuBtn.addEventListener('click', function () {
    mobileMenuBody.style.display = 'block';
    mobileMenuCrossBtn.style.display = 'inline-block';
    mobileMenuBtn.style.display = 'none'
    console.log('clicked');
})

// Mobile menu cross button Event

mobileMenuCrossBtn.addEventListener('click', function () {
    mobileMenuBody.style.display = 'none';
    mobileMenuCrossBtn.style.display = 'none';
    mobileMenuBtn.style.display = 'inline-block'
});


// Mobile Menu link Event
[...mobileMenuLinks].forEach(v => {
    v.addEventListener('click', function () {
        mobileMenuBtn.style.display = 'inline-block'
        mobileMenuBody.style.display = 'none';
        mobileMenuCrossBtn.style.display = 'none';
    })
})