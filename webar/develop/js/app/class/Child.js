import Base from './Base';

/**
 * @class Child
 * @extend Base
 */
export default class Child extends Base {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @param  {[type]} num [description]
   * @return {[type]}      [description]
   */
  constructor(name, num) {
    super(name);

    this.num = num;
  }

  /**
   * @override
   * setup
   * @return {[type]} [description]
   */
  setup() {
    super.setup();
    console.log('child : ' + this.name + this.num);
  }
}
