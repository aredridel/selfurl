const url = require('url')

module.exports = function selfurl(req) {
  const proto = (req.headers['x-forwarded-proto'] || '').match(/^https/i) || req.connection.encrypted ? 'https' : 'http'
  const href = url.parse(req.url)
  href.protocol = proto
  href.auth = parseAuth(req)
  href.host = req.headers['host']
  return url.format(href)
}


function parseAuth(req) {
  const auth = (req.headers['authorization'] || '').match(/^Basic (.*)/i)
  if (auth) {
    try {
      return Buffer(auth[1], 'base64').toString()
    } catch (e) {
      return null
    }
  } else {
    return null
  }
}
