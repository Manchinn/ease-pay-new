import React, { useState, useRef, useEffect } from 'react';

export default function EDCContent({ setShowDocumentsModal, setShowInstallmentModal }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const startX = useRef(0);
    const containerRef = useRef(null);

    const AUTOPLAY_INTERVAL = 3000; // 3 seconds

    const edcSlides = [
        { src: "/images/feature-edc.jpg", alt: "EDC Payment" },
        { src: "/images/feature-easy.jpg", alt: "ขาย จ่าย จบ" },
        { src: "/images/feature-banks.jpg", alt: "รองรับทุกธนาคาร" },
        { src: "/images/feature-transfer.jpg", alt: "เงินโอนทุกวัน" }
    ];

    // Auto-play effect
    useEffect(() => {
        if (isDragging || isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev < edcSlides.length - 1 ? prev + 1 : 0));
        }, AUTOPLAY_INTERVAL);

        return () => clearInterval(timer);
    }, [isDragging, isPaused, edcSlides.length]);

    const handleStart = (clientX) => {
        setIsDragging(true);
        startX.current = clientX;
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;
        const diff = clientX - startX.current;
        setDragOffset(diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 50; // minimum distance to trigger slide change
        if (dragOffset < -threshold && currentSlide < edcSlides.length - 1) {
            setCurrentSlide(prev => prev + 1);
        } else if (dragOffset > threshold && currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
        setDragOffset(0);
    };

    // Touch events
    const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
    const handleTouchEnd = () => handleEnd();

    // Mouse events
    const handleMouseDown = (e) => {
        e.preventDefault();
        handleStart(e.clientX);
    };
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleMouseUp = () => handleEnd();
    const handleMouseLeave = () => {
        if (isDragging) handleEnd();
    };

    // Calculate transform with drag offset
    const containerWidth = containerRef.current?.offsetWidth || 320;
    const dragPercent = (dragOffset / containerWidth) * 100;
    const translateX = -(currentSlide * 100) + dragPercent;

    return (
        <>
            {/* EDC Section with Improved Carousel */}
            <section className="px-4 py-10 bg-white">
                <div className="text-center space-y-2 mb-8">
                    <h2 className="text-[26px] font-bold text-slate-800">เครื่องรูดบัตร EDC</h2>
                    <p className="text-slate-600 text-base">รับชำระเงินได้ทุกช่องทาง ในเครื่องเดียว</p>
                </div>

                {/* Image Carousel */}
                <div className="max-w-sm mx-auto select-none">
                    <div
                        className="rounded-2xl overflow-hidden h-[320px] bg-slate-50 border border-slate-100"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            className="flex h-full transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {edcSlides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="min-w-full h-full flex items-center justify-center p-4 shrink-0"
                                >
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="w-full h-full object-contain drop-shadow-sm"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        draggable="false"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {edcSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${currentSlide === index ? 'bg-[#4064FF] w-6' : 'bg-slate-300 w-2'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF]">
                <h2 className="text-[26px] text-center mb-2">
                    <span className="font-bold text-[#0A47CB]">Ease Pay</span><br />
                    <span className="text-slate-600">แตกต่างเจ้าอื่นยังไง</span>
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/4bd1de1f9_S__50888749.jpg" alt="Comparison" className="w-full h-auto block" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-8 px-4 bg-white">
                <h2 className="text-[26px] text-center mb-2">
                    <span className="font-bold text-[#0A47CB]">ง่ายกว่า เร็วกว่า</span><br />
                    <span className="text-slate-600">โอนเงินทุกวัน</span>
                </h2>
                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center shrink-0 p-2"><img src="/images/free.png" alt="free" className="w-full h-full object-contain" /></div>
                        <div><h3 className="text-lg font-semibold mb-1">ฟรีค่าบริการรายเดือน</h3><p className="text-base text-slate-500">เมื่อมียอดธุรกรรมขั้นต่ำ 100,000 บาทต่อเดือน</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center shrink-0 p-2"><img src="/images/callcenter.png" alt="callcenter" className="w-full h-full object-contain" /></div>
                        <div><h3 className="text-lg font-semibold mb-1">บริการ Call Center</h3><p className="text-base text-slate-500">มีเจ้าหน้าที่บริการตลอด 24 ชั่วโมง</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-2xl">
                        <div className="w-14 h-14 bg-[#4064FF] rounded-xl flex items-center justify-center shrink-0 p-2"><img src="/images/edc.png" alt="edc" className="w-full h-full object-contain" /></div>
                        <div><h3 className="text-lg font-semibold mb-1">ลดขั้นตอน ขอเครื่องไว</h3><p className="text-base text-slate-500">ขอเครื่อง EDC ได้ง่ายและสะดวกขึ้น ไม่ต้องวุ่นวายติดต่อหลายธนาคาร</p></div>
                    </div>
                </div>
            </section>

            {/* 3 Steps Section */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF] text-center">
                <h2 className="text-[26px] font-bold text-center mb-6 text-[#0A47CB]">3 ขั้นตอน</h2>
                <div className="grid grid-cols-3 gap-3 my-6">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="relative mx-auto mb-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                <svg className="w-8 h-8 text-[#0A47CB]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#0A47CB] text-white text-sm font-bold rounded-full flex items-center justify-center">1</span>
                        </div>
                        <p className="text-base font-medium text-[#0A47CB]">ยื่นใบสมัครที่ลิงก์</p>
                    </div>
                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="relative mx-auto mb-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                <svg className="w-8 h-8 text-[#0A47CB]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 9h-2v2H9v-2H7V9h2V7h2v2h2v2zm0-6V3.5L18.5 9H13z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#0A47CB] text-white text-sm font-bold rounded-full flex items-center justify-center">2</span>
                        </div>
                        <p className="text-base font-medium text-[#0A47CB]">ตรวจสอบ</p>
                    </div>
                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="relative mx-auto mb-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                <svg className="w-8 h-8 text-[#0A47CB]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#0A47CB] text-white text-sm font-bold rounded-full flex items-center justify-center">3</span>
                        </div>
                        <p className="text-base font-medium text-[#0A47CB]">ติดตั้ง</p>
                    </div>
                </div>
                <button type="button" className="bg-white border border-slate-200 rounded-full px-6 py-3 text-base font-medium cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50" onClick={() => setShowDocumentsModal(true)}>เอกสารการสมัคร <span className="w-6 h-6 bg-[#4064FF] text-white rounded-full inline-flex items-center justify-center text-lg">+</span></button>
            </section>

            {/* Business Cards */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-gray-100">
                <h2 className="text-[26px] text-center mb-4">
                    <span className="font-bold text-[#0A47CB]">Ease Pay</span><br />
                    <span className="text-slate-600">รับชำระได้ทุกธุรกิจ</span>
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-sm">
                    <img src="/images/businee-easepay.jpg" alt="Ease Pay รับชำระได้ทุกธุรกิจ" className="w-full h-auto block" />
                </div>
            </section>

            {/* Commission Section */}
            <section className="py-8 px-4 bg-white text-center">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/9734718a7_Screenshot2569-01-12at174812.png" alt="Commission" className="rounded-2xl mb-6 w-full h-auto block" />
                <button type="button" className="bg-white border border-slate-200 rounded-full px-6 py-3 text-base font-medium cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50" onClick={() => setShowInstallmentModal(true)}>อัตราผ่อนชำระ <span className="w-6 h-6 bg-[#4064FF] text-white rounded-full inline-flex items-center justify-center text-lg">+</span></button>
            </section>

            {/* EMV Section */}
            <section className="px-4 pb-8 bg-white">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/7e256b798_Frame21111-2.png" alt="EMV Security" className="rounded-2xl w-full h-auto block" />
            </section>
        </>
    );
}
