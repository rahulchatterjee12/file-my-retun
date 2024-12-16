import React, { useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ChangeEmail= ({localData, error, setEmailData, onSubmit}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setEmailData(prevState => ({...prevState, [event.target.name]: event.target.value,}));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-white p- 8 rounded-md mt-4">
             <h1 className='text-black font-normal text-[20px] pb-10'>Change Email ID</h1>
            <form className="space-y-6" onSubmit={onSubmit}>
                <div className="flex justify-between space-x-4 w-[800px]">
                    <div className="w-[272px]"><label htmlFor="email"
                                                  className="block text-[16px] font-medium text-black"> 
                        New Email ID</label>
                        <input id="email" type="email" value={localData.newEmail} name="newEmail"
                        placeholder='Email'
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#666666] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               onChange={handleChange}/>
                    </div>
                    <div className="w-[272px] mt-1 relative"><label htmlFor="newEmail"
                                                      className="block text-[16px] font-medium text-black">Current
                        Password: </label>
                        <input id="newEmail" type={showPassword ? "text" : "password"} value={localData.password}
                               name="password"
                               placeholder='password'
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#666666] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                               onChange={handleChange}/>
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 focus:outline-none -mt-16"
                        >
                            {showPassword ? (
                                <VisibilityIcon />
                            ) : (
                                <VisibilityOffIcon />
                            )}
                        </button>
                        <h3 className="flex justify-end mb-3">{error && error}</h3>
                        <button type="submit"
                                className="w-[222px] mt-8 py-2 px-4 border text-center border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#4640DE] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"> Update
                        </button>
                    </div>

                </div>

            </form>
        </div>
    );
};
export default ChangeEmail;
