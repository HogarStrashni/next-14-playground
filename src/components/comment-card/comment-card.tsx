import { FC } from 'react';
import styles from './comment-card.module.css';
import { Comment } from '@/types';

type CommentProps = {
	comment: Comment;
};

const CommentCard: FC<CommentProps> = ({ comment }) => {
	const { name, email, body } = comment;
	return (
		<div className={styles.wrapper}>
			<div className={styles.comment_header}>
				<p>{name}</p>
				<p>Comment by: {email}</p>
			</div>
			<p>{body}</p>
		</div>
	);
};

export default CommentCard;
