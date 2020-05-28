/**
 * This class describes a service.
 *
 * @class Service (name)
 */
export default class Service {

  /**
   * Create and new object instance from the service prototype.
   *
   * @return  {Object}  a new service instance.
   */
  static _create_from() {
    return Object.create(this._prototype())
  }

  /**
   * Returns the service prototype.
   *
   * @return  {Object}  a prototype definition.
   */
  static _prototype() {
    return Object.getPrototypeOf(this)
  }

  /**
   * Creates a new instance of the service with same properties 
   * than original.
   *
   * @return  {Object}  Copy of this service.
   */
  static clone() {
    return Object.assign(this._create_from(), this)
  }

  /**
   * Send a post request to create a active model record.
   * 
   * @param   {Object}  model - the active model record.
   * @returns {Promise} the create request promise.
   */
  static create(model) {
    return model.toCreate().save()
  }

  /**
   * Send a delete request to remove a active model record.
   * 
   * @param   {Object}  model - the active model record.
   * @returns {Promise} the remove request promise.
   */
  static delete(model) {
    return model.delete()
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
   * Fetches the given parameters.
   *
   * @param   {Function}  [params={}] - The parameters.
   * @return  {Promise}   { description_of_the_return_value }
   */
  static fetch(params = {}) {
    return Promise.resolve(params).then(this.parametrize).then(this.get)
  }

  /**
   * { item_description }
   */
  static fetcher() {
    return (params) => this.fetch(params)
  }

  /**
   * Get the given parameters.
   *
   * @param   {Function}  [params={}] - The parameters.
   * @return  {Promise}   { description_of_the_return_value }
   */
  static get(params = {}) {
    return this.model().params(params).get()
  }

  /**
   * Parametrize the params argument to model param get.
   * 
   * @param   {Object}  params - The params.
   * @return  {Object}  model get params.
   */
  static parametrize(params = {}) {
    return {
      append  : params.append,
      include : params.include,
      limit   : params.limit, 
      page    : params.page,
      sort    : params.sort,
      filter  : params.filter,
    }
  }

  /**
   * Returns a simple fetcher with the current
   */
  static toList() {
    return this.model().append().include().params(params).get()
  }

  /**
   * Send a put request to update a active model record.
   * 
   * @param   {Object}  model - the active model record.
   * @returns {Promise} the update request promise.
   */
  static update(model) {
    return model.toUpdate().save()
  }
}