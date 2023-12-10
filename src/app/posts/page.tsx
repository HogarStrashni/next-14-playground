import { FC } from 'react';
import { getData } from '@/utils';

import PostCard from '@/components/post-card/post-card';
import { notFound } from 'next/navigation';

const PostsPage: FC = async () => {
	const allPostsAndComments = await getData();

	if (!allPostsAndComments) return notFound();

	return allPostsAndComments.map((item) => (
		<PostCard key={item.id} postData={item} />
	));
};

export default PostsPage;
