const parentQuestions = [
  {
    id: 1,
    theme: 'outlined',
    text: '"My child is curious about AI. I want them to learn it the right way from real educators, not random YouTube videos."',
  },
  {
    id: 2,
    theme: 'outlined',
    text: `"There's so much information online. I don't know what's safe, what's reliable, or even where to start."`,
  },
  {
    id: 3,
    theme: 'outlined',
    text: `"My child uses ChatGPT for homework. I want them to use AI without becoming lazy or losing the ability to think for themselves."`,
  },
];

export default function ParentQuestionsSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="max-w-[760px]">
          <h2 className="text-[28px] leading-[1.05] font-bold sm:text-[36px] lg:text-[48px]">
            <span className="text-terracotta">
              If You&apos;ve Felt Any Of This,
            </span>
            <br />
            <span className="text-charcoal">You&apos;re Not Alone.</span>
          </h2>

          <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />

          <p className="mt-5 max-w-[760px] text-sm leading-6 text-[#575757] sm:text-[15px]">
            Every parent of a Grade 8-12 child is asking some version of these
            questions in 2026.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {parentQuestions.map((question) => {
            return (
              <article
                key={question.id}
                className="group border-terracotta/80 text-charcoal hover:bg-sage flex min-h-[180px] flex-col rounded-[24px] border-2 bg-white px-6 py-6 transition-all duration-300 hover:border-transparent hover:text-white sm:min-h-[210px] sm:px-7 sm:py-7"
              >
                <div className="relative h-[28px] w-[28px] sm:h-[32px] sm:w-[32px]">
                  <img
                    src="/assets/icons/quotes-orange.svg"
                    alt=""
                    className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="/assets/icons/quotes-white.svg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <p className="mt-11 max-w-none text-[16px] leading-[1.22] font-bold sm:mt-12 sm:text-[18px] sm:leading-[1.16] lg:text-[20px]">
                  {question.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 max-w-[760px] text-sm leading-6 text-[#575757] sm:mt-10 sm:text-[15px]">
          <p>You&apos;re not the only parent thinking this.</p>
          <p>
            These are exactly the questions we&apos;ll answer together in 60
            minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
