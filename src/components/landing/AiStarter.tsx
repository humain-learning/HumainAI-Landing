'use client';
import React from 'react';
import { motion } from 'motion/react';

const cardsVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const cardYVariants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const AiStarter = () => {
  return (
    <section id="ai-starter-pack">
      <div className="relative bg-[#F8F8F8] px-6 md:px-0">
        <img
          className="absolute top-0 right-0 z-10"
          src="/assets/images/ai-starter-orage-fade.png"
          alt=""
        />
        <img
          className="absolute top-1/3 left-0 z-0"
          src="/assets/images/ai-starter-green-fade.png"
          alt=""
        />
        <div className="mx-auto w-full max-w-7xl py-10 md:py-16">
          <div className="text-center text-4xl font-semibold md:text-5xl">
            AI Tool Kit
          </div>
          <p className="mx-auto text-center text-[#4E5255]">
            We bring the best AI tools into one place <br />
            so you can learn, create, and explore without the overwhelm.
          </p>

          <div className="py-4 md:hidden md:py-0">
            <motion.div
              initial="hidden"
              whileInView="show"
              transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
              viewport={{ once: true, amount: 0.1 }} // fires earlier
              className="flex flex-col items-center justify-center gap-4"
            >
              {/* <motion.div
                className="shadow-orange w-full rounded-lg bg-white p-2"
                variants={cardsVariants}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                <img
                    className="max-w-[130px]"
                    src="/assets/images/midjourney.png"
                    alt=""
                />
                </motion.div> */}

              <motion.div
                variants={cardsVariants}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                className="shadow-green w-full space-y-2 rounded-lg bg-white p-4"
              >
                <img
                  className="w-[32px]"
                  src="/assets/icons/creativity-tools.svg"
                  alt=""
                />
                <div className="text-lg font-semibold md:text-2xl">
                  Creativity Tools
                </div>
                <div className="max-w-[266px] text-[#4E5255]">
                  Turn ideas into images, music, and stories with AI-powered
                  apps.
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* circle */}
          <div className="relative w-full py-6 md:py-16 overflow-hidden">
            <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center rounded-full border border-[#AAC191] bg-[#F1F8EB] sm:h-[400px] sm:w-[400px] lg:h-[640px] lg:w-[640px]">
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20, // adjust speed
                  ease: 'linear',
                }}
              >
                <motion.img
                  src="/assets/icons/product-5.svg"
                  // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                  className="absolute -top-6 left-10 w-16 md:top-0 md:left-30 lg:w-auto rotate-195"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                />
                <motion.img
                  src="/assets/images/tools/tool3.png"
                  // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                  className="absolute -top-4 right-10 w-14 md:top-10 md:right-20 lg:w-auto rotate-15"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                />
                <motion.img
                  src="/assets/images/tools/tool5.png"
                  // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                  className="absolute -right-0 bottom-6 w-12 md:right-20 md:bottom-10 lg:w-auto rotate-197"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                />
                <motion.img
                  src="/assets/images/tools/tool7.png"
                  // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                  className="absolute -right-6 bottom-[40%] w-12 md:-right-8 md:bottom-[40%] lg:w-auto rotate-15"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                />
                <motion.img
                  src="/assets/images/tools/tool9.png"
                  // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                  className="absolute bottom-[50%] -left-6 w-14 md:bottom-[50%] md:-left-8 lg:w-auto rotate-22"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                />
                <motion.img
                  src="/assets/images/tools/tool10.png"
                  // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                  className="absolute right-[50%] -bottom-4 w-12 md:bottom-[10%] md:left-8 lg:w-auto rotate-16"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                />
              </motion.div>

              <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#E9A772] bg-[#FFE5D0] sm:h-[320px] sm:w-[320px] lg:h-[535px] lg:w-[535px]">
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20, // adjust speed
                    ease: 'linear',
                  }}
                >
                  <motion.img
                    src="/assets/icons/product-1.svg"
                    className="absolute bottom-10 -left-6 w-14 md:top-20 md:-bottom-0 md:left-0 lg:w-auto -rotate-8"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                  <motion.img
                    src="/assets/images/tools/tool1.png"
                    className="absolute -bottom-2 left-[10%] w-12 md:-top-10 md:-bottom-0 md:left-[40%] lg:w-auto rotate-14"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                  <motion.img
                    src="/assets/images/tools/tool4.png"
                    // className="absolute -top-6 right-10 w-10 sm:w-14 lg:w-auto"
                    className="absolute -right-5 bottom-16 w-14 md:-right-5 md:bottom-30 lg:w-auto rotate-16"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                  <motion.img
                    src="/assets/icons/product-2.svg"
                    className="absolute top-5 -right-4 w-14 md:top-50 md:-right-8 lg:w-auto"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                  <motion.img
                    src="/assets/icons/product-3.svg"
                    className="absolute top-0 bottom-20 w-14 md:top-[60%] md:-left-8 lg:w-auto rotate-15"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                  <motion.img
                    src="/assets/images/tools/tool6.png"
                    className="absolute right-0 -bottom-0 hidden w-14 md:right-[70%] md:-bottom-0 md:block lg:w-auto rotate-16"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                  <motion.img
                    src="/assets/images/tools/tool8.png"
                    className="absolute right-0 -bottom-0 hidden w-16 md:right-50 md:-bottom-8 md:block lg:w-auto rotate-16"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                <div className="relative mx-auto flex h-[160px] w-[160px] items-center justify-center rounded-full border border-[#AAC191] bg-[#DAE5CF] sm:h-[240px] sm:w-[240px] lg:h-[410px] lg:w-[410px]">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20, // adjust speed
                      ease: 'linear',
                    }}
                  >
                    <motion.img
                      src="/assets/images/tools/tool2.png"
                      className="absolute -bottom-6 left-10 w-14 md:top-0 md:-bottom-0 md:left-[70%] lg:w-auto -rotate-28"
                      animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                    />
                    <motion.img
                      src="/assets/images/tools/tool11.png"
                      className="absolute -top-0 right-8 w-10 md:right-[70%] md:bottom-8 lg:w-auto"
                      animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: 'linear',
                    }}
                    />
                  </motion.div>
                  <img
                    src="/assets/images/logo.png"
                    className="w-24 bg-[#DAE5CF] sm:w-20 lg:w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:inline-flex">
              <motion.div
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
                viewport={{ once: true, amount: 0.1 }} // fires earlier
              >
                {/* <motion.div
                    className="shadow-orange absolute top-[15%] left-[10%] rounded-lg bg-white p-2"
                    variants={cardsVariants}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <img
                    className="max-w-[186px]"
                    src="/assets/images/midjourney.png"
                    alt=""
                    />
                </motion.div> */}

                <motion.div
                  variants={cardsVariants}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                  className='className="shadow-green absolute top-[45%] left-0 space-y-2 rounded-lg bg-white p-4'
                >
                  <img
                    className="w-[32px]"
                    src="/assets/icons/creativity-tools.svg"
                    alt=""
                  />
                  <div className="text-2xl font-semibold">Creativity Tools</div>
                  <div className="max-w-[266px] text-[#4E5255]">
                    Turn ideas into images, music, and stories with AI-powered
                    apps.
                  </div>
                </motion.div>

                <motion.div
                  variants={cardYVariants}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
                  className="shadow-green absolute top-[15%] right-[3%] space-y-2 rounded-lg bg-white p-4"
                >
                  <img
                    className="w-[32px]"
                    src="/assets/icons/creativity-tools.svg"
                    alt=""
                  />
                  <div className="text-2xl font-semibold">No-Code Builders</div>
                  <div className="max-w-[266px] text-[#4E5255]">
                    Design websites, apps, and automations no coding required.
                  </div>
                </motion.div>

                {/* <motion.div
                    variants={cardYVariants}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
                    className="shadow-green absolute top-[55%] right-[3%] space-y-2 rounded-lg bg-white p-4"
                >
                    <img
                    className="w-[32px]"
                    src="/assets/icons/productivity.svg"
                    alt=""
                    />
                    <div className="text-2xl font-semibold">
                    Productivity Boosters
                    </div>
                    <div className="max-w-[266px] text-[#4E5255]">
                    Learn how AI helps with homework, research, and smarter study
                    hacks.
                    </div>
                </motion.div> */}
              </motion.div>
            </div>
          </div>

          <div className="py-4 md:hidden">
            <motion.div
              initial="hidden"
              whileInView="show"
              transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
              viewport={{ once: true, amount: 0.1 }} // fires earlier
              className="flex flex-col items-center justify-center gap-4"
            >
              <motion.div
                variants={cardYVariants}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
                className="shadow-green w-full space-y-2 rounded-lg bg-white p-4"
              >
                <img
                  className="w-[32px]"
                  src="/assets/icons/creativity-tools.svg"
                  alt=""
                />
                <div className="text-lg font-semibold md:text-2xl">
                  No-Code Builders
                </div>
                <div className="max-w-[266px] text-[#4E5255]">
                  Design websites, apps, and automations no coding required.
                </div>
              </motion.div>

              <motion.div
                variants={cardYVariants}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
                className="shadow-green w-full space-y-2 rounded-lg bg-white p-4"
              >
                <img
                  className="w-[32px]"
                  src="/assets/icons/productivity.svg"
                  alt=""
                />
                <div className="text-lg font-semibold md:text-2xl">
                  Productivity Boosters
                </div>
                <div className="max-w-[266px] text-[#4E5255]">
                  Learn how AI helps with homework, research, and smarter study
                  hacks.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiStarter;
