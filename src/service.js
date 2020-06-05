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
   * @returns {Promise}         the create request promise.
   */
  static create(model) {
    return model.toCreate().save()
  }

  /**
   * Send a delete request to remove a active model record.
   * 
   * @param   {Object}  model - the active model record.
   * @returns {Promise}         the remove request promise.
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
   * Parametrize the params argument to model param get.
   * 
   * @param   {Object}  params - The params.
   * @return  {Object}           The model get params.
   */
  static parametrize(params = {}) {
    return {
      limit : params.limit,
      page  : params.page,
      sort  : params.sort,
      filter: params.filter,
    }
  }

  /**
   * Returns a invoker to fetch function.
   * 
   * @return {Function} this fetch function.
   */
  static fetcher (payload) {
    return (params) => {

      //
      const tAppends  = payload.appends ? payload.appends : []
      const tFilters  = payload.filters ? payload.filters : {}
      const tIncludes = payload.includes ? payload.includes : []
      const tParams   = this.parametrize({
        ...params,
        filter: {
          ...params.filter ? params.filter : {},
          ...tFilters,
        }
      })

      //
      return this
        .model()
        .append(tAppends)
        .include(tIncludes)
        .params(tParams)
        .get()
    }
  }

  /**
   * 
   */
  static from(data) {
    return () => ({
      data: data,
      // total: data.length,
    })
  }

  /**
   * Return a new initial service model instance with the options
   * provided.
   * 
   * @param   {Object} opts - The options of a new service model instance.
   * @returns {Object}        The new initial service model instance.
   */
  static initial(opts) {
    return this.shape(this.initialize(opts))
  }

  /**
   * Return a initial data with the options provided.
   * 
   * @param   {Object} opts - The options of a new service model instance.
   * @returns {Object}        The initial data.
   */
  static initialize(opts) {
    return {
      ...opts,
    }
  }

  /**
   * Return a new service model instance with the initial data
   * provided.
   * 
   * @param   {Object} data - The initial data of new service model instance.
   * @returns {Object}        The new service model instance.
   */
  static shape(data = {}) {
    return this.model().from(data)
  }

  /**
   * Returns a list fetcher representation of service.
   * 
   * @returns {Function} the fetcher request.
   */
  static toList() {
    return (params) => this.model().params(this.parametrize(params)).get()
  }

  /**
   * Send a put request to update a active model record.
   * 
   * @param   {Object}  model - the active model record.
   * @returns {Promise}         the update request promise.
   */
  static update(model) {
    return model.toUpdate().save()
  }
}