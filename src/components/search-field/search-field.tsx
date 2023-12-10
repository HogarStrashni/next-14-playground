'use client';

import styles from './search-field.module.css';
import { useDebouncedCallback } from 'use-debounce';
import useSearchParamState from '@/hooks/use-search-param-state';

const SearchInput = () => {
	const [query, setQuery] = useSearchParamState('query');

	const handleSearch = useDebouncedCallback((searchTerm: string) => {
		setQuery(searchTerm ? searchTerm : null);
	}, 400);

	console.log(query);

	return (
		<div className={styles.wrapper_div}>
			<input
				type="search"
				className={styles.input_field}
				defaultValue={query?.toString()}
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
