(this.webpackJsonpkasa=this.webpackJsonpkasa||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(16),r=s.n(a),c=(s(23),s(24),s(2)),o=s(3),l=s(5),d=s(4),j=s(10),u=(s(25),s(0)),p=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(e){return Object(u.jsxs)("div",{className:"sampleLoc",children:[Object(u.jsx)("p",{children:this.props.appartInfos.title}),Object(u.jsx)("img",{src:this.props.appartInfos.cover,alt:""})]})}}]),s}(n.Component),h=(s(27),s(9)),b=(s(28),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(e){return Object(u.jsxs)("section",{className:"error404",children:["fetchError"===this.props.type?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"error404__number",children:"431"}),Object(u.jsxs)("div",{className:"error404__phrase",children:[Object(u.jsx)("p",{children:"Nous ne parvenons pas actuellement \xe0 r\xe9cup\xe9rer les donn\xe9es."}),Object(u.jsx)("p",{children:"Vous pouvez r\xe9essayer dans quelques minutes.."})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"error404__number",children:"404"}),Object(u.jsxs)("div",{className:"error404__phrase",children:[Object(u.jsx)("p",{children:"Oups ! La page que "}),Object(u.jsx)("p",{children:"vous demandez n'existe pas"})]})]}),Object(u.jsx)(h.b,{to:"/kasa",children:Object(u.jsx)("p",{className:"error404__homeLink",children:"Retourner sur la page d'accueil"})})]})}}]),s}(n.Component)),m=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={error:null,isLoaded:!1,appartments:[]},n.componentDidMount=n.componentDidMount.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("/ThomasSemeria_11_20092021/kasa/data/logements.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,appartments:t})}),(function(t){e.setState({isLoaded:!0,error:!0})}))}},{key:"render",value:function(){console.log(window.location.origin+"/data/logements.json");var e=this.state.appartments;return this.state.error?Object(u.jsx)(b,{type:"fetchError"}):Object(u.jsx)("div",{className:"announces",children:e.map((function(e){return Object(u.jsx)(h.b,{to:"/logement?id=".concat(e.id),children:Object(u.jsx)(p,{appartInfos:e})},e.id)}))})}}]),s}(n.Component),O=(s(37),s.p+"static/media/homeBanner.053687a5.jpg"),x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{tabIndex:"0",className:"header__pic",children:[Object(u.jsx)("div",{className:"header__pic-overlay"}),Object(u.jsx)("img",{tabIndex:"0",className:"picAnim",src:O,alt:"Paysage c\xf4tier"}),Object(u.jsx)("p",{tabIndex:"0",children:"Chez vous,"}),Object(u.jsx)("p",{tabIndex:"0",children:"partout et ailleurs"})]})}}]),s}(n.Component),g=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(m,{})]})}}]),s}(n.Component),v=(s(38),s.p+"static/media/footerLogo.7ee6f1c0.svg"),f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("img",{src:v,alt:"Logo Kasa",tabIndex:"0"}),Object(u.jsx)("p",{tabIndex:"0",children:"\xa9 2020 Kasa. All rights reserved"})]})}}]),s}(n.Component),_=s.p+"static/media/headerLogo.3e4c432d.svg",N=(s(39),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)(h.b,{to:"/kasa",children:Object(u.jsx)("img",{className:"header__logo",src:_,alt:"Logo Kasa Lien vers la page d'accueil"})}),Object(u.jsxs)("div",{className:"header__buttons",children:[Object(u.jsx)(h.c,{exact:!0,activeClassName:"underlined",to:"/kasa",children:Object(u.jsx)("span",{children:"Accueil"})}),Object(u.jsx)(h.c,{exact:!0,activeClassName:"underlined",to:"/apropos",children:Object(u.jsx)("span",{children:"A propos"})})]})]})}}]),s}(n.Component)),y=(s(40),s.p+"static/media/arrowDown.6be86a8f.svg"),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={isOpened:!1},n.openOrClosed=n.openOrClosed.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"openOrClosed",value:function(){console.log(this.state.isOpened),this.state.isOpened&&this.setState({isOpened:!1}),this.state.isOpened||this.setState({isOpened:!0})}},{key:"render",value:function(e){var t=this;return Object(u.jsxs)("div",{className:"toggleDiv ".concat(this.props.className),children:[Object(u.jsxs)("div",{tabIndex:"0",className:"toggleDiv__title",onClick:function(){return t.openOrClosed()},children:[Object(u.jsx)("p",{children:this.props.title}),Object(u.jsx)("img",{className:"toggleDiv__arrow openArrow",src:y,alt:""})]}),Object(u.jsx)("div",{className:this.state.isOpened?"toggleDiv__content open":"toggleDiv__content closed",children:"object"===typeof this.props.content?this.props.content.map((function(e,s){return Object(u.jsx)("p",{tabIndex:t.state.isOpened?"0":"",children:e},s)})):Object(u.jsx)("p",{tabIndex:this.state.isOpened?"0":"",children:this.props.content})})]})}}]),s}(n.Component),S=(s(41),s.p+"static/media/starRed.4b5ba26a.svg"),A=s.p+"static/media/starGrey.27754a3e.svg",w=(s(42),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.moveSlide,s=e.direction,n=e.visibility,i=e.size;return Object(u.jsx)("button",{onClick:t,className:"left"===s&&"visible"===n?"logement__gallery-leftArrow":"right"===s&&"visible"===n?"logement__gallery-rightArrow":"hidden","aria-label":"left"===s?"Image pr\xe9c\xe9dente":"Image suivante",children:Object(u.jsx)("img",{src:"left"===s&&"small"===i?"/ThomasSemeria_11_20092021/kasa/kasa/build/Assets/leftSmallArrow.svg":"right"===s&&"small"===i?"/ThomasSemeria_11_20092021/kasa/kasa/build/Assets/rightSmallArrow.svg":"left"===s&&"large"===i?"/ThomasSemeria_11_20092021/kasa/kasa/build/Assets/leftArrow.svg":"/ThomasSemeria_11_20092021/kasa/kasa/build/Assets/rightArrow.svg",alt:"icone fl\xe8che"})})}}]),s}(n.Component)),D=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).updateDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={slideAnim:{index:1,inProgress:!1},width:0,height:0},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"leftSlide",value:function(){1!==this.state.slideAnim.index?this.setState({slideAnim:{index:this.state.slideAnim.index-1,inProgress:!0}}):1===this.state.slideAnim.index&&this.setState({slideAnim:{index:this.props.dataSlider.length,inProgress:!0}}),console.log(this.state.slideAnim.index,this.props.dataSlider.length,this.props.dataSlider)}},{key:"rightSlide",value:function(){this.state.slideAnim.index!==this.props.dataSlider.length?this.setState({slideAnim:{index:this.state.slideAnim.index+1,inProgress:!0}}):this.state.slideAnim.index===this.props.dataSlider.length&&this.setState({slideAnim:{index:1,inProgress:!0}}),console.log(this.state.slideAnim.index,this.props.dataSlider.length)}},{key:"render",value:function(){console.log(this.props.dataSlider);var e=this.props.dataSlider,t=this.state.slideAnim;return Object(u.jsxs)("div",{className:"logement__gallery",children:[e.map((function(s,n){return Object(u.jsx)("div",{className:t.index===n+1?"slide active-anim":"slide",children:Object(u.jsx)("img",{src:e[n],className:"logement__gallery-activePic",alt:""})},n)})),Object(u.jsx)(w,{size:window.innerWidth<768?"small":"large",visibility:e.length>1?"visible":"hidden",moveSlide:this.leftSlide.bind(this),direction:"left"}),Object(u.jsx)(w,{size:window.innerWidth<768?"small":"large",visibility:e.length>1?"visible":"hidden",moveSlide:this.rightSlide.bind(this),direction:"right"})]})}}]),s}(n.Component),C=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={error:null,isLoaded:!1,appartment:null,idLocation:"",etoilesDiv:[]},n.componentDidMount=n.componentDidMount.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("/ThomasSemeria_11_20092021/kasa/kasa/build/data/logements.json").then((function(e){return console.log(e),e.json()})).then((function(t){var s=window.location.search.substr(4),n=t.filter((function(e){return e.id===s}))[0];if(console.log(n),void 0!==n){for(var i=[],a=0;a<5;a++)a<n.rating&&a<5?i.push(Object(u.jsx)("img",{src:S,alt:""},a)):a>=n.rating&&a<5&&i.push(Object(u.jsx)("img",{src:A,alt:""},a));e.setState({isLoaded:!0,appartment:n,etoilesDiv:i})}else e.setState({error:!0})}),(function(t){e.setState({isLoaded:!0,error:!0}),console.log(t)}))}},{key:"render",value:function(){var e=this.state,t=e.appartment,s=e.etoilesDiv;return console.log(this.state.appartment),null===t||this.state.error?Object(u.jsx)(b,{type:"fetchError"}):Object(u.jsx)("main",{className:"logement",children:Object(u.jsxs)("div",{className:"logement__",children:[Object(u.jsx)(D,{dataSlider:t.pictures}),Object(u.jsxs)("section",{className:"logement__details",children:[Object(u.jsx)("section",{className:"logement__details-descript",children:Object(u.jsx)("p",{tabIndex:"0",children:t.title})}),Object(u.jsx)("section",{className:"logement__details-city",children:Object(u.jsx)("p",{tabIndex:"0",children:t.location})}),Object(u.jsx)("section",{className:"logement__details-tags",children:t.tags.map((function(e,t){return Object(u.jsx)("div",{className:"tag",children:Object(u.jsx)("p",{children:e})},"00"+t)}))}),Object(u.jsxs)("section",{className:"logement__details__infos",children:[Object(u.jsx)("section",{tabIndex:"0","aria-label":"Note du logement",className:"logement__details__infos-stars",children:s}),Object(u.jsxs)("section",{className:"logement__details__infos-name",children:[Object(u.jsxs)("div",{tabIndex:"0",className:"names",children:[Object(u.jsx)("p",{children:t.host.name.split(" ")[0]}),Object(u.jsx)("p",{children:t.host.name.split(" ")[1]})]}),Object(u.jsx)("div",{className:"profilePic",tabIndex:"0","aria-label":"Photo de profil de "+t.host.name,children:Object(u.jsx)("img",{src:t.host.picture,alt:""})})]})]})]}),Object(u.jsxs)("div",{className:"toggleDivs",children:[Object(u.jsx)(k,{className:"toggleDivs__logement smallFont",title:"Description",content:t.description}),Object(u.jsx)(k,{className:"toggleDivs__logement smallFont",title:"\xc9quipements",content:t.equipments})]})]})})}}]),s}(n.Component),I=(s(43),s(44),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"picDiv",children:Object(u.jsx)("img",{tabIndex:"0",className:"picAnim",src:"/ThomasSemeria_11_20092021/kasa/kasa/build/Assets/mountains.jpg",alt:"Montagnes"})})}}]),s}(n.Component));console.log(window.innerWidth);var L=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("main",{className:"APropos",children:[Object(u.jsx)(I,{}),Object(u.jsxs)("div",{className:"aproposToggleDivs",children:[Object(u.jsx)(k,{title:"Fiabilit\xe9",content:"Les annonces post\xe9es sur Kasa garantissent une fiabilit\xe9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xe9guli\xe8rement v\xe9rifi\xe9es par nos \xe9quipes.",className:"bigFont"}),Object(u.jsx)(k,{title:"Respect",content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xeenera une exclusion de notre plateforme.",className:"bigFont"}),Object(u.jsx)(k,{title:"Service",content:"Nos \xe9quipes se tiennent \xe0 votre disposition pour vous fournir une exp\xe9rience parfaite. N'h\xe9sitez pas \xe0 nous contacter si vous avez la moindre question.",className:"bigFont"}),Object(u.jsx)(k,{title:"Responsabilit\xe9",content:"La s\xe9curit\xe9 est la priorit\xe9 de Kasa. Aussi bien pour nos h\xf4tes que pour les voyageurs, chaque logement correspond aux crit\xe8res de s\xe9curit\xe9 \xe9tablis par nos services. En laissant une note aussi bien \xe0 l'h\xf4te qu'au locataire, cela permet \xe0 nos \xe9quipes de v\xe9rifier que les standards sont bien respect\xe9s. Nous organisons \xe9galement des ateliers sur la s\xe9curit\xe9 domestique pour nos h\xf4tes.",className:"bigFont"})]})]})}}]),s}(n.Component),q=s(6);var z=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(N,{}),Object(u.jsxs)(q.c,{children:[Object(u.jsx)(q.a,{path:"/kasa",exact:!0,component:g}),Object(u.jsx)(q.a,{path:"/logement",exact:!0,component:C}),Object(u.jsx)(q.a,{path:"/apropos",exact:!0,component:L}),Object(u.jsx)(q.a,{path:"/",component:b})]})]}),Object(u.jsx)("div",{className:"footerDiv",children:Object(u.jsx)(f,{})})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.654c8c74.chunk.js.map