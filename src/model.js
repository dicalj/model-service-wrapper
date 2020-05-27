//
import { Model as BaseModel } from 'vue-api-query'

/**
 * This class describes an api model.
 *
 * @class Model (name)
 */
export default class Model extends BaseModel {

  /**
   * { function_description }
   *
   * @return     {<type>}  { description_of_the_return_value }
   */
  _create_from() {
    return Object.create(this._prototype())
  }

  /**
   * { function_description }
   *
   * @return     {<type>}  { description_of_the_return_value }
   */
  _prototype() {
    return Object.getPrototypeOf(this)
  }

  /**
   * Creates a new instance of the object with same properties than original.
   *
   * @return     {<type>}  Copy of this object.
   */
  clone() {
    return Object.assign(this._create_from(), this)
  }

  /**
   * 
   * @param {*} path 
   */
  excel(path = 'excel') {
    return this.request({
      responseType: 'blob',
      method: 'GET',
      url: this.fullURL()
        .concat('/')
        .concat(path),
    })
  }

  /**
   * Fetches the given parameters.
   * @param      {<type>}   [params={}]  The parameters
   * @return     {Promise}  { description_of_the_return_value }
   */
  static async fetch(params = {}) {
    return this
      .params(params)
      .get()
      .then(this.parse)
      .catch(this.prevent)
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
   * 
   * @param {*} data 
   */
  from(data) {
    Object.keys(data).forEach(this.setValue(data))
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
   * Cast params of fetch functions
   * @param      {<type>}   params  The parameters
   * @return     {Promise}  { description_of_the_return_value }
   */
  static parametrize(params) {
    return params
  }

  /**
   * Parse the response fetch data.
   * @param      {<type>}  res     The resource
   * @return     {Object}  { description_of_the_return_value }
   */
  static parse(res) {
    return res
  }

  /**
   * Get prevent data for error fetch
   * @return     {Object}  { description_of_the_return_value }
   */
  static prevent() {
    return {
      data: []
    }
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
   * @description
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
   * { function_description }
   *
   * @param      {<type>}    [properties=[]]  The properties
   * @return     {Function}  { description_of_the_return_value }
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
   * @param      {<type>}  index     The index
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
   * @return     {<type>}  Create representation of the object.
   */
  toCreate() {
    return this.reduce()
  }

  /**
   * 
   */
  toData() {
    return JSON.parse(this.toJSONData())
  }  

  /**
   * 
   */
  toJSONData() {
    return JSON.stringify({ ...this })
  }

  /**
   * Returns a create representation of the object.
   * @return {<type>} Create representation of the object.
   */
  toUpdate() {
    return this.reduce()
  }

  /**
   * Send a post multipart form data request to the current url resource
   * @param {Object} params - the request data
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