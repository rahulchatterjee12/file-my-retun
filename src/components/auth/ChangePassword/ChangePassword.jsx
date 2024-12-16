import React, {  useState} from 'react';
import Image from "next/image";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ChangePassword = ({localData, error, setPasswordData, onSubmit}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordO, setShowPasswordO] = useState(false);

    const handleChange = (event) => {
        setPasswordData(prevState => ({...prevState, [event.target.name]: event.target.value,}));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibilityO = () => {
        setShowPasswordO(!showPasswordO);
    };

    return (
    <div className="bg-[#F1F9FF] px-4 rounded-md shadow-lg border border-gray-200 relative pb-20 pt-6 my-20">
        <h1 className='text-black font-normal text-[20px] pb-10'>Change password</h1>
        <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex justify-between space-x-4 w-[800px]">
                <div className="w-[272px] mt-1 relative"><label htmlFor="password"
                                                  className="block text-[16px] font-medium text-black"> Old
                    password </label> <input id="password" type={showPasswordO ? "text" : "password"} value={localData.oldPassword}
                                             placeholder='Old password'
                                             name="oldPassword"
                                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#666666] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                                             onChange={handleChange}/>
                    <button
                        type="button"
                        onClick={togglePasswordVisibilityO}
                        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 focus:outline-none -mt-36"
                    >
                        {showPasswordO ? (
                            <VisibilityIcon/>
                        ) : (
                            <VisibilityOffIcon/>
                        )}
                    </button>
                </div>
                <div className="w-[272px]">
                    <div className="mt-1 relative"><label htmlFor="newPassword"
                                                          className="block text-[16px] font-medium text-black"> New
                        Password </label> <input id="newPassword" type={showPassword ? "text" : "password"}
                                                 value={localData.newPassword}
                                                 placeholder='NewPassword'
                                                 name="newPassword"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#666666] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                                                onChange={handleChange}/>
                       <button
                           type="button"
                           onClick={togglePasswordVisibility}
                           className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 focus:outline-none -mb-6"
                       >
                           {showPassword ? (
                               <VisibilityIcon />
                           ) : (
                               <VisibilityOffIcon />
                           )}
                       </button>
                   </div>
                   <div className="mt-5 w-[272px] relative"><label htmlFor="newPassword"
                                                          className="block text-[16px] font-medium text-black"> Confirm
                       Password </label> <input id="confirmPassword" type={showPassword ? "text" : "password"}
                                                value={localData.confirmPassword}
                                                placeholder='Confirm password'
                                                name="confirmPassword"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#666666] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                                                onChange={handleChange}/>
                       <button
                           type="button"
                           onClick={togglePasswordVisibility}
                           className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 focus:outline-none -mb-6"
                       >
                           {showPassword ? (
                               <VisibilityIcon />
                           ) : (
                               <VisibilityOffIcon />
                           )}
                       </button>
                   </div>
                   <div>
                       <h3 className="flex justify-end mb-3">{error && error}</h3>
                       <button type="submit"
                               className="w-[222px] mt-8 py-2 px-4 border text-center border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#4640DE] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"> Update
                       </button>
                   </div>

               </div>
            </div>

        </form>
        <Image className='absolute end-[7%] top-[-20%]'
               src="/assets/images/register.png"
               alt="short-form"
               width={194}
               height={456}
        />
    </div>);
};
export default ChangePassword;
