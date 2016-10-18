//Remove class that sets logo and selector to middle for initial central position

$(document).ready(function(){

$("select").on("change",function(){
	$('.pre_logo').removeClass("pre_logo");
	$('.initial_position').removeClass("initial_position");
	$('.label').hide();
	$('.footer_text').hide();

		var topic = $(this).val();
		console.log(topic);
		var url = "https://api.nytimes.com/svc/topstories/v2/"+topic+".json";
		url += '?' + $.param({
			'api-key': "7f8be26ffb894c5cb92af647e0a60239"
		});
		$( ".initial_position" ).hide( "fast", function() {
		});
		$.ajax({
			url: url,
			method: 'GET',
		}).done(function(data) {
			console.log(data);
			buildArticle(data);
		}).fail(function(err) {
			throw err;
		});
	});

function buildArticle(data){

	$(".results").html("");
	var docArrays = data.results;
	for (i in docArrays){

		if(data.results[i].multimedia.length > 0){
			var clone = $("article").eq(0).clone();
			var excerpt = data.results[i].abstract;
			var headline = data.results[i].title;
			var web_url = data.results[i].url;
			var img = data.results[i].multimedia[4].url
		//link & excerpt & pic
		$(clone).css("background-image", "url("+img+")");
		$(clone).children("a").children(".space").children(".excerpt").children("p").html(excerpt);
		$(clone).children("a").attr("href", web_url);


		$(".results").append(clone);
		$("article").show();
		}
		
	}
	$('article').eq(0).hide();

	};
	
});

