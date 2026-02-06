import React, { useState, useRef, useEffect } from 'react';

export default function LinkContent({ setShowDocumentsModal, onRegisterClick }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const startX = useRef(0);
    const containerRef = useRef(null);

    const AUTOPLAY_INTERVAL = 3000;

    const linkSlides = [
        { src: "/images/image 41.png", alt: "Payment Link Hero" },
        { src: "/images/messageImage_1768842036813.jpg", alt: "Pain Point" },
        { src: "/images/messageImage_1768842059095.jpg", alt: "ปิดการขายได้ไวกว่าเดิม" },
        { src: "/images/messageImage_1768842108642.jpg", alt: "เงินโอนทุกวันอังคาร" },
        { src: "/images/messageImage_1768842124568.jpg", alt: "ทุกจุดชำระของธุรกิจ" }
    ];

    const faqItems = [
        {
            question: "Payment Link คืออะไร?",
            answer: "Payment Link คือลิงก์สำหรับรับชำระเงินออนไลน์ ที่คุณสามารถส่งให้ลูกค้าผ่าน LINE, Facebook, SMS หรือ Email ได้ทันที"
        },
        {
            question: "ใช้เวลากี่วันถึงจะได้รับเงิน?",
            answer: "เงินจะโอนเข้าบัญชีทุกวันอังคาร (T+1) หลังจากลูกค้าชำระเงินสำเร็จ"
        },
        {
            question: "รองรับการผ่อนชำระหรือไม่?",
            answer: "รองรับผ่อนชำระ 0% สูงสุด 10 เดือน กับบัตรเครดิตที่ร่วมรายการ"
        },
        {
            question: "ค่าธรรมเนียมเท่าไหร่?",
            answer: "ค่าธรรมเนียมเริ่มต้นที่ 2.6% สำหรับบัตรเครดิต/เดบิต และ 0.5% สำหรับ QR PromptPay"
        }
    ];

    // Auto-play effect
    useEffect(() => {
        if (isDragging || isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev < linkSlides.length - 1 ? prev + 1 : 0));
        }, AUTOPLAY_INTERVAL);

        return () => clearInterval(timer);
    }, [isDragging, isPaused, linkSlides.length]);

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

        const threshold = 50;
        if (dragOffset < -threshold && currentSlide < linkSlides.length - 1) {
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

    return (
        <>
            {/* Hero Section with Carousel */}
            <section className="px-4 py-10 bg-white">
                <div className="text-center space-y-2 mb-8">
                    <h2 className="text-[26px] font-bold text-slate-800">Payment Link</h2>
                    <p className="text-slate-600 text-base">แค่ส่งลิงก์ ลูกค้าก็จ่ายได้ทันที ไม่ต้องมีหน้าร้าน</p>
                </div>

                {/* Image Carousel */}
                <div className="max-w-sm mx-auto select-none">
                    <div
                        ref={containerRef}
                        className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-50 border border-slate-100"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={() => setIsPaused(true)}
                    >
                        <div
                            className={`flex h-full ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
                            style={{ transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))` }}
                        >
                            {linkSlides.map((slide, index) => (
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
                        {linkSlides.map((_, index) => (
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

            {/* 3 Steps Section */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF] text-center">
                <h2 className="text-[26px] font-bold text-center mb-6 text-[#0A47CB]">3 ขั้นตอน</h2>
                <div className="grid grid-cols-3 gap-3 my-6">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="relative mx-auto mb-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                <svg className="w-8 h-8 text-[#0A47CB]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#0A47CB] text-white text-sm font-bold rounded-full flex items-center justify-center">1</span>
                        </div>
                        <p className="text-base font-medium text-[#0A47CB]">สร้างลิงก์</p>
                    </div>
                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="relative mx-auto mb-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                <svg className="w-8 h-8 text-[#0A47CB]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#0A47CB] text-white text-sm font-bold rounded-full flex items-center justify-center">2</span>
                        </div>
                        <p className="text-base font-medium text-[#0A47CB]">ส่งให้ลูกค้า</p>
                    </div>
                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="relative mx-auto mb-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                <svg className="w-8 h-8 text-[#0A47CB]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#0A47CB] text-white text-sm font-bold rounded-full flex items-center justify-center">3</span>
                        </div>
                        <p className="text-base font-medium text-[#0A47CB]">รับเงิน!</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="bg-white border border-slate-200 rounded-full px-6 py-3 text-base font-medium cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50"
                    onClick={() => setShowDocumentsModal?.(true)}
                >
                    เอกสารการสมัคร <span className="w-6 h-6 bg-[#4064FF] text-white rounded-full inline-flex items-center justify-center text-lg">+</span>
                </button>
            </section>

            {/* CTA Section */}
            <section className="py-8 px-4 bg-gradient-to-br from-[#0A47CB] to-[#4064FF] text-white text-center">
                <h2 className="text-[22px] font-bold mb-2">สนใจสมัคร Payment Link</h2>
                <p className="text-base opacity-90 mb-6">เริ่มต้นรับชำระเงินออนไลน์ได้ทันที</p>
                <button type="button" className="bg-white text-[#0A47CB] border-none rounded-full font-semibold cursor-pointer transition-colors hover:bg-gray-100 px-8 py-3 text-lg shadow-lg" onClick={onRegisterClick}>
                    สมัครเลย
                </button>
            </section>

            {/* "รู้หรือไม่?" FAQ Section */}
            <section className="py-8 px-4 bg-white">
                <h2 className="text-[26px] text-center mb-6">
                    <span className="font-bold text-[#0A47CB]">รู้หรือไม่?</span>
                </h2>
                <div className="flex flex-col gap-4">
                    <div className="bg-[#EEF2FF] rounded-2xl p-5">
                        <h3 className="font-semibold text-[#0A47CB] mb-2">ลูกค้าไม่ต้องโหลดแอปก็จ่ายได้</h3>
                        <p className="text-base text-slate-600">กดลิงก์เปิดในเบราว์เซอร์ พร้อมจ่ายได้เลย ไม่ต้องสมัครหรือโหลดอะไรเพิ่ม</p>
                    </div>
                    <div className="bg-[#EEF2FF] rounded-2xl p-5">
                        <h3 className="font-semibold text-[#0A47CB] mb-2">รองรับผ่อนชำระ 0%</h3>
                        <p className="text-base text-slate-600">ลูกค้าสามารถเลือกผ่อนชำระ 0% สูงสุด 10 เดือน กับบัตรเครดิตที่ร่วมรายการ</p>
                    </div>
                    <div className="bg-[#EEF2FF] rounded-2xl p-5">
                        <h3 className="font-semibold text-[#0A47CB] mb-2">แจ้งเตือนทันทีเมื่อรับเงินสำเร็จ</h3>
                        <p className="text-base text-slate-600">ได้รับแจ้งเตือนผ่าน LINE และอีเมลทันทีเมื่อลูกค้าชำระเงินเรียบร้อย</p>
                    </div>
                </div>
            </section>

            {/* Fee Section */}
            <section className="py-8 px-4 bg-white text-center">
                <h2 className="text-[26px] text-center mb-4">
                    <span className="font-bold text-[#0A47CB]">ค่าธรรมเนียม</span>
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-sm mb-6">
                    <img src="/images/ค่าธรรมเนียม2easepay-web 1.png" alt="ค่าธรรมเนียม Payment Link" className="w-full h-auto block" />
                </div>
            </section>

            {/* Installment Banks */}
            <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF]">
                <div className="rounded-2xl overflow-hidden shadow-sm">
                    <img src="/images/messageImage_1768842144535.jpg" alt="ผ่อนชำระด้วยบัตรธนาคาร" className="w-full h-auto block" />
                </div>
            </section>

            {/* EMV Security Section */}
            <section className="px-4 pb-8 bg-white">
                <img src="/images/Frame 21111.png" alt="EMV Security" className="rounded-2xl w-full h-auto block" />
            </section>
        </>
    );
}
