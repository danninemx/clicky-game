(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"http://pre12.deviantart.net/d84d/th/pre/i/2016/291/4/b/henry_cavill_superman_re_colored_by_sheelal416-dal9afg.jpg","clicked":false},{"id":2,"image":"http://akns-images.eonline.com/eol_images/Entire_Site/20080724/300.dark.knight.072408.jpg","clicked":false},{"id":3,"image":"https://cdn.pastemagazine.com/www/articles/ironmanlead.jpeg","clicked":false},{"id":4,"image":"http://vignette3.wikia.nocookie.net/marvelmovies/images/7/7e/Hulk_Screaming.jpg/revision/latest/zoom-crop/width/320/height/320?cb=20131120002152","clicked":false},{"id":5,"image":"https://static.tvtropes.org/pmwiki/pub/images/mcu_thor.png","clicked":false},{"id":6,"image":"https://pbs.twimg.com/profile_images/754390251922198530/c8nxuuJ6_400x400.jpg","clicked":false},{"id":7,"image":"https://static.tvtropes.org/pmwiki/pub/images/aquamandceu.jpg","clicked":false},{"id":8,"image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/23/16/enhanced/buzzfeed-prod-web03/grid-cell-21558-1469305892-9.jpg","clicked":false},{"id":9,"image":"https://www.behindwoods.com/tamil-movies-cinema-news-16/images/avengers-4-might-be-the-last-mcu-movie-starring-captain-america-photos-pictures-stills.jpg","clicked":false},{"id":10,"image":"https://media1.popsugar-assets.com/files/thumbor/hmEdSk0Juf10CocRgBi8xo0OSvc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2011/06/24/4/192/1922507/e670aa67ff95bdfb_GreenLantern/i/Green-Characters-From-Movies.jpg","clicked":false},{"id":11,"image":"https://www.windowsmode.com/wp-content/uploads/2018/02/Black-Panther-Mask-HD-Wallpaper-300x300.jpg","clicked":false},{"id":12,"image":"https://consequenceofsound.net/wp-content/uploads/2019/03/shazam-e1554225406459.jpg?quality=80&w=380&h=380&crop=1","clicked":false}]')},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),l=a(4),o=a(5),s=a(7),d=a(6),m=a(8),u=(a(14),function(e){return i.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),h=(a(15),function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",{className:"brand animated lightSpeedIn"},i.a.createElement("a",{href:"/clicky-game/"},e.title)),i.a.createElement("li",{id:"rw"},e.rightWrong),i.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),i.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),p=(a(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(17),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),g=function(e){return i.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return i.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},v=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return i.a.createElement("div",{className:t},e.children)},S=a(1);a(18);var w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={friends:S,currentScore:0,topScore:0,rightWrong:"",clicked:[]},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,rightWrong:""}),e>=a.state.topScore?a.setState({topScore:e}):12===e&&a.setState({rightWrong:"You win!"}),a.handleShuffle()},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,rightWrong:"Civilian casualty!",clicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(S);a.setState({friends:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(h,{title:"Superhero Clicky",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),i.a.createElement(f,null,"Earth is under attack! Click a new hero to aid in her defense!"),i.a.createElement(g,null,i.a.createElement(k,null,this.state.friends.map((function(t){return i.a.createElement(v,{size:"md-3 sm-6"},i.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))})))))}}]),t}(n.Component);a(19);r.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.81c7f772.chunk.js.map