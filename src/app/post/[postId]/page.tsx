import { FC } from 'react';
import { getData } from '@/utils';

import PostCard from '@/components/post/post-card';

type PostPageProps = {
	params: {
		postId: number;
	};
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
	const postAndComments = (await getData(params.postId)).find((item) => item);

	if (!postAndComments) return;

	return <PostCard postData={postAndComments} />;
};

export default PostPage;
