'use client';

import { useState } from 'react';
import styles from './search-field.module.css';

const SearchInput = () => {
	const [query, setQuery] = useState('');
	return (
		<div className={styles.wrapper_div}>
			<input type="search" className={styles.input_field} />
		</div>
	);
};

export default SearchInput;
