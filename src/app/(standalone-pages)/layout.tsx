import Footer from 'ui/Footer';

export default function StandalonePagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}<Footer /></>;
}
