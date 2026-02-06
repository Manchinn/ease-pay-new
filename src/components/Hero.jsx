import React from 'react';

export default function Hero({ activeTab, onRegisterClick }) {
    return (
        <section className="text-center bg-gradient-to-b from-[#f9fbff] to-white">
            <h1 className="text-[34px] font-bold text-[#4064FF] mb-2 pt-8 px-4">{activeTab === 'edc' ? 'Ease Pay' : 'Payment Link'}</h1>
            <p >{activeTab === 'edc' ? 'รับชำระเงินง่าย ได้ทุกธนาคาร' : 'รับเงินง่าย ส่งได้ทุกช่องทาง'}</p>
            <div className="relative w-full">
                <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/ac5164d5b_.png"
                    alt="Person holding phone"
                    className="w-full h-auto block"
                />
                {/* Floating CTA Button */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center px-8 z-10">
                    <button
                        type="button"
                        className="bg-[#4064FF] text-white border-none rounded-full font-semibold cursor-pointer transition-colors hover:bg-[#3050DD] px-12 py-4 text-xl shadow-[0_4px_16px_rgba(64,100,255,0.3)]"
                        onClick={onRegisterClick}
                    >
                        สมัครเลย
                    </button>
                </div>
            </div>

            {/* YouTube Video Section - โหลดเมื่อใกล้ viewport (loading="lazy") */}
            <div className="px-4 pt-24 pb-6 bg-white">
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/6961e4107ad4474b9708017a"
                        title="EDC Ease Pay รับชำระได้ทุกบัตร สะดวกง่าย ใช้ฟรี"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
