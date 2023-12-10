import { ApiResponse, Post } from '@/types';

const getUsers = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	return resp.json();
};

const getPosts = async (postId: number | undefined = undefined) => {
	const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const data = (await resp.json()) as Post[];

	if (postId) {
		return data.filter((post) => post.id == postId);
	}

	return data;
};

const getComments = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
	return resp.json();
};

export const getData = async (postId: number | undefined = undefined) => {
	const [allUsersData, allPostsData, allCommentData]: ApiResponse =
		await Promise.all([
			await getUsers(),
			await getPosts(postId),
			await getComments()
		]);

	return allPostsData.map((post) => ({
		id: post.id,
		title: post.title,
		body: post.body,
		userId: post.userId,
		userName: allUsersData.find((user) => user.id === post.userId)?.name,
		comments: allCommentData.filter((comment) => comment.postId === post.id)
	}));
};
