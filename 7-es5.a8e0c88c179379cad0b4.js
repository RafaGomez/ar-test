function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bJ5r:function(e,n,t){"use strict";t.r(n),t.d(n,"CameraModule",(function(){return f}));var o=t("ofXK"),a=t("fXoL"),r=t("pkQQ");function c(e,n){if(1&e&&(a.Kb(0),a.Ib(1,"a-box",6),a.Jb()),2&e){var t=n.$implicit;a.yb(1),a.ec("color",t.color),a.fc("gps-entity-place","latitude: ",t.latitude,"; longitude: ",t.longitude,";")}}var i,s,l=function(e){return{"background--hide":e}},u=((i=function(){function e(n){_classCallCheck(this,e),this.sharedService=n,this.hideCurtain=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.locations$=this.sharedService.getLocations(),setTimeout((function(){e.hideCurtain=!0}),1e3)}}]),e}()).\u0275fac=function(e){return new(e||i)(a.Hb(r.a))},i.\u0275cmp=a.Bb({type:i,selectors:[["app-camera"]],decls:7,vars:6,consts:[[1,"background",3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"background__icon"],["d","M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"],["vr-mode-ui","enabled: false","embedded","","arjs","sourceType: webcam; debugUIEnabled: false;",1,"scene"],[4,"ngFor","ngForOf"],["gps-camera","","rotation-reader",""],["scale","2 2 2",3,"color","gps-entity-place"]],template:function(e,n){1&e&&(a.Mb(0,"div",0),a.Xb(),a.Mb(1,"svg",1),a.Ib(2,"path",2),a.Lb(),a.Lb(),a.Wb(),a.Mb(3,"a-scene",3),a.mc(4,c,2,3,"ng-container",4),a.Zb(5,"async"),a.Ib(6,"a-camera",5),a.Lb()),2&e&&(a.dc("ngClass",a.hc(4,l,n.hideCurtain)),a.yb(4),a.dc("ngForOf",a.ac(5,2,n.locations$)))},directives:[o.i,o.j],pipes:[o.b],styles:[".background[_ngcontent-%COMP%]{transition:transform 1s ease-in;z-index:1;background-color:grey;width:100%;height:100%;position:absolute;left:0;top:0;background:radial-gradient(ellipse at center,#4c4c4c 0,#595959 0,#111 100%)}.background__icon[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:scale(4);fill:grey}.background--hide[_ngcontent-%COMP%]{transform:translateX(-100%)}.scene[_ngcontent-%COMP%]{width:100%;height:100%;overflow:scroll}"]}),i),d=t("tyNb"),b=[{path:"",component:u}],f=((s=function e(){_classCallCheck(this,e)}).\u0275mod=a.Fb({type:s}),s.\u0275inj=a.Eb({factory:function(e){return new(e||s)},imports:[[d.b.forChild(b),o.c]]}),s)}}]);