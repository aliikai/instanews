$(document).ready(function(){

$(".button").on("click", function(e) {
	var userId = $("input:text").val()
	e.preventDefault();
	 var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "3e39bfc099b64244a0f0f73b7758551e"
	 
	});
function buildArticle(data){
	
 		var docArrays = data.response.docs;
 		for (i in docArrays){
 			if(data.response.docs[i].multimedia.length > 0){
 				var clone = $("article").eq(0).clone();

 				var excerpt = data.response.docs[i].lead_paragraph;
 				var headline = data.response.docs[i].headline.main;
	  			var web_url = data.response.docs[i].web_url;
	  			var img = "https://static01.nyt.com/"+(data.response.docs[i].multimedia[1].url)
				//link & excerpt & pic
				$(clone).css("background-image", "url("+img+")");
				$(clone).children(".excerpt").children("p").html(excerpt);
				$(clone).children(".excerpt").children("a").attr("href", web_url);

				$(".results").append(clone);
				$("article").show();
 			}
		}
		$('article').eq(0).remove();
	}

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(data) {
		buildArticle(data);
	}).fail(function(err) {
	  throw err;
	});
	    });
	  });


