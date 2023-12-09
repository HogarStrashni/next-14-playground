import { FC } from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import { User } from '@/types';
import CurrentUser from './current-user';
import Link from 'next/link';

const Header: FC = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const usersData = (await resp.json()) as User[];

	return (
		<header className={styles.header}>
			<Link href="/">
				<Image
					src="/logo.png"
					width={150}
					height={75}
					alt="logo"
					priority={true}
				/>
			</Link>
			<CurrentUser usersData={usersData} />
		</header>
	);
};

export default Header;
