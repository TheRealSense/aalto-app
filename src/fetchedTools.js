/* eslint-disable no-console */
import fetchJson from './util/fetchJson'

export default fetchedTools => {
	const toolApiUrl = 'http://ec2-18-191-213-136.us-east-2.compute.amazonaws.com/tools'
	const response = fetchJson(toolApiUrl)
	console.log('Tools: ', response)
	fetchedTools = response
	return fetchedTools
}