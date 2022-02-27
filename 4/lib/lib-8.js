// https://github.com/lodash/lodash/blob/master/negate.js
function negate(predicate) {
    if (typeof predicate !== 'function') {
        throw new TypeError('Expected a function')
    }
    return function(...args) {
        return !predicate.apply(this, args)
    }
}