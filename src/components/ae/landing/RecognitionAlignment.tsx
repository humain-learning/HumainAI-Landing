import React from 'react';

const ITEMS = [
  {
    title: 'E-Cell IIT Kharagpur partnership',
    body: (
      <>
        Humain Learning runs HumainChamps in collaboration with E-Cell at IIT Kharagpur, including an AI Hackathon
        organised by E-Cell that HumainChamps students participate in.
      </>
    ),
    accent: 'primary',
  },
  // {
  //   title: 'NEP 2020 and NCF 2023',
  //   body: (
  //     <>
  //       The six-pillar framework aligns to the{' '}
  //       <a
  //         className="underline underline-offset-4"
  //         href="https://www.education.gov.in/nep/about-nep"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         National Education Policy 2020
  //       </a>{' '}
  //       and the{' '}
  //       <a
  //         className="underline underline-offset-4"
  //         href="https://ncert.nic.in/pdf/NCFSE-2023-August_2023.pdf"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         National Curriculum Framework 2023
  //       </a>
  //       .
  //     </>
  //   ),
  //   accent: 'primary',
  // },
  // {
  //   title: 'CBSE Skill Subject (AI) for Class IX',
  //   body: (
  //     <>
  //       AI is offered as a{' '}
  //       <a
  //         className="underline underline-offset-4"
  //         href="https://cbseacademic.nic.in/skill-education.html"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         CBSE Class IX Skill Subject
  //       </a>
  //       ; the Humain framework maps to this curriculum hook.
  //     </>
  //   ),
  //   accent: 'primary',
  // },
  {
    title: 'UNESCO, OECD, and EU AI literacy frameworks',
    body: (
      <>
        The pillars are adapted from{' '}
        <a
          className="underline underline-offset-4"
          href="https://www.unesco.org/en/artificial-intelligence"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNESCO
        </a>
        , the{' '}
        <a
          className="underline underline-offset-4"
          href="https://www.oecd.org/education/2030-project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OECD
        </a>{' '}
        Future of Education and Skills 2030 project, and the{' '}
        <a
          className="underline underline-offset-4"
          href="https://education.ec.europa.eu/focus-topics/digital-education/action-plan"
          target="_blank"
          rel="noopener noreferrer"
        >
          EU Digital Education Action Plan
        </a>
        .
      </>
    ),
    accent: 'secondary',
  },
  {
    title: 'UAE Data Protection Law (Federal Decree-Law No. 45 of 2021)',
    body: (
      <>
        Our consent flows, data-handling guidance, and approved-tools lists are being designed against the{' '}
        <a
          className="underline underline-offset-4"
          href="https://uaelegislation.gov.ae/en/legislations/1972"
          target="_blank"
          rel="noopener noreferrer"
        >
          UAE's Federal Decree-Law No. 45 of 2021
        </a>{' '}
        on the Protection of Personal Data as part of our partnership preparation. Formal compliance attestation follows legal review and implementation evidence.

      </>
    ),
    accent: 'secondary',
  },
];

const RecognitionAlignment = () => {
  return (
    <section id="recognition" className="bg-[#FBFAF6]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold text-[#011813] md:text-4xl">
            Recognition, accreditation, and alignment
          </h2>
          <p className="text-base text-[#4E5255] md:text-lg">
            The frameworks Humain Learning aligns to, and the partnership through which HumainChamps runs.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className={
                'rounded-2xl border-l-4 bg-white p-5 md:p-6 ' +
                (item.accent === 'primary' ? 'border-primary-color' : 'border-secondary-color')
              }
            >
              <h3
                className={
                  'text-lg font-semibold ' +
                  (item.accent === 'primary' ? 'text-[#91AA74]' : 'text-secondary-color')
                }
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#011813] md:text-base">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecognitionAlignment;
