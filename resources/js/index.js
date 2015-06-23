$(document).ready(function() {


    setFullPages();
});

function setFullPages() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        'sectionsColor': ['#3D577A', '#677C97', '#3D577A', '#677C97'],
        navigation: true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Overview', 'Experience', 'Education', 'About'],
        anchors: ['overview', 'experience', 'education', 'about']
    });
}
