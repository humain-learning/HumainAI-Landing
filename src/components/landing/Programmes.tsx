import PrimaryButton from 'ui/PrimaryButton';
import SecondaryButton from 'ui/SecondaryButton';
import SkeletalButton from 'ui/SkeletalButton';

const programmes = [
  {
    id: 1,
    eyebrow: 'FOR STUDENTS',
    eyebrowColor: '#2F4A34',
    price: '',
    title: 'Humain Champs',
    description:
      'A live online AI course where students go from zero to building their own AI agent. 15 hours across 8 sessions and six modules, with an E-Cell IIT Kharagpur certificate. No coding needed.',
    buttonText: 'Explore Humain Champs',
    buttonHref: '/courses/students/humain-champs',
    buttonBg: '#AAC191',
    buttonTextColor: '#FFFFFF',
  },
  {
    id: 2,
    eyebrow: 'FOR EDUCATORS',
    eyebrowColor: '#E7A572',
    title: 'Humain Educators',
    description:
      'Live, practical AI professional development for school educators. Master classroom AI tools, save hours each week on planning and assessment, and earn a certificate of completion. No prior AI experience needed.',
    buttonText: 'Explore Humain Educators',
    buttonHref: '/courses/educators/humain-educators',
    buttonBg: '#E7A572',
    buttonTextColor: '#FFFFFF',
  },
  // {
  //   id: 3,
  //   eyebrow: 'FOR SCHOOLS',
  //   eyebrowColor: '#2F4A34',
  //   title: 'AI Clubs & Teacher Trainings',
  //   description:
  //     'Bring AI education inside your school. A year-long AI club for Grades 3–12 with weekly classes, monthly challenges, and an annual E-Cell IIT Kharagpur certified hackathon — plus trainings to upskill your entire staff.',
  //   buttonText: 'Partner with Humain',
  //   buttonHref: '/schools',
  //   buttonBg: '#2F4A34',
  //   buttonTextColor: '#FFFFFF',
  // },
];

const trustItems = [
  {
    dot: '#AAC191',
    text: (
      <>
        Designed by educators with decades of experience in{' '}
        <strong>child-centered pedagogy</strong>.
      </>
    ),
  },
  {
    dot: '#E7A572',
    text: (
      <>
        Backed by global research and frameworks —{' '}
        <strong>UNESCO, OECD and the EU</strong>.
      </>
    ),
  },
  {
    dot: '#AAC191',
    text: (
      <>
        AI Hackathons in collaboration with <strong>E-Cell, IIT Kharagpur</strong>.
      </>
    ),
  },
  {
    dot: '#E7A572',
    text: (
      <>
        Focused not just on tools, but on <strong>mindset, judgement and values</strong>.
      </>
    ),
  },
];

const Programmes = () => {
  return (
    <section className="bg-[#FDF9F3] py-16 md:py-20 px-6 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C97D49]">
          OUR PROGRAMMES
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-display font-extrabold text-[#333333]">
          For Students & Educators
        </h2>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E7A572]" />
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-6">
          {programmes.map((card) => (
          <div
            key={card.id}
            className="flex h-full w-full max-w-sm flex-col rounded-2xl border border-[#EFE7DC] bg-white p-6 md:w-[360px]"            >
            <div className="flex items-center justify-between gap-3">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: card.eyebrowColor || '#C97D49' }}
                >
                  {card.eyebrow}
                </p>
              {card.price ? (
                <div className="rounded-full bg-[#FDF3EB] px-3 py-1 text-xs font-bold text-[#C97D49]">
                  {card.price}
                </div>
              ) : null}
            </div>

            <h3 className="mt-4 font-display text-xl font-extrabold text-[#333333]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#333333]/70">
              {card.description}
            </p>

            <div className="mt-auto pt-6 flex flex-wrap justify-center">
              {card.id === 1 ? (
                <PrimaryButton
                  text={card.buttonText}
                  target={card.buttonHref}
                 // buttonClassName="w-full justify-between font-display text-sm font-bold"
                />
              ) : null}

              {card.id === 2 ? (
                <SecondaryButton
                  text={card.buttonText}
                  target={card.buttonHref}
                 // buttonClassName="w-full justify-between font-display text-sm font-bold"
                />
              ) : null}

              {card.id === 3 ? (
                <SkeletalButton
                  text={card.buttonText}
                  target={card.buttonHref}
                  //buttonClassName="w-full justify-between font-display text-sm font-bold"
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-[#EFE7DC] pt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: item.dot }}
              />
              <p className="text-sm leading-snug text-[#333333]/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programmes;
