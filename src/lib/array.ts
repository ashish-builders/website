/**
 * Alway return an array irrespective of the value provided
 * @param value - value
 * @param [coerce] - if value is not null or undefined or array, then cast the values into array
 * @returns array
 */
export function getArray<T = unknown>(value: unknown, coerce: boolean = false): T[] {
    if (value && Array.isArray(value)) {
        return value
    }
    if (coerce && value !== null && typeof value !== 'undefined') {
        return [value] as [T]
    }
    return []
}