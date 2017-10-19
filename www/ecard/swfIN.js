/*////////////////////////////////////////////////////////////////////////////////////////

  swfIN 2.2.0  -  2007-12-21
  javascript toolkit for flash developers
  � 2005-2007 Francis Turmel  |  swfIN.nectere.ca  |  www.nectere.ca  |  francis@nectere.ca
  released under the MIT license

/*////////////////////////////////////////////////////////////////////////////////////////
if(typeof swfIN=="undefined"){var swfIN=function(_1,_2,_3,_4){this.params=[];this.flashVars=[];this.swfPath=_1;this.swfID=_2;this.containerDivID="div_"+_2;this.width=String(_3);this.height=String(_4);this.scrollbarWidth=null;this.scrollbarHeight=null;this.requiredVersion=[0,0,0];this.redirectURL=null;this.redirectUseParams=false;this.xiPath=null;this.xiWidth=null;this.xiHeight=null;this.is_written=false;this.showDivName=null;swfIN._static.init();};swfIN.prototype={addParam:function(_5,_6){if(_5!=""){this.params[_5]=_6;}},addVar:function(_7,_8){if(_7!=""){this.flashVars[_7]=_8;}},addVars:function(_9){for(var i in _9){this.addVar(i,_9[i]);}},scrollbarAt:function(_b,_c){this.scrollbarWidth=_b;this.scrollbarHeight=_c;if(this.isWritten()){this.refresh();}},resize:function(_d,_e){this.width=_d;this.height=_e;if(this.isWritten()){this.refresh();}},detect:function(_f,_10,_11){this.detectRedirect(_f,_10,_11);},detectRedirect:function(_12,_13,_14){this.requiredVersion=_12;this.redirectURL=_13;this.redirectUseParams=_14||false;},detectShowDiv:function(_15,_16,_17){this.requiredVersion=_15;this.showDivName=_16;},useExpressInstall:function(_18,_19,_1a){this.xiPath=_18;this.xiWidth=_19;this.xiHeight=_1a;},useSWFAddress:function(){if(typeof SWFAddress!="undefined"){SWFAddress.setId(this.getSWFID());}else{this._error("Can't find the SWFAddress js lib. Remove the .useSWFAddress() call if you're not using it.");}},callback:function(_1b){var len=arguments.length-1;var o=window.document[this.getSWFID()];var a=arguments;var f=_1b;if(len>15){this._error(".callback supports a maximum of 15 extra args. You currently have "+len);}switch(len){case 0:o[f]();break;case 1:o[f](a[1]);break;case 2:o[f](a[1],a[2]);break;case 3:o[f](a[1],a[2],a[3]);break;case 4:o[f](a[1],a[2],a[3],a[4]);break;case 5:o[f](a[1],a[2],a[3],a[4],a[5]);break;case 6:o[f](a[1],a[2],a[3],a[4],a[5],a[6]);break;case 7:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7]);break;case 8:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);break;case 9:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]);break;case 10:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10]);break;case 11:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);break;case 12:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12]);break;case 13:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13]);break;case 14:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14]);break;case 15:o[f](a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);break;}},write:function(){if(!swfIN.detect.isPlayerVersionValid(this.requiredVersion)&&swfIN.detect.isPlayerVersionValid(swfIN._memory.expressInstallVersion)&&this.xiPath!=null&&swfIN.utils.getQueryParam("detect")!="false"){this.addParam("scale","noScale");document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVar("MMdoctitle",document.title);this.addVar("MMplayerType",(swfIN.detect.nsPlugin())?"PlugIn":"ActiveX");this.addVar("MMredirectURL",window.location);this.width=this.xiWidth||this.width;if(this.width<swfIN._memory.expressInstallMinSize.w){this.width=swfIN._memory.expressInstallMinSize.w;}this.height=this.xiHeight||this.height;if(this.height<swfIN._memory.expressInstallMinSize.h){this.height=swfIN._memory.expressInstallMinSize.h;}this.swfPath=this.xiPath;document.write(this.getHTML());this.is_written=true;}else{if(swfIN.detect.isPlayerVersionValid(this.requiredVersion)||swfIN.utils.getQueryParam("detect")=="false"){document.write(this.getHTML());this.is_written=true;}else{if(this.redirectURL!=null){var url=(this.redirectUseParams)?this.redirectURL+"?required="+this.requiredVersion.join(".")+"&installed="+swfIN.detect.getPlayerVersionString():this.redirectURL;location.href=url;}}}if(this.isWritten()){if(this.showDivName){swfIN.utils.$delete(this.showDivName);}this._checkForConflicts();swfIN._memory.swf_stack.push(this);this.refresh();this._formFix();}},isWritten:function(){return this.is_written;},hideSEO:function(_21){swfIN.utils.$delete(_21);},getDivID:function(){return this.containerDivID;},getDivRef:function(){return swfIN.utils.$(this.getDivID());},getSWFID:function(){return this.swfID;},getSWFRef:function(){return swfIN.utils.$(this.getSWFID());},refresh:function(){var div=this.getDivRef();div.style.width=this._calculateWidth();div.style.height=this._calculateHeight();},getHTML:function(){var fv="";for(var i in this.flashVars){var mod=(fv=="")?"":"&";fv+=mod+i+"="+escape(this.flashVars[i]);}var p=[];p["quality"]="high";p["menu"]="false";p["swLiveConnect"]="true";p["pluginspage"]=swfIN._memory.player_download;p["allowScriptAccess"]="always";p["FlashVars"]=fv;for(var i in this.params){p[i]=this.params[i];}var tag="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' "+" id='"+this.swfID+"' width='100%' height='100%' align='top' hspace='0' vspace='0'><param name='movie' value='"+this.swfPath+"'>";for(var i in p){tag+="<param name='"+i+"' value='"+p[i]+"'>";}tag+="<embed src='"+this.swfPath+"' width='100%' height='100%' align='top' hspace='0' vspace='0' type='application/x-shockwave-flash' name='"+this.swfID+"' ";for(var i in p){tag+=i+"='"+p[i]+"' ";}tag+="></embed></object>";tag="<div id='"+this.containerDivID+"' style='width:"+this._calculateWidth()+"; height:"+this._calculateHeight()+"'>"+tag+"</div>";return tag;},_formFix:function(){if(swfIN.detect.ie()){window[this.getSWFID()]=document[this.getSWFID()];}},_calculateWidth:function(){return this._sizeHelper("Width");},_calculateHeight:function(){return this._sizeHelper("Height");},_sizeHelper:function(_2b){var _2c=String(this["scrollbar"+_2b]);var res=String(this[_2b.toLowerCase()]);if(_2c!=null&&res.indexOf("%")>-1){var _2e=swfIN.detect.getBrowserSize()[_2b.substr(0,1).toLowerCase()]*(res.split("%")[0]/100);res=(_2c>_2e)?_2c:res;}return (res.indexOf("%")>-1)?res:res+"px";},_checkForConflicts:function(){if(this.swfID==null){this._error("The swf's id cannot be empty");}if(this.containerDivID==null){this._error("The container div's id cannot be empty");}if(this.swfID.indexOf(" ")>-1){this._error("The swf's id cannot contain spaces");}if(this.containerDivID.indexOf(" ")>-1){this._error("The container div's id cannot contain spaces");}if(this.getDivID()==this.getSWFID()){this._error("You cannot name swfs or divs by the same id. Please revise the ids currently in use.");}var _2f=swfIN._memory.swf_stack;for(var i=0;i<_2f.length;i++){if(_2f[i].getDivID()==this.getDivID()||_2f[i].getDivID()==this.getSWFID()||_2f[i].getSWFID()==this.getDivID()||_2f[i].getSWFID()==this.getSWFID()){this._error("You cannot name swfs or divs by the same id. Please revise the ids currently in use.");}}},_error:function(msg){alert("swfIN error!\n"+msg);}};swfIN._static={init:function(){if(!swfIN._memory.is_init){if(Array.prototype.push==null){Array.prototype.push=function(val){this[this.length]=val;return this.length;};}swfIN.utils.addEventListener(window,"resize",swfIN._static.refreshAll);swfIN._memory.is_init=true;}},refreshAll:function(){var _33=swfIN._memory.swf_stack;for(var i=0;i<_33.length;i++){var m=_33[i];if(m.isWritten()){m.refresh();}}}};swfIN._memory={swf_stack:[],is_init:false,player_download:"http://www.adobe.com/go/getflash/",user_agent:navigator.userAgent.toLowerCase(),expressInstallMinSize:{w:214,h:137},expressInstallVersion:[6,0,65],fullscreenModeVersion:[9,0,28],vistaVersion:[9,0,28]};swfIN.detect={getPlayerVersion:function(){var v=[0,0,0];var axo;if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){v=x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".");}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){axo=1;var _39=3;while(axo){try{_39++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_39);v=[_39,0,0];}catch(e){axo=null;}}}else{try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");v=[6,0,21];axo.AllowScriptAccess="always";}catch(e){if(v[0]==6){return v;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){v=axo.GetVariable("$version").split(" ")[1].split(",");}}}return v;},isPlayerVersionValid:function(_3a){var _3b=swfIN.detect.getPlayerVersion();if(_3b[0]<_3a[0]){return false;}if(_3b[0]>_3a[0]){return true;}if(_3b[1]<_3a[1]){return false;}if(_3b[1]>_3a[1]){return true;}if(_3b[2]<_3a[2]){return false;}return true;},getPlayerVersionString:function(){return swfIN.detect.getPlayerVersion().join(".");},ns4:function(){return (document.layers!=null);},ie5_mac:function(){return (swfIN._memory.user_agent.indexOf("msie 5")!=-1&&swfIN._memory.user_agent.indexOf("mac")!=-1);},ie7:function(){return (swfIN._memory.user_agent.indexOf("msie 7")!=-1);},ie:function(){return (swfIN._memory.user_agent.indexOf("msie")!=-1);},safari:function(){return (swfIN._memory.user_agent.indexOf("applewebkit")!=-1);},mac:function(){return (swfIN._memory.user_agent.indexOf("mac")!=-1);},nsPlugin:function(){return (navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length>0);},getBrowserSize:function(){if(self.innerWidth){return {w:self.innerWidth,h:self.innerHeight};}else{if(document.documentElement&&document.documentElement.clientWidth){return {w:document.documentElement.clientWidth,h:document.documentElement.clientHeight};}else{if(document.body){return {w:document.body.clientWidth,h:document.body.clientHeight};}else{return {w:null,h:null};}}}},getFullScreenSize:function(){return {w:screen.width,h:screen.height};},getAvailScreenSize:function(){return {w:screen.availWidth,h:screen.availHeight};}};swfIN.utils={$:function(id){return document.getElementById(id);},$delete:function(id){var o=swfIN.utils.$(id);o.parentNode.removeChild(o);},splice:function(o,num){var a=[];for(var i=num;i<o.length;i++){a[i-num]=o[i];}return a;},delegate:function(_43,_44){var _f=function(){var tt=arguments.callee.t;var ff=arguments.callee.f;var aa=arguments.callee.a;return ff.apply(tt,aa);};_f.t=_43;_f.f=_44;_f.a=swfIN.utils.splice(arguments,2);return _f;},addEventListener:function(_49,_4a,_4b){if(_49.addEventListener){_49.addEventListener(_4a,_4b,true);}else{_49.attachEvent("on"+_4a,_4b);}},popUp:function(url,_4d,w,h,x,y,_52){var _53=swfIN.detect.getFullScreenSize();var scr=swfIN.detect.getAvailScreenSize();w=(w=="full")?scr.w:w;h=(h=="full")?scr.h:h;x=(x=="center")?(_53.w-w)/2:x;y=(y=="center")?(_53.h-h)/2:y;var p=[];p["width"]=w;p["innerWidth"]=w;p["height"]=h;p["innerHeight"]=h;p["toolbar"]=0;p["location"]=0;p["directories"]=0;p["status"]=0;p["menubar"]=0;p["scrollbars"]=0;p["resizable"]=0;p["copyhistory"]=0;p["fullscreen"]=0;for(var i in _52){p[i]=_52[i];}var _57="";for(var i in p){_57+=(_57=="")?i+"="+p[i]:","+i+"="+p[i];}var win=window.open(url,_4d,_57);win.resizeTo(w,h);win.moveTo(0,0);win.moveBy(x,y);win.focus();},getQueryParam:function(key){var val=swfIN.utils.getAllQueryParams()[key];return (val!=undefined&&val!="")?val:null;},getAllQueryParams:function(){var qs=[];var _5d=window.location.search.substring(1).split("&");for(var i=0;i<_5d.length;i++){var _5f=_5d[i].split("=");qs[_5f[0]]=_5f[1];}return qs;}};}