import { cn } from '@/utils';
import PrimaryButton from '@/components/ui/PrimaryButton';

const STUDENTS_LIST = [
  {
    name: 'Name of Student',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    name: 'Name of Student',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    name: 'Name of Student',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    name: 'Name of Student',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const ProductShowcase = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-7 pb-10 text-[#011813]">
      <div className="flex items-center justify-between py-6">
        <h3 className="w-fit text-5xl font-semibold">Product Showcase</h3>
        <div className="shrink-0">
          <PrimaryButton text="All Products" target=''/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 cursor-pointer space-y-8">
          <div className="h-full max-h-[390px] w-full overflow-hidden rounded-xl">
            <img
              className="w-full overflow-hidden rounded-xl"
              src="/assets/images/blog-image.png"
              alt=""
            />
          </div>

          <div>
            <p className="text-base font-normal text-[#4E5255]">
              Name of Student
            </p>
            <div className="space-y-3">
              <h6 className="text-2xl font-semibold">
                Lorem ipsum dolor sit amet consectetur. Est risus sit dictum
                fringilla duis nisl dis.{' '}
              </h6>
              <p className="text-base font-normal text-[#4E5255]">
                Lorem ipsum dolor sit amet consectetur. Vulputate sociis in sed
                tellus. Sed morbi luctus gravida massa consequat aliquam
                pharetra turpis lorem. Eleifend in id eget vel. Magna amet et
                varius augue. Quam purus orci id.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-6">
            {STUDENTS_LIST?.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div
                  className={cn(
                    'h-[188px] w-full cursor-pointer rounded-xl',
                    idx % 2 !== 0 ? 'bg-primary-color' : 'bg-secondary-color'
                  )}
                />

                <div className="space-y-1">
                  <p className="text-base font-normal text-[#4E5255]">
                    {item?.name}
                  </p>
                  <h6 className="text-xl font-medium">{item?.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
