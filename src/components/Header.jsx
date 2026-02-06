import React from 'react';

export default function Header({ onRegisterClick }) {
    return (
        <header className="flex justify-between items-center px-5 py-3 bg-white sticky top-0 z-[100]">
            <div className="flex items-center">
                <img src="/images/LOGO.png" alt="ease pay" className="h-6 w-auto" />
            </div>
            <div className="flex items-center gap-4">
                <button type="button" className="bg-white border-[1.5px] border-[#4064FF] rounded-lg px-4 py-2 text-base font-medium text-[#4064FF] hover:bg-gray-100 transition-all" onClick={onRegisterClick}>สมัครฟรี</button>
                <button type="button" className="flex flex-col justify-center gap-[5px] w-6 h-6 bg-transparent border-none cursor-pointer p-0" aria-label="เปิดเมนู">
                    <span className="block w-full h-[2px] bg-slate-800 rounded-[1px]" aria-hidden></span>
                    <span className="block w-full h-[2px] bg-slate-800 rounded-[1px]" aria-hidden></span>
                    <span className="block w-full h-[2px] bg-slate-800 rounded-[1px]" aria-hidden></span>
                </button>
            </div>
        </header>
    );
}
