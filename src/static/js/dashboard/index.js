import initialTemplate from "../common/initialTemplate";

export default class Dashboard extends initialTemplate {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  async initialHtml() {
    return `
      <div>
        <h1 class="_title">Welcome back, Dom</h1>
        <p class="_content">
          Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure
        </p>
        <p class="_content">
          <a class="_link"href="/posts" data-link>View recent posts</a>
        </p>
      </div>
    `;
  }
}
