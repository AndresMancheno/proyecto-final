import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import { Layout } from '../components/Layout/Layout';

export default function Home() {
	return (
		<Layout>
			<Header />
			<h1>Home</h1>
			<Footer />
		</Layout>
	);
}
