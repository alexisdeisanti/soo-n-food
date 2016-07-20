$(document).ready(function(){  // 
// ----------------------------------------------------------------------------

//start faded out
$('.fadeitem01').css('opacity', 0.30)

//when the mouse hovers over, it fades in
$('.fadeitem01').mouseenter(function() {
	$('.fadeitem01').fadeTo('fast', 1)
	$('.fadeitem01').text('Product one')
});


//When the mouse leaves, fade back out

$('.fadeitem01').mouseleave(function() {
	$('.fadeitem01').fadeTo('fast', 0.30)
	$('.fadeitem01').text(' ')
});



//start faded out
$('.fadeitem02').css('opacity', 0.30)

//when the mouse hovers over, it fades in
$('.fadeitem02').mouseenter(function() {
	$('.fadeitem02').fadeTo('fast', 1)
	$('.fadeitem02').text('Product two')
});
//When the mouse leaves, fade back out

$('.fadeitem02').mouseleave(function() {
	$('.fadeitem02').fadeTo('fast', 0.30)
	$('.fadeitem02').text(' ')
});

//start faded out
$('.fadeitem03').css('opacity', 0.30)
//when the mouse hovers over, it fades in
$('.fadeitem03').mouseenter(function() {
	$('.fadeitem03').fadeTo('fast', 1)
	$('.fadeitem03').text('Product three')
});

//When the mouse leaves, fade back out

$('.fadeitem03').mouseleave(function() {
	$('.fadeitem03').fadeTo('fast', 0.30)
	$('.fadeitem03').text(' ')
});

//start faded out
$('.fadeitem04').css('opacity', 0.30)

//when the mouse hovers over, it fades in
$('.fadeitem04').mouseenter(function() {
	$('.fadeitem04').fadeTo('fast', 1)
	$('.fadeitem04').text('Product four')
});
//When the mouse leaves, fade back out

$('.fadeitem04').mouseleave(function() {
	$('.fadeitem04').fadeTo('fast', 0.30)
	$('.fadeitem04').text(' ')
});



// ----------------------------------------------------------------------------
}); // do not delete
