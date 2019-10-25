!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(e.jQuery)}(this,function(d){"use strict";var u="vide",n={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},l="Not implemented";function r(e){var t,o,i,n,r,s,a,p={};for(a=0,s=(r=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",")).length;a<s&&(-1===(o=r[a]).search(/^(http|https|ftp):\/\//)&&-1!==o.search(":"));a++)t=o.indexOf(":"),i=o.substring(0,t),"string"==typeof(n=(n=o.substring(t+1))||void 0)&&(n="true"===n||"false"!==n&&n),"string"==typeof n&&(n=isNaN(n)?n:+n),p[i]=n;return null==i&&null==n?e:p}function i(e,t,o){if(this.$element=d(e),"string"==typeof t&&(t=r(t)),o?"string"==typeof o&&(o=r(o)):o={},"string"==typeof t)t=t.replace(/\.\w*$/,"");else if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&(t[i]=t[i].replace(/\.\w*$/,""));this.settings=d.extend({},n,o),this.path=t;try{this.init()}catch(e){if(e.message!==l)throw e}}i.prototype.init=function(){var e,t,o=this,i=o.path,n=i,r="",s=o.$element,a=o.settings,p=function(e){var t,o,i,n=(e=""+e).split(/\s+/),r="50%",s="50%";for(i=0,t=n.length;i<t;i++)"left"===(o=n[i])?r="0%":"right"===o?r="100%":"top"===o?s="0%":"bottom"===o?s="100%":"center"===o?0===i?r="50%":s="50%":0===i?r=o:s=o;return{x:r,y:s}}(a.position),c=a.posterType;t=o.$wrapper=d("<div>").addClass(a.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":a.bgColor,"background-repeat":"no-repeat","background-position":p.x+" "+p.y}),"object"==typeof i&&(i.poster?n=i.poster:i.mp4?n=i.mp4:i.webm?n=i.webm:i.ogv&&(n=i.ogv)),"detect"===c?function(e,t){function o(){t(this.src)}d('<img src="'+e+'.gif">').on("load",o),d('<img src="'+e+'.jpg">').on("load",o),d('<img src="'+e+'.jpeg">').on("load",o),d('<img src="'+e+'.png">').on("load",o)}(n,function(e){t.css("background-image","url("+e+")")}):"none"!==c&&t.css("background-image","url("+n+"."+c+")"),"static"===s.css("position")&&s.css("position","relative"),s.prepend(t),e="object"==typeof i?(i.mp4&&(r+='<source src="'+i.mp4+'.mp4" type="video/mp4">'),i.webm&&(r+='<source src="'+i.webm+'.webm" type="video/webm">'),i.ogv&&(r+='<source src="'+i.ogv+'.ogv" type="video/ogg">'),o.$video=d("<video>"+r+"</video>")):o.$video=d('<video><source src="'+i+'.mp4" type="video/mp4"><source src="'+i+'.webm" type="video/webm"><source src="'+i+'.ogv" type="video/ogg"></video>');try{e.prop({autoplay:a.autoplay,loop:a.loop,volume:a.volume,muted:a.muted,defaultMuted:a.muted,playbackRate:a.playbackRate,defaultPlaybackRate:a.playbackRate})}catch(e){throw new Error(l)}e.css({margin:"auto",position:"absolute","z-index":-1,top:p.y,left:p.x,"-webkit-transform":"translate(-"+p.x+", -"+p.y+")","-ms-transform":"translate(-"+p.x+", -"+p.y+")","-moz-transform":"translate(-"+p.x+", -"+p.y+")",transform:"translate(-"+p.x+", -"+p.y+")",visibility:"hidden",opacity:0}).one("canplaythrough."+u,function(){o.resize()}).one("playing."+u,function(){e.css({visibility:"visible",opacity:1}),t.css("background-image","none")}),s.on("resize."+u,function(){a.resizing&&o.resize()}),t.append(e)},i.prototype.getVideoObject=function(){return this.$video[0]},i.prototype.resize=function(){if(this.$video){var e=this.$wrapper,t=this.$video,o=t[0],i=o.videoHeight,n=o.videoWidth,r=e.height(),s=e.width();r/i<s/n?t.css({width:s+2,height:"auto"}):t.css({width:"auto",height:r+2})}},i.prototype.destroy=function(){delete d[u].lookup[this.index],this.$video&&this.$video.off(u),this.$element.off(u).removeData(u),this.$wrapper.remove()},d[u]={lookup:[]},d.fn[u]=function(e,t){var o;return this.each(function(){(o=d.data(this,u))&&o.destroy(),(o=new i(this,e,t)).index=d[u].lookup.push(o)-1,d.data(this,u,o)}),this},d(document).ready(function(){var e=d(window);e.on("resize."+u,function(){for(var e,t=d[u].lookup.length,o=0;o<t;o++)(e=d[u].lookup[o])&&e.settings.resizing&&e.resize()}),e.on("unload."+u,function(){return!1}),d(document).find("[data-vide-bg]").each(function(e,t){var o=d(t),i=o.data(u+"-options"),n=o.data(u+"-bg");o[u](n,i)})})});