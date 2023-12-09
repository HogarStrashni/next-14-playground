'use client';

import { FC } from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import { useParams } from 'next/navigation';

const Header: FC = () => {
	const params = useParams();

	return (
		<header className={styles.header}>
			<Image
				src="/logo.png"
				width={150}
				height={75}
				alt="logo"
				priority={true}
			/>
			<div className={styles.notification}>
				{params.userId ? params.userId : 'User not selected'}
			</div>
		</header>
	);
};

export default Header;
