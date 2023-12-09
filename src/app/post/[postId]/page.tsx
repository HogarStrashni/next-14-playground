import { FC } from 'react';
import { getAllData } from '@/utils';

import PostCard from '@/components/post/post-card';

type PostPageProps = {
	params: {
		postId: number;
	};
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
	const allPostsWithComments = await getAllData(params.postId);

	console.log(allPostsWithComments);

	return <div>Hello</div>;
};

export default PostPage;
