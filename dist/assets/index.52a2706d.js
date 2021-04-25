import{r as e,e as o,n as r,h as t,g as n,T as a}from"./vendor.08749812.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(r){const t=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((r,a)=>{const l=new URL(e,t);if(self[o].moduleMap[l])return r(self[o].moduleMap[l]);const s=new Blob([`import * as m from '${l}';`,`${o}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(i)},onload(){r(self[o].moduleMap[l]),n(i)}});document.head.appendChild(i)})),self[o].moduleMap={}}}("/assets/");var l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=(e,o,r,t)=>{for(var n,a=t>1?void 0:t?s(o,r):o,i=e.length-1;i>=0;i--)(n=e[i])&&(a=(t?n(o,r,a):n(a))||a);return t&&a&&l(o,r,a),a};let c=class extends t{constructor(){super(...arguments),this.planet="World"}firstUpdated(){n.from(this,{y:40,duration:.6})}render(){return a`
    <button class="planet" @click=${this.togglePlanet}>
        <span >${this.planet}</span>
    </button>
    `}togglePlanet(){this.planet="World"===this.planet?"Mars":"World"}};c.styles=e`
    :host{
      display: inline-block;

    }
    .planet {
      width: 200px;
      padding: 20px;
      border: solid 2px var(--base-color);
      background-color: var(--base-hover-color);
      font-family: var(--font-family-regular);
      font-size: var(--font-size-medium);
      color: var(--base-color);
      border-radius: var(--button-border-radius);
      cursor: pointer;
      font-weight: bold;
    }
    .planet:hover{
      color: var(--base-hover-color);
      background-color: var(--base-color);
    }
  `,i([o()],c.prototype,"planet",2),c=i([r("viteapp-basic-component")],c);document.querySelector("#app").innerHTML='\n  <h1 id="item">ViteSandbox!</h1>\n',n.from("#item",{y:-100,duration:.7});
