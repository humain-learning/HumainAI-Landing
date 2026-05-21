import Footer from 'ui/Footer';

export default function StandalonePagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='overflow-x-clip'>
			{children}
			<Footer />
		</div>);
}
