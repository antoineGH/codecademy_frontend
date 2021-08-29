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

const checkArticleExist = (user) => {
	return user.blogs.length >= 1
}

const getTotalLikes = (user) => {
	let total_likes = 0
	if (!user.blogs) throw Error('user cannot be empty')
	user.blogs.forEach((blog) => {
		total_likes = total_likes + blog.likes
	})
	return total_likes
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
