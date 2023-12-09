import { Comment, Post } from '@/types';
import { FC } from 'react';

export type PostCardProps = {
	postData: {
		id: number;
		title: string;
		body: string;
		userId: number;
		userName: string | undefined;
		comments: Comment[];
	};
};

const PostCard: FC<PostCardProps> = ({ postData }) => {
	return <div>{JSON.stringify(postData, null, 4)}</div>;
};

export default PostCard;
