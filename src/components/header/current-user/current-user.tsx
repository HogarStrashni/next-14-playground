'use client';

import { FC } from 'react';
import styles from './current-user.module.css';
import { User } from '@/types';

import { useParams } from 'next/navigation';

type UsersDataProps = {
	usersData: User[];
};

type ParamsObj =
	| {
			userId: string;
	  }
	| undefined;

const CurrentUser: FC<UsersDataProps> = ({ usersData }) => {
	const params = useParams() as ParamsObj;
	const userId = params?.userId;

	if (!userId)
		return <div className={styles.notification}>No user selected</div>;

	const user = usersData.find((user) => user.id === Number(params?.userId));

	return <div className={styles.notification}>{user?.name}</div>;
};

export default CurrentUser;
