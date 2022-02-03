// my-container.ts

import { LitElement, html, customElement, css } from 'lit-element';
import './my-button';

@customElement('my-container')
export class MyContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <my-button @myClick=${this.handleClick} label="Hello ">
      </my-button>
    `;
  }

  private handleClick(e: Event) {
    console.log('MyContainer, myClick', e);
  }
}
