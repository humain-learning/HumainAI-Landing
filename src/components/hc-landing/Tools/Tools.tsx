// import { models, tools } from "./data";
import { Marquee } from "ui/marquee";
export const models = [
    '/assets/HCV2/tools/chatgpt.svg',
    '/assets/HCV2/tools/gemini.svg',
    // '/assets/HCV2/tools/perplexity.svg',
    '/assets/HCV2/tools/grok.svg',
    // '/assets/HCV2/tools/claude.svg'
]

export const tools = [
    '/assets/HCV2/tools/n8n.svg',
    '/assets/HCV2/tools/runway.svg',
    '/assets/HCV2/tools/notebooklm.svg',
    '/assets/HCV2/tools/krea.svg',
    // '/assets/HCV2/tools/suno.svg'
]
export const Tools = () => {
    return (
        <div className="w-full bg-terracotta py-5 md:py-10 flex flex-col items-center justify-center">
            <div className="flex flex-col w-[70vw] items-center justify-center mx-auto ">
				<span className="text-md text-white">
					The Toolkit
				</span>
				<hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-3 border-white mx-6 mt-2" />

                <h1 className="text-3xl md:text-5xl font-semibold py-6 text-center">
                    <span className="text-white">15+ AI Tools Your Child Will Master</span>
					<br />
					
                </h1>
                <span className="md:text-xl text-white mx-auto text-sm text-center pt-2 pb-8 w-2/3">Not just <b>"learn about AI"</b> actually use these tools to create, research, build, and automate.</span>
            </div>

			<div className="mx-auto md:max-w-4xl w-[90vw] rounded-2xl border border-white/20 bg-white/[0.07] p-6 md:p-8 text-left backdrop-blur-md mb-16">
				<div className="flex flex-col md:flex-row items-center gap-5">
					<img src='/assets/icons/presenter-icon.svg' alt="Presenter Icon" className="h-12 w-12 shrink-0 opacity-90" />
					<div className="flex flex-col space-y-1 text-center md:text-start">
						<h3 className="font-display text-lg md:text-xl font-extrabold !text-white">
							No coding. No maths. No technical background needed.
						</h3>
						<p className="font-sans text-sm !text-white/80 leading-relaxed">
							If your child can use a smartphone and a laptop, they are ready for Humain Champs. 
							We start from absolute zero.
						</p>
					</div>
				</div>
			</div>
            <Marquee className="py-5  [--duration:30s]">
                {models.map((model, index) => (
                    <img src={model} key={index} alt={`AI Model ${index + 1}`} className="h-10 md:h-15 mx-3 md:mx-8" />
                ))}
            </Marquee>
            <Marquee className="pt-5 pb-10 [--duration:30s]" reverse>
                {tools.map((tool, index) => (
                    <img src={tool} key={index} alt={`AI Tool ${index + 1}`} className="h-5 md:h-7 mx-3 md:mx-8" />
                ))}
            </Marquee>
        </div>
    );
};