import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
 import {Curtains, Plane} from "curtainsjs"; 
import { styles } from './styles.js';
import { gsap } from "gsap";
import prefix from '../prefix'  
@customElement('o-image-slider')
export class ImageSlider extends LitElement {
  // Styles
  static styles = [
    styles
  ];
  private curtains;
  private plane;
  private planeElement;
  
  private vs = `    
    precision mediump float;
    // those are the mandatory attributes that the lib sets
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;
    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    // our texture matrix that will handle image cover
    uniform mat4 uTextureMatrix0;
    // pass your vertex and texture coords to the fragment shader
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    void main() {
    vec3 vertexPosition = aVertexPosition;
    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    // set the varyings
    // here we use our texture matrix to calculate the accurate texture coords
    vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
    vVertexPosition = vertexPosition;
    }
  `;

  private fs = `    
    precision mediump float;
    // get our varyings
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    // the uniform we declared inside our javascript
    uniform float uTime;
    // our texture sampler (default name, to use a different name please refer to the documentation)
    uniform sampler2D uSampler0;
    void main() {
    // get our texture coords from our varying
    vec2 textureCoord = vTextureCoord;
    // displace our pixels along the X axis based on our time uniform
    // textures coords are ranging from 0.0 to 1.0 on both axis
    textureCoord.x += sin(textureCoord.y * 25.0) * cos(textureCoord.x * 25.0) * (cos(uTime / 50.0)) / 25.0;
    // map our texture with the texture matrix coords
    gl_FragColor = texture2D(uSampler0, textureCoord);
    }
  `;
  
  private params;

  constructor() {
    super();
  }
  
  connectedCallback() {
    super.connectedCallback();
    //setTimeout(this.setupCurtainsJS, 100);
    this.params = {
      vertexShader: this.vs, 
      fragmentShader: this.fs,
      uniforms: {
        time: {
          name: "uTime", // uniform name that will be passed to our shaders
          type: "1f", // this means our uniform is a float
          value: 0,
        },
      },
    }; 
  }

  firstUpdated() {
    gsap.from(this, { x: -40, duration: 0.6 });
    this.curtains = new Curtains({
      container: this.renderRoot.querySelector('#canvas')
    });
    this.planeElement = this.renderRoot.querySelector('.plane');
    this.plane = new Plane(this.curtains, this.planeElement, this.params);
    this.plane.onRender(() => {
      this.plane.uniforms.time.value++; 
    });
  }

  render() {
    return html`
      <div id="canvas"></div>
      <div class="plane"> 
        <img src="./images/background_1.jpg" />
      </div>
    `;
  }
}
