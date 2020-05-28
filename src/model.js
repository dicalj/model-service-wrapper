// required modules
import { Model } from 'vue-api-query'

/**
 * This class describes an api model.
 *
 * @class Model (name)
 */
export default class extends Model {

  /**
   * Create and new object instance from the model prototype.
   *
   * @return  {Object}  a new model instance.
   */
  _create_from() {
    return Object.create(this._prototype())
  }

  /**
   * Returns the model prototype.
   *
   * @return  {Object}  a prototype definition.
   */
  _prototype() {
    return Object.getPrototypeOf(this)
  }

  /**
   * Creates a new instance of the model with same properties than 
   * original.
   *
   * @return  {Object}  Copy of this model.
   */
  clone() {
    return Object.assign(this._create_from(), this)
  }

  /**
   * Send a get request with blob type.
   * 
   * @param   {Object}  [payload={url, data}] - the request payload.
   * @returns {Promise} a request promise.
   */
  blob({ url, data }) {
    return this.request({
      requestType: 'blob',
      method: 'get',
      url,
      data,
    })
  }

  /**
   * Send a get request with blob type to expected excel file.
   * 
   * @param   {String} path 
   * @param   {Object} data 
   * @returns {Promise} data 
   */
  excel(path = 'excel', data = {}) {

    // required data
    const url = this.fullURL().concat(`/${ path }`)

    // blob promise
    return this.blob({ url, data })
  }

  /**
   * { item_description }
   */
  static fetcher() {
    return this.param().get
  }

  /**
   *
   */
  file (filename, fileExtend) {
    return function(res) {
      //
      var fileLink = document.createElement('a')
      var fileURL = URL.createObjectURL(res.data)

      //
      fileLink.href = fileURL
      fileLink.download = filename.concat('.').concat(fileExtend)
      fileLink.click()
    }
  }

  /**
   * Return a FormData with specific properties
   * 
   * @param {String} properties - properties names
   * @returns {FormData} a FormData representation 
   */
  formData(...props) {

    // the formData
    var formData = new FormData()

    // append in formData the properties
    props.forEach(prop => {
      formData.append(prop, this.getProperty(prop))
    })

    // return the formData appended with the properties
    return formData
  }

  /**
   * Get the full url for the current model
   *
   * @return     {Array}  { description_of_the_return_value }
   */
  fullURL() {
    return [this.baseURL(), this.resource(), this.primaryValue()].join('/')
  }

  /**
   * Gets the property.
   *
   * @param      {<type>}  path    The path
   * @return     {<type>}  The property.
   */
  getProperty(path, prevent, apply = v => v) {
    return apply(path.split('.').reduce(this.reduceHasProperty, this) || prevent)
  }

  /**
   * 
   */
  hasOne(Model) {
    return this.setPrimaryKey(`${ new Model().resource() }`)
  }

  /**
   *
   * @param {*} type
   * @param {*} listener
   */
  on(type, listener) {
    new EventSource(this.fullURL().concat('.json')).addEventListener(type, listener)
  }

  /**
   * { function_description }
   * @return     {<type>}  { description_of_the_return_value }
   */
  patch() {
    return  this.request({
      method: 'patch',
      url: this.fullURL(),
      data: this.toData(),
    })
  }

  /**
   * { function_description }
   *
   * @param      {string}  [path='pdf']  The path
   * @return     {<type>}  { description_of_the_return_value }
   */
  pdf(path = 'pdf') {
    return this.request({
      responseType: 'blob',
      method: 'GET',
      url: this.fullURL().concat('/').concat(path),
    })
  }

  /**
   *
   */
  primaryValue(){
    return this[this.primaryKey()]
  }

  /**
   * Reduces to the specific array of properties.
   *
   * @param   {Array}   [properties=[]]  The properties
   * @return  {Object}  { description_of_the_return_value }
   */
  reduce(...properties) {

    //
    let clone = this.clone()
    let props = [...properties]

    //
    Object.keys(clone).forEach(key => {
      if (!props.some(prop => prop === key)) delete clone[key]
    })

    //
    return clone
  }

  /**
   * Reduces the has property.
   *
   * @param      {<type>}  parent    The parent
   * @param      {<type>}  property  The property
   * @return     {<type>}  { description_of_the_return_value }
   */
  reduceHasProperty(parent, property) {
    return typeof parent === "object" && parent !== null ? parent[property] : undefined
  }

  /**
   * { function_description }
   *
   * @param      {<type>}  data    The data
   * @return     {<type>}  { description_of_the_return_value }
   */
  replace(data) {
    return this.$http.request({
      method: 'patch',
      url: this._fromResource,
      data,
    })
  }

  /**
   * Implement a default request method
   *
   * @param   {*}  config  The configuration
   * @return  {Promise}  The request
   */
  request(config) {
    return this.$http.request(config)
  }

  /**
   * Returns a create representation of the object.
   *
   * @returns {Object}  Create representation of the object.
   */
  toCreate() {
    return this.reduce([])
  }

  /**
   * Returns a Object representation of the model.
   * 
   * @returns {Object} a Object instance.
   */
  toData() {
    return JSON.parse(this.toJSONData())
  }

  /**
   * Return a FormData with specific properties.
   * 
   * @param   {String}    properties - properties names.
   * @returns {FormData}  a FormData representation .
   */
  toFormData(...props) {

    // the formData
    var formData = new FormData()

    // append in formData the properties
    props.forEach(prop => {
      formData.append(prop, this.getProperty(prop))
    })

    // return the formData appended with the properties
    return formData
  }

  /**
   * Returns a JSON representation of the model.
   * 
   * @returns {String} a JSON text.
   */
  toJSONData() {
    return JSON.stringify({ ...this })
  }

  /**
   * Returns a create representation of the object.
   * 
   * @returns {Object} Create representation of the object.
   */
  toUpdate() {
    return this.reduce([])
  }

  /**
   * Send a post multipart form data request to the current url resource
   * 
   * @param   {Object}  params - the request data
   * @returns {Promise} A post request promise
   */
  transfer(params) {
    return this.request({
      url: this._fromResource,
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: params,
    })
  }
}