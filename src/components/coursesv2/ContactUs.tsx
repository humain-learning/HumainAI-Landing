'use client';
import { useState } from 'react';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        parentFirstName: '',
        parentLastName: '',
        childFirstName: '',
        childLastName: '',
        mobileNo: '',
        email: '',
        childGrade: '',
        city: '',
        message: '',
    });

    // loading / feedback state
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
        // Remove ALL references to process.env.NEXT_PUBLIC_FRAPPE_* and the API token generation.
        
        // 1. Prepare the payload (client-side data)
        const payload = {
            // Note: We use simpler, client-side field names here
            parentFirstName: formData.parentFirstName,
            parentLastName: formData.parentLastName,
            childFirstName: formData.childFirstName,
            childLastName: formData.childLastName,
            mobileNo: formData.mobileNo,
            email: formData.email,
            childGrade: formData.childGrade,
            city: formData.city,
            custom_message: formData.message,
            source: 'Website Form'
        };

        // 2. Call your internal, secure App Router API route
        // The endpoint URL is /api/send-lead
        const res = await fetch('/api/submit-lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            // Get the error message from the JSON response provided by the server
            const error = await res.json();
            throw new Error(error.message || `Submission failed with status ${res.status}`);
        }

        setStatusMessage('Thank you for reaching out! We\'ve received your request and will be in touch with you soon.');
        
        // optional: reset form
        setFormData({
            parentFirstName: '',
            parentLastName: '',
            childFirstName: '',
            childLastName: '',
            mobileNo: '',
            email: '',
            childGrade: '',
            city: '',
            message: '',
        });

    } catch (err: any) {
        setStatusMessage('An unknown error has occurred. Please try again later or reach out to us directly via Phone or Email.');
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="flex w-[90vw] bg-white rounded-lg mx-auto py-10 items-start justify-between">
            {/* Left Column */}
            <div className="flex px-6 flex-col w-[40%]">
                <h1 className='text-6xl font-semibold text-start px-6 py-10'>
                    <span className="text-sage">Contact Us</span>

                </h1>
                <hr className="w-1/4  border-t-4 border-terracotta mx-6 mb-10" />
                <div className='flex flex-col gap-'>
                <div className='flex items-center justify-start px-6'>
                    <img src='/assets/Website Assets/Call.svg' className="scale-70" />
                    <span className='text-2xl font-medium ml-4'>+91 81300 23688</span>
                </div>
                <div className='flex items-center justify-start px-6'>
                    <img src='/assets/Website Assets/Mail.svg' className="scale-70" />
                    <span className='text-2xl font-medium ml-4'>hi@humainlearning.ai</span>
                </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex w-[40%] pr-40">
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    {/* Parent and Child Name Row */}
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            name="childFirstName"
                            placeholder="Child First Name"
                            value={formData.childFirstName}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        />
                        <input
                            type="text"
                            name="childLastName"
                            placeholder="Child Last Name"
                            value={formData.childLastName}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            name="parentFirstName"
                            placeholder="Parent First Name"
                            value={formData.parentFirstName}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        />
                        <input
                            type="text"
                            name="parentLastName"
                            placeholder="Parent Last Name"
                            value={formData.parentLastName}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        />
                    </div>

                    {/* Mobile No and Email Row */}
                    <div className="flex space-x-4">
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="Mobile No."
                            value={formData.mobileNo}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        />
                    </div>

                    <div className="flex space-x-4">
                        <select
                            name="childGrade"
                            value={formData.childGrade}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            required
                        >
                            <option value="">Select Child's Grade</option>
                            <option value="7">Grade 7th</option>
                            <option value="8">Grade 8th</option>
                            <option value="9">Grade 9th</option>
                            <option value="10">Grade 10th</option>
                            <option value="11">Grade 11th</option>
                            <option value="12">Grade 12th</option>
                        </select>
                        <input 
                            type='city'
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="flex-1 p-4 border-b-2 focus:outline-none focus:ring-0 text-base"
                            
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 border-b-2 focus:outline-none focus:ring-0 h-32 resize-none text-base"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-4 bg-sage text-white rounded-lg font-semibold hover:bg-blue-700 transition text-base disabled:opacity-60"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {statusMessage && (
                        <p className="text-sm mt-2 px-1 text-gray-700">{statusMessage}</p>
                    )}
                </form>
            </div>
        </div>
    );
};
