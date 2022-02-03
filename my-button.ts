import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
  :host {
    display: inline-block;
    padding: 10px;
    background: #5fe1ee;
    border-radius: 5px;
    cursor: pointer;
  }
`;

  @property() label = 'Hello LitElement';

  constructor() {
    super();
  }

  render() {
    return html`
    <span @click=${this.handleClick}>
      ${this.label}
    </span>
  `;
  }

  private handleClick(e: MouseEvent) {
    this.dispatchEvent(new Event('myClick'));
  }
}
