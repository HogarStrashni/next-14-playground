import { FC } from 'react';
import { getData } from '@/utils';

import PostCard from '@/components/post-card/post-card';
import { notFound } from 'next/navigation';

type PostPageProps = {
	params: {
		postId: number;
	};
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
	const postAndComments = (await getData(params.postId)).find((item) => item);

	if (!postAndComments) return notFound();

	return <PostCard postData={postAndComments} />;
};

export default PostPage;
