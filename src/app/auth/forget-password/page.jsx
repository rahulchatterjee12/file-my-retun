"use client";

import {useEffect, useState} from 'react';
// import Header from "@/components/Common/Header";
// import Footer from "@/components/Common/Footer";
import ForgetPassword from '@/components/ForgetPassword';
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

export default function Forget() {
    const {login, userData} = useSelector((state) => state.auth);
    const router = useRouter();

    // Redirect to home page if user is already logged in
    useEffect(() => {
        console.log('userData-data-data', userData);
        if (login) {
            // @ts-ignore
            if (userData?.nri === "null"){
                router.push('/auth/resident');
            }else{
                router.push('/home');
            }
        }
    }, [login, userData, router]);

    return (
        <div className='bg-white  bg-right-blue'>
            {/* <Header/> */}
            <ForgetPassword id={null}/>
            {/* <Footer/> */}
        </div>
    );
}
