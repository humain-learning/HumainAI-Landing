import Header from 'ui/Header';
import Footer from 'ui/Footer';

export default function MainPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="overflow-x-hidden relative">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
