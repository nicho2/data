/* Source and licensing information for the line(s) below can be found at https://la1ere.francetvinfo.fr/misc/jquery.once.js. */
(function(n){var e={},i=0;n.fn.once=function(r,o){if(typeof r!='string'){if(!(r in e)){e[r]=++i};if(!o){o=r};r='jquery-once-'+e[r]};var s=r+'-processed',t=this.not('.'+s).addClass(s);return n.isFunction(o)?t.each(o):t};n.fn.removeOnce=function(e,i){var r=e+'-processed',o=this.filter('.'+r).removeClass(r);return n.isFunction(i)?o.each(i):o}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://la1ere.francetvinfo.fr/misc/jquery.once.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://la1ere.francetvinfo.fr/misc/drupal.js. */
;var Drupal=Drupal||{'settings':{},'behaviors':{},'locale':{}};jQuery.noConflict();(function(t){var r=t.fn.init;t.fn.init=function(t,e,a){if(t&&typeof t==='string'){var n=t.indexOf('#');if(n>=0){var o=t.indexOf('<');if(o>n){throw'Syntax error, unrecognized expression: '+t}}};return r.call(this,t,e,a)};t.fn.init.prototype=r.prototype;if(t.ajaxPrefilter){t.ajaxPrefilter(function(t){if(t.crossDomain){t.contents.script=!1}})}
else if(t.httpData){var e=t.httpData;t.httpData=function(t,r,a){if(!r&&!Drupal.urlIsLocal(a.url)){var n=t.getResponseHeader('content-type')||'';if(n.indexOf('javascript')>=0){r='text'}};return e.call(this,t,r,a)};t.httpData.prototype=e.prototype};Drupal.attachBehaviors=function(e,r){e=e||document;r=r||Drupal.settings;t.each(Drupal.behaviors,function(){if(t.isFunction(this.attach)){this.attach(e,r)}})};Drupal.detachBehaviors=function(e,r,a){e=e||document;r=r||Drupal.settings;a=a||'unload';t.each(Drupal.behaviors,function(){if(t.isFunction(this.detach)){this.detach(e,r,a)}})};Drupal.checkPlain=function(t){var e,a,r={'&':'&amp;','\'':'&#39;','"':'&quot;','<':'&lt;','>':'&gt;'};t=String(t);for(e in r){if(r.hasOwnProperty(e)){a=new RegExp(e,'g');t=t.replace(a,r[e])}};return t};Drupal.formatString=function(t,e){for(var r in e){if(e.hasOwnProperty(r)){switch(r.charAt(0)){case'@':e[r]=Drupal.checkPlain(e[r]);break;case'!':break;default:e[r]=Drupal.theme('placeholder',e[r]);break}}};return Drupal.stringReplace(t,e,null)};Drupal.stringReplace=function(e,r,a){if(e.length===0){return e};if(!t.isArray(a)){a=[];for(var u in r){if(r.hasOwnProperty(u)){a.push(u)}};a.sort(function(t,e){return t.length-e.length})};if(a.length===0){return e};var l=a.pop(),o=e.split(l);if(a.length){for(var n=0;n<o.length;n++){o[n]=Drupal.stringReplace(o[n],r,a.slice(0))}};return o.join(r[l])};Drupal.t=function(t,r,e){e=e||{};e.context=e.context||'';if(Drupal.locale.strings&&Drupal.locale.strings[e.context]&&Drupal.locale.strings[e.context][t]){t=Drupal.locale.strings[e.context][t]};if(r){t=Drupal.formatString(t,r)};return t};Drupal.formatPlural=function(t,e,a,r,o){r=r||{};r['@count']=t;var n=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(r['@count']):((r['@count']==1)?0:1);if(n==0){return Drupal.t(e,r,o)}
else if(n==1){return Drupal.t(a,r,o)}
else{r['@count['+n+']']=r['@count'];delete r['@count'];return Drupal.t(a.replace('@count','@count['+n+']'),r,o)}};Drupal.absoluteUrl=function(t){var r=document.createElement('a');try{t=decodeURIComponent(t)}catch(e){};r.setAttribute('href',t);return r.cloneNode(!1).href};Drupal.urlIsLocal=function(t){var e=Drupal.absoluteUrl(t),n=location.protocol;if(n==='http:'&&e.indexOf('https:')===0){n='https:'};var r=n+'//'+location.host+Drupal.settings.basePath.slice(0,-1);try{e=decodeURIComponent(e)}catch(a){};try{r=decodeURIComponent(r)}catch(a){};return e===r||e.indexOf(r+'/')===0};Drupal.theme=function(t){var e=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[t]||Drupal.theme.prototype[t]).apply(this,e)};Drupal.freezeHeight=function(){Drupal.unfreezeHeight();t('<div id="freeze-height"></div>').css({position:'absolute',top:'0px',left:'0px',width:'1px',height:t('body').css('height')}).appendTo('body')};Drupal.unfreezeHeight=function(){t('#freeze-height').remove()};Drupal.encodePath=function(t,e){e=e||location.href;return encodeURIComponent(t).replace(/%2F/g,'/')};Drupal.getSelection=function(t){if(typeof t.selectionStart!='number'&&document.selection){var e=document.selection.createRange(),r=e.duplicate();r.moveToElementText(t);r.setEndPoint('EndToEnd',e);var a=r.text.length-e.text.length,n=a+e.text.length;return{'start':a,'end':n}};return{'start':t.selectionStart,'end':t.selectionEnd}};Drupal.beforeUnloadCalled=!1;t(window).bind('beforeunload pagehide',function(){Drupal.beforeUnloadCalled=!0});Drupal.displayAjaxError=function(t){if(!Drupal.beforeUnloadCalled){alert(t)}};Drupal.ajaxError=function(e,r,a){var o,u,i,n,p,s;if(e.status){o='\n'+Drupal.t('An AJAX HTTP error occurred.')+'\n'+Drupal.t('HTTP Result Code: !status',{'!status':e.status})}
else{o='\n'+Drupal.t('An AJAX HTTP request terminated abnormally.')};o+='\n'+Drupal.t('Debugging information follows.');i='\n'+Drupal.t('Path: !uri',{'!uri':r});u='';try{u='\n'+Drupal.t('StatusText: !statusText',{'!statusText':t.trim(e.statusText)})}catch(l){};n='';try{n='\n'+Drupal.t('ResponseText: !responseText',{'!responseText':t.trim(e.responseText)})}catch(l){};n=n.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');n=n.replace(/[\n]+\s+/g,'\n');p=e.status==0?('\n'+Drupal.t('ReadyState: !readyState',{'!readyState':e.readyState})):'';a=a?('\n'+Drupal.t('CustomMessage: !customMessage',{'!customMessage':a})):'';s=o+i+u+a+n+p;return s};t('html').addClass('js');document.cookie='has_js=1; path=/';t(function(){if(jQuery.support.positionFixed===undefined){var e=t('<div style="position:fixed; top:10px" />').appendTo(document.body);jQuery.support.positionFixed=e[0].offsetTop===10;e.remove()}});t(function(){Drupal.attachBehaviors(document,Drupal.settings)});Drupal.theme.prototype={placeholder:function(t){return'<em class="placeholder">'+Drupal.checkPlain(t)+'</em>'}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://la1ere.francetvinfo.fr/misc/drupal.js. */
;/*})'"*/
