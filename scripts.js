
let $max = null;
let $title = null;

function countdown(){
	const $maxDate = new Date( $max );
	const $current = new Date();

	const totalSec = ( $maxDate - $current ) /1000 ;

	const days = Math.floor( totalSec / 3600 / 24 );
	const hours = Math.floor( totalSec / 3600 ) % 24;
	const minutes = Math.floor( totalSec / 60 ) % 60;
	const seconds = Math.floor( totalSec ) % 60;

	document.getElementById( 'day' ).innerHTML = days;
	document.getElementById( 'hour' ).innerHTML = hours;
	document.getElementById( 'min' ).innerHTML = minutes;
	document.getElementById( 'sec' ).innerHTML = seconds;
}

function formatTime( t ) {
	return ( t < 10 ? '0'+t : t );
}
// getVal();
function getVal(){
	return document.getElementById('s').value;
}

function start(){
	$s = getVal();
	if ( $s == 'xmas' ) {
		$title = 'Christmas Day';
		$max = '25 Dec 2021';
	} else if ( $s == 'newyear' ) {
		$title = 'New Years Eve';
		$max = '1 Jan 2022';
	} else if ( $s == 'd_bday' ) {
		$title = 'Diana\'s Birthday';
		$max = '25 Sep 2021';
	} else if ( $s == 'f_bday' ) {
		$title = 'Felix\'s Birthday';
		$max = '17 Oct 2021';
	}

	document.getElementById( 'title' ).innerHTML = $title;
	setInterval(countdown, 1000);
}
// setInterval(countdown, 1000);
// countdown();
setTimeout( start, 500 );