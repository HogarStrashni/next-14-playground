import { User } from '@/types';

import { FC } from 'react';

type HeaderProps = {
	params: {
		userId: number;
	};
};

const Page: FC<HeaderProps> = async ({ params }) => {
	const resp = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.userId}`
	);
	const userData = (await resp.json()) as User;

	return <pre>{JSON.stringify(userData, null, 2)}</pre>;
};

export default Page;
