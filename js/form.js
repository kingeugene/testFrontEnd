'use strict;'
$(document).ready(function() {
 const form = $('#form');
 const errortAlert = $('#error');
	$('.send_btn').on('click', function( event ) {
		errortAlert.hide();
		event.preventDefault();
		if ( form.find( 'input[name="mf_name"]' ).val() == '' ) {
			errortAlert.text('test').show(); 
			return false;
	}
		if ( form.find( 'input[name="mf_secondname"]' ).val() == '' ) {
			errortAlert.text('test')
			return false;
	}
		if ( form.find( 'input[name="mf_email"]' ).val() == '' ) {
			errortAlert.text('test')
			return false;			
	}
		if ( form.find( 'input[name="mf_password"]' ).val() == '' ) {
			errortAlert.text('test')
			return false;			
	}
		if ( form.find( 'input[name="mf_checkbox"]' ).val() == '' ) {
			errortAlert.text('test')
			return false;			
	}

	const data = { 
		name : form.find( 'input[name="mf_name"]' ).val(),
		secondname : form.find( 'input[name="mf_secondname"]' ).val(),
		email : form.find( 'input[name="mf_email"]' ).val(),
		gender : form.find( 'select[name="mf_list"]' ).val(),
		pass : form.find( 'input[name="mf_password"]' ).val()
	};
	$.ajax({
	  type: 'POST',
	  url: 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration',
	  data: data,
	  success: function( response ) {
	  	if ( response.status == 'Error') {
	  		errortAlert.text('response.message').show(); 
	  	}else if ( response.status == 'OK') {
	  		location.href = 'index.html'; 
	  	}else if ( response.status == 'Form Error' ) {
	  		errortAlert.text('response.message').show(); 
	  	}else {}
	  	
	  },
	  dataType: 'json'
});
});

});