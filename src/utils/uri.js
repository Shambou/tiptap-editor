export const getQueryStringItem = (uri, key) => {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  let str = uri.substr(uri.indexOf('?') + 1)
  let r = str.match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return null
  }
}

export const updateQueryStringItem = (uri, key, value) => {
  if (!uri || !value) {
    return uri
  }
  let re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  let separator = uri.indexOf('?') !== -1 ? '&' : '?'
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    return uri + separator + key + '=' + value
  }
}
