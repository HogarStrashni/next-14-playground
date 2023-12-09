import { FC } from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';

const Header: FC = () => {
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
		</header>
	);
};

export default Header;
