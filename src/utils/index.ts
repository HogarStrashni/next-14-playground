import { ApiResponse } from '@/types';

const getAllUsers = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	return resp.json();
};

const getAllPosts = async (postId: number | undefined = undefined) => {
	const resp = await fetch(
		postId
			? `https://jsonplaceholder.typicode.com/posts/${postId}`
			: 'https://jsonplaceholder.typicode.com/posts'
	);
	return resp.json();
};

const getAllComments = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
	return resp.json();
};

export const getAllData = async (postId: number | undefined = undefined) => {
	const [allUsersData, allPostsData, allCommentData]: ApiResponse =
		await Promise.all([
			await getAllUsers(),
			await getAllPosts(postId),
			await getAllComments()
		]);

	if (!postId)
		return allPostsData.map((post) => ({
			id: post.id,
			title: post.title,
			body: post.body,
			userId: post.userId,
			userName: allUsersData.find((user) => user.id === post.userId)?.name,
			comments: allCommentData.filter((comment) => comment.postId === post.id)
		}));

	// return {
	// 	...allPostsData,
	// 	userName:	allUsersData.find((user) => user.id === allPostsData.id)?.name,
	// 	comments: allCommentData.filter((comment) => comment.postId === postId)
	// };
};
