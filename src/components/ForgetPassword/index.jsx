import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Forget from "./Forget";
import Otp from "./Otp";
import Password from "./Password";
import {
    forgetPassword,
    forgetPasswordStepUpdate,
    getCompanyDetailData,
} from "@/redux/actions/auth/authActions";

const textData = {
    step1: {
        mainHeading: 'Step 1 / 3',
        subHeading: 'Enter your registered email to receive OTP',
    },
    step2: {
        mainHeading: 'Step 2 / 3',
        subHeading: 'Enter the OTP sent to your email or mobile',
    },
    step3: {
        mainHeading: 'Step 3 / 3',
        subHeading: 'Create a new password for your account',
    },
};



const ForgetPassword = ({id}) => {
    const dispatch = useDispatch();
    const [localData, setLocalData] = useState({
        email: '',
        otp: undefined,
        password: null,
        confirmPassword: null
    });
    const { login, error, account_id, forgetStep, companyDetails } = useSelector((state) => state.auth);
    console.log('forgetStep', login, forgetStep, error, account_id);
    const [step, setStep] = useState(1);
    const handleForgetPassword = async () => {
        // @ts-ignore
        dispatch(forgetPassword(1, localData.email, "", "", ""));
        setStep(2);
    };

    const handleVerifyOTP = async () => {
        // @ts-ignore
        console.log(2, "", account_id, parseInt(localData.otp), "");
        try {
            // @ts-ignore
            dispatch(forgetPassword(2, "", account_id, parseInt(localData.otp), ""));
            setStep(3);
        } catch (error) {
            alert(error); // Display error message to the user
        }
    };

    const handleResetPassword = async () => {
        try {
            // @ts-ignore
            if (localData.password === localData.newPassword){
                // @ts-ignore
                dispatch(forgetPassword(3, "", account_id, parseInt(localData.otp), localData.password), id);
                // @ts-ignore
                //dispatch(forgetPasswordStepUpdate(1));
            }else {
                //toast alert new password and confirm password won't match
            }
        } catch (error) {
            alert(error); // Display error message to the user
        }
    };

    useEffect(() => {
        if (id){
            dispatch(getCompanyDetailData(id));
        }
    }, [dispatch, id]);

    const imageUrl = companyDetails?.logo ? `${process.env.NEXT_PUBLIC_S3_ENDPOINT}/${companyDetails?.logo}` : null;

    return (
        <div className="max-w-[1140px] 2xl:max-w-[1320px] px-3 lg:px-10 xl:px-0 mx-auto">
            <div className="md:flex justify-between items-center">
            <div className="w-full md:w-[40%] lg:w-[62%] mt-6" data-aos="fade-left" data-aos-delay="900">
                    <Image
                        src="/assets/images/register.png"
                        alt="logo"
                        layout="responsive"
                        width={835}
                        height={557}
                    />
                </div>
                <div className='md:w-[35%] lg:w-[25%] w-full" data-aos="fade-right" data-aos-delay="800'>
                    {
                        imageUrl &&
                        <Image
                            className="mb-4"
                            src={imageUrl}
                            alt="logo"
                            width={150} 
                            height={150}
                        />
                    }
                    <h1 className='text-black text-[30px] font-semibold pb-5'>{textData[`step${step}`].mainHeading}</h1>
                    <p className='text-black text-[18px] font-normal'>
                        {textData[`step${step}`].subHeading}
                    </p>
                    <div className="">
                        {(step === 1 || step === undefined) && (
                            <Forget
                                onSubmit={() => handleForgetPassword()}
                                setLocalData={setLocalData}
                                localData={localData}
                            />
                        )}

                        {step === 2 && (
                            <Otp
                                onSubmit={() => handleVerifyOTP()}
                                resendOtp={() => handleForgetPassword()}
                                setLocalData={setLocalData}
                                localData={localData}
                            />
                        )}
                        {step === 3 && (
                            <Password
                                onSubmit={() => handleResetPassword()}
                                setLocalData={setLocalData}
                                localData={localData}
                            />
                        )}
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default ForgetPassword;
