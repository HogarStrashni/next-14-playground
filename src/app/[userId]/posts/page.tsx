import { FC } from 'react';

import { getAllComments, getAllPosts, getAllUsers } from '@/utils';
import { Comment, Post, User } from '@/types';

type ApiResponse = [User[], Post[], Comment[]];

const PostsPage: FC = async () => {
	const [allUsersData, allPostsData, allCommentData]: ApiResponse =
		await Promise.all([
			await getAllUsers(),
			await getAllPosts(),
			await getAllComments()
		]);

	const allPostsWithComments = allPostsData.map((post) => ({
		id: post.id,
		title: post.title,
		body: post.body,
		userId: post.userId,
		userName: allUsersData.find((user) => user.id === post.userId)?.name,
		comments: allCommentData.filter((comment) => comment.postId === post.id)
	}));

	return <pre>{JSON.stringify(allPostsWithComments, null, 2)}</pre>;
};

export default PostsPage;
