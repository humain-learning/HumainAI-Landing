'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const ContactUsModal = ({ onClose }: { onClose: () => void }) => {
    const router = useRouter();
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
            const payload = {
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

            const res = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || `Submission failed with status ${res.status}`);
            }

            const data = await res.json();

            if (data.redirect) {
                router.push(data.redirect);
            } else {
                setStatusMessage('Thank you for reaching out! We\'ve received your request and will be in touch with you soon.');
            }
            
            // reset form
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
        <div id='contact-us' className="flex flex-col lg:flex-row w-full bg-white rounded-lg mx-auto py-5 items-start justify-between">
            {/* Left Column */}
            <div className="flex px-3 md:px-6 flex-col w-full lg:w-[45%] mb-8 lg:mb-0">
                <h1 className='text-4xl md:text-5xl font-semibold text-start py-5'>
                    <span className="text-sage">Contact Us</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 border-t-4 border-terracotta mb-6" />
                <div className='flex w-full flex-col'>
                    <div className='w-full flex items-center justify-start gap-5 py-4'>
                        <img src='/assets/Website Assets/Call.svg' className="w-12 h-12" alt="Call icon" />
                        <span className='text-lg md:text-xl font-medium'>+91 81300 23688</span>
                    </div>
                    <div className='w-full flex items-center justify-start gap-5 py-4'>
                        <img src='/assets/Website Assets/Mail.svg' className="w-12 h-12" alt="Mail icon" />
                        <span className='text-lg md:text-xl font-medium'>hi@humainlearning.ai</span>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex w-full lg:w-[55%] lg:pl-6">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 w-full px-3 md:px-0">
                    {/* Child Name Row */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            name="childFirstName"
                            placeholder="Child First Name"
                            value={formData.childFirstName}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                            required
                        />
                        <input
                            type="text"
                            name="childLastName"
                            placeholder="Child Last Name"
                            value={formData.childLastName}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                        />
                    </div>
                    {/* Parent Name Row */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            name="parentFirstName"
                            placeholder="Parent First Name"
                            value={formData.parentFirstName}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                            required
                        />
                        <input
                            type="text"
                            name="parentLastName"
                            placeholder="Parent Last Name"
                            value={formData.parentLastName}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                        />
                    </div>

                    {/* Mobile No and Email Row */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="Mobile No."
                            value={formData.mobileNo}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                            required
                        />
                    </div>

                    {/* Grade and City Row */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <select
                            name="childGrade"
                            value={formData.childGrade}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base bg-white"
                            required
                        >
                            <option value="" className='text-[#999999]'>Select Child's Grade</option>
                            <option value="8">Grade 8th</option>
                            <option value="9">Grade 9th</option>
                            <option value="10">Grade 10th</option>
                            <option value="11">Grade 11th</option>
                            <option value="12">Grade 12th</option>
                        </select>
                        <input 
                            type='text'
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="flex-1 p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 text-base"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border-b-2 border-gray-200 focus:border-sage focus:outline-none focus:ring-0 h-24 resize-none text-base"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-3 bg-sage text-white rounded-lg font-semibold hover:bg-[#91af70] hover:text-white transition text-base disabled:opacity-60 cursor-pointer"
                    >
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                    {statusMessage && (
                        <p className="text-sm mt-2 px-1 text-gray-700">{statusMessage}</p>
                    )}
                </form>
            </div>
        </div>
    );
};
