var xCard = $('#mainPage .xCard');
var dCard = $('#departmentPage .xCard');
var departmentPage = $('#departmentPage');
var coursePage = $('#coursePage');
var sideNav = $('#sliderNav');


$(document).ready(function() {
    initiateSlick();
});





function initiateSlick() {
    $('.slideX').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}


function openDepartmentPage() {

    departmentPage.css('display', 'block');
    setTimeout(() => {
        departmentPage.css('opacity', '1');
    }, 50);

}

function closeDepartmentPage() {
    this.departmentPage.css('display', 'none');
}

function openCoursePage() {
    coursePage.css('display', 'block');
    setTimeout(() => {
        coursePage.css('opacity', '1');
    }, 50);
}

function closeCoursePage() {
    this.coursePage.css('display', 'none');
}

function openSideNav() {
    this.sideNav.css('width', '45%');
}

function closeSideNav() {
    this.sideNav.css('width', '0%');
}


this.xCard.click(() => {
    this.openDepartmentPage();
});

this.dCard.click(() => {
    this.openCoursePage();
});