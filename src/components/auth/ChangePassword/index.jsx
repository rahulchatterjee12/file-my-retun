import React, {useState} from 'react';
import Image from "next/image";
import {useSelector, useDispatch} from 'react-redux';
import ViewDetail from './ViewDetail';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import {changePassword, changeEmail, getLogout} from '@/redux/actions/auth/authActions';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
const initialEmailData = {
    password: '',
    newEmail: ''
};

const initialPasswordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
};

const Setting = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {user, emailError, passwordError} = useSelector((state) => state.auth);
    const {name, email} = user;

    const [localEmailData, setLocalEmailData] = useState(initialEmailData);
    const [localPasswordData, setLocalPasswordData] = useState(initialPasswordData);

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        if (!localEmailData.newEmail) {
            toast.error("Please Enter New Email!");
            return;
        }

        if (localEmailData.newEmail === email) {
            toast.error("Please enter different Email Id!");
            return;
        }

        if (!localEmailData.password) {
            toast.error("Please Enter Old Password!");
            return;
        }

        console.log(localEmailData.password, localEmailData.newEmail);
        // @ts-ignore
        const submit = await dispatch(changeEmail(localEmailData.password, localEmailData.newEmail));
        console.log('submit', submit);
        const {rsp, errorMessage} = submit;
        if (rsp) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Email Updated Successfully',
                confirmButtonText: 'OK'
            });
            // @ts-ignore
            const isSuccess = dispatch(getLogout());
            if (isSuccess) {
                //location.href = '/auth';
                // Redirect to the authentication page
                router.push("/auth");
            } else {
                Swal.fire('An error occurred while logging out');
            }
        } else {
            toast.error(String(errorMessage));
        }
    };

    const handleSubmitPassword = async (e) => {
        e.preventDefault();
        if (!localPasswordData.oldPassword) {
            toast.error("Old Password required!");
            return;
        }

        if (!localPasswordData.newPassword ) {
            toast.error("Please Enter New Password ");
            return;
        }

        if (!localPasswordData.confirmPassword) {
            toast.error("Please Enter Confirm Password!");
            return;
        }

        if (localPasswordData.newPassword !== localPasswordData.confirmPassword) {
            toast.error("Passwords do not match!");
            console.error("Passwords do not match");
            return;
        }

        if (localPasswordData.newPassword === localPasswordData.oldPassword) {
            toast.error("Passwords Old new same!");
            console.error("Passwords do not match");
            return;
        }
        console.log(localEmailData.password, localEmailData.newEmail);
        // @ts-ignore
        const submit = await dispatch(changePassword(localPasswordData.oldPassword, localPasswordData.newPassword));
        const {rsp, errorMessage} = submit;
        if (rsp) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Password Change Updated Successfully',
                confirmButtonText: 'OK'
            });

            const isSuccess = dispatch(getLogout());
            if (isSuccess) {
                //location.href = '/auth';
                // Redirect to the authentication page
                router.push("/auth");
            } else {
                Swal.fire('An error occurred while logging out');
            }
        } else {
            toast.error(String(errorMessage));
        }
    };

    return (
        <>
            <ToastContainer/>
            <div className="max-w-[1140px] 2xl:max-w-[1320px] px-3 lg:px-10 xl:px-0 mx-auto pt-24">
                <div className='bg-[#F1F9FF] rounded-[16px] px-6 py-3 relative'>
                    <h1 className='text-black font-light md:text-[16px] text-[20px] pb-3'>Settings</h1>
                    <p className='text-black font-light text-[20px]'>Change username/password</p>
                    <Image className='absolute end-0 top-6'
                           src="/assets/images/png/Subtract.png"
                           alt="short-form"
                           width={209}
                           height={209}
                    />
                </div>
                <div className='h-[0.4px] w-[1086px] bg-black my-14'></div>

                <ViewDetail name={name} email={email}/>
                <ChangeEmail
                    localData={localEmailData}
                    error={''}
                    setEmailData={setLocalEmailData}
                    onSubmit={handleSubmitEmail}
                />
                <ChangePassword
                    localData={localPasswordData}
                    error={''}
                    setPasswordData={setLocalPasswordData}
                    onSubmit={handleSubmitPassword}
                />
            </div>
        </>
    );
};

export default Setting;
