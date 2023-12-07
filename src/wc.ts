import { Chart } from '@antv/g2';
import { bind, clear } from 'size-sensor';
import { getContainerSize } from './helper';

/**
 * Draw chart with G2 spec.
 */
export class G2 extends HTMLElement {
  /**
   * G2 instance.
   */
  public chart;
  /**
   * render HTMLElement.
   */
  public container;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.overflow = 'hidden';
    shadowRoot.appendChild(this.container);

    bind(this.container, (ele) => {
      const [w, h] = getContainerSize(ele);
      this.chart?.changeSize(w, h);
    });
  }

  /**
   * Set the charts options.
   */
  set options(options: any) {
    this.chart.options(options);
    this.chart.render();
  }

  /**
   * When mounted on DOM.
   */
  connectedCallback() {
    const [w, h] = getContainerSize(this.container);
    this.chart = new Chart({
      container: this.container,
      autoFit: false,
      width: w,
      height: h,
    });
  }

  /**
   * When unmounted on DOM.
   */
  disconnectedCallback() {
    clear(this.container);
    this.chart?.destroy();
  }

  /**
   * When moved.
   */
  adoptedCallback() {}
}

customElements.define('wc-g2', G2);
