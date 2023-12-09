import { redirect } from 'next/navigation';
import { FC } from 'react';

type UserParams = {
	params: {
		userId: number;
	};
};

const UserPage: FC<UserParams> = ({ params }) => {
	redirect(`/${params.userId}/posts`);
};

export default UserPage;
