import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { decrementLoading, incrementLoading } from "../loading";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { SET_VIEW } from "../view";
import { replaceCurrentPost } from "./replaceCurrentPost";
import { replacePostList } from "./replacePostList";

export class BlogSetViewDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;
  private apiRest: ApiRest;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== SET_VIEW) return;

    switch (action.view.root) {
      case "Blog":
        await this.loadPostList();
        break;
      case "BlogPost":
        await this.loadPost(action.view.postId);
        break;
      default:
      // do nothing
    }
  }

  async loadPostList() {
    this.reduxStore.dispatch(incrementLoading());
    const { list } = await this.apiRest.get(`/api/v1/posts`);
    this.reduxStore.dispatch(replacePostList(list));
    this.reduxStore.dispatch(decrementLoading());
  }

  async loadPost(postId: string) {
    this.reduxStore.dispatch(incrementLoading());
    const post = await this.apiRest.get(`/api/v1/posts/${postId}`);
    this.reduxStore.dispatch(replaceCurrentPost(post));
    this.reduxStore.dispatch(decrementLoading());
  }
}
