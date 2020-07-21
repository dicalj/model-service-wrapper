/**
 * The next service
 * @class
 */
export default class Service {

  /**
   * Create and new object instance from the service prototype.
   * @return  {object}  a new service instance.
   */
  static _create_from() {
    return Object.create(this._prototype())
  }

  /**
   * Returns the service prototype.
   * @return  {object}  a prototype definition.
   */
  static _prototype() {
    return Object.getPrototypeOf(this)
  }

  /**
   * Creates a new instance of the service with same properties 
   * than original.
   * @return  {object}  Copy of this service.
   */
  static clone() {
    return Object.assign(this._create_from(), this)
  }

  /**
   * Send a post request to create a active model record.
   * @param   {object}  model - the active model record.
   * @returns {Promise}         the create request promise.
   */
  static create(model) {
    return model.toCreate().save()
  }

  /**
   * Send a delete request to remove a active model record.
   * @param   {object}  model - the active model record.
   * @returns {Promise}         the remove request promise.
   */
  static delete(model) {
    return model.delete()
  }

  /**
   * Returns the model of the service.
   * @return {object}  Model of service.
   */
  fetch() {
    return this.shape().get(this.params)
  }

  /**
   * Returns the model of the service.
   * @return {object}  Model of service.
   */
  find(identifier) {
    return this.shape().identify(identifier).get()
  }

  /**
   * Returns the model of the service.
   * @return {object}  Model of service.
   */
  model() {
    return null
  }

  /**
   * Return a new service model instance with the initial data
   * provided.
   * @param   {object} data - The initial data of new service model instance.
   * @returns {object}        The new service model instance.
   */
  static shape(data = {}) {
    return this.model().from(data)
  }

  /**
   * Returns a list fetcher representation of service.
   * @returns {Function} the fetcher request.
   */
  static toList() {
    // return new this().fetch()
    return (params) => this.model().params(this.parametrize(params)).get()
  }

  /**
   * Send a put request to update a active model record.
   * @param   {object}  model - the active model record.
   * @returns {promise}         the update request promise.
   */
  static update(model) {
    return model.toUpdate().save()
  }

  /**
   * 
   */
  where(field = '', value) {

  }
}