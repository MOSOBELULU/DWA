import { html, css, LitElement } from 'lit';

class TallyApp extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
    this.requestUpdate(); // Update the component to reflect the new count
  }

  decrement() {
    this.count--;
    this.requestUpdate(); // Update the component to reflect the new count
  }

  render() {
    let state = 'Normal';

    if (this.count === 0) {
      state = 'Minimum Reached';
    } else if (this.count >= 10) {
      state = 'Maximum Reached';
    }

    return html`
      <h1>Tally App</h1>
      <p>Count: ${this.count}</p>
      <p>State: ${state}</p>
      <button @click=${this.increment}>+</button>
      <button @click=${this.decrement}>-</button>
    `;
  }
}

customElements.define('tally-app', TallyApp);
