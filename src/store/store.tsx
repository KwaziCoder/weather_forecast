import { makeAutoObservable } from "mobx";

class Store {

  searchValue : string = "";
  chosenCategory : string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue(str: string) {
    this.searchValue = str;
  }
  searchCity() {
    alert(this.searchValue)
  }

  chooseCategory(category: string) {
    this.chosenCategory = category;
  }
}

export default new Store();