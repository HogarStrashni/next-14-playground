import { FC } from 'react';
import { redirect } from 'next/navigation';

const Home: FC = () => {
	redirect('/posts');
};

export default Home;
