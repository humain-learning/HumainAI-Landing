
export const FeatureCard = ({ title1,title2, description, icon, image }: { title1: string; title2: string; description: string; icon: string; image: string }) => {
	return (
		<div className="h-full aspect-3/4 md:aspect-7/8 w-auto flex flex-col border-4 border-terracotta rounded-[32px] overflow-hidden">
			<div className="flex items-center gap-5 p-5">
				<img src={icon} alt={`${title1} ${title2} icon`} className="w-15 h-15" />
				<div className="flex font-bold">
					{title1} <br/> {title2}
				</div>
			</div>

			<div className="w-full px-5">
				{description}
			</div>
			<img src={image} alt={`${title1} ${title2} image`} className="w-full h-auto object-cover mt-auto" />
		</div>
	)
}