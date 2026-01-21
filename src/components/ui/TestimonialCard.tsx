interface TestimonialCardProps {
  index: number;
  name: string;
  about: string;
  quote: string;
}

export const TestimonialCard = ({ name, about, quote, index}: TestimonialCardProps) => {
  const bordercolor = index % 2 === 0 ? 'border-sage' : 'border-terracotta';
  const textcolor = index % 2 === 0 ? 'text-terracotta' : 'text-sage';
  return (
    
    <div className={`bg-white rounded-2xl shadow-md p-6 md:p-8 ${bordercolor} border h-full flex flex-col justify-between`}>
      <div className="mb-4 text-gray-700 italic leading-relaxed">
        “{quote}”
      </div>

      <div className="mt-auto flex flex-col">
        <span className={`font-semibold ${textcolor} leading-tight`}>
          {name}
        </span>
        <span className="text-sm text-gray-500">
          {about}
        </span>
      </div>
    </div>
  );
};
