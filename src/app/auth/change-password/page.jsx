"use client";

import {useEffect, useState} from 'react';
import Setting from '@/components/auth/ChangePassword';
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

export default function Forget() {
    const isLoggedIn = useSelector((state) => state.auth.login);
    const router = useRouter();

    // Redirect to home page if user is already logged in
    useEffect(() => {
        if (!isLoggedIn) {
            //router.push('/');
        }
    }, [isLoggedIn, router]);

    return (
        <div className='bg-white  bg-right-blue'>
            {/* <Header/> */}
            <Setting/>
            {/* <Footer/> */}
        </div>
    );
}