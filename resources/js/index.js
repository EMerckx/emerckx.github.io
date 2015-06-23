$(document).ready(function() {


    setFullPages();
});

function setFullPages() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        //'sectionsColor': ['#00244d', '#193b61', '#00244d', '#193b61'],
        'sectionsColor': ['#193b61', '#304D6F', '#193b61', '#304D6F'],
        navigation: true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Overview', 'Experience', 'Education', 'About'],
        anchors: ['overview', 'experience', 'education', 'about'],
        scrollOverflow: true
    });
}
