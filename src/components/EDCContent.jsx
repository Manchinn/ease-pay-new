import React, { useState } from 'react';

export default function EDCContent({ setShowDocumentsModal, setShowInstallmentModal }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const edcSlides = [
        { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/359381252_image13.png", alt: "EDC Payment" },
        { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/8361f5fbd_Frame21094.png", alt: "ขาย จ่าย จบ" },
        { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/096c0d275_Frame21091.png", alt: "รองรับทุกธนาคาร" },
        { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/03b003a42_Frame21093.png", alt: "เงินโอนทุกวัน" }
    ];

    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 0));
        if (touchStart - touchEnd < -75) setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 3));
    };

    return (
        <>
            {/* EDC Section with Carousel */}
            <section className="py-8 px-4 bg-white">
                <h2 className="text-2xl font-bold text-center mb-2">เครื่องรูดบัตร EDC</h2>
                <p className="text-center text-slate-500 mb-6">รับชำระเงินได้ทุกช่องทาง ในเครื่องเดียว</p>
                <div className="max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] touch-pan-x" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                    <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {edcSlides.map((slide, i) => (
                            <div key={i} className="min-w-full shrink-0">
                                <img src={slide.src} alt={slide.alt} draggable="false" className="w-full h-auto block" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    {edcSlides.map((_, i) => (
                        <button key={i} className={`w-2 h-2 rounded-full border-none cursor-pointer transition-colors duration-200 ${currentSlide === i ? 'bg-[#4064FF]' : 'bg-slate-200'}`} onClick={() => setCurrentSlide(i)} />
                    ))}
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF]">
                <h2 className="text-2xl font-bold text-center mb-2">Ease Pay<br />แตกต่างเจ้าอื่นยังไง</h2>
                <div className="rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/4bd1de1f9_S__50888749.jpg" alt="Comparison" className="w-full h-auto block" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-8 px-4 bg-white">
                <h2 className="text-2xl font-bold text-center mb-2"><span className="text-[#4064FF]">ง่ายกว่า เร็วกว่า</span> โอนเงินทุกวัน</h2>
                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center text-2xl shrink-0">💰</div>
                        <div><h3 className="text-base font-semibold mb-1">ฟรีค่าบริการรายเดือน</h3><p className="text-sm text-slate-500">เมื่อมียอดธุรกรรมขั้นต่ำ 100,000 บาทต่อเดือน</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center text-2xl shrink-0">📞</div>
                        <div><h3 className="text-base font-semibold mb-1">บริการ Call Center</h3><p className="text-sm text-slate-500">มีเจ้าหน้าที่บริการตลอด 24 ชั่วโมง</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center text-2xl shrink-0">⚡</div>
                        <div><h3 className="text-base font-semibold mb-1">ลดขั้นตอน ขอเครื่องไว</h3><p className="text-sm text-slate-500">ขอเครื่อง EDC ได้ง่ายและสะดวกขึ้น ไม่ต้องวุ่นวายติดต่อหลายธนาคาร</p></div>
                    </div>
                </div>
            </section>

            {/* 3 Steps Section */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF] text-center">
                <h2 className="text-2xl font-bold text-center mb-2 text-[#4064FF]">3 ขั้นตอน</h2>
                <div className="grid grid-cols-3 gap-4 my-6">
                    <div className="text-center"><div className="w-[72px] h-[72px] bg-[#4064FF] rounded-2xl flex items-center justify-center text-[32px] mx-auto mb-3 shadow-[0_4px_8px_rgba(37,99,235,0.2)]">📝</div><p className="text-sm font-medium">กรอกข้อมูล</p></div>
                    <div className="text-center"><div className="w-[72px] h-[72px] bg-[#4064FF] rounded-2xl flex items-center justify-center text-[32px] mx-auto mb-3 shadow-[0_4px_8px_rgba(37,99,235,0.2)]">✅</div><p className="text-sm font-medium">อนุมัติ</p></div>
                    <div className="text-center"><div className="w-[72px] h-[72px] bg-[#4064FF] rounded-2xl flex items-center justify-center text-[32px] mx-auto mb-3 shadow-[0_4px_8px_rgba(37,99,235,0.2)]">📦</div><p className="text-sm font-medium">ใช้งานได้เลย</p></div>
                </div>
                <button className="bg-white border border-slate-200 rounded-full px-6 py-3 text-sm font-medium cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50" onClick={() => setShowDocumentsModal(true)}>เอกสารการสมัคร <span className="w-6 h-6 bg-[#4064FF] text-white rounded-full inline-flex items-center justify-center text-base">+</span></button>
            </section>

            {/* Business Cards */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-gray-100">
                <h2 className="text-2xl font-bold text-center mb-2">Ease Pay รับชำระได้ทุกธุรกิจ</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#4064FF] rounded-xl overflow-hidden">
                        <img src="/images/business-clinic.png" alt="คลินิก" className="w-full h-[60px] object-cover block" />
                        <div className="p-2 text-white">
                            <p className="text-[8px] font-medium mb-1">ธุรกิจบริการ / คลินิก / สปา / เสริมความงาม</p>
                            <ul className="list-none text-[7px] space-y-0.5">
                                <li className="before:content-['•_']">ใช้งานง่าย ไม่ต้องเทรนพนักงาน</li>
                                <li className="before:content-['•_']">รองรับการผ่อนชำระ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#4064FF] rounded-xl overflow-hidden">
                        <img src="/images/business-restaurant.png" alt="ร้านอาหาร" className="w-full h-[60px] object-cover block" />
                        <div className="p-2 text-white">
                            <p className="text-[8px] font-medium mb-1">ร้านอาหาร / คาเฟ่ / บาร์ / เครื่องดื่ม</p>
                            <ul className="list-none text-[7px] space-y-0.5">
                                <li className="before:content-['•_']">ปิดบิลที่โต๊ะได้ทันที</li>
                                <li className="before:content-['•_']">ลูกค้าจ่ายได้เร็ว</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#4064FF] rounded-xl overflow-hidden">
                        <img src="/images/business-retail.png" alt="ร้านค้า" className="w-full h-[60px] object-cover block" />
                        <div className="p-2 text-white">
                            <p className="text-[8px] font-medium mb-1">ร้านค้าปลีก / มินิมาร์ท / ซุเปอร์ / ร้านทั่วไป</p>
                            <ul className="list-none text-[7px] space-y-0.5">
                                <li className="before:content-['•_']">POS + EDC + QR จบในเครื่องเดียว</li>
                                <li className="before:content-['•_']">เคาน์เตอร์เร็ว ไม่ต่อคิวยาว</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commission Section */}
            <section className="py-8 px-4 bg-white text-center">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/9734718a7_Screenshot2569-01-12at174812.png" alt="Commission" className="rounded-2xl mb-6 w-full h-auto block" />
                <button className="bg-white border border-slate-200 rounded-full px-6 py-3 text-sm font-medium cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50" onClick={() => setShowInstallmentModal(true)}>อัตราผ่อนชำระ <span className="w-6 h-6 bg-[#4064FF] text-white rounded-full inline-flex items-center justify-center text-base">+</span></button>
            </section>

            {/* EMV Section */}
            <section className="px-4 pb-8 bg-white">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/7e256b798_Frame21111-2.png" alt="EMV Security" className="rounded-2xl w-full h-auto block" />
            </section>
        </>
    );
}
