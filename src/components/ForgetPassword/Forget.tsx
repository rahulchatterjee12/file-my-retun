import React, { useState, FormEvent } from "react";
import {useSelector} from "react-redux";

interface ForgetProps {
    onSubmit: () => void;
    setLocalData: React.Dispatch<React.SetStateAction<object>>;
    localData: object;
}

const Forget: React.FC<ForgetProps> = ({ onSubmit, setLocalData, localData }) => {
    const error = useSelector((state: any) => state.auth.error);

    const [email, setEmail] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        setLocalData({ ...localData, email: value }); // Update localData with the new email value
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your logic here to validate email
        // For now, assume email is valid and proceed to the next step
        onSubmit();
    };

    return (
        <div className="bg-white py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-[16px] font-medium text-[#696F79]">
                        Email address*
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder='Enter your email address'
                            required
                            value={email}
                            onChange={handleChange} // Use handleChange to update localData with email
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#666666] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    {error && <div className="text-red-500 mb-2">{error}</div>}
                    <button
                        type="submit"
                        className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#5871EB] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Reset password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Forget;
