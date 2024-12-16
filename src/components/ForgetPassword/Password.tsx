import React, { useState, FormEvent } from "react";
import {useSelector} from "react-redux";

interface PasswordProps {
    onSubmit: () => void;
    setLocalData: React.Dispatch<React.SetStateAction<object>>;
    localData: object;
}

const Password: React.FC<PasswordProps> = ({ onSubmit, setLocalData, localData }) => {
    const error = useSelector((state: any) => state.auth.error);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocalData({ ...localData, [name]: value }); // Update localData with the new value
    };

    return (
        <div className="bg-white py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password" className="block text-[16px] font-medium text-[#696F79]">
                        New password*
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            placeholder='Enter new password'
                            required
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="newPassword" className="block text-[16px] font-medium text-[#696F79]">
                        Confirm password*
                    </label>
                    <div className="mt-1">
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            autoComplete="password"
                            placeholder='Confirm new password'
                            required
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    {error && <div className="text-red-500 mb-2">{error}</div>}
                    <button
                        type="submit"
                        className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#5871EB] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Change password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Password;
