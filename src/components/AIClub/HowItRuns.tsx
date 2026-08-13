const STEPS = [
  {
    number: 1,
    text: 'A Humain Learning coach launches the club in your school.',
  },
  {
    number: 2,
    text: 'One structured, instructor-led AI class every week.',
  },
  {
    number: 3,
    text: 'Self-paced learning on the Humain LMS, with videos and materials available 24/7.',
  },
  {
    number: 4,
    text: 'A team-based monthly challenge to apply what students learn.',
  },
  {
    number: 5,
    text: 'An annual E-Cell IIT Kharagpur certified hackathon to finish the programme.',
  },
];

const HowItRuns = () => {
  return (
    <section className="w-full bg-[#FAF6F0] py-16 px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#171717] md:text-4xl">
            How the programme runs
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Flexible delivery options (Online/Offline) as per the school schedule.
          </p>
        </div>

        <div className="mt-12">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className={`flex items-center gap-4 py-5 ${
                idx !== STEPS.length - 1 ? 'border-b border-[#E6E6E6]' : ''
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#AAC191] text-sm font-bold text-white">
                {step.number}
              </div>
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItRuns;