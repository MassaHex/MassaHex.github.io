(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UFnY:function(e,t,n){"use strict";n.r(t),n.d(t,"PublicModule",(function(){return k}));var i=n("ofXK"),o=n("tyNb"),s=n("E8h8"),r=n("lOge"),a=n("L5wJ"),c=n("BsQw"),p=n("p0es"),u=n("aR35"),l=n("mjEz"),b=n("fust"),h=n("46Wp"),d=n("I0Vl"),g=n("7AKx"),f=n("fXoL"),v=n("tRhJ"),S=n("Dqcb"),m=function(){return{width:"100%",height:"100%"}},w=function(){function e(e,t,n,i,o,s,r,a,c,p,u){var l=this;this.activatedRoute=e,this.sessionService=t,this.authService=n,this.router=i,this.appsHelper=o,this.settingsHelper=s,this.settingsService=r,this.tagsHelper=a,this.appsService=c,this.nodeApi=p,this.permissionService=u,this.exchangeFail=!1,this.errorModalContent=[{title:"Whoops! MyApps Failed to Connect!",description:"\n      There was an issue loading into MyApps\n      ",imagePath:"assets/images/lp-error-graphic.svg",imageAlt:"Connection Error"}],this.subscriptions=[],this.subscriptions[0]=e.queryParams.subscribe((function(e){return l.onParamsUpdate(e)}))}return e.prototype.ngOnDestroy=function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))},e.prototype.onParamsUpdate=function(e){var t=this;e&&e.code?this.authService.getToken(e).subscribe((function(e){"number"!=typeof e?t.allowLogin(e):t.rejectLogin(e)}),(function(e){t.rejectLogin(e)})):this.sessionService.getAuthorized()?this.router.navigateByUrl("/home"):e&&e.code?this.authService.getToken(e).subscribe((function(e){"number"!=typeof e?t.allowLogin(e):t.rejectLogin(e)})):this.login()},e.prototype.login=function(){var e=this.urlEncode(u.a.launchpadUrl+"/oauth2/v2/auth",{scope:"full",redirect_uri:window.location.origin+"/oauth/",client_id:u.a.clientId,response_type:"code"});window.open(e,"_self")},e.prototype.urlEncode=function(e,t){return e+"?"+Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},e.prototype.allowLogin=function(e){var t=this,n=e.body.token;document.cookie=l.a.COOKIE_KEY+"=true;path=/;samesite=none;secure",this.sessionService.setBearerToken(n),this.settingsService.getSettings().subscribe((function(e){var n=t.settingsHelper.validateSettings(e);l.a.extensionPost({type:"lplogin",gwstoken:n.userInfo.gwsToken,LaunchpadUri:u.a.launchpadUrl}),t.sessionService.setGwsToken(n.userInfo.gwsToken),t.sessionService.setSettings(n),t.sessionService.setUserInfo(n.userInfo),t.sessionService.setAuthorized(!0),t.settingsHelper.setCustomManifest(),t.settingsHelper.setSeasonalScript(),t.tagsHelper.getTags(),t.subscriptions[1]=t.permissionService.permissionsSub.subscribe((function(e){e&&(e.availablePermissions.has(d.a.InHouseAppsEndpoint)?t.appsService.getMyApps():t.nodeApi.getMyApps()).subscribe((function(e){t.appsHelper.oauthUsed.next(!0),t.appsHelper.appsUpdated.next(e),t.router.navigate(["/home"])}))}))}))},e.prototype.logout=function(){window.open(u.a.launchpadUrl+"/logout","_self")},e.prototype.rejectLogin=function(e){this.sessionService.setAuthorized(!1),e>500?this.exchangeFail=!0:window.open(u.a.launchpadUrl,"_self")},e.\u0275fac=function(t){return new(t||e)(f.Mb(o.a),f.Mb(s.a),f.Mb(r.a),f.Mb(o.c),f.Mb(a.a),f.Mb(c.a),f.Mb(p.a),f.Mb(b.a),f.Mb(h.a),f.Mb(g.a),f.Mb(d.b))},e.\u0275cmp=f.Gb({type:e,selectors:[["app-oauth"]],decls:17,vars:9,consts:[[3,"fadeOut"],[3,"ngStyle"],[1,"exchange-modal",3,"visible","showCloseIcon","clickOutsideToClose","escapeToClose"],[1,"exchange-content"],[2,"width","100%",3,"src","alt"],[1,"content-ctnr"],[1,"button","button-primary",3,"click"],[1,"button-text",3,"click"],[1,"fas","fa-sign-in"],[1,"label-text"]],template:function(e,t){1&e&&(f.Nb(0,"app-app-loader",0),f.Nb(1,"div",1),f.Sb(2,"cl-modal",2),f.Sb(3,"div",3),f.Nb(4,"img",4),f.Sb(5,"div",5),f.Sb(6,"h2"),f.Ec(7," Whoops! MyApps Failed to Connect! "),f.Rb(),f.Sb(8,"span"),f.Ec(9," There was an issue loading into MyApps "),f.Rb(),f.Sb(10,"div"),f.Sb(11,"button",6),f.Zb("click",(function(){return t.login()})),f.Ec(12," Retry "),f.Rb(),f.Sb(13,"button",7),f.Zb("click",(function(){return t.logout()})),f.Nb(14,"i",8),f.Sb(15,"span",9),f.Ec(16,"Back To Login"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&e&&(f.ic("fadeOut",t.exchangeFail),f.Ab(1),f.ic("ngStyle",f.kc(8,m)),f.Ab(1),f.ic("visible",t.exchangeFail)("showCloseIcon",!1)("clickOutsideToClose",!1)("escapeToClose",!1),f.Ab(2),f.ic("src",t.errorModalContent[0].imagePath,f.xc)("alt",t.errorModalContent[0].imageAlt))},directives:[v.a,i.l,S.A],styles:[""]}),e}(),y=n("PCNd"),M=[{path:"oauth",component:w},{path:"**",redirectTo:"oauth"}],k=function(){function e(){}return e.\u0275mod=f.Kb({type:e}),e.\u0275inj=f.Jb({factory:function(t){return new(t||e)},imports:[[i.b,o.e.forChild(M),y.a]]}),e}()}}]);