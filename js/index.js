'use strict;'
$(document).ready(function() {
	$.ajax({
	  type: 'GET',
	  url: 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList',
	  data: data,
	  success: function( response ) {
	  	if ( response.status == 'Error') {
	  		errortAlert.text( response.message ).show(); 
	  	}else if ( response.status == 'OK') {
	  		location.href = 'index.html'; 
	  	}else if ( response.status == 'Form Error' ) {
	  		errortAlert.text( response.message ).show(); 
	  	}else {}
	  	
	  },
	  
});
}