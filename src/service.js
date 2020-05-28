/**
 * This class describes a service.
 *
 * @class Service (name)
 */
export default class Service {

  /**
   * { function_description }
   *
   * @return     {<type>}  { description_of_the_return_value }
   */
  static _create_from() {
    return Object.create(this._prototype())
  }

  /**
   * { function_description }
   *
   * @return     {<type>}  { description_of_the_return_value }
   */
  static _prototype() {
    return Object.getPrototypeOf(this)
  }

  /**
   * Creates a new instance of the object with same properties than original.
   *
   * @return     {<type>}  Copy of this object.
   */
  static clone() {
    return Object.assign(this._create_from(), this)
  }

  /**
   * Returns the model of the service.
   *
   * @return {Object}  Model of service.
   */
  static model() {
    return null
  }

  /**
   * Returns the model of the service.
   *
   * @return {Object}  Model of service.
   */
  static fetch() {
    return null
  }

  /**
   * Returns the model of the service.
   *
   * @return {Object}  Model of service.
   */
  static parametrize() {
    return null
  }
}