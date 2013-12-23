/** 
 * squirrel 
 * @version: 0.8.23 
 * @date: 2013-12-23 03:05:38 
 */
var SQ=SQ||{};SQ.core={namespace:function(a){var b,c=a.split("."),d=SQ;if("SQ"!==c[0])return!1;for(c=c.slice(1),b=0;b<c.length;b+=1)d[c[b]]={},d=d[c[b]];return d},isString:function(a){return"[object String]"===Object.prototype.toString.call(a)},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},isNumber:function(a){return"[object Number]"===Object.prototype.toString.call(a)},isBoolean:function(a){return"[object Boolean]"===Object.prototype.toString.call(a)},isNull:function(a){return"[object Null]"===Object.prototype.toString.call(a)},isUndefined:function(a){return"[object Undefined]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isObject:function(a){return"[object Object]"===Object.prototype.toString.call(a)},extend:function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.uber=b.prototype}},SQ.dom={$win:$(window),$doc:$(document),$body:$("body")},SQ.store={cookie:{_getValue:function(a){var b=document.cookie,c=-1===b.indexOf(";",a)?b.length:b.indexOf(";",a);return decodeURIComponent(b.substring(a,c))},get:function(a){for(var b=this,c=document.cookie,d=a+"=",e=d.length,f=c.length,g=0;f>g;){var h=g+e;if(c.substring(g,h)===d)return b._getValue(h);if(g=c.indexOf(" ",g)+1,0===g)break}return null},set:function(a,b){var c=new Date,d=c.getFullYear(),e=c.getMonth(),f=c.getDate()+1,g=arguments,h=arguments.length,i=h>2?g[2]:null,j=h>3?g[3]:null,k=h>4?g[4]:null,l=h>5?g[5]:!1;if(i)switch(i){case"day":c.setYear(d),c.setMonth(e),c.setDate(f),c.setHours(8),c.setMinutes(0),c.setSeconds(0);break;case"week":var m=6048e5;c.setTime(c.getTime()+m);break;default:c.setTime(c.getTime()+(1e3*i+288e5))}document.cookie=a+"="+encodeURIComponent(b)+(null===i?"":"; expires="+c.toGMTString())+(null===j?"":"; path="+j)+(null===k?"":"; domain="+k)+(l===!0?"; secure":"")},del:function(a){var b=this,c=new Date;c.setTime(c.getTime()-1);var d=b.get(a);document.cookie=a+"="+d+"; expires="+c.toGMTString()}},localStorage:{hasLoaclStorage:function(){return"localStorage"in window&&null!==window.localStorage?!0:void 0}(),get:function(a,b){var c=this,d=(new Date).getTime();if(a&&c.hasLoaclStorage){var e=localStorage.getItem(a);if(e){if(e=e.split("@"),void 0===b)return e[1];var f=60*1e3*parseInt(b,10)>d-parseInt(e[0],10);return f?e[1]:!1}}},set:function(a,b){var c=this,d=(new Date).getTime();if(a&&b&&c.hasLoaclStorage){var e=d+"@"+JSON.stringify(b);localStorage.setItem(a,e)}},del:function(a){var b=this;a&&b.hasLoaclStorage&&localStorage.removeItem(a)},clearAll:function(){var a=this;a.hasLoaclStorage&&localStorage.clear()}}},SQ.ua=function(){var a,b={},c=navigator.userAgent;return b.os={},b.browser={},/Android/i.test(c)?(b.os.name="android",b.os.version=c.match(/(Android)\s([\d.]+)/)[2]):/Adr/i.test(c)?(b.os.name="android",b.os.version=c.match(/(Adr)\s([\d.]+)/)[2]):/iPod/i.test(c)?(b.os.name="ios",b.os.version=c.match(/OS\s([\d_]+)/)[1].replace(/_/g,"."),b.device="ipod"):/iPhone/i.test(c)?(b.os.name="ios",b.os.version=c.match(/(iPhone\sOS)\s([\d_]+)/)[2].replace(/_/g,"."),b.device="iphone"):/iPad/i.test(c)&&(b.os.name="ios",b.os.version=c.match(/OS\s([\d_]+)/)[1].replace(/_/g,"."),b.device="ipad"),a=c.match(/AppleWebKit\/([\d.]*)/),a&&a[1]&&(b.browser.core="webkit",b.browser.version=a[1],/Chrome/i.test(c)?b.browser.shell="chrome":/Safari/i.test(c)?b.browser.shell="safari":/Opera/i.test(c)&&(b.browser.shell="opera")),/UCBrowser/i.test(c)?(a=c.match(/(UCBrowser)\/([\d.]+)/),b.browser.shell="ucweb",b.browser.version=a[2]):/UCWEB/i.test(c)?(a=c.match(/(UCWEB)([\d.]+)/),b.browser.shell="ucweb",b.browser.version=a[2]):/UC/i.test(c)&&(b.browser.shell="ucweb",b.browser.version="8.x"),"ucweb"===b.browser.shell&&/UCWEB\/2\.0/i.test(c)&&(b.browser.module="swift"),b.browser.version&&(b.browser.version=parseFloat(b.browser.version,10)),b}(),SQ.util={generate:{uniqueId:function(){},randomInt:function(a,b){return"number"==typeof a&&"number"==typeof b&&b>a?parseInt(Math.random()*(b-a+1)+a,10):!1},randomArr:function(a){return a.sort(function(){return Math.random()-.5})}},string:{trim:function(a){return a.replace(/^\s+|\s+$/g,"")}},dateToString:function(a){var b=a.getFullYear(),c=a.getMonth()+1,d=a.getDate(),e=a.getHours(),f=a.getMinutes(),g=a.getSeconds();10>c&&(c="0"+c),10>d&&(d="0"+d),10>e&&(e="0"+e),10>f&&(f="0"+f),10>g&&(g="0"+g);var h=b+"-"+c+"-"+d+" "+e+":"+f+":"+g;return h},goTop:function(a){a.preventDefault(),window.scrollTo(0,0)},goBack:function(a){a.preventDefault(),history.back()}},function(a){"use strict";function b(b){var c,d=this;d.config={TXT_LOADING_TIP:"正在加载请稍后..."};for(c in b)b.hasOwnProperty(c)&&(d.config[c]=b[c]);d.$triggerTarget=a(d.config.DOM_TRIGGER_TARGET),d._verify()&&d._init()}b.prototype={construtor:b,version:"0.1.2",_verify:function(){return!0},_init:function(){var a=this;"menu"===a.config.MODE&&a.$triggerTarget.on(a.config.EVE_EVENT_TYPE,function(){a.menu()})},setState:function(a){var b=this;"active"===a&&b.$triggerTarget.addClass("active"),"init"===a&&b.$triggerTarget.removeClass("active")},menu:function(){function b(){h.hide(),f.removeClass("active")}function c(){b(),g.show(),e.setState("active"),i.on("click",function(b){var c=a(b.target);c.hasClass("sq-btn")||0!==c.parents(".sq-btn").length||d()})}function d(){g.hide(),e.setState("init"),i.off("click")}var e=this,f=a(".J_buttonMenu"),g=e.$triggerTarget.find(".menu"),h=f.find(".menu"),i=a(document);e.$triggerTarget.hasClass("active")?d():c()},toggle:function(){}},SQ.Button=b,a(".J_buttonMenu").each(function(){var b=a(this);new SQ.Button({EVE_EVENT_TYPE:"click",DOM_TRIGGER_TARGET:b,MODE:"menu",CSS_STYLE:""})})}($,window),function(a,b){"use strict";function c(b){var c,d=this;d.config={CSS_MASK_BACKGROUND:"#000000",CSS_MASK_OPACITY:.5,CSS_POSITION:"absolute",CSS_TOP:0,CSS_LEFT:0,CSS_WIDTH:"auto",CSS_HEIGHT:"auto",CSS_MIN_WIDTH:"auto",CSS_MIN_HEIGHT:"auto",TXT_OK_VAL:"确定",TXT_CANCEL_VAL:"取消",TXT_CLOSE_VAL:"×",ANIMATE:void 0,LOCK:!1,MASK:!1,PREVENT_DEFAULT:!0};for(c in b)b.hasOwnProperty(c)&&(d.config[c]=b[c]);d.$triggerTarget=a(d.config.DOM_TRIGGER_TARGET),d.cssStyle=0===d.config.CSS_STYLE.indexOf(".")?d.config.CSS_STYLE.slice(1):d.config.CSS_STYLE,d.config.ANIMATE&&(d.animate=0===d.config.ANIMATE.indexOf(".")?d.config.ANIMATE.slice(1):d.config.ANIMATE),d.showFun=d.config.show,d.closeFun=d.config.close,d.okFun=d.config.ok,d.cancelFun=d.config.cancel,d.resizeFun=d.config.resize,d._verify()&&d._init()}c.prototype={construtor:c,version:"0.9.8",timer:void 0,resizeTimer:!1,closed:!0,_verify:function(){return!0},_init:function(){var a=this;a.dialogWidth="number"==typeof a.config.CSS_WIDTH?a.config.CSS_WIDTH:"number"==typeof a.config.CSS_MIN_WIDTH?a.config.CSS_MIN_WIDTH:void 0,a.dialogHeight="number"==typeof a.config.CSS_HEIGHT?a.config.CSS_HEIGHT:"number"==typeof a.config.CSS_MIN_HEIGHT?a.config.CSS_MIN_HEIGHT:void 0,a._bind(a.config.EVE_EVENT_TYPE)},_bind:function(a){var b=this;SQ.dom.$doc.on(a,b.config.DOM_TRIGGER_TARGET,function(a){b.config.PREVENT_DEFAULT&&a.preventDefault(),b._trigger(a)})},_unbind:function(a){var b=this;SQ.dom.$doc.off(a,b.config.DOM_TRIGGER_TARGET)},_trigger:function(a){var b=this;return b.config.DELAY?(setTimeout(function(){b.show(a)},b.config.DELAY),void 0):(b.show(a),void 0)},_reset:function(){var a=this;SQ.dom.$win.resize(function(){a.closed||a.resizeTimer||(a.resizeTimer=!0,setTimeout(function(){a.$dialogWindow&&(a._initDialogStyle(),a.$dialogWindow.css({top:a.top,left:a.left,width:a.width,height:a.height}),a.resizeTimer=!1,a.resizeFun&&a.resizeFun())},200))})},_getDialog:function(){var b=this;if(b.$dialogWindow)return b.$dialogWindow;var c=a("<div class='sq-dialog'></div>"),d=a("<div class='content'></div>"),e=a("<div class='ok'>"+b.config.TXT_OK_VAL+"</div>"),f=a("<div class='cancel'>"+b.config.TXT_CANCEL_VAL+"</div>"),g=a("<div class='close-btn'>"+b.config.TXT_CLOSE_VAL+"</div>");return c.append(g).append(d).append(e).append(f),c.addClass(b.cssStyle),b.$dialogContent=d,b.$okBtn=e,b.$cancelBtn=f,b.$close=g,c},_initDialogStyle:function(){var a=this,c=SQ.dom.$body.scrollTop(),d=b.innerWidth||SQ.dom.$win.width(),e=b.innerHeight||SQ.dom.$win.height();if(a.dialogHeight?"middle"===a.config.VERTICAL&&(a.top=(e-a.dialogHeight)/2+c):a.top=a.config.CSS_TOP||0,a.dialogWidth?"center"===a.config.HORIZONTAL&&(a.left=(d-a.dialogWidth)/2):a.left=a.config.CSS_LEFT||0,a.width=a.config.CSS_WIDTH,a.height=a.config.CSS_HEIGHT,a.config.FULLSCREEN_OFFSET){var f=a.config.FULLSCREEN_OFFSET,g=f[0],h=f[1];"number"==typeof g?(a.height=e-2*g,a.top=(e-a.height)/2+c):"auto"===g&&(a.top=(e-a.dialogHeight)/2+c),"number"==typeof h?(a.width=d-2*h,a.left=h):"auto"===g&&(a.left=(d-a.dialogWidth)/2)}},_initDialogEvent:function(){var a=this;a.config.LOCK&&("android"===SQ.ua.os.name&&"ucweb"===SQ.ua.browser.shell&&SQ.ua.browser.version>=9?a.$dialogWindow.on("touchstart",function(a){a.preventDefault()}):a.$dialogWindow.on("touchmove",function(a){a.preventDefault()}),a.$dialogWindow.on("mousewheel",function(a){a.preventDefault()})),a.$okBtn.on("click",function(){a.ok()}),a.$cancelBtn.on("click",function(){a.cancel()}),a.$close.on("click",function(){a.close()}),a.config.NUM_CLOSE_TIME&&a.time(a.config.NUM_CLOSE_TIME),a._reset()},show:function(a){var b=this;b.closed&&(b.closed=!1,b.config.MASK&&b.mask(),b.$dialogWindow=b._getDialog(),b._initDialogStyle(),b.config.ANIMATE&&b.$dialogWindow.addClass("animated "+b.animate),b.$dialogWindow.css({position:b.config.CSS_POSITION,top:b.top,left:b.left,"min-width":b.config.CSS_MIN_WIDTH,"min-height":b.config.CSS_MIN_HEIGHT,width:b.width,height:b.height,"z-index":102}).appendTo(SQ.dom.$body),b._initDialogEvent(),b.showFun&&b.showFun(a),b.config.DESTROY&&b._unbind(b.config.EVE_EVENT_TYPE))},close:function(a){var b=this;b.$dialogWindow.remove(),b.$dialogContent.empty(),b.$dialogWindow=null,b.config.MASK&&b.$mask.hide(),b.closed=!0,b.closeFun&&b.closeFun(a)},time:function(a){var b=this;b.closed||(b.timer=setTimeout(function(){b.close()},a))},mask:function(){var b=this,c=SQ.dom.$body.height(),d=SQ.dom.$win.height(),e=c>d?c:d;if(b.$mask)b.$mask.css({width:"100%",height:e}),b.$mask.show();else{var f=a("<div class='mask'></div>");f.css({position:"absolute",top:0,left:0,right:0,width:"100%",height:e,background:b.config.CSS_MASK_BACKGROUND,opacity:b.config.CSS_MASK_OPACITY,"z-index":101}).appendTo(SQ.dom.$body),b.config.LOCK&&(f.on("touchstart",function(a){a.preventDefault()}),f.on("mousewheel",function(a){a.preventDefault()})),b.$mask=f}},unlock:function(){},ok:function(a){var b=this;b.close(),b.okFun&&b.okFun(a)},cancel:function(a){var b=this;b.close(),b.cancelFun&&b.cancelFun(a)}},SQ.Dialog=c}($,window),function(a,b){"use strict";function c(a){var b,c=this;c.config={ARRY_FIXED_POSITION:[0,0,0,0],NUM_ZINDEX:99,PLACEHOLD:!1};for(b in a)a.hasOwnProperty(b)&&(c.config[b]=a[b]);c.fixedIn=c.config.fixedIn,c.fixedOut=c.config.fixedOut,c._verify()&&c._init()}c.prototype={construtor:c,version:"0.9.0",scrollTimer:0,scrollDelay:150,_verify:function(){return!0},_init:function(){var b=this;b.$fixedItems=a(b.config.DOM_FIXED_ITEM),0!==b.$fixedItems.length&&b.$fixedItems.each(function(c){var d={id:"fixId"+c,self:this,$self:a(this)};b.config.NUM_TRIGGER_POSITION&&SQ.core.isNumber(b.config.NUM_TRIGGER_POSITION)?d.triggerPosTop=b.config.NUM_TRIGGER_POSITION:(b.config.PLACEHOLD&&b._setPlaceholder(d),d.self.getBoundingClientRect()?d.triggerPosTop=d.self.getBoundingClientRect().top:console.log("Not Support getBoundingClientRect"),0===d.self.triggerPosTop&&b._setFixed(d)),b._trigger(d)})},_setPlaceholder:function(b){var c=a("<div class='sq-fixed-placeholder' id='"+b.id+"'></div>").css({display:"none",width:b.$self.width(),height:b.$self.height(),background:b.$self.css("background")});c.insertAfter(b.$self)},_trigger:function(c){function d(){var e=a(b).scrollTop();e>=c.triggerPosTop&&!c.$self.hasClass("sq-fixed")?f._setFixed(c):e<c.triggerPosTop&&c.$self.hasClass("sq-fixed")&&f._removeFixed(c),b.requestAnimationFrame(d)}function e(){function d(){var d=a(b).scrollTop();d>=c.triggerPosTop&&!c.$self.hasClass("sq-fixed")?f._setFixed(c):d<c.triggerPosTop&&c.$self.hasClass("sq-fixed")&&f._removeFixed(c)}var e="android-ios";-1!==e.indexOf(SQ.ua.os.name)?a(b).on("touchstart",function(){setTimeout(function(){d()},150)}):a(b).on("scroll",function(){f.scrollTimer||(f.scrollTimer=setTimeout(function(){d(),f.scrollTimer=0},f.scrollDelay))})}var f=this;b.requestAnimationFrame=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,b.requestAnimationFrame?b.requestAnimationFrame(d):e()},_setFixed:function(b){var c=this,d=c.config.ARRY_FIXED_POSITION,e=a("#"+b.id);b.$self.css({position:"fixed",top:d[0],right:d[1],bottom:d[2],left:d[3],"z-index":c.config.NUM_ZINDEX}).addClass("sq-fixed"),c.config.PLACEHOLD&&e.length&&e.show(),c.fixedIn&&c.fixedIn()},_removeFixed:function(b){var c=this,d=a("#"+b.id);b.$self.attr("style","").removeClass("sq-fixed"),c.config.PLACEHOLD&&d.length&&d.hide(),c.fixedOut&&c.fixedOut()}},SQ.Fixed=c}($,window),function(a,b){"use strict";function c(a){var b,c=this;c.config={MODE:"image",NUM_THRESHOLD:200};for(b in a)a.hasOwnProperty(b)&&(c.config[b]=a[b]);c._verify()&&c._init()}c.prototype={construtor:c,version:"0.8.0",scrollTimer:0,scrollDelay:150,refresh:function(){var b=this;b.$lazyItems=a(b.config.DOM_LAZY_ITEMS),b._bindLazyEvent(),b._loadImg()},_verify:function(){return!0},_init:function(){var b=this;b.$lazyItems=a(b.config.DOM_LAZY_ITEMS),b.lazyItemClassName=b.config.DOM_LAZY_ITEMS.slice(1),b._bindLazyEvent(),b._trigger(),b._loadImg()},_bindLazyEvent:function(){var b=this;b.$lazyItems.one("appear",function(){var c=this,d=a(c),e=d.attr("data-img");e&&(d.attr("src",e).removeAttr("data-img").removeClass(b.lazyItemClassName),d.on("error",function(){a(this).attr("src",b.config.IMG_PLACEHOLDER).off("error")}))})},_trigger:function(){var c=this;a(b).on("scroll",function(){c.scrollTimer||(c.scrollTimer=setTimeout(function(){"image"===c.config.MODE&&c._loadImg(),c.scrollTimer=0},c.scrollDelay))})},_isInDisplayArea:function(c){var d=this;if(c.getBoundingClientRect()){var e=c.getBoundingClientRect();return e.top>0-d.config.NUM_THRESHOLD&&e.top-d.config.NUM_THRESHOLD<b.innerHeight}var f=a(c),g=b.innerHeight,h=b.pageYOffset,i=f.offset().top;return i>=h&&i<=h+g+d.config.NUM_THRESHOLD},_loadImg:function(){var b=this;b.$lazyItems.each(function(c,d){var e=a(d);b.config.IMG_PLACEHOLDER&&e.hasClass(b.lazyItemClassName)&&(e.attr("src",b.config.IMG_PLACEHOLDER),e.on("error",function(){a(this).attr("src",b.config.IMG_PLACEHOLDER).off("error")})),b._isInDisplayArea(d)&&e.trigger("appear")})}},SQ.LazyLoad=c}($,window),function(a,b){"use strict";function c(b){var c,d=this;d.config={API:"",NUM_START_PAGE_INDEX:0,NUM_LOAD_POSITION:.5,NUM_SCROLL_MAX_PAGE:3,TXT_LOADING_TIP:"正在加载请稍后...",TXT_INIT_TIP:"滑动加载更多内容",TXT_CLICK_TIP:"点击加载更多",TXT_LOADED_ERROR:"加载失败，请点击重试",TXT_UNKNOWN_ERROR:"未知错误，请重试",NUM_SUCCESS_CODE:200,NUM_NO_MORE_CODE:900,DATA_TYPE:"json",XHR_METHOD:"POST",XHR_TIMEOUT:5e3,LOCAL_DATA:!1,NUM_EXPIRES:15};for(c in b)b.hasOwnProperty(c)&&(d.config[c]=b[c]);d.$triggerTarget=a(d.config.DOM_TRIGGER_TARGET),d.$ajaxBox=a(d.config.DOM_AJAX_BOX),d.$stateBox=a(d.config.DOM_STATE_BOX),d.api=d.$stateBox.attr("data-api")||d.config.API,d.page=d.config.NUM_START_PAGE_INDEX,d.maxPage=d.config.NUM_SCROLL_MAX_PAGE+d.page,d.initStyle=0===d.config.CSS_INIT_STYLE.indexOf(".")?d.config.CSS_INIT_STYLE.slice(1):d.config.CSS_INIT_STYLE,d.scrollTimer=0,d.scrollDelay=200,d.render=d.config.render,d.loading=d.config.loading,d.loaded=d.config.loaded,d.loadError=d.config.loadError,d.scrollEnd=d.config.scrollEnd,d._verify()&&d._init()}c.prototype={construtor:c,version:"1.2.4",_verify:function(){var a=this;return 0===a.$triggerTarget.length||0===a.$ajaxBox.length||0===a.$stateBox.length?(console.warn("SQ.loadmore: 缺少 Dom 元素"),!1):a.api?!0:(console.warn("SQ.loadmore: 缺少 API 参数"),!1)},_init:function(){var a=this;a._currentState="none",a.$stateBox.addClass(a.initStyle).text(a.config.TXT_INIT_TIP),a._reset(),a._bind(a.config.EVE_EVENT_TYPE),a.currentEventType=a.config.EVE_EVENT_TYPE},_reset:function(){var c=this,d=c._getHeight(a("body"))||a("body").height(),e=b.innerHeight||a(b).height();c.triggerHeight=(d-e)*c.config.NUM_LOAD_POSITION,c.config.NUM_LOAD_POSITION<.8&&(c.config.NUM_LOAD_POSITION+=.15555)},_getHeight:function(a){return a.get&&(a=a.get(0)),a?a.getBoundingClientRect?a.getBoundingClientRect().height:Math.max(a.clientHeight,a.offsetHeight,a.scrollHeight):0},_bind:function(a){var b=this;b.$triggerTarget.bind(a,function(){b._trigger(a)})},_unbind:function(){var a=this;a.$triggerTarget.unbind()},_changeBind:function(b){var c=this;c.currentEventType=b,"click"===b&&(c.$triggerTarget=c.$stateBox,c._bind(b)),"scroll"===b&&(c.$triggerTarget=a(c.config.DOM_TRIGGER_TARGET),c._bind(b))},_trigger:function(a){var b=this,c=b.$stateBox.hasClass("J_loading"),d=b.$stateBox.hasClass("J_noMore");c||d||("scroll"===a&&(b.page<b.maxPage&&!b.scrollTimer&&(b.scrollTimer=setTimeout(function(){b.$triggerTarget.scrollTop()>=b.triggerHeight&&!c&&!d&&b._loadData(b._spliceApi()),b.scrollTimer=0},b.scrollDelay)),b.page===b.maxPage&&b._changeState("scrollEnd")),"click"===a&&b._loadData(b._spliceApi()))},_spliceApi:function(){var a,b=this,c=b.api,d=-1===b.api.indexOf("?")?"?":"&";if(b.config.RESTFUL){c=c.replace(":page",b.page);for(a in b.config.RESTFUL)b.config.RESTFUL.hasOwnProperty(a)&&(c=c.replace(a,b.config.RESTFUL[a]))}else c=b.api+d+"page="+b.page;return c},_changeState:function(a){var b=this;if(b._currentState!==a)switch(b._currentState=a,a){case"loading":b.$stateBox.addClass("J_loading").show().text(b.config.TXT_LOADING_TIP),b.loading&&b.loading();break;case"loaded":b.$stateBox.removeClass("J_loading"),"loadError"===b.currentState&&(b.currentState=void 0),"scroll"===b.currentEventType&&b.$stateBox.hide().text(""),"click"===b.currentEventType&&b.$stateBox.text(b.config.TXT_CLICK_TIP),b.page+=1,b.loaded&&b.loaded();break;case"scrollEnd":b._changeBind("click"),b.$stateBox.show().text(b.config.TXT_CLICK_TIP),b.scrollEnd&&b.scrollEnd();break;case"noMore":b.$stateBox.addClass("J_noMore").hide(),b.loaded&&b.loaded();break;case"loadError":b.currentState="loadError",b._changeBind("click"),b.$stateBox.removeClass("J_loading").text(b.config.TXT_LOADED_ERROR),b.loadError&&b.loadError();break;case"unknowError":b.$stateBox.removeClass("J_loading").text(b.config.TXT_UNKNOWN_ERROR)}},_loadData:function(b){var c=this;if(c._changeState("loading"),c.config.LOCAL_DATA){var d=SQ.store.localStorage.get(b,c.config.NUM_EXPIRES);if(d=SQ.core.isString(d)?a.parseJSON(d):d)return c._render(d),void 0}a.ajax({type:c.config.XHR_METHOD,url:b,timeout:c.config.XHR_TIMEOUT,success:function(a){c._render(a),c.config.LOCAL_DATA&&SQ.store.localStorage.set(b,a)},error:function(){c._changeState("loadError")}})},_render:function(b){var c=this;if(!b)return c._changeState("loadError"),void 0;var d=SQ.core.isString(b)?a.parseJSON(b):b;if("html"===c.config.DATA_TYPE){var e=parseInt(d.code,10);switch(e){case c.config.NUM_SUCCESS_CODE:c.$ajaxBox.append(d.data),c._changeState("loaded");break;case c.config.NUM_NO_MORE_CODE:c.$ajaxBox.append(d.data),c._changeState("noMore");break;default:c._changeState("unknowError")}c._reset()}c.render&&c.render(d)}},SQ.LoadMore=c}($,window),function(a){"use strict";function b(b){var c,d=this;d.config={NUM_TIMER_DELAY:300,NUM_XHR_TIMEER:5e3,NUM_SUCCESS_CODE:200,suggestion:!0};for(c in b)b.hasOwnProperty(c)&&(d.config[c]=b[c]);d.$clearBtn=a(d.config.DOM_CLEAR_BTN),d.$input=a(d.config.DOM_INPUT),d.$suggestPanel=a(d.config.DOM_SUGGEST_PANEL),d.beforeStartFun=d.config.beforeStart,d.startFun=d.config.start,d.clearFun=d.config.clear,d.showFun=d.config.show,d._verify()&&d._init()}b.prototype={construtor:b,version:"0.5.10",lastKeyword:"",lastSendKeyword:"",canSendRequest:!0,_verify:function(){return!0},_init:function(a){var b=this;b.$input.on("focus",function(){b.start()}),b.$input.on("blur",function(){b.stop()}),b.$clearBtn.on("click",function(){b.clear()}),b.beforeStartFun&&b.beforeStartFun(a)},_filter:function(a){return a.replace(/\s+/g,"").replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,"")},_initSuggest:function(){var a=this;a.$suggestPanel.empty()},_requestData:function(b){var c,d=this,e=d.config.API_URL;c&&SQ.core.isObject(c)&&c.abort(),c=a.ajax({type:"POST",url:e,dataType:"json",data:{keyword:b},timeout:d.config.NUM_XHR_TIMEER,success:function(a){d.showSuggest(a),d.lastSendKeyword=b},error:function(){d.canSendRequest=!1,setTimeout(function(){d.canSendRequest=!0},500)}})},_compare:function(a){var b=this,c=a.length,d=b.lastSendKeyword.length;return b.lastKeyword===a?!1:(d>0&&d>c&&(b.canSendRequest=!0),b.canSendRequest?b.lastSendKeyword===a?!1:!0:!1)},start:function(){var a=this;a.inputListener=setInterval(function(){var b=a.$input.val(),c=a._filter(b);c.length>0?("none"===a.$clearBtn.css("display")&&a.$clearBtn.show(),a._compare(c)&&(a._requestData(c),a.startFun&&a.startFun()),a.lastKeyword=c):(a.lastKeyword=void 0,a.clear())},a.config.NUM_TIMER_DELAY)},stop:function(){var a=this;clearInterval(a.inputListener)},showSuggest:function(a){var b=this,c="object"==typeof a?a:JSON.parse(a);return c.code!==b.config.NUM_SUCCESS_CODE?(b.canSendRequest=!1,void 0):(b.canSendRequest=!0,b._initSuggest(),b.showFun&&b.showFun(c),void 0)},hideSuggest:function(){var a=this;a.$suggestPanel.hide()},clear:function(){var a=this;a.$input.val(""),a.hideSuggest(),a.$clearBtn.hide(),a.canSendRequest=!0,a.lastSendKeyword="",a.clearFun&&a.clearFun()}},SQ.Suggest=b}($,window),function(a){"use strict";function b(b){var c,d=this;d.config={CSS_HIGHLIGHT:".active",NUM_ACTIVE:0,NUM_XHR_TIMEER:5e3,TXT_LOADING_TIP:"正在加载请稍后...",CLEAR_PANEL:!1,LOCAL_DATA:!1,NUM_EXPIRES:15};for(c in b)b.hasOwnProperty(c)&&(d.config[c]=b[c]);d.CSS_HIGHLIGHT=0===d.config.CSS_HIGHLIGHT.indexOf(".")?d.config.CSS_HIGHLIGHT.slice(1):d.config.CSS_HIGHLIGHT,d.config.CSS_LOADING_TIP&&(d.CSS_LOADING_TIP=0===d.config.CSS_LOADING_TIP.indexOf(".")?d.config.CSS_LOADING_TIP.slice(1):d.config.CSS_LOADING_TIP),d.$triggerTarget=a(d.config.DOM_TRIGGER_TARGET),d.tabsLen=d.$triggerTarget.length,d.triggerFun=d.config.trigger,d.showFun=d.config.show,d.beforeLoadFun=d.config.beforeLoad,d.loadFun=d.config.loaded,d.$triggerTarget.each(function(){var b=a(this),c=b.find(d.config.DOM_TABS),e=b.find(d.config.DOM_PANELS);d._verify()&&d._init(b,c,e)})}b.prototype={construtor:b,version:"0.7.4",needLoadContent:!1,_verify:function(){return!0},_init:function(b,c,d){var e=this,f=0;c.each(function(){a(this).attr("data-tabIndex",f),f++}),e.config.API_URL&&(SQ.core.isString(e.config.API_URL)||SQ.core.isArray(e.config.API_URL))&&(e.$loadingTip=a("<div class='dpl-tabs-loadingTip'></div>"),e.CSS_LOADING_TIP?e.$loadingTip.addClass(e.CSS_LOADING_TIP):e.$loadingTip.css({height:60,"text-align":"center","line-height":"60px"}),e.$loadingTip.text(e.config.TXT_LOADING_TIP),e.needLoadContent=!0),void 0!==e.config.NUM_ACTIVE&&e.show(c,d,e.config.NUM_ACTIVE),c.on(e.config.EVE_EVENT_TYPE,function(f){var g=a(this);f.preventDefault(),e._trigger(b,c,d,g)})},_trigger:function(a,b,c,d){var e=this,f=d.attr("data-tabIndex"),g=d.hasClass(e.CSS_HIGHLIGHT);g||(e.show(b,c,f),e.triggerFun&&e.triggerFun(b,c,f))},_cleanPanel:function(a){a.empty()},show:function(a,b,c){var d=this,e=a.eq(c),f=b.eq(c);a.removeClass(d.CSS_HIGHLIGHT),b.removeClass(d.CSS_HIGHLIGHT),e.addClass(d.CSS_HIGHLIGHT),f.addClass(d.CSS_HIGHLIGHT),d.showFun&&d.showFun(a,b,c),d.config.API_URL&&d._load(f,c)},_load:function(b,c){var d=this,e=d.config.API_URL,f=b.find(".dpl-tabs-loadingTip"),g=f.length>0?!0:!1,h=b.hasClass("hasLoaded");if(!h&&(!d.beforeLoadFun||d.beforeLoadFun())){if(d.config.CLEAR_PANEL&&d._cleanPanel(b),d.config.LOCAL_DATA){var i=SQ.store.localStorage.get(e,d.config.NUM_EXPIRES);if(i)return b.addClass("hasLoaded"),d.loadFun&&d.loadFun(JSON.parse(i),b),void 0}SQ.core.isArray(d.config.API_URL)&&(e=d.config.API_URL[c]),e&&0!==e.length&&(d.xhr&&d.xhr.abort(),g?f.show():(b.append(d.$loadingTip),f=b.find(".dpl-tabs-loadingTip"),f.show()),d.xhr=a.ajax({type:"POST",url:e,dataType:"json",timeout:d.config.NUM_XHR_TIMEER,success:function(a){f.hide(),b.addClass("hasLoaded"),d.config.LOCAL_DATA&&SQ.store.localStorage.set(e,a),d.loadFun&&d.loadFun(a,b)},error:function(){d._showReloadTips(b,c)}}))}},_showReloadTips:function(a,b){var c=this,d=a.find(".dpl-tabs-loadingTip");d.show().empty();var e="<div class='reload'><p style='padding:5px 0;'>抱歉，加载失败，请重试</p><div class='sq-btn f-grey J_reload'>重新加载</div></div>";d.append(e),a.find(".J_reload").off("click").on("click",function(){c._load(a,b)})}},SQ.Tabs=b}($,window),function(a,b){function c(a){var b,c=this;c.config={};for(b in a)a.hasOwnProperty(b)&&(c.config[b]=a[b]);if(c.triggerTarget=$(c.config.DOM_TRIGGER_TARGET)[0],_fun.ios()&&parseInt(_fun.version())>=5&&"x"===a.DIRECTION&&a.wit)return c.triggerTarget.parentNode.style.cssText+="overflow:scroll; -webkit-overflow-scrolling:touch;",void 0;switch(c.config.MODE){case"page":if(a.DIRECTION="x",this.SlipPage){var d=_fun.clone(f);return d._init(c.triggerTarget,a),d}return this.SlipPage=!0,f._init(c.triggerTarget,a),f;case"px":if(this.SlipPx){var e=_fun.clone(g);return e._init(c.triggerTarget,a),e}return this.SlipPx=!0,g._init(c.triggerTarget,a),g}}_fun={ios:function(){var a=navigator.userAgent.match(/.*OS\s([\d_]+)/),b=!!a;return!this._versionValue&&b&&(this._versionValue=a[1].replace(/_/g,".")),this.ios=function(){return b},b},version:function(){return this._versionValue},clone:function(a){function b(){}return b.prototype=a,new b}};var d={_refreshCommon:function(a,b){var c=this;c.wide_high=a||c.core[c.offset]-c.up_range,c.parent_wide_high=b||c.core.parentNode[c.offset],c._getCoreWidthSubtractShellWidth()},_initCommon:function(a,b){var c=this;c.core=a,c.startFun=b.startFun,c.moveFun=b.moveFun,c.touchEndFun=b.touchEndFun,c.endFun=b.endFun,c.DIRECTION=b.DIRECTION,c.up_range=b.up_range||0,c.down_range=b.down_range||0,"x"===c.DIRECTION?(c.offset="offsetWidth",c._pos=c.__posX):(c.offset="offsetHeight",c._pos=c.__posY),c.wide_high=b.wide_high||c.core[c.offset]-c.up_range,c.parent_wide_high=b.parent_wide_high||c.core.parentNode[c.offset],c._getCoreWidthSubtractShellWidth(),c._bind("touchstart"),c._bind("touchmove"),c._bind("touchend"),c._bind("webkitTransitionEnd"),c.xy=0,c.y=0,c._pos(-c.up_range)},_getCoreWidthSubtractShellWidth:function(){var a=this;a.width_cut_coreWidth=a.parent_wide_high-a.wide_high,a.coreWidth_cut_width=a.wide_high-a.parent_wide_high},handleEvent:function(a){switch(a.type){case"touchstart":this._start(a);break;case"touchmove":this._move(a);break;case"touchend":case"touchcancel":this._end(a);break;case"webkitTransitionEnd":this._transitionEnd(a)}},_bind:function(a,b){this.core.addEventListener(a,this,!!b)},_unBind:function(a,b){this.core.removeEventListener(a,this,!!b)},__posX:function(a){this.xy=a,this.core.style.webkitTransform="translate3d("+a+"px, 0px, 0px)"},__posY:function(a){this.xy=a,this.core.style.webkitTransform="translate3d(0px, "+a+"px, 0px)"},_posTime:function(a,b){this.core.style.webkitTransitionDuration=b+"ms",this._pos(a)}},f=_fun.clone(d);f._init=function(a,b){var c=this;c._initCommon(a,b),c.NUM_PAGES=b.NUM_PAGES,c.page=0,c.AUTO_TIMER=b.AUTO_TIMER,c.lastPageFun=b.lastPageFun,c.firstPageFun=b.firstPageFun,b.AUTO_TIMER&&c._autoChange(),b.no_follow?(c._move=c._moveNoMove,c.next_time=500):c.next_time=300},f._start=function(a){var b=this,a=a.touches[0];b._abrupt_x=0,b._abrupt_x_abs=0,b._start_x=b._start_x_clone=a.pageX,b._start_y=a.pageY,b._movestart=void 0,b.AUTO_TIMER&&b._stop(),b.startFun&&b.startFun(a)},f._move=function(a){var b=this;if(b._moveShare(a),!b._movestart){var c=a.touches[0];if(a.preventDefault(),b.offset_x=b.xy>0||b.xy<b.width_cut_coreWidth?b._dis_x/2+b.xy:b._dis_x+b.xy,b._start_x=c.pageX,b._abrupt_x_abs<6)return b._abrupt_x+=b._dis_x,b._abrupt_x_abs=Math.abs(b._abrupt_x),void 0;b._pos(b.offset_x),b.moveFun&&b.moveFun(c)}},f._moveNoMove=function(a){var b=this;b._moveShare(a),b._movestart||(a.preventDefault(),b.moveFun&&b.moveFun(e))},f._moveShare=function(a){var b=this,c=a.touches[0];b._dis_x=c.pageX-b._start_x,b._dis_y=c.pageY-b._start_y,"undefined"==typeof b._movestart&&(b._movestart=!!(b._movestart||Math.abs(b._dis_x)<Math.abs(b._dis_y)))},f._end=function(a){if(!this._movestart){var b=this;b._end_x=a.changedTouches[0].pageX,b._range=b._end_x-b._start_x_clone,b._range>35?0!=b.page?b.page-=1:b.firstPageFun&&b.firstPageFun(a):Math.abs(b._range)>35&&(b.page!=b.NUM_PAGES-1?b.page+=1:b.lastPageFun&&b.lastPageFun(a)),b.toPage(b.page,b.next_time),b.touchEndFun&&b.touchEndFun(a)}},f._transitionEnd=function(a){var b=this;a.stopPropagation(),b.core.style.webkitTransitionDuration="0",b._stop_ing&&b._autoChange(),b._stop_ing=!1,b.endFun&&b.endFun()},f.toPage=function(a,b){this._posTime(-this.parent_wide_high*a,b||0),this.page=a},f._stop=function(){clearInterval(this._autoChangeSet),this._stop_ing=!0},f._autoChange=function(){var a=this;a._autoChangeSet=setInterval(function(){a.page!=a.NUM_PAGES-1?a.page+=1:a.page=0,a.toPage(a.page,a.next_time)},a.AUTO_TIMER)},f.refresh=function(a,b){this._refreshCommon(a,b)};var g=_fun.clone(d);g._init=function(a,b){var c=this;c._initCommon(a,b),c.perfect=b.perfect,c.SHOW_SCROLL_BAR=b.SHOW_SCROLL_BAR,"x"==c.DIRECTION?(c.page_x="pageX",c.page_y="pageY",c.width_or_height="width",c._real=c._realX,c._posBar=c.__posBarX):(c.page_x="pageY",c.page_y="pageX",c.width_or_height="height",c._real=c._realY,c._posBar=c.__posBarY),c.perfect?(c._transitionEnd=function(){},c._stop=c._stopPerfect,c._slipBar=c._slipBarPerfect,c._posTime=c._posTimePerfect,c._bar_upRange=c.up_range,c.no_bar=!1,c._slipBarTime=function(){}):(c.no_bar=b.no_bar,c.core.style.webkitTransitionTimingFunction="cubic-bezier(0.33, 0.66, 0.66, 1)"),c.SHOW_SCROLL_BAR&&(c._hideBar=function(){},c._showBar=function(){}),c.radius=_fun.ios()?11:0,c.no_bar?(c._hideBar=function(){},c._showBar=function(){}):(c._insertSlipBar(b),c.coreWidth_cut_width<=0&&(c._bar_shell_opacity=0,c._showBarStorage=c._showBar,c._showBar=function(){}))},g._start=function(a){var b=this,a=a.touches[0];b._animating=!1,b._steps=[],b._abrupt_x=0,b._abrupt_x_abs=0,b._start_x=b._start_x_clone=a[b.page_x],b._start_y=a[b.page_y],b._start_time=a.timeStamp||Date.now(),b._movestart=void 0,!b.perfect&&b._need_stop&&b._stop(),b.core.style.webkitTransitionDuration="0",b.startFun&&b.startFun(a)},g._move=function(a){var b=this,c=a.touches[0],d=c[b.page_x],e=c[b.page_y],f=b.xy;if(b._dis_x=d-b._start_x,b._dis_y=e-b._start_y,"x"==b.DIRECTION&&"undefined"==typeof b._movestart&&(b._movestart=!!(b._movestart||Math.abs(b._dis_x)<Math.abs(b._dis_y))),!b._movestart){if(a.preventDefault(),b._move_time=c.timeStamp||Date.now(),b.offset_x=f>0||f<b.width_cut_coreWidth-b.up_range?b._dis_x/2+f:b._dis_x+f,b._start_x=d,b._start_y=e,b._showBar(),b._abrupt_x_abs<6)return b._abrupt_x+=b._dis_x,b._abrupt_x_abs=Math.abs(b._abrupt_x),void 0;b._pos(b.offset_x),b.no_bar||b._slipBar(),b._move_time-b._start_time>300&&(b._start_time=b._move_time,b._start_x_clone=d),b.moveFun&&b.moveFun(c)}},g._end=function(a){if(!this._movestart){var b=this,a=a.changedTouches[0],c=(a.timeStamp||Date.now())-b._start_time,d=a[b.page_x]-b._start_x_clone;if(b._need_stop=!0,300>c&&Math.abs(d)>10)if(b.xy>-b.up_range||b.xy<b.width_cut_coreWidth)b._rebound();else{var e=b._momentum(d,c,-b.xy-b.up_range,b.coreWidth_cut_width+b.xy,b.parent_wide_high);b._posTime(b.xy+e.dist,e.time),b.no_bar||b._slipBarTime(e.time)}else b._rebound();b.touchEndFun&&b.touchEndFun(a)}},g._transitionEnd=function(a){var b=this;a.target==b.core&&(b._rebound(),b._need_stop=!1)},g._rebound=function(a){var b=this,c=b.coreWidth_cut_width<=0?0:b.xy>=-b.up_range?-b.up_range:b.xy<=b.width_cut_coreWidth-b.up_range?b.width_cut_coreWidth-b.up_range:b.xy;return c==b.xy?(b.endFun&&b.endFun(),b._hideBar(),void 0):(b._posTime(c,a||400),b.no_bar||b._slipBarTime(a),void 0)},g._insertSlipBar=function(a){var c=this;if(c._bar=b.createElement("div"),c._bar_shell=b.createElement("div"),"x"==c.DIRECTION)var d="height: 5px; position: absolute;z-index: 10; pointer-events: none;",e="opacity: "+c._bar_shell_opacity+"; left:2px; bottom: 2px; right: 2px; height: 5px; position: absolute; z-index: 10; pointer-events: none;";
else var d="width: 5px; position: absolute;z-index: 10; pointer-events: none;",e="opacity: "+c._bar_shell_opacity+"; top:2px; bottom: 2px; right: 2px; width: 5px; position: absolute; z-index: 10; pointer-events: none; ";var f=" background-color: rgba(0, 0, 0, 0.5); border-radius: "+c.radius+"px; -webkit-transition: cubic-bezier(0.33, 0.66, 0.66, 1);",d=d+f+a.bar_css;c._bar.style.cssText=d,c._bar_shell.style.cssText=e,c._countAboutBar(),c._countBarSize(),c._setBarSize(),c._countWidthCutBarSize(),c._bar_shell.appendChild(c._bar),c.core.parentNode.appendChild(c._bar_shell),setTimeout(function(){c._hideBar()},500)},g._posBar=function(){},g.__posBarX=function(a){var b=this;b._bar.style.webkitTransform="translate3d("+a+"px, 0px, 0px)"},g.__posBarY=function(a){var b=this;b._bar.style.webkitTransform="translate3d(0px, "+a+"px, 0px)"},g._slipBar=function(){var a=this,b=a._about_bar*(a.xy+a.up_range);0>=b?b=0:b>=a._width_cut_barSize&&(b=Math.round(a._width_cut_barSize)),a._posBar(b),a._showBar()},g._slipBarPerfect=function(){var a=this,b=a._about_bar*(a.xy+a._bar_upRange);if(a._bar.style[a.width_or_height]=a._bar_size+"px",0>b){var c=a._bar_size+3*b;a._bar.style[a.width_or_height]=Math.round(Math.max(c,5))+"px",b=0}else if(b>=a._width_cut_barSize){var c=a._bar_size-3*(b-a._width_cut_barSize);5>c&&(c=5),a._bar.style[a.width_or_height]=Math.round(c)+"px",b=Math.round(a._width_cut_barSize+a._bar_size-c)}a._posBar(b)},g._slipBarTime=function(a){this._bar.style.webkitTransitionDuration=""+a+"ms",this._slipBar()},g._stop=function(){var a=this,b=a._real();a._pos(b),a.no_bar||(a._bar.style.webkitTransitionDuration="0",a._posBar(a._about_bar*b))},g._stopPerfect=function(){clearTimeout(this._aniTime),this._animating=!1},g._realX=function(){var a=getComputedStyle(this.core,null).webkitTransform.replace(/[^0-9-.,]/g,"").split(",");return 1*a[4]},g._realY=function(){var a=getComputedStyle(this.core,null).webkitTransform.replace(/[^0-9-.,]/g,"").split(",");return 1*a[5]},g._countBarSize=function(){this._bar_size=Math.round(Math.max(this.parent_wide_high*this.parent_wide_high/this.wide_high,5))},g._setBarSize=function(){this._bar.style[this.width_or_height]=this._bar_size+"px"},g._countAboutBar=function(){this._about_bar=(this.parent_wide_high-4-(this.parent_wide_high-4)*this.parent_wide_high/this.wide_high)/this.width_cut_coreWidth},g._countWidthCutBarSize=function(){this._width_cut_barSize=this.parent_wide_high-4-this._bar_size},g.refresh=function(a,b){var c=this;c._refreshCommon(a,b),c.no_bar||(c.coreWidth_cut_width<=0?(c._bar_shell_opacity=0,c._showBar=function(){}):(c._showBar=c._showBarStorage||c._showBar,c._countAboutBar(),c._countBarSize(),c._setBarSize(),c._countWidthCutBarSize())),c._rebound(0)},g._posTimePerfect=function(a,b){var c=this;c._steps.push({x:a,time:b||0}),c._startAni()},g._startAni=function(){var a,b,c,d=this,e=d.xy,f=Date.now();if(!d._animating){if(!d._steps.length)return d._rebound(),void 0;a=d._steps.shift(),a.x==e&&(a.time=0),d._animating=!0,c=function(){var g,h=Date.now();return h>=f+a.time?(d._pos(a.x),d._animating=!1,d._startAni(),void 0):(h=(h-f)/a.time-1,b=Math.sqrt(1-h*h),g=(a.x-e)*b+e,d._pos(g),d._animating&&(d._slipBar(),d._aniTime=setTimeout(c,1)),void 0)},c()}},g._momentum=function(a,b,c,d,e){var f=.001,g=Math.abs(a)/b,h=g*g/(2*f),i=0,j=0;return a>0&&h>c?(j=e/(6/(h/g*f)),c+=j,g=g*c/h,h=c):0>a&&h>d&&(j=e/(6/(h/g*f)),d+=j,g=g*d/h,h=d),h*=0>a?-1:1,i=g/f,{dist:h,time:i}},g._showBar=function(){var a=this;a._bar_shell.style.webkitTransitionDelay="0ms",a._bar_shell.style.webkitTransitionDuration="0ms",a._bar_shell.style.opacity="1"},g._hideBar=function(){var a=this;a._bar_shell.style.opacity="0",a._bar_shell.style.webkitTransitionDelay="300ms",a._bar_shell.style.webkitTransitionDuration="300ms"},SQ.TouchSlip=c}(window,document);