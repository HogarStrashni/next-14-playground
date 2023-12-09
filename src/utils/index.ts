export const getAllUsers = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	return resp.json();
};

export const getAllPosts = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
	return resp.json();
};

export const getAllComments = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
	return resp.json();
};
