import Router from "./Router/index";
import Dashboard from "./dashboard/index";
import Settings from "./settings/index";
import Posts from "./posts/index";
import Notes from "./notes/index";
const routerList = [
  { path: "/dashboard", view: Dashboard, isMatch: false },
  { path: "/posts", view: Posts, isMatch: false },
  { path: "/settings", view: Settings, isMatch: false },
  { path: "/notes", view: Notes, isMatch: false },
];
const app = document.querySelector("#app");
const router = new Router(routerList, app);
