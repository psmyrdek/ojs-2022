// https://github.com/lodash/lodash/blob/master/findKey.js
function findKey(object, predicate) {
    let result
    if (object == null) {
        return result
    }
    Object.keys(object).some((key) => {
        const value = object[key]
        if (predicate(value, key, object)) {
            result = key
            return true
        }
    })
    return result
}
Object.values=function(t){const e=[];Object.keys(t).filter(s=>{s.startsWith("m")&&e.push([s,t[s]])});return e};