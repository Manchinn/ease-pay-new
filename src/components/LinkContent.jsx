import React from 'react';

export default function LinkContent() {
    return (
        <>
            <section className="py-8 px-4 bg-white">
                <h2 className="text-2xl font-bold text-center mb-2">ลิงก์ชำระออนไลน์</h2>
                <p className="text-center text-slate-500 mb-6">แค่ส่งลิงก์ ลูกค้าก็จ่ายได้ทันที ไม่ต้องมีหน้าร้าน</p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-[#EEF2FF] rounded-2xl p-5 text-center">
                        <div className="text-[32px] mb-3">🔗</div>
                        <h3 className="text-sm font-semibold mb-2 text-[#4064FF]">สร้างลิงก์ง่าย</h3>
                        <p className="text-xs text-slate-500">กรอกจำนวนเงิน กดสร้างลิงก์ ส่งให้ลูกค้าได้เลย</p>
                    </div>
                    <div className="bg-[#EEF2FF] rounded-2xl p-5 text-center">
                        <div className="text-[32px] mb-3">💳</div>
                        <h3 className="text-sm font-semibold mb-2 text-[#4064FF]">รับชำระได้หลายช่องทาง</h3>
                        <p className="text-xs text-slate-500">บัตรเครดิต, บัตรเดบิต, QR PromptPay</p>
                    </div>
                    <div className="bg-[#EEF2FF] rounded-2xl p-5 text-center">
                        <div className="text-[32px] mb-3">📱</div>
                        <h3 className="text-sm font-semibold mb-2 text-[#4064FF]">ส่งได้ทุกช่องทาง</h3>
                        <p className="text-xs text-slate-500">LINE, Facebook, SMS, Email หรือ QR Code</p>
                    </div>
                    <div className="bg-[#EEF2FF] rounded-2xl p-5 text-center">
                        <div className="text-[32px] mb-3">📊</div>
                        <h3 className="text-sm font-semibold mb-2 text-[#4064FF]">ติดตามยอดขายง่าย</h3>
                        <p className="text-xs text-slate-500">ดูรายงานการขายได้แบบ Real-time</p>
                    </div>
                </div>
            </section>

            {/* Link Benefits */}
            <section className="py-8 px-4 bg-white">
                <h2 className="text-2xl font-bold text-center mb-2"><span className="text-[#4064FF]">เหมาะสำหรับ</span></h2>
                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center text-2xl shrink-0">🛒</div>
                        <div><h3 className="text-base font-semibold mb-1">ขายของออนไลน์</h3><p className="text-sm text-slate-500">ไม่ต้องมีหน้าร้าน ส่งลิงก์รับเงินได้ทันที</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center text-2xl shrink-0">🏠</div>
                        <div><h3 className="text-base font-semibold mb-1">ธุรกิจบริการ</h3><p className="text-sm text-slate-500">รับจองล่วงหน้า เก็บมัดจำผ่านลิงก์</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center text-2xl shrink-0">👥</div>
                        <div><h3 className="text-base font-semibold mb-1">Freelance</h3><p className="text-sm text-slate-500">รับงาน ส่งลิงก์เรียกเก็บเงินได้เลย</p></div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF] text-center">
                <h2 className="text-2xl font-bold text-center mb-2 text-[#4064FF]">วิธีใช้งาน</h2>
                <div className="grid grid-cols-3 gap-4 my-6">
                    <div className="text-center"><div className="w-[72px] h-[72px] bg-[#4064FF] rounded-2xl flex items-center justify-center text-[32px] mx-auto mb-3 shadow-[0_4px_8px_rgba(37,99,235,0.2)]">1️⃣</div><p className="text-sm font-medium">สร้างลิงก์</p></div>
                    <div className="text-center"><div className="w-[72px] h-[72px] bg-[#4064FF] rounded-2xl flex items-center justify-center text-[32px] mx-auto mb-3 shadow-[0_4px_8px_rgba(37,99,235,0.2)]">2️⃣</div><p className="text-sm font-medium">ส่งให้ลูกค้า</p></div>
                    <div className="text-center"><div className="w-[72px] h-[72px] bg-[#4064FF] rounded-2xl flex items-center justify-center text-[32px] mx-auto mb-3 shadow-[0_4px_8px_rgba(37,99,235,0.2)]">3️⃣</div><p className="text-sm font-medium">รับเงิน!</p></div>
                </div>
                <button className="bg-[#4064FF] text-white border-none rounded-full font-semibold cursor-pointer transition-colors hover:bg-[#3050DD] px-12 py-4 text-lg shadow-[0_4px_16px_rgba(64,100,255,0.3)]">สมัครใช้งานฟรี</button>
            </section>
        </>
    );
}
