$(document).ready( function() {
	$('.menu-switch').click( function() {
		if( $('.sidebar').hasClass( 'closed' ) ) {
			$('.sidebar').removeClass( 'closed' );
		} else {
			$('.sidebar').addClass( 'closed' );
		}
	});
});