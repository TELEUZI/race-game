(self.webpackChunkrace_game=self.webpackChunkrace_game||[]).push([[709],{673:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var i=s(645),n=s.n(i)()((function(t){return t[1]}));n.push([t.id,".button{width:207px;height:36px;color:#388bb1;background:#e7e7e7;box-shadow:0px 3px 5px rgba(0,0,0,.2),0px 1px 18px rgba(0,0,0,.12),0px 6px 10px rgba(0,0,0,.14);border-radius:4px}",""]);const a=n},679:(t,e,s)=>{var i=s(379),n=s(673);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.id,n,""]]);i(n,{insert:"head",singleton:!1}),t.exports=n.locals||{}},628:(t,e,s)=>{"use strict";s.d(e,{Rn:()=>a,oX:()=>r,DT:()=>o,tD:()=>c,Bo:()=>l});var i=s(345);const n=`${s(376).Z.baseUrl}/garage`;async function a(t,e=i.ch){const s=await fetch(`${n}?_page=${t}&_limit=${e}`);return{items:await s.json(),count:s.headers.get("X-Total-Count")??"0"}}async function r(t){return(await fetch(`${n}/${t}`)).json()}async function o(t){return(await fetch(n,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}})).json()}async function c(t){return(await fetch(`${n}/${t}`,{method:"DELETE"})).json()}async function l(t,e){return(await fetch(`${n}/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}})).json()}},562:(t,e,s)=>{"use strict";s.d(e,{ix:()=>r,H9:()=>o,P8:()=>c,BS:()=>l,IO:()=>h});var i=s(376),n=s(345);const a=`${i.Z.baseUrl}/winners`;async function r(t,e=n.ik,s="id",i="ASC"){const r=await fetch(`${a}?_page=${t}&_limit=${e}${function(t,e){return t&&e?`&_sort=${t}&_order=${e}`:""}(s,i)}`);return{items:await r.json(),count:r.headers.get("X-Total-Count")??"0"}}async function o(t){return(await fetch(`${a}/${t}`)).json()}async function c(t){return(await fetch(a,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}})).json()}async function l(t){try{const e=await fetch(`${a}/${t}`,{method:"DELETE"});return await e.json()}catch(t){return{}}}async function h(t,e){return(await fetch(`${a}/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}})).json()}},113:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n}),s(679);var i=s(583);class n extends i.Z{constructor(t,e,s=(()=>{})){super("button",["button",...e||[]],t),this.onClick=s,this.node.onclick=t=>{t.preventDefault(),this.onClick()}}updateOnClick(t){this.onClick=t}}},945:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var i=s(583),n=s(113);class a extends i.Z{constructor(t,e,s=[],{start:i,stop:a}={start:{textContent:"Start"},stop:{textContent:"Stop"}}){super("div",["controls",...s??[]]),this.startButton=new n.Z(i.textContent,["start-button"],(()=>{this.handleEmits(t,this.setStartState.bind(this),"after")})),this.stopButton=new n.Z(a.textContent,["stop-button"],(()=>{this.handleEmits(e,this.setStopState.bind(this),"before")})),this.stopButton.setAttribute("disabled","disabled"),this.appendChildren([this.startButton,this.stopButton])}setStartState(){this.startButton.setAttribute("disabled","disabled"),this.stopButton.removeAttribute("disabled")}setStopState(){this.stopButton.setAttribute("disabled","disabled"),this.startButton.removeAttribute("disabled")}}},111:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(945);class n extends i.Z{constructor(t,e,s=[],{start:i,stop:n}={start:{textContent:"Next page"},stop:{textContent:"Previous page"}}){super(t,e,["pagination-controls",...s??[]],{start:i,stop:n})}handleEmits(t,e){t().then((()=>e()))}updateControlsState(t,e){t?this.startButton.setAttribute("disabled","disabled"):this.startButton.removeAttribute("disabled"),e?this.stopButton.setAttribute("disabled","disabled"):this.stopButton.removeAttribute("disabled")}}},706:(t,e,s)=>{"use strict";var i;s.d(e,{Z:()=>r}),function(t){t.valid="valid",t.invalid="invalid"}(i||(i={}));const n=i;var a=s(583);class r extends a.Z{constructor(t,e,s,i){super("input",["input",...e],""),this.isValid=!0,this.input=this.node,this.setAttributes(t,s??"",i??""),this.createListeners()}setHandler(t){this.onInput=t}checkValidation(){this.onInput&&(this.input.reportValidity(),this.isValid=this?.onInput(this.input),this.input.classList.add(this.isValid?n.valid:n.invalid),this.input.classList.remove(this.isValid?n.invalid:n.valid))}setAttributes(t,e,s){this.setAttribute("type",t),this.setAttribute("placeholder",e),s&&this.setAttribute("value",s.toString())}createListeners(){this.input.addEventListener("input",(()=>{this.checkValidation()})),this.input.addEventListener("invalid",(()=>{}),!1)}getValue(){return this.input.value}getNode(){return this.node}setValue(t){this.input.value=t}}},376:(t,e,s)=>{"use strict";var i;s.d(e,{Z:()=>n}),function(t){t.baseUrl="http://localhost:3000",t[t.garageCarLimit=7]="garageCarLimit",t[t.winnerCarLimit=10]="winnerCarLimit"}(i||(i={}));const n=i},497:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var i=s(978),n=s(583),a=s(706);class r extends n.Z{constructor(t,e){super("div",["car-container"]),this.name=t,this.color=e;const s=new n.Z("div",["car-container__info"]);this.carImage=new n.Z("div",["car-container__image"]).getNode(),this.carImage.innerHTML=i,this.carImage.style.fill=e,this.carName=new n.Z("label",["car-name"],t),this.carNameUpdate=new a.Z("text",["task__input","hidden"]),this.carColorUpdate=new a.Z("color",["task__input","hidden"]),this.carNameUpdate.setValue(t),this.carColorUpdate.setValue(e),s.appendChildren([this.carName,this.carNameUpdate,this.carColorUpdate]),this.node.append(s.getNode()),this.node.append(this.carImage)}setColor(t){this.color=t,this.carImage.style.fill=t}setName(t){this.name=t,this.carName.setContent(t)}getName(){return this.name}getColor(){return this.color}startAnimation(t){this.carImage.style.animationName="slide",this.carImage.style.animationDuration=t,this.carImage.style.animationPlayState="running",this.carImage.style.animationFillMode="forwards"}stopAnimation(){this.carImage.style.animation=""}pauseAnimation(){this.carImage.style.animationPlayState="paused"}toggleUpdateMode(){this.carName.toggleClass("hidden"),this.carNameUpdate.toggleClass("hidden"),this.carColorUpdate.toggleClass("hidden")}updateValuesFromForm(){this.setName(this.carNameUpdate.getValue()),this.setColor(this.carColorUpdate.getValue())}getSVGInHTML(){return this.carImage.outerHTML}}},345:(t,e,s)=>{"use strict";s.d(e,{ch:()=>n,ik:()=>a,ZP:()=>r});var i=s(583);const n=7,a=2;class r extends i.Z{constructor(){super(...arguments),this.currentPage=1,this.paginationLimit=n}async updatePaginationButtons(){const t=await this.getCount(),e=Math.ceil(t/this.paginationLimit),s=1===this.currentPage,i=e===this.currentPage;this.paginationControls.updateControlsState(i,s)}}},880:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(628),n=s(562),a=s(884),r=s(345);class o{static async createWinner(t,e){const s=await(0,n.H9)(t);null==s.wins?await(0,n.P8)({id:t,wins:1,time:e}):await(0,n.IO)(t,{wins:s.wins+=1,time:s.time>e?e:s.time})}static async getWinners(t,e,s){const a=await(0,n.ix)(t,r.ik,e,s);return this.winnersCount.notify(parseInt(a.count,10)),Promise.all(a.items.map((async t=>{const e=await(0,i.oX)(t.id);return{id:t.id,name:e.name,color:e.color,wins:t.wins,time:t.time}})))}static async getCount(){return this.winnersCount.getValue()}}o.winnersCount=new a.Z(0)},884:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i=class{constructor(t){this.value=t,this.listeners=[]}subscribe(t){this.listeners.push(t)}unsubscribe(t){this.listeners=this.listeners.filter((e=>e!==t))}notify(t){var e;e=t,this.value="function"==typeof e?t(this.value):t,this.listeners.forEach((t=>t(this.value)))}getValue(){return this.value}}},978:t=>{"use strict";t.exports='<svg version="1.1" class="car-svg" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n     width="98.967px" height="98.967px" viewBox="0 0 98.967 98.967"\n     xml:space="preserve">\n<g>\n <path d="M17.275,52.156c-4.124,0-7.468,3.343-7.468,7.468c0,0.318,0.026,0.631,0.066,0.938c0.463,3.681,3.596,6.528,7.401,6.528\n   c3.908,0,7.112-3.004,7.437-6.83c0.017-0.209,0.031-0.422,0.031-0.637C24.743,55.499,21.4,52.156,17.275,52.156z M13.537,56.81\n   l1.522,1.523c-0.118,0.203-0.211,0.422-0.271,0.656h-2.146C12.752,58.177,13.063,57.435,13.537,56.81z M12.632,60.282h2.163\n   c0.061,0.23,0.151,0.448,0.271,0.648l-1.526,1.525C13.067,61.835,12.749,61.093,12.632,60.282z M16.629,64.263\n   c-0.809-0.113-1.544-0.43-2.166-0.899l1.518-1.519c0.2,0.117,0.419,0.203,0.648,0.263V64.263z M16.629,57.14\n   c-0.235,0.062-0.455,0.154-0.66,0.275l-1.521-1.521c0.625-0.475,1.367-0.789,2.181-0.902V57.14z M17.922,54.99\n   c0.814,0.113,1.557,0.429,2.181,0.903l-1.52,1.521c-0.204-0.121-0.426-0.213-0.66-0.275L17.922,54.99L17.922,54.99z\n    M17.922,64.261v-2.152c0.23-0.061,0.447-0.146,0.647-0.264l1.519,1.519C19.466,63.833,18.73,64.148,17.922,64.261z\n    M21.014,62.462l-1.531-1.533c0.12-0.201,0.217-0.416,0.278-0.646h2.146C21.793,61.091,21.488,61.839,21.014,62.462z\n    M19.764,58.989c-0.061-0.234-0.153-0.453-0.271-0.656l1.524-1.523c0.471,0.625,0.782,1.367,0.894,2.18H19.764z"/>\n <path d="M79.284,52.156c-4.124,0-7.468,3.343-7.468,7.468c0,0.318,0.026,0.631,0.066,0.938c0.463,3.681,3.596,6.528,7.4,6.528\n   c3.908,0,7.112-3.004,7.438-6.83c0.017-0.209,0.031-0.422,0.031-0.637C86.753,55.499,83.409,52.156,79.284,52.156z M75.546,56.81\n   l1.521,1.523c-0.118,0.203-0.211,0.422-0.271,0.656H74.65C74.761,58.177,75.072,57.435,75.546,56.81z M74.642,60.282h2.163\n   c0.061,0.23,0.151,0.448,0.271,0.648l-1.525,1.525C75.076,61.835,74.757,61.093,74.642,60.282z M78.638,64.263\n   c-0.809-0.113-1.544-0.43-2.166-0.899l1.518-1.519c0.2,0.117,0.419,0.203,0.648,0.263V64.263z M78.638,57.14\n   c-0.235,0.062-0.455,0.154-0.66,0.275l-1.521-1.521c0.625-0.475,1.366-0.789,2.181-0.902V57.14z M79.932,54.99\n   c0.814,0.113,1.557,0.429,2.181,0.903l-1.521,1.521c-0.204-0.121-0.426-0.215-0.66-0.275V54.99z M79.932,64.261v-2.152\n   c0.23-0.061,0.447-0.146,0.647-0.264l1.519,1.519C81.476,63.833,80.739,64.148,79.932,64.261z M83.023,62.462l-1.531-1.531\n   c0.12-0.202,0.218-0.416,0.278-0.647h2.146C83.802,61.091,83.498,61.839,83.023,62.462z M81.773,58.989\n   c-0.061-0.234-0.152-0.453-0.271-0.656l1.523-1.523c0.472,0.625,0.782,1.367,0.895,2.18H81.773z"/>\n <path d="M97.216,48.29v-5.526c0-0.889-0.646-1.642-1.524-1.779c-2.107-0.33-5.842-0.953-7.52-1.47\n   c-2.406-0.742-11.702-4.678-14.921-5.417c-3.22-0.739-17.738-4.685-31.643,0.135c-2.353,0.815-12.938,5.875-19.162,8.506\n   c-1.833,0.04-19.976,3.822-20.942,6.414c-0.966,2.593-1.269,3.851-1.447,4.509c-0.178,0.658,0,3.807,1.348,6\n   c1.374,0.777,4.019,1.299,7.077,1.649c-0.035-0.187-0.073-0.371-0.097-0.56c-0.053-0.404-0.078-0.773-0.078-1.125\n   c0-4.945,4.022-8.969,8.968-8.969s8.968,4.023,8.968,8.969c0,0.254-0.017,0.506-0.036,0.754c-0.047,0.555-0.147,1.094-0.292,1.613\n   c0.007,0,0.024,0,0.024,0l44.516-0.896c-0.02-0.115-0.046-0.229-0.061-0.346c-0.053-0.402-0.078-0.772-0.078-1.125\n   c0-4.945,4.022-8.968,8.968-8.968c4.946,0,8.969,4.022,8.969,8.968c0,0.019-0.002,0.035-0.003,0.053l0.19-0.016l7.611-1.433\n   c0,0,2.915-1.552,2.915-5.822C98.967,49.56,97.216,48.29,97.216,48.29z M53.057,43.051L36.432,43.56\n   c0.306-2.491-1.169-3.05-1.169-3.05c6.609-5.999,19.929-6.202,19.929-6.202L53.057,43.051z M71.715,42.29l-15.15,0.509l1.373-8.49\n   c7.83-0.102,12.303,1.626,12.303,1.626l2.237,3.61L71.715,42.29z M80.256,42.238h-4.221l-4.22-5.795\n   c3.166,1.26,5.7,2.502,7.209,3.287C79.94,40.206,80.44,41.223,80.256,42.238z"/>\n</g>\n</svg>\n'}}]);