import NoteApi from "../notes/api";

export default class Router {
  constructor(routerList, _app) {
    this.routerList = routerList;
    this._app = _app;

    this.navigateTo = (url) => {
      history.pushState(null, null, url);
      this._init();
    };

    window.addEventListener("popstate", this._init());

    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
          e.preventDefault();
          this.navigateTo(e.target.href);
        }
      });
      this._init();
    });
  }

  _init = async () => {
    this.routerList.map((element, index) => {
      if (location.pathname === "/") {
        this.routerList[0].isMatch = true;
      } else if (
        location.pathname !== "/" &&
        element.path.indexOf(location.pathname) === 0
      ) {
        this.routerList[index].isMatch = true;
      } else {
        element.isMatch = false;
      }
    });

    const currentRouter = this.routerList.find(
      (element) => element.isMatch === true
    );

    if (currentRouter) {
      let instance;
      if (currentRouter.path === "/notes") {
        const notes = NoteApi.getAllNotes();
        instance = new currentRouter.view(this._app, notes);
      } else {
        instance = new currentRouter.view();
        this._app.innerHTML = await instance.initialHtml();
      }
    }
  };
}
