import React, { useState } from 'react';

export default function SharedContent() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqItems = [
        { q: "หากพบปัญหาในการใช้งาน สามารถติดต่อได้ที่ไหน", a: "สามารถติดต่อได้ที่ 065-687-6620, 02-683-6600 ต่อ 14 เวลาให้บริการ จันทร์-อาทิตย์ 9.00 - 21.00 น." },
        { q: "อยากสมัครใช้งาน Ease Pay ต้องทำอย่างไร", a: "ร้านค้าสามารถกรอก ส่งเอกสารการสมัครเจ้าหน้าที่จะติดต่อประสานงานดำเนินการให้เร็วที่สุดสามารถดูขั้นตอนการสมัครใช้งาน Ease Payได้ที่นี่" },
        { q: "เอกสารที่ต้องใช้ในการสมัคร Ease Pay มีอะไรบ้าง", a: "เอกสารที่ต้องเตรียมสำหรับสมัคร Ease Pay สามารถดูได้ที่นี่" },
        { q: "Ease Pay โอนเงินให้ร้านค้าเมื่อไหร่", a: "ร้านค้าจะได้รับเงินในวันถัดไป T+1 สามารถดูรายละเอียดตารางการนำส่งเงินให้ร้านค้าของ Ease Pay ที่นี่" }
    ];

    return (
        <>
            {/* Did You Know */}
            <section className="px-4 pb-8 bg-gradient-to-b from-white to-gray-100">
                <div className="bg-white rounded-2xl p-6 mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    <h3 className="text-xl font-bold mb-3">รู้หรือไม่?</h3>
                    <p className="text-[#4064FF] mb-1"><strong>30% ของลูกค้าเปลี่ยนใจยกเลิกการซื้อ</strong></p>
                    <p className="mb-1 text-slate-500">เพราะไม่มีวิธีชำระเงินที่ต้องการ</p>
                    <p className="text-green-600"><strong>เพิ่มการกลับมาซื้อซ้ำถึง 12% ↑</strong></p>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/03d3344db_Gemini_Generated_Image_j8w75fj8w75fj8w7.png" alt="CTA" className="w-full h-auto block" />
                    <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-[rgba(30,41,59,0.6)] flex flex-col justify-center items-end p-4 text-right">
                        <h4 className="text-white text-lg font-bold mb-2">ให้ทุกการขาย<br />เกิดได้ง่ายขึ้น</h4>
                        <p className="text-white text-xs mb-3">ด้วยระบบจ่ายเงิน<br />ที่ใช่กว่า เร็วกว่า</p>
                        <button className="bg-[#4064FF] text-white border-none rounded-full px-5 py-2 text-sm font-semibold cursor-pointer hover:bg-[#3050DD] transition-colors">เริ่มใช้งานฟรี</button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-8 px-4 bg-white">
                <h2 className="text-lg font-bold mb-4 text-left">คำถามที่พบบ่อย FAQ</h2>
                <div className="flex flex-col gap-3">
                    {faqItems.map((item, i) => (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <button className="w-full bg-white border-none p-4 text-left text-[13px] font-medium cursor-pointer flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                {item.q}
                                <span className={`text-[10px] text-slate-500 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {openFaq === i && <div className="px-4 pb-4 text-[13px] text-slate-500">{item.a}</div>}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
