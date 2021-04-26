import { css } from 'lit';

export const styles = css`
  :host {
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
  .planet:hover {
    color: var(--base-hover-color);
    background-color: var(--base-color);
  }
`;
