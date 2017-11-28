$('.separator').find('img').replaceWith(function () {
$('a').remove();
var gambar = this.src;
var gbrhasil = gambar.replace(/s320/g, "s500");
   return '<amp-img src="'+gbrhasil+'" width="500" height="500" layout="responsive" alt="'+this.alt+'"></amp-img>'
});
$('.separator').replaceWith(function () {
$('a').remove();
});
$(".separator").removeAttr("style");
