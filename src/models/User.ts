interface UserInterface {
  id: null|number;
  name: string;
}

export default class User {
  detailsFetched: boolean;

  id: null|number = null;
  name = '';

  constructor (user:UserInterface) {
    this.detailsFetched = false
    this.setData(user)
  }

  setData (user:UserInterface):void {
    Object.assign(this, user)
  }
}

export { UserInterface }
