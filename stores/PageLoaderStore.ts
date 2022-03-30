import { observable, action, makeObservable } from 'mobx';

class PageLoaderStore {
  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  setLoading = (loading: boolean): void => {
    this.loading = loading;
  };
}

const loaderStore = new PageLoaderStore();

export default loaderStore;
