## Classes

<dl>
<dt><a href="#Model">Model</a></dt>
<dd><p>This class describes an api model.</p>
</dd>
<dt><a href="#Service">Service</a></dt>
<dd><p>This class describes a service.</p>
</dd>
</dl>

<a name="Model"></a>

## Model
This class describes an api model.

**Kind**: global class  

* [Model](#Model)
    * _instance_
        * [.setPrimaryKey](#Model+setPrimaryKey)
        * [._create_from()](#Model+_create_from) ⇒ <code>Object</code>
        * [._prototype()](#Model+_prototype) ⇒ <code>Object</code>
        * [.clone()](#Model+clone) ⇒ <code>Object</code>
        * [.blob([payload])](#Model+blob) ⇒ <code>Promise</code>
        * [.excel(path, data)](#Model+excel) ⇒ <code>Promise</code>
        * [.file()](#Model+file)
        * [.formData(properties)](#Model+formData) ⇒ <code>FormData</code>
        * [.fullURL()](#Model+fullURL) ⇒ <code>Array</code>
        * [.getProperty(path)](#Model+getProperty) ⇒ <code>\*</code>
        * [.hasOne()](#Model+hasOne)
        * [.on(type, listener)](#Model+on)
        * [.patch()](#Model+patch) ⇒ <code>\*</code>
        * [.pdf([path])](#Model+pdf) ⇒ <code>\*</code>
        * [.prop()](#Model+prop)
        * [.primaryValue()](#Model+primaryValue)
        * [.reduce([properties])](#Model+reduce) ⇒ <code>Object</code>
        * [.reduceHasProperty(parent, property)](#Model+reduceHasProperty) ⇒ <code>\*</code>
        * [.replace(data)](#Model+replace) ⇒ <code>\*</code>
        * [.request(config)](#Model+request) ⇒ <code>Promise</code>
        * [.reset()](#Model+reset)
        * [.toCase(caseName)](#Model+toCase) ⇒ <code>Object</code>
        * [.toCreate()](#Model+toCreate) ⇒ <code>Object</code>
        * [.toData()](#Model+toData) ⇒ <code>Object</code>
        * [.toFormData(properties)](#Model+toFormData) ⇒ <code>FormData</code>
        * [.toJSONData()](#Model+toJSONData) ⇒ <code>String</code>
        * [.toUpdate()](#Model+toUpdate) ⇒ <code>Object</code>
        * [.transfer(params)](#Model+transfer) ⇒ <code>Promise</code>
    * _static_
        * [.fetcher()](#Model.fetcher)
        * [.from()](#Model.from)
        * [.toList()](#Model.toList) ⇒ <code>Object</code>

<a name="Model+setPrimaryKey"></a>

### model.setPrimaryKey
**Kind**: instance property of [<code>Model</code>](#Model)  
<a name="Model+_create_from"></a>

### model.\_create\_from() ⇒ <code>Object</code>
Create and new object instance from the model prototype.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - a new model instance.  
<a name="Model+_prototype"></a>

### model.\_prototype() ⇒ <code>Object</code>
Returns the model prototype.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - a prototype definition.  
<a name="Model+clone"></a>

### model.clone() ⇒ <code>Object</code>
Creates a new instance of the model with same properties than original.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - Copy of this model.  
<a name="Model+blob"></a>

### model.blob([payload]) ⇒ <code>Promise</code>
Send a get request with blob type.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Promise</code> - a request promise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [payload] | <code>Object</code> | <code>{url, data}</code> | the request payload. |

<a name="Model+excel"></a>

### model.excel(path, data) ⇒ <code>Promise</code>
Send a get request with blob type to expected excel file.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Promise</code> - data  

| Param | Type | Default |
| --- | --- | --- |
| path | <code>String</code> | <code>excel</code> | 
| data | <code>Object</code> |  | 

<a name="Model+file"></a>

### model.file()
**Kind**: instance method of [<code>Model</code>](#Model)  
<a name="Model+formData"></a>

### model.formData(properties) ⇒ <code>FormData</code>
Return a FormData with specific properties

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>FormData</code> - a FormData representation  

| Param | Type | Description |
| --- | --- | --- |
| properties | <code>String</code> | properties names |

<a name="Model+fullURL"></a>

### model.fullURL() ⇒ <code>Array</code>
Get the full url for the current model

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Array</code> - { description_of_the_return_value }  
<a name="Model+getProperty"></a>

### model.getProperty(path) ⇒ <code>\*</code>
Gets the property.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>\*</code> - The property.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>\*</code> | The path |

<a name="Model+hasOne"></a>

### model.hasOne()
**Kind**: instance method of [<code>Model</code>](#Model)  
<a name="Model+on"></a>

### model.on(type, listener)
**Kind**: instance method of [<code>Model</code>](#Model)  

| Param | Type |
| --- | --- |
| type | <code>\*</code> | 
| listener | <code>\*</code> | 

<a name="Model+patch"></a>

### model.patch() ⇒ <code>\*</code>
{ function_description }

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>\*</code> - { description_of_the_return_value }  
<a name="Model+pdf"></a>

### model.pdf([path]) ⇒ <code>\*</code>
{ function_description }

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>\*</code> - { description_of_the_return_value }  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [path] | <code>string</code> | <code>&quot;&#x27;pdf&#x27;&quot;</code> | The path |

<a name="Model+prop"></a>

### model.prop()
**Kind**: instance method of [<code>Model</code>](#Model)  
<a name="Model+primaryValue"></a>

### model.primaryValue()
**Kind**: instance method of [<code>Model</code>](#Model)  
<a name="Model+reduce"></a>

### model.reduce([properties]) ⇒ <code>Object</code>
Reduces to the specific array of properties.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - { description_of_the_return_value }  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [properties] | <code>Array</code> | <code>[]</code> | The properties |

<a name="Model+reduceHasProperty"></a>

### model.reduceHasProperty(parent, property) ⇒ <code>\*</code>
Reduces the has property.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>\*</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>\*</code> | The parent |
| property | <code>\*</code> | The property |

<a name="Model+replace"></a>

### model.replace(data) ⇒ <code>\*</code>
{ function_description }

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>\*</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | The data |

<a name="Model+request"></a>

### model.request(config) ⇒ <code>Promise</code>
Implement a default request method

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Promise</code> - The request  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>\*</code> | The configuration |

<a name="Model+reset"></a>

### model.reset()
**Kind**: instance method of [<code>Model</code>](#Model)  
<a name="Model+toCase"></a>

### model.toCase(caseName) ⇒ <code>Object</code>
Returns a clone representation of the object.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - The modify object.  

| Param | Type | Description |
| --- | --- | --- |
| caseName | <code>String</code> | The case name. |

<a name="Model+toCreate"></a>

### model.toCreate() ⇒ <code>Object</code>
Returns a create representation of the object.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - Create representation of the object.  
<a name="Model+toData"></a>

### model.toData() ⇒ <code>Object</code>
Returns a Object representation of the model.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - a Object instance.  
<a name="Model+toFormData"></a>

### model.toFormData(properties) ⇒ <code>FormData</code>
Return a FormData with specific properties.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>FormData</code> - a FormData representation .  

| Param | Type | Description |
| --- | --- | --- |
| properties | <code>Array</code> | properties names. |

<a name="Model+toJSONData"></a>

### model.toJSONData() ⇒ <code>String</code>
Returns a JSON representation of the model.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>String</code> - a JSON text.  
<a name="Model+toUpdate"></a>

### model.toUpdate() ⇒ <code>Object</code>
Returns a create representation of the object.

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - Create representation of the object.  
<a name="Model+transfer"></a>

### model.transfer(params) ⇒ <code>Promise</code>
Send a post multipart form data request to the current url resource

**Kind**: instance method of [<code>Model</code>](#Model)  
**Returns**: <code>Promise</code> - A post request promise  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the request data |

<a name="Model.fetcher"></a>

### Model.fetcher()
{ item_description }

**Kind**: static method of [<code>Model</code>](#Model)  
<a name="Model.from"></a>

### Model.from()
**Kind**: static method of [<code>Model</code>](#Model)  
<a name="Model.toList"></a>

### Model.toList() ⇒ <code>Object</code>
Returns a create representation of the object.

**Kind**: static method of [<code>Model</code>](#Model)  
**Returns**: <code>Object</code> - Create representation of the object.  
<a name="Service"></a>

## Service
This class describes a service.

**Kind**: global class  

* [Service](#Service)
    * [._create_from()](#Service._create_from) ⇒ <code>Object</code>
    * [._prototype()](#Service._prototype) ⇒ <code>Object</code>
    * [.clone()](#Service.clone) ⇒ <code>Object</code>
    * [.create(model)](#Service.create) ⇒ <code>Promise</code>
    * [.delete(model)](#Service.delete) ⇒ <code>Promise</code>
    * [.model()](#Service.model) ⇒ <code>Object</code>
    * [.parametrize(params)](#Service.parametrize) ⇒ <code>Object</code>
    * [.fetcher()](#Service.fetcher) ⇒ <code>function</code>
    * [.from()](#Service.from)
    * [.initial(opts)](#Service.initial) ⇒ <code>Object</code>
    * [.initialize(opts)](#Service.initialize) ⇒ <code>Object</code>
    * [.shape(data)](#Service.shape) ⇒ <code>Object</code>
    * [.toList()](#Service.toList) ⇒ <code>function</code>
    * [.update(model)](#Service.update) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="Service._create_from"></a>

### Service.\_create\_from() ⇒ <code>Object</code>
Create and new object instance from the service prototype.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - a new service instance.  
<a name="Service._prototype"></a>

### Service.\_prototype() ⇒ <code>Object</code>
Returns the service prototype.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - a prototype definition.  
<a name="Service.clone"></a>

### Service.clone() ⇒ <code>Object</code>
Creates a new instance of the service with same properties than original.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - Copy of this service.  
<a name="Service.create"></a>

### Service.create(model) ⇒ <code>Promise</code>
Send a post request to create a active model record.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - the create request promise.  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | the active model record. |

<a name="Service.delete"></a>

### Service.delete(model) ⇒ <code>Promise</code>
Send a delete request to remove a active model record.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - the remove request promise.  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | the active model record. |

<a name="Service.model"></a>

### Service.model() ⇒ <code>Object</code>
Returns the model of the service.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - Model of service.  
<a name="Service.parametrize"></a>

### Service.parametrize(params) ⇒ <code>Object</code>
Parametrize the params argument to model param get.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - The model get params.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The params. |

<a name="Service.fetcher"></a>

### Service.fetcher() ⇒ <code>function</code>
Returns a invoker to fetch function.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>function</code> - this fetch function.  
<a name="Service.from"></a>

### Service.from()
**Kind**: static method of [<code>Service</code>](#Service)  
<a name="Service.initial"></a>

### Service.initial(opts) ⇒ <code>Object</code>
Return a new initial service model instance with the optionsprovided.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - The new initial service model instance.  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | The options of a new service model instance. |

<a name="Service.initialize"></a>

### Service.initialize(opts) ⇒ <code>Object</code>
Return a initial data with the options provided.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - The initial data.  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | The options of a new service model instance. |

<a name="Service.shape"></a>

### Service.shape(data) ⇒ <code>Object</code>
Return a new service model instance with the initial dataprovided.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Object</code> - The new service model instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The initial data of new service model instance. |

<a name="Service.toList"></a>

### Service.toList() ⇒ <code>function</code>
Returns a list fetcher representation of service.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>function</code> - the fetcher request.  
<a name="Service.update"></a>

### Service.update(model) ⇒ <code>Promise.&lt;object&gt;</code>
Send a put request to update a active model record.

**Kind**: static method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise.&lt;object&gt;</code> - the update request promise.  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>object</code> | the active model record. |

