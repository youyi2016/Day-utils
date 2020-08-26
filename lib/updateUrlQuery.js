function updateUrlQuery(key, value, type = 'location') {
  let url = type === 'location' ? window.location.href : window.location.hash

  if (!url.includes('?')) {
    url = `${url}?${key}=${value}`
  } else {
    if (!url.includes(key)) {
      url = `${url}&${key}=${value}`
    } else {
      const re = `(\\?|&|\#)${key}([^&|^#]*)(&|$|#)`
      url = url.replace(new RegExp(re), '$1' + key + '=' + value + '$3')
    }
  }
  if (type === 'location') {
    location.href = url
  }

  if (type === 'pushState') {
    history.pushState({}, '', url)
  }
}

export default updateUrlQuery