$(function() {
var did = $("#bigframe").attr("data");
var gambar = $(".videoIframe").attr("src");
if (did.match("http")){
var drid = did.replace("https://drive.google.com/file/d/","").replace("/preview",""); 
}
else
{
var drid = did;
}
var gapis = 'https://www.googleapis.com/drive/v3/files/'+ drid +'?alt=media&key=AIzaSyDjQy5oGfCBWx-KxyyKQnMlH9y-oIwUhB0';
var second = $("#second").attr("data");
var sub = $("#subjudul").attr("data");
if (sub.match("http")){
var subindo = sub;
}
else
{
var subindo = "https://rawgit.com/arachi007/mv21/master/default.srt";
}
var title = $(".post-title").text();
var judul = "[mv21.me] " + title + " Subtitle Indonesia";	
var playerInstance = jwplayer("myvideo")
                playerInstance.setup({
   sources: [{file:gapis,"type":"mkv/mp4","label":"Sever 1", "default": "true"},{file:second,"type":"mkv/mp4","label":"Sever 2"},{file:"","type":"mkv/mp4","label":"Server 3"}],

   skin: "seven",
title:judul,
			description: "Nonton Streaming Film Movie Terbaru Subtitle Indonesia",
   preload: "none",
			displaytitle: "true",
			displaydescription: "true",
   primary: "html5",
   autostart: "false",
   image: gambar,
   width: "100%",
   aspectratio: "16:9",
logo: [{
   file:"https://3.bp.blogspot.com/-c6lKiLiIBqM/WUimbwM9N2I/AAAAAAAACGg/vcNvKbIHgS0ytF-MZHRssdOqbWu8XEFUwCK4BGAYYCw/s150/Logo%2Bmv21%2B%25232.png",
   link: "http://www.mv21.me/"
                  }],
			 logo: {file:"https://3.bp.blogspot.com/-c6lKiLiIBqM/WUimbwM9N2I/AAAAAAAACGg/vcNvKbIHgS0ytF-MZHRssdOqbWu8XEFUwCK4BGAYYCw/s100/Logo%2Bmv21%2B%25232.png",link: "http://www.mv21.me/"},
tracks: [{
			file: subindo,
			label: "Indonesia",
			kind:  "captions",
			default: "true"
			}],
   captions: {
   color: "#FFFF00",
   fontSize: 15,
   edgeStyle: "uniform",
   backgroundOpacity: 0,
   },
   aboutlink:"http://www.mv21.me",
   abouttext:"Player By Movie Video 21",
   });
	 
$("#bigframe").remove();
  });
