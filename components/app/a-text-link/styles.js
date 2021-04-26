import { css } from 'lit';

export const styles = css`
  #canvas {
    /* make the canvas wrapper fits the document */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .plane {
    /* define the size of your plane */
    width: 80%;
    height: 80vh;
    margin: 10vh auto;
  }
  .plane img {
    /* hide the img element */
    display: none;
  }
`;
