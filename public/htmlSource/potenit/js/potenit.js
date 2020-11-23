function simpleLightbox(imageUrl, bgColor, maxWidth) {
    if (typeof bgColor === 'undefined') {
        bgColor = ' background-color:white';
    }
    if (typeof maxWidth === 'undefined') {
        maxWidth = '1100px';
    }
    window.open('', 'simpleLightbox').document.write('<html><head><meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, width=device-width" /></head><body style="margin:0;' + bgColor + ';height:100%;" onclick="javascript:window.close(\'simpleLightbox\');"><table border="0" width="100%" height="100%"><tr><td valign="middle" align="center"><img style="position:relative;z-index:2;width:100%;max-width:' + maxWidth + ';" src="' + imageUrl + '"/></td></tr></table></body></html>');
}


function initMap() {
    var uluru = {
        lat: 37.486959,
        lng: 126.892979
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function () {

    $(this)
        .data('aspectRatio', this.height / this.width)

        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');

});

// When the window is resized
$(window).resize(function () {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function () {

        var $el = $(this);
        $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));

    });

    // Kick off one resize to fix all videos on page load
}).resize();
