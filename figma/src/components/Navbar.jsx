import React, { useState } from 'react';
import logo from '../assets/whole.svg';
import Modal from './Modal';
import sign from '../assets/atg_illustration.png';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Implement form submission logic here
    };

    return (
        <nav className="bg-white shadow w-full h-18">
            <div className="container mx-auto px-4 py-2 flex items-center w-full">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="ATG World Logo" className="w-40.642 h-6" />
                </div>
                <div className="flex items-center flex-grow justify-center">
                    <div className="relative w-[360px] h-[42px]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i className="fas fa-search text-gray-500"></i>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for your favorite groups in ATG"
                            className="border rounded-full py-2 pl-10 pr-4 w-full h-full bg-[#F2F2F2] focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="py-2 px-4 rounded-md"
                        onClick={handleOpenModal}
                    >
                        Create account. <span className="text-blue-500 font-bold">It’s free!</span>
                    </button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="h-[513px] relative rounded-lg bg-white p-6">
                    <button
                        className="absolute top-4 right-4 cursor-pointer [border:none] p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        onClick={handleCloseModal}
                    >
                        <span className="text-gray-600">×</span>
                    </button>
                    <div className="flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
                        <div className="flex-1 flex flex-row flex-wrap items-end justify-center gap-6 max-w-full">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[208px]">
                                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                                    <h2 className="m-0 relative text-[24px] font-bold font-ibm-plex-sans text-black text-left z-[1] mq450:text-lgi">
                                        Create Account
                                    </h2>
                                </div>
                                <form className="self-stretch flex flex-col items-start justify-start" onSubmit={handleSubmit}>
                                    <div className="flex w-full gap-0">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="h-[46px] w-full rounded-t-sm rounded-b-none bg-gray-100 border-[1px] border-solid px-3"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="h-[46px] w-full rounded-t-sm rounded-b-none bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="h-[46px] w-full rounded-sm bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="h-[46px] w-full rounded-sm bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3"
                                    />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="h-[46px] w-full rounded-sm bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3"
                                    />
                                    <button className="cursor-pointer py-2.5 px-6 bg-blue-500 rounded-md mt-4 w-full flex items-center justify-center">
                                        <div className="relative text-sm leading-[16px] font-semibold font-ibm-plex-sans text-white text-center z-[1]">
                                            Create Account
                                        </div>
                                    </button>
                                </form>
                                <button
                                    type="button"
                                    className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-sm flex flex-row items-center justify-start gap-[10px] mt-4 border-[0.6px] border-solid border-gainsboro-500 hover:bg-gainsboro-100"
                                    onClick={() => console.log('Sign up with Facebook')}
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                    <div className="relative text-sm leading-[16px] font-ibm-plex-sans text-black text-left z-[1]">
                                        Sign up with Facebook
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-sm flex flex-row items-center justify-start gap-[10px] mt-2 border-[0.6px] border-solid border-gainsboro-500 hover:bg-gainsboro-100"
                                    onClick={() => console.log('Sign up with Google')}
                                >
                                    <i className="fa-brands fa-google"></i>
                                    <div className="relative text-sm leading-[16px] font-ibm-plex-sans text-black text-left z-[1]">
                                        Sign up with Google
                                    </div>
                                </button>

                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start gap-[31px] min-w-[208px]">
                                <div className="relative text-smi text-right z-[1]">
                                    <span className="font-ibm-plex-sans text-darkslategray-100">{`Already have an account? `}</span>
                                    <span className="font-semibold font-ibm-plex-sans text-blue-500">
                                        Sign In
                                    </span>
                                </div>
                                <div className="self-stretch h-[348px] flex flex-col items-end justify-start gap-[12px]">
                                    <img
                                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                        alt="Sign up illustration"
                                        src={sign}
                                    />
                                    <div className="self-stretch relative text-[11px] tracking-[-0.01em] leading-[16px] font-ibm-plex-sans text-gray-500 text-right z-[1]">
                                        By signing up, you agree to our Terms & conditions, Privacy policy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </nav>
    );
}

export default Navbar;
