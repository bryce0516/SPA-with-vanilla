import initialTemplate from "../common/initialTemplate";
export default class Settings extends initialTemplate {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async initialHtml() {
    return `
      <div>
        <h1>Settings page</h1>
        <p>
          Manage your privacy
        </p>
      </div>
    `;
  }
}
