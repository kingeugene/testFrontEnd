'use strict;'
$(document).ready(function() {
	const partners = $('#partners'),
	news = $('#news'),
	locationCompanies = $('#location_companies'),
	listCompanies = $('#list_companies'),
	totalCompanies = $('#total_companies');

	let companies = null,
	company = null;

	$.ajax({
	  type: 'GET',
	  url: 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList',
	  beforeSend: function (){
	  	$(list_companies).find('.itemComp-list__table').addClass('loader');
	  	$(total_companies).find('.itemComp-main').addClass('loader');
	  	$(locationCompanies).find('.itemComp-main').addClass('loader');
	  },
	  success: function( response ) {
	  	companies = response.list;
	  	$(total_companies).find('.itemComp-main').text(response.list.length);
	  	response.list.forEach(function(el){
	  		$(list_companies).find('.itemComp-list__table').append(`
	  			<tr><td class="company-item" data-name="`+el.name+`">`+el.name+`</td></tr>
	  			`);
	  	});
	  	console.log(JSON.stringify(companies));
	  },
	  complete: function(){
	  	$(list_companies).find('.itemComp-list__table').removeClass('loader');
	  	$(total_companies).find('.itemComp-main').removeClass('loader');
	  	$(locationCompanies).find('.itemComp-main').removeClass('loader');

		$('.company-item').on('click', function(){
			partners.find('.itemComp-main__wrap').text('');
			let $this = $(this);
			partners.show();
			company = companies.filter((el) => {return el.name === $this.data('name') })[0];
			company.partners.forEach(function(el){
				partners.find('.itemComp-main__wrap').append(`
					<div class="itemComp-listPartn">
						<div class="itemComp-main">`+el.value+`</div>
						<div class="blockList">`+el.name+`</div>
					</div>
					`);
			});
			partners.show();
		});
	  }
	});

	$.ajax({
	  type: 'GET',
	  url: 'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList',
	  beforeSend: function (){
	  	$(news).find('.bxslider').addClass('loader');
	  },
	  success: function( response ) {
	  	let date = null;
	  	$(news).find('.bxslider').removeClass('loader');
	  	response.list.forEach(function(el){
	  		//alert(el.date);
	  		date = new Date(el.date);
	  		$(news).find('.bxslider').append(`
					<li class="itemComp-news">
						<div class="col-md-5">
							<img src="`+el.img+`" alt="">
						</div>
						<div class="col-md-7">
							<a target="_blank" href="http://`+el.link+`"><h4 class="itemComp-news__title">Link</h4></a>
							<div class="itemComp-news__text">`+el.description+`</div>
						</div>
						<div class="col-md-12">
							<div class="itemComp-news__author"><strong>Author:</strong>`+el.author+`</div>
							<div class="itemComp-news__publik"><strong>Public:</strong>`+date+`</div>
						</div>
					</li>`);
	  	});
		$(news).find('.bxslider').bxSlider({controls: false});
	  }
	});

});
