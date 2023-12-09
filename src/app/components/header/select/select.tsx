import styles from './select.module.css';
import { User } from './select.types';

const Select = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = (await resp.json()) as User[];
	console.log(data);

	return (
		<select className={styles.select}>
			{data.map((user) => {
				const { id, name } = user;
				return (
					<option key={id} value={name}>
						{name}
					</option>
				);
			})}
		</select>
	);
};

export default Select;
