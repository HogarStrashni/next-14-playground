import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="not_found">
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/posts" className="not_found_link">
				Return Home
			</Link>
		</div>
	);
};

export default NotFound;
