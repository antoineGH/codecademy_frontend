// https://www.valentinog.com/blog/jest/
// https://dev.to/dsasse07/a-beginner-s-guide-to-unit-testing-with-jest-45cc

const user = {
	username: 'user1',
	blogs: [
		{
			title: 'Entry 1',
			likes: 130,
			content: 'Blog 1 Content...',
		},
		{
			title: 'Entry 2',
			likes: 100,
			content: 'Blog 2 Content...',
		},
	],
}

const userEmpty = ''

const checkArticleExist = (user) => {
	return user.blogs.length >= 1
}

const getTotalLikes = (user) => {
	let total_likes = 0
	user.blogs.forEach((blog) => {
		total_likes = total_likes + blog.likes
	})
	return total_likes
}

const checkUsername = (user) => {
	if (!user) throw Error('user cannot be empty')
	return user.username
}

describe('checkArticleExist', () => {
	test('if user has at least one blog', () => {
		expect(checkArticleExist(user)).toBe(true)
	})
})

describe('getTotalLikes', () => {
	test('should return the total likes of a user', () => {
		expect(getTotalLikes(user)).toBe(230)
	})
})

describe('checkUsername', () => {
	test('should match the username user1', () => {
		expect(checkUsername(user)).toEqual('user1')
	})
	test('should throw error when user not exist', () => {
		expect(checkUsername(userEmpty)).toThrowError(Error('user cannot be empty'))
	})
})
