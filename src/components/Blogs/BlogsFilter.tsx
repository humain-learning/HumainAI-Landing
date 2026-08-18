'use client';

type BlogsFilterProps = {
  selected: string;
  onSelect: (category: string) => void;
  categories: string[];
};

const BlogsFilter = ({ selected, onSelect, categories }: BlogsFilterProps) => {
  const options = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((category) => {
        const isActive = selected === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-[#7A9B6E] text-white'
                : 'border border-gray-200 bg-white text-[#171717] hover:border-gray-300'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default BlogsFilter;