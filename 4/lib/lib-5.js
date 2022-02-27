// https://github.com/lodash/lodash/blob/master/create.js
function create(prototype, properties) {
    prototype = prototype === null ? null : Object(prototype)
    const result = Object.create(prototype)
    return properties == null ? result : Object.assign(result, properties)
}
