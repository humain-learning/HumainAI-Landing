import { Star } from 'lucide-react';
import Script from 'next/script';
import PrimaryButton from 'ui/PrimaryButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const CourseHeader = () => {
  // The brochure is in the public folder, so the route is correct as '/brochure/Humain Learning - Brochure.pdf'
  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/brochure/Humain Learning - Brochure.pdf'; // public folder route
    link.download = 'Humain Learning - Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState<null | {
    name: string;
    email: string;
    contact: string;
  }>(null);
  const router = useRouter();

  // This function is called when the popup form is submitted
  // const handlePopupSubmit = async (user: { name: string; email: string; contact: string }) => {
  //   setUserDetails(user);
  //   setLoading(true);

  //   // Optionally, store user details to backend here
  //   // await fetch('/api/store-user', { ... })

  //   try {
  //     // Create order on backend
  //     const orderResponse = await fetch('/api/order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         amount: '50000', // Amount in paise (500.00 INR)
  //         currency: 'INR',
  //       }),
  //     });

  //     const orderData = await orderResponse.json();
  //     console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, "process.env.RAZORPAY_KEY_ID");
  //     // Razorpay options with prefill
  //     const options = {
  //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ,
  //       amount: '50000',
  //       currency: 'INR',
  //       order_id: orderData.orderId,
  //       handler: async function (response: any) {
  //         // Optionally, verify payment on backend
  //         const verifyResponse = await fetch('/api/verify', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             orderCreationId: orderData.orderId,
  //             razorpayPaymentId: response.razorpay_payment_id,
  //             razorpaySignature: response.razorpay_signature,
  //             user, // send user details for record
  //           }),
  //         });

  //         const verifyData = await verifyResponse.json();

  //         if (verifyData.isOk) {
  //           alert('Payment Successful!');
  //           setShowPopup(false);
  //           // Redirect or update UI
  //         } else {
  //           alert('Payment verification failed!');
  //         }
  //       },
  //       prefill: {
  //         name: user.name,
  //         email: user.email,
  //         contact: user.contact,
  //       },
  //       theme: {
  //         color: '#3399cc',
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);

  //     rzp.on('payment.failed', function (response: any) {
  //       alert('Payment Failed: ' + response.error.description);
  //     });

  //     rzp.open();
  //   } catch (error) {
  //     console.error('Payment error:', error);
  //     alert('Something went wrong!');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="h-fit w-full rounded-2xl bg-white px-5 pt-5 pb-7">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="flex flex-col gap-y-3 pb-4">
        <div className="flex items-center gap-1 text-[#999999]">
          <p>Home</p>
          <span className="text-[#E2E0DB]">/</span>
          <p>All course</p>
        </div>
        <h3 className="text-4xl font-semibold text-[#333333]">
          Is Your Child Ready for the AI Age?
        </h3>
        <div className="flex w-full flex-col gap-y-1.5">
          <div className="flex flex-wrap items-center gap-5">
            {/* <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                {[...new Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    fill="#E69D67"
                    className="size-4 text-[#E69D67]"
                  />
                ))}
              </div>
              <p className="text-sm font-normal text-[#333333]">4.8</p>
              <p className="text-secondary-color text-sm font-normal">(280)</p>
            </div> */}
            <div>
              <p className="text-primary-color text-base font-semibold">
                {/* Available Seats: 150 Only */}
                Limited Seats available
              </p>
            </div>

            <div className="h-4 w-[1px] bg-[#DDDDDD]" />

            <div>
              <p className="text-primary-color text-base font-semibold">
                Batches start from 19th Nov
              </p>
            </div>

            <div className="h-4 w-[1px] bg-[#DDDDDD]" />
            <div>
              <p className="text-primary-color flex items-center gap-1 text-base font-semibold">
                INR{' '}
                <span className="align-middle text-3xl font-bold">11,800</span>{' '}
                + incl. GST
              </p>
            </div>
          </div>
          {/* <p className="text-primary-color text-base font-semibold">
            Launching 3 Batches of 50 students each
          </p> */}
        </div>

        <p className="text-base text-[#00000099]">
          <span className="font-semibold text-[#000000]">
            Don't just teach them to use AI. Teach them to lead with it.
          </span>
          <br />
          The future isn't about humans versus machines. It's about humans
          empowered by machines. Our AI Champs Program is a transformative
          6-module journey for students aged 13+, designed to nurture critical
          thinkers, responsible creators, and confident leaders for an AI-driven
          world
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-2 pt-4 md:flex-row">
        <PrimaryButton
          onClick={() => router.push(`https://pages.razorpay.com/humainchamps`)}
          text="Enroll Now"
          target=''
        />

        <button
          type="button"
          onClick={handleDownloadBrochure}
          className="flex items-center gap-2 rounded-full border-2 py-1 pr-1 pl-4"
        >
          Download the brochure
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black">
            <img
              className="w-6"
              src="/assets/icons/arrow-top-right.svg"
              alt=""
            />
          </div>
        </button>
      </div>
      {/* <PopupModal
        isOpen={showPopup}
        onClose={() => {
          setShowPopup(false);
          setLoading(false);
        }}
        onSubmit={handlePopupSubmit}
        loading={loading}
      /> */}
    </section>
  );
};
