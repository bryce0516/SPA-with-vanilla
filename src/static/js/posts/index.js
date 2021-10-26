import initialTemplate from "../common/initialTemplate";
export default class Posts extends initialTemplate {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  async initialHtml() {
    return `
      <div>
        <h1>Posts Page</h1>
        <p>
          you are viewing postpage
        </p>
      </div>
    `;
  }
}
