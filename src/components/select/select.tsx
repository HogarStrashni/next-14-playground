'use client';

import { FC, useRef } from 'react';
import { User } from '@/types';
import styles from './select.module.css';
import { redirectToUserPosts } from './select.utils';

type SelectProps = {
	usersData: User[];
};

const Select: FC<SelectProps> = ({ usersData }) => {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<form action={redirectToUserPosts} ref={formRef}>
			<select
				name="userId"
				className={styles.select}
				onChange={() => {
					formRef.current?.requestSubmit();
					formRef.current?.reset();
				}}
			>
				<option value="">--Please select user--</option>
				{usersData.map((user) => {
					const { id, name } = user;
					return (
						<option key={id} value={id}>
							{name}
						</option>
					);
				})}
			</select>
		</form>
	);
};

export default Select;
