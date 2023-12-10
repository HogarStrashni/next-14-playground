import { FC } from 'react';
import { notFound } from 'next/navigation';

import { getData } from '@/utils';
import PostCard from '@/components/post-card/post-card';
import styles from './page.module.css';

type PostsPageProps = {
	searchParams: {
		query: string;
	};
};

const PostsPage: FC<PostsPageProps> = async ({ searchParams }) => {
	const allPostsAndComments = await getData();

	if (!allPostsAndComments) return notFound();

	const searchTerm = searchParams?.query;
	const filteredPosts = searchTerm
		? allPostsAndComments.filter(
				(item) =>
					item.userName?.toLowerCase().includes(searchTerm.toLowerCase())
			)
		: allPostsAndComments;

	if (!filteredPosts.length)
		return <div className={styles.wrapper}>No posts found!</div>;

	return filteredPosts.map((item) => (
		<PostCard key={item.id} postData={item} />
	));
};

export default PostsPage;
