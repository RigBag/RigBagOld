(function(j,o,r){var q="hashchange",l=document,n,m=j.event.special,k=l.documentMode,p="on"+q in o&&(k===r||k>7);function s(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}j.fn[q]=function(a){return a?this.bind(q,a):this.trigger(q)};j.fn[q].delay=50;m[q]=j.extend(m[q],{setup:function(){if(p){return false}j(n.start)},teardown:function(){if(p){return false}j(n.stop)}});n=(function(){var d={},e,a=s(),c=function(h){return h},b=c,f=c;d.start=function(){e||g()};d.stop=function(){e&&clearTimeout(e);e=r};function g(){var h=s(),i=f(a);if(h!==a){b(a=h,i);j(o).trigger(q)}else{if(i!==a){location.href=location.href.replace(/#.*/,"")+i}}e=setTimeout(g,j.fn[q].delay)}j.browser.msie&&!p&&(function(){var i,h;d.start=function(){if(!i){h=j.fn[q].src;h=h&&h+s();i=j('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){h||b(s());g()}).attr("src",h||"javascript:0").insertAfter("body")[0].contentWindow;l.onpropertychange=function(){try{if(event.propertyName==="title"){i.document.title=l.title}}catch(t){}}}};d.stop=c;f=function(){return s(i.location.href)};b=function(w,z){var x=i.document,y=j.fn[q].domain;if(w!==z){x.title=l.title;x.open();y&&x.write('<script>document.domain="'+y+'"<\/script>');x.close();i.location.hash=w}}})();return d})()})(jQuery,this);