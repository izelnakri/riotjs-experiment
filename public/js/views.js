!function(t){"function"==typeof define&&define.amd?define(function(a,e,i){t(a("riot"),a,e,i)}):"undefined"!=typeof module&&"undefined"!=typeof module.exports?t(require("riot"),require,exports,module):t(window.riot)}(function(t,a,e,i){t.tag2("iz-footer",'<nav class="navbar navbar-default navbar-fixed-bottom hidden-xs"> <div class="container"> <div class="navbar-collapse collapse" style="border: none;"> <ul class="nav navbar-nav navbar-right"> <li><a href="/about">About</a></li> <li><a href="/privacy">Privacy</a></li> <li><a href="/terms">Terms</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> </div> </nav>',"","",function(t){}),t.tag2("iz-header",'<nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/">Riot.js Test</a> </div> <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1" style="border: none;"> <ul if="{user}" class="nav navbar-nav navbar-right"> <li> <a href="/">HOME</a> </li> <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {user.email} <span class="caret"></span> </a> <ul class="dropdown-menu"> <li><a href="/settings">Settings</a></li> <li role="separator" class="divider"></li> <li><a href="/logout">LOGOUT</a></li> </ul> </li> </ul> <ul if="{!user}" class="nav navbar-nav navbar-right"> <li> <a href="/login">LOGIN</a> </li> <li> <a href="/register">REGISTER</a> </li> </ul> </div> </div> </nav>',"","",function(t){},"{ }"),t.tag2("iz-rating-chart",'<canvas class="hidden-xs"></canvas> <canvas class="hidden-sm hidden-md hidden-lg"></canvas>',"","",function(t){var a=this;a.mixin("store"),a.drawChart=function(t,a){var e=_.map(store.feedbacks.items,function(t){return moment(t.creation_date).format("h:mm a")}),i=_.map(store.feedbacks.items,function(t){return t.rating});a=_.defaults(a,{scaleShowVerticalLines:!1,bezierCurve:!1}),new Chart(t).Line({labels:_.uniq(e),datasets:[{label:"My First dataset",fillColor:"rgba(220,220,220,0.2)",strokeColor:"#337ab7",pointColor:"#337ab7",pointStrokeColor:"#337ab7",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:i}]},a)},a.drawDesktopChart=function(){if(a.root.querySelector){var t=a.root.querySelector("canvas.hidden-xs").getContext("2d");a.drawChart(t)}a.update()},a.drawMobileChart=function(){if(a.root.querySelector){var t=a.root.querySelector("canvas.hidden-md").getContext("2d");a.drawChart(t,{showScale:!1})}a.update()},a.on("mount",function(){a.drawDesktopChart(),a.drawMobileChart()})}),t.tag2("iz-rating-list",'<div class="row"> <iz-rating-list-filters class="col-xs-12"> <iz-circle each="{number in [1,2,3,4,5]}" onclick="{parent.toggleRating}">{number}</iz-circle> </iz-rating-list-filters> </div> <div class="row"> <div class="col-xs-12"> <table class="table"> <thead> <tr> <td class="hidden-sm hidden-md hidden-lg"></td> <td> Rating </td> <td class="hidden-xs"> Comment </td> <td>Browser</td> <td>Device</td> <td>Platform</td> </tr> </thead> <tbody each="{item in items}"> <tr> <td class="hidden-sm hidden-lg hidden-md"> Feedback </td> <td> <iz-circle>{item.rating}</iz-circle> </td> <td class="hidden-xs"> <p> {item.comment} </p> </td> <td> <p> {item.computed_browser.Browser} {item.computed_browser.Version} </p> </td> <td> <p> {getScreenType(item)} </p> </td> <td> <p> {item.computed_browser.Platform} </p> </td> </tr> <tr class="hidden-sm hidden-md hidden-lg"> <td width="20%"> Comment </td> <td colspan="4"> {item.comment} </td> </tr> </tbody> </table> </div> </div>',"","",function(t){var a=this;a.mixin("store"),a.toggleRating=function(t){var e=t.item.number,i=_.find(a.items,function(t){return t.rating===e});if($(t.currentTarget).toggleClass("iz-toggled"),i)return a.items=_.reject(a.items,function(t){return t.rating===e}),a.update();var r=_.filter(store.items,function(t){return t.rating===e});return a.items=_.merge(a.items,r),a.update()},a.getScreenType=function(t){var a=parseInt(t.viewport.width);return 736>=a?"Mobile":992>=a?"Tablet":"Desktop"},a.on("mount",function(){a.items=store.items,a.update()})},"{ }"),t.tag2("iz-rating-overview-table",'<table class="table table-hover"> <thead> <tr> <td align="left"> Rating </td> <td align="right"> # Items </td> </tr> </thead> <tbody> <tr each="{item in ratings}"> <td> <span class="badge">{item[0].rating}</span> {getRating(item[0].rating)} </td> <td align="right"> <span>{item.length}</span> </td> </tr> </tbody> </table>',"","",function(t){var a=this;a.mixin("store"),a.ratings=[[],[],[],[],[]],a.on("mount",function(){_.each(store.items,function(t){a.ratings[t.rating-1].push(t)}),a.update()}),a.getRating=function(t){switch(t){case 1:return"Very Bad";case 2:return"Bad";case 3:return"Average";case 4:return"Good";case 5:return"Amazing!"}}},"{ }")});
!function(i){"function"==typeof define&&define.amd?define(function(s,o,e){i(s("riot"),s,o,e)}):"undefined"!=typeof module&&"undefined"!=typeof module.exports?i(require("riot"),require,exports,module):i(window.riot)}(function(i,s,o,e){i.tag2("page-about",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1>This is about page</h1> </div> </div> </section>',"",'id="page"',function(i){}),i.tag2("page-contact",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1>This is contact page</h1> </div> </div> </section>',"",'id="page"',function(i){}),i.tag2("page-counter",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1> Counter is {store.counter} </h1> <button type="button" class="btn btn-primary" onclick="{incrementCounter}">Increment Counter</button> <button type="button" class="btn btn-primary" onclick="{decrementCounter}">Decrement Counter</button> </div> </div> </section>',"",'id="page"',function(i){var s=this;s.mixin("store"),s.incrementCounter=function(){return dispatch(incrementCounter())},s.decrementCounter=function(){return dispatch(decrementCounter())}},"{ }"),i.tag2("page-forgot-password",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1>This is forgot password page</h1> </div> </div> </section>',"",'id="page"',function(i){}),i.tag2("page-index",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <div class="well"> <div class="row"> <div class="col-xs-12 col-sm-4 col-md-3"> <iz-rating-overview-table> </iz-rating-overview-table> </div> <div class="col-xs-12 col-sm-8 col-md-9"> <iz-rating-chart> </iz-rating-chart> </div> </div> </div> </div> </div> <iz-rating-list> </iz-rating-list> </section>',"",'id="page"',function(i){this.on("mount",function(){console.log("page-index mounted")})}),i.tag2("page-login",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12 col-sm-5 col-md-6"> <h2 class="hidden-xs">Login</h2> </div> <div class="col-xs-12 col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-2"> <div class="well"> <h4>Login</h4> <hr> <form> <div class="form-group"> <label>Email</label> <input class="form-control" type="email"> </div> <div class="form-group"> <label>Password</label> <input type="password" class="form-control"> </div> <div class="row"> <div class="col-xs-7"> <a href="/forgot-password" class="btn btn-link">Forgot your password?</a> </div> <div class="col-xs-5"> <button type="submit" class="btn btn-block btn-primary">Login</button> </div> </div> </form> </div> </div> </div> </section>',"",'id="page"',function(i){this.on("mount",function(){console.log("page-index mounted")})}),i.tag2("page-privacy",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1>This is privacy page</h1> </div> </div> </section>',"",'id="page"',function(i){}),i.tag2("page-register",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12 col-sm-5 col-md-6"> <h2 class="hidden-xs">Register</h2> </div> <div class="col-xs-12 col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-2"> <div class="well"> <h4>Register</h4> <hr> <form> <div class="form-group"> <label>Email</label> <input class="form-control" type="email"> </div> <div class="form-group"> <label>Password</label> <input type="password" class="form-control"> </div> <div class="row"> <div class="col-xs-7"> <p> By registering you agree to our <a href="/terms">Terms</a> &amp; <a href="/privacy">Privacy</a> </p> </div> <div class="col-xs-5"> <button type="submit" class="btn btn-block btn-primary">Register</button> </div> </div> </form> </div> </div> </div> </section>',"",'id="page"',function(i){this.on("mount",function(){console.log("page-index mounted")})}),i.tag2("page-search",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1>This is search page</h1> </div> </div> </section>',"",'id="page"',function(i){}),i.tag2("page-terms",'<section class="iz-page-container"> <div class="row"> <div class="col-xs-12"> <h1>This is Terms &amp; Conditions page</h1> </div> </div> </section>',"",'id="page"',function(i){})});