import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { gsap } from "gsap";
import prefix from '../prefix'  
@customElement(`${prefix}-basic-component`)
export class BasicComponent extends LitElement {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components.
  static styles = css`
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
  `;
  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property() planet = "World";

  firstUpdated() {
    gsap.from(this, { y: 40, duration: 0.6 });
  }
  // The render() method is called any time reactive properties change.
  render() {
    return html`
    <button class="planet" @click=${this.togglePlanet}>
        <span >${this.planet}</span>
    </button>
    `;
  }

  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render
  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}
