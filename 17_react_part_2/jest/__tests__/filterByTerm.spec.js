// Function to test (normally imported from project)
function filterByTerm(inputArr, searchTerm) {
	if (!searchTerm) throw Error('searchTerm cannot be empty')
	const regex = new RegExp(searchTerm, 'i')
	return inputArr.filter(function (arrayElement) {
		return arrayElement.url.match(regex)
	})
}

// a describe function is invoked which accepts two arguments:
// a string (a description that will appear in the terminal when tests are run, which "describes" the test block)
// a callback function which will contain the individual tests..
// One (or more) test function which accepts two arguments:
// a string describing the action of the specific test,
// a callback function containing an expect function and a matcher function.
// The expect function accepts the function invocation being tested, and is chained to the matcher which describes the expected results.

// Jest method to contain one or more related tests
describe('Filter function', () => {
	// Actual test block test('test description', callback function with test)
	test('it should filter by a search term (link)', () => {
		const input = [
			{ id: 1, url: 'https://www.url1.dev' },
			{ id: 2, url: 'https://www.url2.dev' },
			{ id: 3, url: 'https://www.link3.dev' },
		]

		const output = [{ id: 3, url: 'https://www.link3.dev' }]

		// Wrap function call inside expect with a matcher (a Jest function for checking the output).
		expect(filterByTerm(input, 'link')).toEqual(output)
		expect(filterByTerm(input, 'LINK')).toEqual(output)

		// Matcher Examples
		// toBeNull matches only null
		// toBeUndefined matches only undefined
		// toBeDefined is the opposite of toBeUndefined
		// toBeTruthy matches anything that an if statement treats as true
		// toBeFalsy matches anything that an if statement treats as false
		// toBeGreaterThan or toBeLessThan for number value comparisons
		// toMatch accepts a Regex pattern to match a string output
		// toContain can be used to see if a value is contained in an Array
	})
})
