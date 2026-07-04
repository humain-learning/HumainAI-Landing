type SwipeProgressProps = {
  totalSlides: number;
  activeIndex: number;
  visibleOnLarge: boolean;
  colour?: string;
};

export const SwipeProgress = ({ totalSlides, activeIndex, visibleOnLarge, colour = 'terracotta' }: SwipeProgressProps) => {
	const clampedTotal = Math.max(totalSlides, 1);
	const clampedIndex = Math.min(Math.max(activeIndex, 0), clampedTotal - 1);
	const thumbWidthPercent = 100 / clampedTotal;
	const positionRatio = clampedTotal <= 1 ? 0 : clampedIndex / (clampedTotal - 1);
	const thumbLeftPercent = positionRatio * (100 - thumbWidthPercent);
	const visibleClass = visibleOnLarge ? 'flex' : 'flex md:hidden';
	const trackColourClass = colour === 'white' ? 'grey' : `bg-${colour}/25`;
	const thumbColourClass = `bg-${colour}`;
  	return (
		<div className={`mx-auto mt-2 w-[70vw] md:w-[50vw] items-center gap-3 ${visibleClass}`}>
		<div className={`relative h-1 flex-1 overflow-hidden rounded-full ${trackColourClass}`}>
			<div
			className={`absolute top-0 h-full rounded-full transition-all duration-300 ease-out ${thumbColourClass}`}
			style={{
				width: `${thumbWidthPercent}%`,
				left: `${thumbLeftPercent}%`,
			}}
			/>
		</div>

		</div>
	);
};
