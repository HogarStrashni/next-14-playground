import Image from 'next/image';
import styles from './header.module.css';

import Select from './select';

const Header = () => {
	return (
		<header className={styles.header}>
			<Image src="/logo.png" width={150} height={75} alt="logo" />

			{/* Mimic logged in user */}
			<Select />
		</header>
	);
};

export default Header;
