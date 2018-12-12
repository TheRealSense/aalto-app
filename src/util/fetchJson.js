require('es6-promise').polyfill()
require('isomorphic-fetch')

export default url => (
	fetch(url, {
		method: 'GET'
	})
		.then(response => {
			if (response.status >= 400) {
				return Promise.reject(response.status)
			}
			return response.json()
		})
		.catch(error => {
			return error
		})
)