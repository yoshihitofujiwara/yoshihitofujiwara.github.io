/**
 * @class Base
 */
export default class Base {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  constructor(name) {
    // props
    this.name = name;
  }

  /**
   * setup
   * @return {[type]} [description]
   */
  setup() {
    console.log('super : ' + this.name);
  }

  /**
   * update
   * @return {[type]} [description]
   */
  update() {
  }
}
