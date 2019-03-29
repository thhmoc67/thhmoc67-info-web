const cacheTime = 5 // minutes

const checkCache = (url) => {
  window.globals.apiCache = window.globals.apiCache || {}
  const cachedApi = window.globals.apiCache[url]
  const now = Date.now()
  if (cachedApi && now - cachedApi.timeStamp < 1000 * 10 * cacheTime) {
    // 10 mins
    return cachedApi.payload
  }
  return null
}

const cacheApi = (url, payload) => {
  window.globals.apiCache = window.globals.apiCache || {}
  window.globals.apiCache[url] = {
    payload,
    timeStamp: Date.now(),
  }
}

export { checkCache, cacheApi }
