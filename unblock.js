$(function() {
var did = $("#bigframe").attr("data");
var gambar = $(".videoIframe").attr("src");
  if (did.match("http")){
var drid = did.replace("https://drive.google.com/file/d/","").replace("/preview","");
  }
  else {
var drid = did;
}
var gapis = 'https://www.googleapis.com/drive/v3/files/'+ drid +'?alt=media&key=AIzaSyDjQy5oGfCBWx-KxyyKQnMlH9y-oIwUhB0';
var second = $("#second").attr("data");
var subindo = $("#subjudul").attr("data");
	var title = $(".single-post-title").text();
  var playerInstance = jwplayer("myvideo")
                playerInstance.setup({
   sources: [{file:gapis,"type":"mkv/mp4","label":"Sever 1", "default": "true"},{file:second,"type":"mkv/mp4","label":"Sever 2", "default": "false"},{file:"","type":"mkv/mp4","label":"Server 3", "default": "false"}],

   skin: "seven",
title:title,
   preload: "false",
   primary: "html5",
   autostart: "false",
   image: gambar,
   width: "100%",
   aspectratio: "16:9",
tracks: [{
			file: subindo,
			label: "Subs",
			kind:  "captions",
			default: "true",
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

function jwreloader() {
var did = $("#bigframe").attr("data");
var gambar = $(".videoIframe").attr("src");
  if (did.match("http")){
var drid = did.replace("https://drive.google.com/file/d/","").replace("/preview","");
  }
  else {
var drid = did;
}
var gapis = 'https://www.googleapis.com/drive/v3/files/'+ drid +'?alt=media&key=AIzaSyDjQy5oGfCBWx-KxyyKQnMlH9y-oIwUhB0';
var second = $("#second").attr("data");
var subindo = $("#subjudul").attr("data");
	var title = $(".single-post-title").text();
  var playerInstance = jwplayer("myvideo")
                playerInstance.setup({
   sources: [{file:gapis,"type":"mkv/mp4","label":"Sever 1", "default": "true"},{file:second,"type":"mkv/mp4","label":"Sever 2", "default": "false"},{file:"","type":"mkv/mp4","label":"Server 3", "default": "false"}],

   skin: "seven",
title:title,
   preload: "false",
   primary: "html5",
   autostart: "false",
   image: gambar,
   width: "100%",
   aspectratio: "16:9",
tracks: [{
			file: subindo,
			label: "Subs",
			kind:  "captions",
			default: "true",
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
  }
