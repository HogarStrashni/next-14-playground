import { User } from '@/types';

import { FC } from 'react';

type UserParams = {
	params: {
		userId: number;
	};
};

const UserPostsPage: FC<UserParams> = async ({ params }) => {
	const resp = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
	);
	const userData = (await resp.json()) as User;

	return <pre>{JSON.stringify(userData, null, 2)}</pre>;
};

export default UserPostsPage;
