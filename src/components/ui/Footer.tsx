import React from 'react';
import Link from 'next/link';
const OTHER_LINKS = [
  'Mentors',
  'Blog',
  '404',
  'Privacy Policy',
  'Terms & Conditions',
];

const Footer = () => {
  return (
    <div className="text-[#011813]">
      <div className="mx-auto w-full max-w-7xl px-8 pt-10 pb-5 md:px-10 md:pt-16">
        <div className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-5">
          {/* left container */}
          <div className="col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 -ml-5 -mb-1">
                <img
                  className="h-30"
                  src="/assets/logo/brain-logo-black.png"
                  alt="Humain AI"
                />
                {/* <div className="text-xl font-semibold">HUMAIN AI</div> */}
              </div>
              <p className="w-full max-w-3xs text-base font-normal text-[#4E5255]">
                Unlock knowledge with expert-led online courses.
              </p>
            </div>

            {/* <div className="space-y-4">
              <h6 className="text-xl font-semibold">Stay connected</h6>
              <div>
                <img src="/assets/icons/social-media-icons.svg" />
              </div>
            </div> */}
          </div>

          {/* right container */}
          <div className="col-span-3 w-full">
            <div className="flex flex-col items-start justify-end gap-4 lg:flex-row">
              {/* <div className="flex flex-col gap-5">
                <h6 className="text-2xl font-semibold">Pages</h6>
                <div className="flex flex-col gap-5">
                  {[...new Array(5)].map((item, i) => (
                    <p key={i} className="cursor-pointer text-base font-normal">
                      Home
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h6 className="text-2xl font-semibold">Others</h6>
                <div className="flex flex-col gap-5">
                  {OTHER_LINKS?.map((item, i) => (
                    <p key={i} className="cursor-pointer text-base font-normal">
                      {item}
                    </p>
                  ))}
                </div>
              </div> */}

              <div className="flex flex-col gap-5">
                <h6 className="text-2xl font-semibold">Connect on Whatsapp</h6>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-2">
                    <img className="" src="/assets/icons/phone.svg" alt="" />
                    <p className="cursor-pointer text-base font-normal">
                      +91 8130023688
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <img className="" src="/assets/icons/email.svg" alt="" />
                    <p className="cursor-pointer text-base font-normal">
                      hi@humainlearning.ai
                    </p>
                  </div>

                  {/* <div className="flex items-start gap-2">
                    <img className="" src="/assets/icons/location.svg" alt="" />
                    <p className="w-full max-w-[230px] cursor-pointer text-base font-normal">
                      4886 Stroman Drives, California, South Stanton, USA
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[1px] w-full"
          style={{
            background:
              'radial-gradient(circle, rgba(1, 24, 19, 1) 0%, rgba(0,255,150,0) 80%)',
          }}
        />

        <div className="pt-8 flex flex-row items-center justify-between">
          <p className="text-base flex font-normal">
            2025 © HumainAI . All rights reserved. Operated by Eduxa Consulting.
          </p>
          <Link href="/privacy-policy" className='font-normal text-base mr-20'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
