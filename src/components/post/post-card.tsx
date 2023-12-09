import { FC } from 'react';
import styles from './post-card.module.css';
import { Comment } from '@/types';

import CommentCard from '../comment';
import Link from 'next/link';

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
	const { title, body, userName, comments, id } = postData;
	return (
		<>
			<Link href={`/post/${id}`}>
				<div className={styles.wrapper}>
					<div className={styles.card_header}>
						<p>{title}</p>
						<p>Author: {userName}</p>
					</div>

					<p>{body}</p>
				</div>
			</Link>
			{comments.map((comment) => (
				<CommentCard key={comment.id} comment={comment} />
			))}
		</>
	);
};

export default PostCard;
