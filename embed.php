<?php
if($_GET['url'] != ""){
	$gid = $_GET['url'];
	$img = $_GET['img'];
	$poster = 'https://image.tmdb.org/t/p/w600/'.$img.'.jpg';
	$gdrive = 'https://www.googleapis.com/drive/v3/files/'.$gid.'?alt=media&key=AIzaSyDjQy5oGfCBWx-KxyyKQnMlH9y-oIwUhB0';
	$file = '[{"type": "mkv/mp4", "label": "HD", "file": "'.$gdrive.'"}]';
}
else {
$poster = 'https://www.thetrace.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-07-at-7.22.48-PM-1200x0-c-default.png';
$gdrive = 'https://www.googleapis.com/drive/v3/files/GagalLoadingLah?alt=media&key=AIzaSyDjQy5oGfCBWx-KxyyKQnMlH9y-oIwUhB0';
$file = '[{"type": "mkv/mp4", "label": "HD", "file": "'.$gdrive.'"}]';	
}
if($_GET['img'] == "" && $_GET['url'] != ""){
	$poster = 'http://gardeniapublicschool.com/images/default-video.png';
}
?>
	<title>Google Drive</title>
	<style type="text/css">*{margin:0;padding:0}#picasa{position:absolute;width:100%!important;height:100%!important}.jw-button-color:hover,.jw-toggle,.jw-toggle:hover,.jw-open,.jw-progress{color:#008fee!important;}.jw-active-option{background-color:#008fee!important;}.jw-progress{background:#008fee!important;}.jw-skin-seven .jw-toggle.jw-off{color:#fff!important}</style>
<div id="myElement"></div>
<script async='async' data-rocketsrc="https://cdn.rawgit.com/ancoknamhay/plugin/master/jwplayer.js" type="text/rocketscript"></script>
<link href='https://cdn.rawgit.com/ancoknamhay/plugin/master/prime.min.css' rel='stylesheet' />
<script type="text/rocketscript">jwplayer.key="PFReTHIhCnry8V0x4gtC5KPDsFqHOdfAeQ7qNQ==";</script>
	<script type="text/javascript">
		jwplayer("myElement").setup({
			sources:<?php echo $file?>,
			image: "<?php echo $poster?>",
			title: "Nonton Streaming Film Movie Terbaru Subtitle Indonesia",
			displaytitle: "true",
			autostart: "false",
			preload: "none",
			width: "100%",
			aspectratio: "16:9",
			allowfullscreen: true,
			 aboutlink:"http://www.mv21.me",
   abouttext:"Player By Movie Video 21",
   skin: "seven",
   logo: [{
   file:"https://3.bp.blogspot.com/-c6lKiLiIBqM/WUimbwM9N2I/AAAAAAAACGg/vcNvKbIHgS0ytF-MZHRssdOqbWu8XEFUwCK4BGAYYCw/s150/Logo%2Bmv21%2B%25232.png",
   link: "http://www.mv21.me/"
                  }],
		});
	</script>
