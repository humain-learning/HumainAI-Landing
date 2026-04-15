
export const Hero = () => {
	return (
		<div className="w-full max-w-screen flex flex-col relative">
			<div className="">
				<img src="/assets/HCV2/images/hero-girl.png" className="absolute inset-0 object-contain object-right w-full h-full hidden lg:block" alt="hero-bg" />
				<div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-white hidden lg:block " />
			</div>
			<h1 className="mx-auto w-[90vw] inline-flex flex-col gap-2 items-start justify-start text-3xl md:text-5xl text-start font-bold z-100">
				<span className="text-sage">Gen AI & Agentic AI </span>
				<span className="">Online Summer Camp for</span>
				<span className="text-terracotta">8<sup>th</sup> to 12<sup>th</sup> Grade Kids</span>
			</h1>

			<div className="relative py-5 h-[55vh] md:h-[70vh] w-full px-8">
				<div className="absolute inset-0 z-0 lg:hidden">
					<img src="/assets/HCV2/images/hero-girl.png" className="absolute left-0 object-cover w-full h-full lg:hidden" alt="hero-bg" />
					<div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-white lg:hidden" />
				</div>

				{/* <div className="w-1/2 flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-0 scale-150 z-10 lg:px-10">
					<div className="relative w-1/2 flex items-center justify-center">
						<Image 
							src='/assets/HCV2/icons/accolade.png'
							width={123}
							height={110}
							alt = 'accolade'
							className=""
							loading="eager"
							priority
						/>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] text-xs text-center w-3/4">
							World Class <br/>- 8.7 NPS
						</div>
					</div>

					<div className="relative w-1/2 flex items-center justify-center">
						<Image 
							src='/assets/HCV2/icons/accolade.png'
							width={123}
							height={110}
							alt = 'accolade'
							className=""
						/>

						<div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-[26%] text-xs text-center w-1/3">
							E-Cell <span className="font-bold">IIT Kharagpur</span> Certification
						</div>
					</div>
				</div> */}
				
				<div className="w-1/2 min-[450px]:w-1/3 min-[450px]:gap-5 grid grid-cols-1 min-[600px]:grid-cols-2 min-[600px]:w-[60%] min-[600px]:gap-2 min-[860px]:w-2/5 min-[860px]:gap-10 min-[860px]:ml-20">
					<div className="relative w-full md:h-full flex items-center justify-center">
						<img src='/assets/HCV2/icons/accolade.svg' className="w-[80%] md:w-full object-contain" alt='accolade' />
						<span className="absolute text-center text-xs md:text-base lg:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
							World Class<br/><span className="font-bold">8.7 NPS</span>
						</span>
					</div>

					<div className="relative w-full md:h-full flex items-center justify-center">
						<img src='/assets/HCV2/icons/accolade.svg' className="w-[80%] md:w-full object-contain" alt='accolade' />
						<span className="absolute text-center text-xs md:text-base lg:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
							E-Cell <span className="font-bold">IIT <br/>Kharagpur</span> <br/>Certification
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}