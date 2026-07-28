type Pillar = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type PillarsDesktopProps = {
  pillars: Pillar[];
};

const PillarsDesktop = ({ pillars }: PillarsDesktopProps) => {
  return (
    <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
      {pillars.map((pillar) => {
        return (
          <div
            key={pillar.id}
            className="flex min-h-[280px] flex-col items-center text-center"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white p-2 shadow-inner">
              <img src={pillar.image} alt="" className="h-full w-full rounded-full object-contain" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#E9A772]">
              {pillar.title}
            </h3>
            <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-[#4E5255]">
              {pillar.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PillarsDesktop;
