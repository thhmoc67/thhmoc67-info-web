import { checkCache, cacheApi } from './caching'

// Custom errors
function ApiError(message) {
  this.message = message || ''
}
ApiError.prototype = new Error()

function PathError(message) {
  this.message = message || ''
}
PathError.prototype = new Error()

// Default options for API call
const DEFAULT_API_OPTIONS = {
  method: 'GET', // Default method
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

/**
 * Requests a URL, returning a promise
 * @param  {object} options The options we want to pass to "fetch"
 * @return {object} The response data
 */

function request(options) {
  return fetch(options.url, options)
    .then((response) => {
      // Handle 401 - unauthorised
      if (response.status === 401) {
        throw new ApiError('You need to sign in or sign up before continuing')
      }
      if (response.redirected && options.redirect === 'follow') {
        window.location = response.url
      }

      //   if (response.status === 200) {
      //     return response.json()
      //   }
      return response.json()
    })
    .then((payload) => {
      if (options.shouldCache) {
        cacheApi(options.url, payload)
      }
      return payload
    })
    .then((jsonResult) => {
      if (jsonResult) {
        return jsonResult
      }
    })
}

const makeOptions = (options) => {
  const relativeUrl = options.url
  if (
    !options.headers
    || (options.headers && options.headers['Content-Type'] === 'application/json')
  ) {
    const body = options.body && JSON.stringify(options.body)
    return Object.assign({}, DEFAULT_API_OPTIONS, options, {
      relativeUrl,
      body,
    })
  }

  return Object.assign({}, DEFAULT_API_OPTIONS, options, {
    relativeUrl,
  })
}

const searchCache = (options) => {
  if (options.shouldCache) {
    return checkCache(options.url)
  }
  return null
}

export default function api(options) {
  const apiOptions = makeOptions(options)
  return request(apiOptions)
}

export function get(options) {
  const payload = searchCache(options)
  if (payload) {
    return new Promise((resolve) => {
      resolve(payload)
    })
  }
  return api(Object.assign({}, options, { method: 'GET' }))
}

export function post(options) {
  return api(Object.assign({}, options, { method: 'POST' }))
}

export function put(options) {
  return api(Object.assign({}, options, { method: 'PUT' }))
}

export function deleteMethod(options) {
  return api(Object.assign({}, options, { method: 'DELETE' }))
}
