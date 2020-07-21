/**
 * The next model
 * @class
 */
export default class Model {

  /**
   * 
   */
  constructor(data) {
    super(data)
    Object.assign(this, ...attributes)
  }

  /**
   * Create and new object instance from the model prototype.
   * @return  {object}  a new model instance.
   */
  _create_from() {
    return Object.create(this._prototype())
  }

  /**
   * Returns the model prototype.
   * @return  {object}  a prototype definition.
   */
  _prototype() {
    return Object.getPrototypeOf(this)
  }

  /**
   * Send a post request.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  attach(data = {}) {
    return this.request({
      method: 'post',
      url   : this.fullUrl(),
      data,
    })
  }

  /**
   * The current base URL of model instance.
   * @returns {string} The base URL instance.
   */
  baseUrl() {
    return 'http://localhost/'
  }

  /**
   * Send a get request with blob type.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  blob(data = {}) {
    return this.request({
      responseType: 'blob',
      method      : 'get',
      url         : this.fullUrl(),
      data,
    })
  }

  /**
   * Creates a new instance of the model with same properties than 
   * original.
   * @return  {object}  Copy of this model.
   */
  clone() {
    return Object.assign(this._create_from(), this)
  }

  /**
   * Send a delete request.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  delete(data = {}) {
    return this.request({
      method: 'delete',
      url   : this.fullUrl(),
      data,
    })
  }

  /**
   * 
   */
  form(properties = []) {

    // the formData
    var formData = new FormData()

    // append in formData the properties
    properties.forEach(prop => {
      formData.append(prop, this.prop(prop))
    })

    // return the formData appended with the properties
    return formData
  }

  /**
   * 
   */
  from(data = {}) {
    return new this(data)
  }

  /**
   * The current full URL of model instance.
   * @returns {string} The URL instance.
   */
  fullUrl() {
    return `${ this.baseUrl() }/${ this.resource() }/${ this.identity() }`
  }

  /**
   * Send a get request.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  get(data = {}) {
    return this.request({
      method: 'get',
      url   : this.fullUrl(),
      data,
    })
  }

  /**
   * Reduces the has property.
   * @param      {*}  parent    The parent
   * @param      {*}  property  The property
   * @return     {*}  { description_of_the_return_value }
   */
  hunt(parent, property) {
    return typeof parent === "object" && parent !== null ? parent[property] : undefined
  }

  /**
   * 
   */
  identifier() {
    return 'id'
  }

  /**
   * 
   */
  identity() {
    return this.prop(this.identifier(), '')
  }

  /**
   * 
   */
  many() {
    return ''
  }

  /**
   * 
   */
  one() {
    return ''
  }

  /**
   * 
   */
  prop(path = '', prevent = '') {

    // required data
    const paths   = path.split('.')
    const value   = paths.reduce(this.hunt, this)
    const result  = value ? value : prevent

    // return result value
    return result
  }

  /**
   * Reduces to the specific array of properties.
   * @param   {array}   [properties=[]] - The properties
   * @return  {object}                    { description_of_the_return_value }
   */
  reduce(properties = []) {

    // required data
    let clone = this.clone()
    let props = {}

    // set enum props
    properties.forEach(prop => { props[prop] = '' })

    // delete no-exits enum props
    Object.keys(clone).forEach(key => { if(!props[key]) delete clone[key] })

    // return modified clone
    return clone
  }

  /**
   * Send a patch request.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  replace() {
    return this.request({
      method: 'patch',
      url   : this.fullUrl(),
      data,
    })
  }

  /**
   * 
   */
  resource() {
    return ''
  }

  /**
   * Send a post request.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  save() {
    return this.request({
      method: 'post',
      url   : this.fullUrl(),
      data,
    })
  }

  /**
   * Send a put request.
   * @param   {object}  [data={}] - The request payload.
   * @returns {promise}             A request promise.
   */
  sync() {
    return this.request({
      method: 'put',
      url   : this.fullUrl(),
      data,
    })
  }

  /**
   * 
   */
  toCreate() {
    return this.reduce([])
  }

  /**
   * 
   */
  toUpdate() {
    return this.reduce(['id'])
  }
}