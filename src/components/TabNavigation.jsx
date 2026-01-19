import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab, tabRef, isTabSticky }) {
    return (
        <>
            <div ref={tabRef} className={`flex flex-col items-center w-full h-[126px] py-6 px-4 gap-[60px] bg-white transition-all duration-200 ${isTabSticky ? 'sticky top-[56px] left-0 right-0 max-w-[480px] mx-auto z-[99] border-t border-slate-200 shadow-sm' : ''}`}>
                <div className="flex w-full gap-2">
                    <button
                        className={`flex-1 bg-white border-2 rounded-xl py-3 px-4 text-left cursor-pointer ${activeTab === 'edc' ? 'border-[#4064FF]' : 'border-slate-200'}`}
                        onClick={() => setActiveTab('edc')}
                    >
                        <h3 className={`text-sm font-semibold mb-0.5 ${activeTab === 'edc' ? 'text-[#4064FF]' : 'text-slate-800'}`}>เครื่องรูดบัตร</h3>
                        <p className="text-xs text-slate-500">EDC</p>
                    </button>
                    <button
                        className={`flex-1 bg-white border-2 rounded-xl py-3 px-4 text-left cursor-pointer ${activeTab === 'link' ? 'border-[#4064FF]' : 'border-slate-200'}`}
                        onClick={() => setActiveTab('link')}
                    >
                        <h3 className={`text-sm font-semibold mb-0.5 ${activeTab === 'link' ? 'text-[#4064FF]' : 'text-slate-800'}`}>ลิงก์ชำระออนไลน์</h3>
                        <p className="text-xs text-slate-500">ส่งลิงก์รับเงิน</p>
                    </button>
                </div>
            </div>
            {/* Placeholder เมื่อ tab sticky เพื่อไม่ให้ content กระโดด */}
            {isTabSticky && <div className="h-[72px]"></div>}
        </>
    );
}
