(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},o={app:0},n=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/personal-profile/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var m=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Menu"),i("Home"),i("News"),i("Lifetime"),i("Skill"),i("Info"),i("Footer")],1)},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"navbar is-primary is-fixed-bottom",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"navbar-brand"},[i("a",{staticClass:"navbar-item",attrs:{href:"#home"}},[e._v("Lorenzo Carlesso")]),i("a",{staticClass:"navbar-item",attrs:{href:"http://linkedin.com/in/lorenzo-carlesso-85441a3b",target:"_blank"}},[i("font-awesome-icon",{staticClass:"linkedin-transition",attrs:{icon:["fab","linkedin"],size:"2x"}})],1),i("a",{staticClass:"navbar-burger burger",class:{"is-active":e.showNav},attrs:{id:"navbar-burger",role:"button","aria-label":"menu","aria-expanded":"false","data-target":"siteNavbar"},on:{click:e.openCloseNavbar}},[i("span",{attrs:{"aria-hidden":"true"}}),i("span",{attrs:{"aria-hidden":"true"}}),i("span",{attrs:{"aria-hidden":"true"}})])]),i("div",{staticClass:"navbar-menu",class:{"is-active":e.showNav},attrs:{id:"siteNavbar"}},[i("div",{staticClass:"navbar-end"},e._l(e.barItems,(function(t){return i("a",{staticClass:"navbar-item",attrs:{href:"#"+t.anchor},on:{click:e.openCloseNavbar}},[e._v(e._s(t.title))])})),0)])])])},r=[],l={data:function(){return{showNav:!1,barItems:[{title:"News",anchor:"news"},{title:"Lifetime",anchor:"lifetime"},{title:"Skills",anchor:"skills"},{title:"Info",anchor:"info"}]}},methods:{openCloseNavbar:function(){this.showNav=!this.showNav}}},c=l,m=i("2877"),d=Object(m["a"])(c,s,r,!1,null,null,null),u=d.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"section",attrs:{id:"home"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-half is-offset-one-quarter"},[i("div",{staticClass:"box"},[i("article",{staticClass:"media"},[e._m(0),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("h1",{staticClass:"title"},[e._v(e._s(e.name))]),i("h6",{staticClass:"subtitle is-italic has-text-weight-normal"},[e._v(e._s(e.profession))]),i("p",[e._v(e._s(e.shortDescription))]),i("p",[e._v("I am open to new job opportunities.")]),i("p",[e._v(" I currently live in "),i("b",[e._v(e._s(e.city)+" ("+e._s(e.country)+")")])])])])])])])]),i("div",{staticClass:"section"},[i("div",{staticClass:"columns is-centered has-text-centered"},e._l(e.quotes,(function(t){return i("div",{staticClass:"column is-3"},[i("div",{staticClass:"container"},[i("q",{staticClass:"is-size-6"},[e._v(e._s(t.mention))]),i("h6",{staticClass:"is-italic"},[e._v(e._s(t.author))])])])})),0)])])])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"media-left desktop"},[a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:i("f742"),alt:"Image"}})])])}],v={data:function(){return{name:"Lorenzo Carlesso",profession:"Senior Software Developer",city:"Turin",country:"Italy",shortDescription:"Specialized in web projects.",quotes:[{mention:"You have to die a few times before you can really live",author:"Charles Bukowski"},{mention:"Festìna lente",author:"Augusto"}]}}},f=v,h=Object(m["a"])(f,p,g,!1,null,null,null),b=h.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"section",attrs:{id:"news"}},[i("div",{staticClass:"container content has-text-justified"},[i("h1",{staticClass:"title has-text-centered"},[e._v("News")]),i("h4",{staticClass:"title"},[e._v("2020")]),i("p",[e._v("Sto valutando molto le tecnologie: Java 8 e successive versioni, Scala, Akka, tecnologie web (Javascript ES6, HTML5, CSS3, Vue.js, Bulma), architetture a microservizi.")]),i("p",[e._v("L'entusiasmo, la voglia d'imparare e mettermi in gioco non mi mancano. La programmazione e le tecnologie mi continuano ad affascinare.")]),i("p",[e._v(" Sto cercando opportunità legate ad applicazioni realtime, gestione dei flussi, servizi b2b non troppo vicini ai database ma più d'infrastruttura per analisi, gestione, esposizione e monitoraggio dati. ")]),i("p",[e._v("Anche esperienze su progetti web medio piccoli non mi dispiacerebbero.")])])])}],y={},S=y,w=Object(m["a"])(S,C,A,!1,null,null,null),z=w.exports,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"section",attrs:{id:"lifetime"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title has-text-centered"},[e._v("My Lifetime in a Timeline")]),i("div",{staticClass:"timeline is-centered"},[i("BaseTimelineHeader",{attrs:{content:e.timeline.headerEnd}}),i("BaseTimelineItem",{attrs:{content:e.timeline.pauseForMyself}}),i("BaseTimelineItem",{attrs:{content:e.timeline.xeffe}}),i("BaseTimelineItem",{attrs:{content:e.timeline.secondDaughter}}),i("BaseTimelineItem",{attrs:{content:e.timeline.synthesis}}),i("BaseTimelineItem",{attrs:{content:e.timeline.firstDaughter}}),i("BaseTimelineItem",{attrs:{content:e.timeline.meetAlice}}),i("BaseTimelineItem",{attrs:{content:e.timeline.datasoftRe}}),i("BaseTimelineItem",{attrs:{content:e.timeline.dynamicSitesCourse}}),i("BaseTimelineHeader",{attrs:{content:e.timeline.twoThousand}}),i("BaseTimelineItem",{attrs:{content:e.timeline.youth}}),i("BaseTimelineItem",{attrs:{content:e.timeline.allStamp}}),i("BaseTimelineItem",{attrs:{content:e.timeline.highSchool}}),i("BaseTimelineItem",{attrs:{content:e.timeline.playDrum}}),i("BaseTimelineItem",{attrs:{content:e.timeline.playFootball}}),i("BaseTimelineItem",{attrs:{content:e.timeline.commodore64}}),i("BaseTimelineItem",{attrs:{content:e.timeline.born}}),i("BaseTimelineHeader",{attrs:{content:e.timeline.headerStart}})],1)])])},I=[],x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-primary",class:{"is-medium":e.content.isMedium}},[e._v(e._s(e.content.text))])])},B=[],k={props:{content:{text:String,isMedium:{type:Boolean,default:!1}}}},D=k,E=Object(m["a"])(D,x,B,!1,null,null,null),F=E.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"timeline-item is-primary"},[i("div",{staticClass:"timeline-marker is-icon",class:[e.content.iconColor?e.content.iconColor:"is-primary"]},[i("font-awesome-icon",{attrs:{icon:e.content.icon,size:"2x"}})],1),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[e._v(e._s(e.content.head))]),i("p",[e._v(e._s(e.content.text))]),e.content.modal?i("p",[i("BaseModal",{attrs:{modal:e.content.modal}})],1):e._e()])])},M=[],Q={props:{content:{head:{type:String,required:!0},iconColor:{type:String},text:String,icon:[Object,Array,String],modal:Object}}},j=Q,J=Object(m["a"])(j,T,M,!1,null,null,null),P=J.exports,N=i("bf93"),H={components:{BaseTimelineHeader:F,BaseTimelineItem:P},data:function(){return{timeline:N}}},O=H,L=Object(m["a"])(O,_,I,!1,null,null,null),G=L.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"section",attrs:{id:"skills"}},[i("h1",{staticClass:"title has-text-centered"},[e._v("Skills")]),i("div",{staticClass:"container content"},[i("div",{staticClass:"columns has-text-centered"},e._l(e.skillGroups,(function(t,a){return i("div",{key:"col-"+a,staticClass:"column is-4",attrs:{id:"col-"+a}},[i("h4",{staticClass:"title is-4"},[e._v(e._s(t.title))]),i("div",{attrs:{id:"accordion_"+a}},e._l(t.skills,(function(e,t){return i("BaseAccordion",{key:"article_"+a+"_"+t,attrs:{index:""+t,parentAccordion:"accordion_"+a,content:e}})})),1)])})),0)])])},R=[],Z=i("657e"),V=i.n(Z),W=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"message skill has-text-left"},[i("div",{staticClass:"message-header"},[e._v(" "+e._s(e.content.title)+" "),i("a",{attrs:{href:"#collapsible-message-"+e.parentAccordion+"-"+e.index,"data-action":"collapse"}},[e._v("[+]")])]),i("div",{staticClass:"message-body is-collapsible",attrs:{id:"collapsible-message-"+e.parentAccordion+"-"+e.index,"data-parent":e.parentAccordion}},[i("div",{staticClass:"message-body-content"},[e.content.subtitle?i("p",{staticClass:"subtitle"},[e._v(e._s(e.content.subtitle))]):e._e(),e._l(e.content.messages,(function(t){return i("p",[e._v(e._s(t))])}))],2)])])},U=[],X={props:{parentAccordion:String,index:String,content:{title:String,subtitle:String,messages:Array}}},K=X,Y=Object(m["a"])(K,W,U,!1,null,null,null),$=Y.exports,ee=i("b798"),te={components:{BaseAccordion:$},data:function(){return{skillGroups:ee}},mounted:function(){V.a.attach()}},ie=te,ae=Object(m["a"])(ie,q,R,!1,null,null,null),oe=ae.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},se=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"section",attrs:{id:"info"}},[i("div",{staticClass:"container content"},[i("h1",{staticClass:"title has-text-centered"},[e._v("Info")]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-4"},[i("h6",{staticClass:"title is-6"},[e._v("Why this site?")]),i("p",[e._v("My intention is to give a friendly perspective about me.")])]),i("div",{staticClass:"column is-4"},[i("h6",{staticClass:"title is-6"},[e._v("Training")]),i("p",[e._v("I've found good to build something useful to me and to make practice with some new technology.")])]),i("div",{staticClass:"column is-4"},[i("h6",{staticClass:"title is-6"},[e._v("Warning")]),i("p",[e._v("I forgot: I am not a web designer but I've tried to expose my contents in a pleasent way.")])])])])])}],re={},le=re,ce=Object(m["a"])(le,ne,se,!1,null,null,null),me=ce.exports,de=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"container content has-text-centered"},[e._m(0),i("div",[i("p",[e._v(" © "+e._s(e.now.getFullYear())+" - "),i("strong",[e._v("Lorenzo Carlesso")])])])])])},ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"technologies-alignment"},[a("a",{staticClass:"footer-logo",attrs:{href:"https://vuejs.org/"}},[a("img",{attrs:{src:i("f742"),alt:"vue logo",width:"30",height:"30"}})]),a("a",{staticClass:"footer-logo",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",alt:"Bulma: Free, open source, and modern CSS framework based on Flexbox",width:"100",height:"100"}})]),a("a",{staticClass:"footer-logo",attrs:{href:"https://html.spec.whatwg.org/multipage/"}},[a("img",{attrs:{src:i("cc3c"),alt:"HTML5 spec whatwg",width:"30",height:"30"}})]),a("a",{staticClass:"footer-logo",attrs:{href:"https://sass-lang.com/"}},[a("img",{attrs:{alt:"Sass",width:"30",height:"30",src:i("ef1c")}})])])}],pe={data:function(){return{now:new Date}}},ge=pe,ve=Object(m["a"])(ge,de,ue,!1,null,null,null),fe=ve.exports,he={name:"app",components:{Menu:u,Home:b,News:z,Lifetime:G,Skill:oe,Info:me,Footer:fe}},be=he,Ce=Object(m["a"])(be,o,n,!1,null,null,null),Ae=Ce.exports,ye=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"modal has-text-left",class:{"is-active":e.isActive}},[i("div",{staticClass:"modal-background"}),i("div",{staticClass:"modal-card"},[i("header",{staticClass:"modal-card-head",class:[e.modal.color?e.modal.color:"is-primary"]},[i("p",{staticClass:"modal-card-title"},[e._v(e._s(e.modal.content.title))]),i("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:e.close}})]),i("section",{staticClass:"modal-card-body content"},[i("p",{staticClass:"subtitle"},[e._v(e._s(e.modal.content.subtitle))]),e._l(e.modal.content.messages,(function(t){return i("p",[e._v(e._s(t))])}))],2)])]),i("button",{staticClass:"button",class:[e.modal.color?e.modal.color:"is-primary"],on:{click:e.launch}},[e._v(e._s(e.modal.button))])])},Se=[],we={components:{},data:function(){return{isActive:!1}},props:{modal:{button:String,color:{type:String},content:Object}},methods:{launch:function(){this.isActive=!0},close:function(){this.isActive=!1}}},ze=we,_e=Object(m["a"])(ze,ye,Se,!1,null,null,null),Ie=_e.exports,xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box"},[i("div",{staticClass:"content has-text-left"},[i("h3",{staticClass:"title"},[e._v(e._s(e.content.title))]),i("p",{staticClass:"subtitle"},[e._v(e._s(e.content.subtitle))]),e._l(e.content.messages,(function(t,a){return i("p",{key:"bb_"+a},[e._v(e._s(t))])}))],2)])},Be=[],ke={props:{content:{title:String,subtitle:String,messages:Array}}},De=ke,Ee=Object(m["a"])(De,xe,Be,!1,null,null,null),Fe=Ee.exports,Te=i("ecee"),Me=i("c074"),Qe=i("ad3d"),je=i("f2d1");Te["c"].add(Me["h"],Me["j"],Me["a"],Me["b"],Me["d"],Me["e"],Me["g"],Me["i"],Me["f"],Me["c"],je["a"],je["b"]),a["a"].component("font-awesome-icon",Qe["a"]),a["a"].component("BaseModal",Ie),a["a"].component("BaseBox",Fe),a["a"].config.productionTip=!1,i("b383"),new a["a"]({render:function(e){return e(Ae)}}).$mount("#app")},b383:function(e,t,i){},b798:function(e){e.exports=JSON.parse('[{"title":"Technology","isActive":true,"skills":[{"title":"Java","messages":["I\'ve used Java for 15 years. I started with J2EE 1.4.","It\'s impossible know the whole java world because it became a universe."]},{"title":"Scala","messages":["I\'ve started to use Scala four years ago.","I\'m studying it to improve my confidence with it."]},{"title":"Javascript","messages":["I\'ve written Javascript code. I like use it. but I am not a Javascript ninja.","I am studying ES6 to upgrade my confidence and level."]},{"title":"HTML5 - CSS3","messages":["Actually I\'m not a web designer or a UX but I know how to use these technologies.","I\'ve started to use SASS."]},{"title":"Web Frameworks","messages":["I used Play Framework, Servlet with JSP/JSTL, Struts.","I\'ve started to study Vue.js."]},{"title":"Other","messages":["I used many others frameworks, tool, libraries, IDE. I list someone:","Spring Framework, Maven, Git, IntelliJ, VSCode."]}]},{"title":"Software Engineering","skills":[{"title":"Programming and coding","messages":["Ho utilizzato linguaggi di vario tipo, partendo da PHP, ASP per arrivare a Javascript, Java e Scala.","Non sono rimasto fermo ad un solo paradigma di programmazione, anche se quello ad oggetti è quello su cui ho lavorato di più.","Di fronte alle problematiche d\'implementazione cerco di sfruttare i design pattern ed applicare i design concepts di modularizzazione, astrazione e maintainability."]},{"title":"Development process","messages":["Ho iniziato a lavorare con il tipico processo Waterfall.","In seguito ho avuto modo di fare esperienze con la  metodologia di sviluppo Agile nelle forme di Kanban e Scrum."]},{"title":"Software design","messages":["Ho utilizzato il modello MVC come principale modello di riferimento architetturale.","Attualmente sto scoprendo le potenzialità dei sistemi reattivi legati ad architetture a microservizi.","Ho avuto occasione di fare esperienza su progetti che sfruttavano i concetti chiave del Domain Driven Design."]}]},{"title":"Soft Skill","skills":[{"title":"Communication","messages":["Provo piacere nel condividere e ascoltare le persone che collaborano con me.","Cerco di essere sintetico ed esplicito nella comunicazione per non dare spazio a incomprensioni."]},{"title":"Teamwork","messages":["Non sono fatto per lavorare da solo. Ho bisogno di condividere il bene ed il male del lavoro assumendo un atteggiamento propositivo, finalizzato al successo delle attività.","Ho lavorato quasi sempre con team di poche persone."]},{"title":"Adaptability","messages":["Le mie esperienze lavorative erano spesso disorganizzate e di conseguenza era importante gestire le attività ed il tempo a disposizione.","Lavorando in aziende medio piccole era quasi la normalità dover assumere ruoli non sempre di solo sviluppatore."]},{"title":"Problem-Solving","messages":["Credo che la soluzione migliore per affrontare e risolvere un problema sia la condivisione. Questo offre l\'opportunità di avere più spunti per trovare la soluzione efficace.","Cerco di adottare un metodo universale per aumentare la propria indipendenza di fronte ai problemi: continuare a studiare. Ritengo sia il modo milgiore per contenere il lato oscuro di ognuno di noi: l\'ignoranza. "]},{"title":"Creativity","messages":["Non sono particolarmente creativo a livello artistico ma cerco di esserlo nel ragionamento e nell\'osservazione per trovare sempre uno schema logico alle situazioni che devo elaborare.","Faccio uso di droghe per avere spunti creativi da altre dimensioni. Scherzo. Questo succedeva per alcuni musicisti negli anni sessanta...a no, succede ancora oggi."]},{"title":"Work Ethic","messages":["Cerco di mantenere sempre un atteggiamento professionale in ogni ambito per risultare coerente e leggibile verso gli altri.","Se posso non evito la critica costruttiva per risolvere o migliorare situazioni che possano creare un danno economoico o di dispersione di tempo."]},{"title":"Interpersonal Skills","messages":["Se il contesto lo permette, cerco di rompere il muro della formalità per sentirmi e far sentire a proprio agio le persone che ho intorno per creare un clima rilassato e disteso.","Credo che un ambiente con pochi conformismi permetta alle persone di aprirsi offrendo una migliore comunicazione e produttività."]},{"title":"Leadership","messages":["Sono in grado di condurre piccoli team.","Ho sempre cercato di aiutare colleghi in difficoltà offrendo l\'aiuto tecnico, supporto morale e la condivisione.","Tendo a coinvolgere tutte le persone che collaborano con me ponendomi il problema di trovare il modo giusto per farle sentire valorizzate."]},{"title":"Attention to Detail","messages":["Molte persone che mi conoscono mi definiscono osservatore, perciò l\'attenzione al dettaglio la pratico continuamente.","Non riesco a convivere per troppo tempo in un ambiente troppo disorganizzato nel momento in cui percepisco che non è un\'eccezione ma la normalità."]}]}]')},bf93:function(e){e.exports=JSON.parse('{"pauseForMyself":{"head":"September 2019 - Today","icon":["fa","pause-circle"],"modal":{"button":"Myself","color":"is-secondary","content":{"title":"Myself","subtitle":"Manager of Training for Myself","messages":["Con l\'esperienza maturata e la continua diversificazione delle figure professionali del settore IT, ho sentito di dover prendere una pausa dal lavoro per fare alcune riflessioni e scelte professionali.","Ho voluto consolidare alcune conoscenze per poter ripartire con un nuovo entusiasmo verso opportunità che il mondo del lavoro potrebbe offrirmi per dar spazio alla mia crescita professionale.","Sto studiando inglese per otternere la certificazione B1.","Ho fatto e sto seguento diversi corsi online per consolidare ed approfondire tecnologie, metodologie di sviluppo ed architetture software.","Cerco di realizzare alcuni piccoli progetti con l\'idea di realizzare un mio portfolio."]}}},"xeffe":{"head":"September 2013","icon":["fa","building"],"iconColor":"is-secondary","modal":{"button":"Xeffe","color":"is-secondary","content":{"title":"Xeffe s.r.l. (Turin)","subtitle":"Java/Scala Senior Developer - Team Leader","messages":["In quest\'azienda ho avuto modo di fare molta esperienza nell\'approccio allo sviluppo software DDD.","Ho potuto utilizzare per la prima volta Scala, ma purtroppo solo come supporto a Java, perciò non ho potuto consolidare una profonda esperienza.","Alcuni altri strumenti e tecnologie utilizzati sono stati: Git, Gitlab, Maven, Play Framework, Spring, HighCart, REST, Json, ecc.","E\' stata un\'esperienza importante dal punto di vista umano. Qui ho conosciuto molti colleghi con cui ho avuto grandissimo piacere collaborare."]}}},"synthesis":{"head":"April 2008","icon":["fa","building"],"iconColor":"is-secondary","modal":{"button":"Synthesis","color":"is-secondary","content":{"title":"Synthesis (Turin)","subtitle":"Java Senior Developer","messages":["Qui ho avuto la possibilità di crescere professionalmente sia come programmatore che come lavoratore.","Ho avuto modo di mettermi alla prova seguendo progetti in maniera indipendente nell\'intero ciclo di realizzazione del software.","L\'azienda mi ha dato possibilità d\'interfacciarmi direttamente con il cliente."]}}},"datasoftRe":{"head":"January 2004","icon":["fa","building"],"iconColor":"is-secondary","modal":{"button":"Datasoft R.E.","color":"is-secondary","content":{"title":"Datasoft R.E. (Turin)","subtitle":"Java Junior Developer","messages":["Nel 2002 tornai a lavorare in un\'azienda informatica.","Lo stack tecnologico iniziale era: Oracle, Java(Swing, EJB2), Struts, HTML, Javascript, CSS.","Con il passare degli anni vidi altre tecnologie come Spring Framework ed Adobe Flex.","Feci molta esperienza di programmazione, e divenni quello che sono ancora ora: un FullStack developer.","Qui iniziai a fare anche le prime rasferte presso il cliente."]}}},"dynamicSitesCourse":{"head":"2001","icon":["fa","school"],"modal":{"button":"Dynamic Sites","content":{"title":"Dynamic Sites Course","subtitle":"ASP - PHP - JAVA - Microsoft Access","messages":["Passati un po\' di anni e con l\'inizio della diffusione dei primi modem nelle case, iniziai a riscoprire interesse per la programmazione","Iniziai a fare qualche pagina HTML (anche se non è programmare) così per diletto.","Dopo poco lasciai il lavoro per fare un corso di un anno su ASP, PHP e Java. Agli inizi del 2000 si parlava di siti dinamici, non ancora di web application.","Perciò ottenni la qualifica come programmatore di siti dinamici (i primi fullstack developer)."]}}},"allStamp":{"head":"December 1997","icon":["fa","building"],"iconColor":"is-secondary","modal":{"button":"All Stamp","color":"is-secondary","content":{"title":"All Stamp s.r.l. (Turin)","subtitle":"Technical Designer","messages":["La programmazione mi aveva affascinato ma non convinto così tanto da continuare nello studio o nel lavoro.","Così finita la scuola iniziai subito a lavorare come disegnatore tecnico meccanico."]}}},"secondDaughter":{"head":"2010","icon":["fa","baby"],"iconColor":"is-pink-baby","text":"My second daughter is born"},"firstDaughter":{"head":"2007","icon":["fa","baby"],"iconColor":"is-pink-baby","text":"My first daughter is born"},"meetAlice":{"head":"May 2005","icon":["fa","heart"],"iconColor":"is-love","text":"I met my wife Alice"},"youth":{"head":"1999","icon":["fa","child"],"modal":{"button":"Youth","content":{"title":"Youth","subtitle":"","messages":["Erano anni molto spensierati e sereni, dove il computer non era centrale nella mia vita ma un giocattolo come gli altri anche se ha assorbito parecchie ore di gioco.","Abitavo in periferia, con la possbilità di essere molto a contatto con la natura e passare tempo con gli amici.","Così crebbi dando spazio alle mie passioni: calcio, musica, vacanze, avventure con gli amici."]}}},"highSchool":{"head":"June 1997","icon":["fa","school"],"modal":{"button":"High School","primaryColor":true,"content":{"title":"Computer Expert Graduation","subtitle":"I.T.I.S. E. Majoarana - Grugliasco (Turin)","messages":["Qui è dove ho scritto il mio primo codice con Turbo Pascal.","In questa scuola ho imparato i veri rudimenti della programmazione.","Fare un flowchart(con carta e penna, argh), i principali algoritmi di ordinamento, strutture dati(albero, vettori, mappe, matrici), il concetto di file e di database, etc."]}}},"playDrum":{"head":"1992","icon":["fa","drum"],"text":"I started to play drum"},"playFootball":{"head":"1986","icon":["fa","futbol"],"text":"I started to play football"},"born":{"head":"1977","icon":["fa","baby"],"iconColor":"is-pink-baby","text":"When I was born"},"commodore64":{"head":"1985","icon":["fa","gamepad"],"modal":{"button":"C=64","primaryColor":true,"content":{"title":"Commodore 64","subtitle":"Natale 1985","messages":["Io e i miei fratelli ricevemmo per Natale il Commodore 64. Fu li che scoprimmo il mondo della programmazione ...ehm no, no, quella è una storia di molti altri programmatori. Noi scoprimmo semplicemente il mondo delle console per giocare.","Mentre i computer continuavano ad evolvere, io e i miei fratelli continuavamo ad evolvere le nostre abilità nei videogiochi. Oppure a stampare qualche banner, copertina di MC o DVD con la stampante ad aghi o ad usare i primi fogli eletttonici (Lotus 1-2-3).","Dato che in quegli anni era normale usare la console di MS-DOS, imparai con naturalezza i primi comandi base di un sistema operativo: cd, dir, copy *.* , zip, unzip."]}}},"headerEnd":{"text":"...","isMedium":true},"twoThousand":{"text":"2000"},"headerStart":{"text":"1970","isMedium":true}}')},cc3c:function(e,t){e.exports="data:image/png;base64,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"},ef1c:function(e,t,i){e.exports=i.p+"img/sass.8e766e95.svg"},f742:function(e,t,i){e.exports=i.p+"img/vue.82b9c7a5.png"}});
//# sourceMappingURL=app.edba4aa5.js.map