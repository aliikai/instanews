$(document).ready(function(){

$("a").on("click", function(e) {
	var userId = $("input:text").val()
	e.preventDefault();
	 var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "3e39bfc099b64244a0f0f73b7758551e"
	 
	});
 function buildArticle(data){
	  	var excerpt = data.response.docs[1].lead_paragraph;
	  	var web_url = data.response.docs[1].web_url;
	  	var img = "https://static01.nyt.com/"+(data.response.docs[1].multimedia[1].url)

	  //link & excerpt & pic
	  $("article").children(".pic").attr("src", img);
	  $("article div").children("p").text(excerpt);
	  $("article div").children(".url").attr("href", web_url);
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


