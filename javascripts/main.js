console.log('This would be the main JS file.');
$( document ).ready( function() {

	String.prototype.capitalizeFirstLetter = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}

	$.get( "status.json", function( response ) {
		$( "#last_updated" ).text( $.timeago( response.last_seen ) );
		$( "#alive_status" ).html( response.status );
	});
});
