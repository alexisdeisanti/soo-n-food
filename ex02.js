$(document).ready(function(){  // 
// ----------------------------------------------------------------------------

//ABOUT IMAGE - FIRST
//start faded in
// $('.aboutimgfade').css('opacity', 100)
//when the mouse hovers over the about text, the image fades out
$('.indexabouttext').mouseenter(function() {
	$('.aboutimgfade').fadeTo('slow', .30);
});
//When the mouse leaves text, image fade back in
$('.indexabouttext').mouseleave(function() {
	$('.aboutimgfade').stop(true, true).fadeTo('slow', 100);
});
//END ABOUT IMAGE

//SHOP IMAGE - SECOND
//start faded in

//when the mouse hovers over the about text, the image fades out
$('.indexshoptext').mouseenter(function() {
	$('.shopimgfade').fadeTo('slow', .30);
});
//When the mouse leaves text, image fade back in
$('.indexshoptext').mouseleave(function() {
	$('.shopimgfade').stop(true, true).fadeTo('slow', 100);
});
//END SHOP IMAGE

//CONTACT IMAGE - THIRD
//start faded in
//when the mouse hovers over the about text, the image fades out
$('.indexcontacttext').mouseenter(function() {
	$('.contactimgfade').fadeTo('slow', .30)
});
//When the mouse leaves text, image fade back in
$('.indexcontacttext').mouseleave(function() {
	$('.contactimgfade').stop(true, true).fadeTo('slow', 100)
});

//END CONTACT IMAGE

// ----------------------------------------------------------------------------
}); // do not delete