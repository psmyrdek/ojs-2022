// https://github.com/lodash/lodash/blob/master/eq.js
function eq(value, other) {
    return value === other || (value !== value && other !== other)
}