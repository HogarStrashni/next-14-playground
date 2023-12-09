import { FC } from 'react';
import { getAllData } from '@/utils';

import PostCard from '@/components/post/post-card';

const PostsPage: FC = async () => {
	const allPostsWithComments = await getAllData();

	return (allPostsWithComments?.map((item) => (
			<PostCard key={item.id} postData={item} />
		))
	);
};

export default PostsPage;
