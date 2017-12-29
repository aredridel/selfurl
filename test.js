const assert = require('assert')
const mockreq = require('mock-req')
const selfurl = require('./')

const url1 = selfurl(new mockreq({
    method: 'GET',
    url: '/stuff?q=thing',
	headers: {
        'Host': 'example.org',
		'Authorization': 'Basic dXNlcjpwYXNz'
	},
    connection: { encrypted: true }
}))

assert.equal(url1, 'https://user:pass@example.org/stuff?q=thing')
