import { FC } from 'react';
import { User } from '../types';
import Select from '@/components/select';
import styles from './page.module.css';

const Home: FC = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const usersData = (await resp.json()) as User[];

	return (
		<div className={styles.wrapper}>
			<h1>Welcome to PostsApp</h1>
			<p>Select a user to see their posts</p>
			<Select usersData={usersData} />
		</div>
	);
};

export default Home;
