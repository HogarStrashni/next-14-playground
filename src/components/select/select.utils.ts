'use server';

import { redirect } from 'next/navigation';

export const redirectToUserPosts = async (formData: FormData) => {
	const userId = formData.get('userId');

	redirect(`/${userId}`);
};
