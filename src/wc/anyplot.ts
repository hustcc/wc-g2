import { Chart } from '@antv/g2';

/**
 * Draw chart with G2 spec.
 */
export class AnyPlot extends HTMLElement {
  /**
   * G2 instance.
   */
  chart;
  /**
   * render HTMLElement.
   */
  container;

  static get observedAttributes() {
    return ['spec', 'style'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    shadowRoot.appendChild(this.container);
  }

  /**
   * Render G2 spec.
   */
  _render() {
    const spec = JSON.parse(this.getAttribute('spec'));
    this.chart.options(spec);

    this.chart.render();
  }

  _updateContainer() {
    this.container.setAttribute('style', this.getAttribute('style'));
  }

  /**
   * When mounted on DOM.
   */
  connectedCallback() {
    this.chart = new Chart({
      container: this.container,
      theme: 'classic',
      autoFit: true,
    });

    this._updateContainer();
    this._render();
  }

  /**
   * When unmounted on DOM.
   */
  disconnectedCallback() {
    this.chart?.destroy();
  }

  /**
   * When moved.
   */
  adoptedCallback() {}

  /**
   * When attributes update.
   */
  attributeChangedCallback(name) {
    if (this.chart) {
      if (name === 'spec') {
        this._render();
        return;
      }
      this._updateContainer();
    }
  }
}

customElements.define('any-plot', AnyPlot);
