import React, { useState, FormEvent, useRef } from "react";
import {useSelector} from "react-redux";

interface OtpProps {
    onSubmit: () => void;
    resendOtp: () => void;
    setLocalData: React.Dispatch<React.SetStateAction<object>>;
    localData: object;
}

const Otp: React.FC<OtpProps> = ({ onSubmit, resendOtp, setLocalData, localData }) => {
    const error = useSelector((state: any) => state.auth.error);
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your logic here to validate OTP
        // For now, assume OTP is valid and proceed to the next step
        onSubmit();
    };

    const setOTPState = (value: string[]) => {
        const otpNumber = value.join(''); // combine otp values
        setLocalData({ ...localData, otp: otpNumber });
    }
    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        // @ts-ignore
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('Text').trim();
        const digits = pastedData.split('').slice(0, 4); // Only take the first 4 characters

        const updatedOtp = [...otp];
        digits.forEach((digit, index) => {
            updatedOtp[index] = digit;
        });
        setOTPState(updatedOtp);
        setOtp(updatedOtp);
    };

    const handleChange = (index: number, value: string) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
        setOTPState(updatedOtp);

        if (value && index < refs.length - 1) {
            refs[index + 1].current?.focus();
        }
    };

    const handleKeyUp = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        if (!value && index > 0 && event.key === 'Backspace') {
            refs[index - 1].current?.focus();
        }
    };

    return (
        <div className="bg-white py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='flex justify-between '>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyUp={(e) => handleKeyUp(index, e)}
                            onPaste={handlePaste}
                            ref={refs[index]}
                            className='w-[71px] h-[71px] border border-[#D2D1D1] rounded-[5px] shadow-2xl text-black flex items-center justify-center text-[30px] font-semibold text-center'
                        />
                    ))}
                </div>
                <button
                    type="button"
                    onClick={resendOtp}
                    className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-[#5871EB] "
                >
                    Resend OTP
                </button>

                <div>
                    {error && <div className="text-red-500 mb-2">{error}</div>}
                    <button
                        type="submit"
                        className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#5871EB] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Verify
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Otp;
