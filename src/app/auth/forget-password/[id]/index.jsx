"use client";

import {useEffect, useState} from 'react';
// import Header from "@/components/Common/Header";
// import Footer from "@/components/Common/Footer";
import ForgetPassword from "@/components/pages/auth/forget-password/";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

export default function Forget() {
    const isLoggedIn = useSelector((state) => state.auth.login);
    const router = useRouter();
    const { id} = router.query;


    // Redirect to home page if user is already logged in
    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn, router]);

    const compId = id ? String(id) : null
    return (
        <div className='bg-white  bg-right-blue'>
            {/* <Header/> */}
            <ForgetPassword id={compId}/>
            {/* <Footer/> */}
        </div>
    );
}
