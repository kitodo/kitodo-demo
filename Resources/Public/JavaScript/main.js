
$('.tx-dlf-basket-button a').text("merken");
$('.add-to-cart a').text("merken");


// listview

$(".tx-dlf-listview-list ol").hide();

$(".tx-dlf-listview-list ol").hide();

$(".tx-dlf-search-numHits").hide();


// show-volumes-expand
// show-volumes-minimize

$(".show-volumes").each(function () {
    if ($(this).parent().find("ol").length > 0) {
        $(this).show();
    }
});

$(".show-volumes").on("click", function (evt) {
    evt.preventDefault();
    $(this).children("a").toggleClass("down");
    $(this).parent().find("ol").toggle();
});




// Detailview

// return to list link
if ($('.tx-dlf-navigation-listview a').length > 0) {
    $('.meta-actions #backlink').show();
    $('.meta-actions #backlink').attr( "href", $('.tx-dlf-navigation-listview a').attr("href"));
}

$(".tx-dlf-navigation-zoom-in").click(function() { tx_dlf_viewer.map.zoomIn(); });
$(".tx-dlf-navigation-zoom-out").click(function() { tx_dlf_viewer.map.zoomOut(); });
$(".tx-dlf-navigation-rotate-right a").click(function () {
    tx_dlf_viewer.map.rotate(90);
});
$(".tx-dlf-navigation-rotate-left a").click(function () {
    tx_dlf_viewer.map.rotate(-90);
});

// collapse metadata
$('.tx-dlf-metadata').on("click", function (evt) {
    $('.secondpart').toggle();
})

$('.tx-dlf-navigation-double a, .tx-dlf-navigation-double span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-doublepage.svg" alt="Show double pages">');

$('.tx-dlf-navigation-double-plus a, .tx-dlf-navigation-double-plus span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-verso.svg" alt="Adjust recto/verso">');

$('.tx-dlf-navigation-zoom-in a, .tx-dlf-navigation-zoom-in span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-zoomin.svg" alt="Zoom In">');

$('.tx-dlf-navigation-zoom-out a, .tx-dlf-navigation-zoom-out span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-zoomout.svg" alt="Zoom Out">');

$('.tx-dlf-navigation-rotate-left a, .tx-dlf-navigation-rotate-left span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-rotateleft.svg" alt="Rotate Left">');

$('.tx-dlf-navigation-rotate-right a, .tx-dlf-navigation-rotate-right span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-rotateright.svg" alt="Rotate Right">');

$('.tx-dlf-navigation-first a, .tx-dlf-navigation-first span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-skipleft.svg" alt="First Page">');

$('.tx-dlf-navigation-prev a, .tx-dlf-navigation-prev span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-doubleleft.svg" alt="Back 5 Pages">');

$('.tx-dlf-navigation-back a, .tx-dlf-navigation-back span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-singleleft.svg" alt="Previous Page">');

$('.tx-dlf-navigation-next a, .tx-dlf-navigation-next span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-singleright.svg" alt="Next Page">');

$('.tx-dlf-navigation-fwd a, .tx-dlf-navigation-fwd span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-doubleright.svg" alt="Forward 5 Pages">');

$('.tx-dlf-navigation-last a, .tx-dlf-navigation-last span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-skipright.svg" alt="Last Page">');

$('.tx-dlf-navigation-listview a, .tx-dlf-navigation-listview span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-skipright.svg" alt="Zurück zur Liste">');

$('.tx-dlf-navigation-listview a, .tx-dlf-navigation-listview span')
    .text("")
    .append('<img src="../../typo3conf/ext/presentation_package/Resources/Public/Images/icon-skipright.svg" alt="Last Page">');


$('ul.tx-dlf-navigation').append($('.tx-dlf-navigation-edit'));

$('ul.tx-dlf-navigation').append($('.tx-dlf-navigation-editRemove'));

$('ul.tx-dlf-navigation').append($('.tx-dlf-navigation-magnifier'));

