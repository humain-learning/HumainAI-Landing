const AIFramework = () => {
  return (
    <div className="">
      <div className="md:pt-14" />
      <div className="relative py-0 md:py-24">
        <img
          className="absolute -top-24 left-0"
          src="/assets/images/central-left-fade.png"
          alt=""
        />
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 pt-32 text-[#011813] md:px-0">
          <div className="relative">
            <div className="absolute bottom-0 -left-6 -z-10 h-[300px] w-[100%] sm:h-[400px] sm:w-[600px] md:-bottom-36 md:-left-20 md:h-[600px] md:w-[840px] md:object-contain">
              <img
                src="/assets/images/bg-framework.png"
                alt=""
                className="relative h-full w-full object-contain md:object-contain"
              />
            </div>
            <div
              style={{
                boxShadow: '0 0 0 1px rgba(0,0,0,0.1) inset',
              }}
              className="h-full w-full max-w-[710px] space-y-2 rounded-2xl bg-white px-4 py-5 md:px-5"
            >
              <h3 className="text-left text-2xl font-semibold sm:text-3xl md:text-4xl">
                Humain AI Literacy Framework
              </h3>
              <p className="text-base font-light text-black sm:text-lg">
                At Humain Learning, we believe that AI literacy is not just
                about tools, it is about nurturing thinkers, creators, and
                responsible humans. Drawing on international frameworks such as
                OECD, the European Commission’s AI Literacy Framework, and
                UNESCO’s AI Competencies, we have crafted a uniquely
                human-centered approach: the Humain AI Literacy Framework.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 md:pb-14" />
    </div>
  );
};

export default AIFramework;
