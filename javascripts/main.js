console.log('This would be the main JS file.');
$( document ).ready( function() {

	var xhr = $.ajax({
		url: "/status.json",
		success: function(response) {
			$( "#last_updated" ).text( $.timeago( xhr.getResponseHeader("Last-Modified"));
			$( "#alive_status" ).html( response.data.state );
    		}
	});
});
