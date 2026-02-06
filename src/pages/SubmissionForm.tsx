import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'

export default function SubmissionForm() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
        })
        alert('sign up successful');

        navigate("/");
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
        })
    }

    return (
        <>
            <div className="min-h-screen items-center bg-gray-50 py-10">
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto border border-gray-200 p-6 rounded-md shadow-md">
                    <h1 className="font-medium uppercase mb-6 text-center">Form in react</h1>

                    <FormInput labelName="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <FormInput labelName="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <FormInput labelName="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
                    <FormInput labelName="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />

                    <div className='mb-6'>
                        <label className="block text-sm text-gray-500">Gender&nbsp;<span className="text-red-500">*</span></label>
                        <div className='flex gap-6 justify-center'>
                            <div className='flex items-center mb-4'>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={handleChange}
                                    className="mr-2" required/>
                                <label htmlFor="male" className="text-sm">Male</label>
                            </div>
                            <div className='flex items-center mb-4'>
                                <input
                                    type="radio"
                                    name='gender'
                                    value="female"
                                    onChange={handleChange}
                                    className="mr-2" required/>
                                <label htmlFor="female" className="text-sm">Female</label>
                            </div>
                            <div className='flex items-center mb-4'>
                                <input
                                    type="radio"
                                    name='gender'
                                    value="other"
                                    onChange={handleChange}
                                    className="mr-2" required/>
                                <label htmlFor="other" className="text-sm">Other</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full text-white hover:text-black bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-400 focus:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}