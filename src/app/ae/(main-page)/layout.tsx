import Header from 'components/ae/ui/Header';
import Footer from 'components/ae/ui/Footer';

export default function MainPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
