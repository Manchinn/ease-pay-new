import React, { useState } from 'react';

export default function RegisterModal({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        businessCategory: '',
        website: '',
        services: [],
        acceptPrivacy: false,
        acceptMarketing: false
    });

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={onClose} role="presentation">
            <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="register-modal-title">
                <div className="flex justify-between items-center p-4 border-b border-slate-100 sticky top-0 bg-white z-10">
                    <img src="/images/LOGO.png" alt="ease pay" className="h-5 w-auto" />
                    <button type="button" className="bg-slate-100 border-none rounded px-2 py-1 text-base font-medium cursor-pointer" aria-label="ภาษาไทย">🇹🇭 TH</button>
                </div>

                <h2 id="register-modal-title" className="text-[22px] font-bold px-6 pt-6 pb-2">สนใจเปิดบัญชี Ease Pay</h2>

                <form className="p-6 pt-4 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('ส่งข้อมูลสำเร็จ!'); onClose(); }}>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">ชื่อ-นามสกุล</label>
                        <input type="text" className="p-3 border border-slate-200 rounded-lg text-base outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ระบุชื่อ-นามสกุล" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">ชื่อบริษัท / ชื่อร้านค้า</label>
                        <input type="text" className="p-3 border border-slate-200 rounded-lg text-base outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ระบุชื่อบริษัท / ชื่อร้านค้าสำหรับบุคคลธรรมดา" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">อีเมล</label>
                        <input type="email" className="p-3 border border-slate-200 rounded-lg text-base outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="youremail@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">เบอร์โทรศัพท์</label>
                        <input type="tel" className="p-3 border border-slate-200 rounded-lg text-base outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="012-345-6789" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">หมวดหมู่ธุรกิจ</label>
                        <input type="text" className="p-3 border border-slate-200 rounded-lg text-base outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ค้นหาหรือระบุหมวดหมู่ธุรกิจ" value={formData.businessCategory} onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">เว็บไซต์ / โซเชียลมีเดียธุรกิจ</label>
                        <div className="relative">
                            <input type="text" className="w-full p-3 pr-16 border border-slate-200 rounded-lg text-base outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ระบุเว็บไซต์ / โซเชียลมีเดียธุรกิจ" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">ไม่บังคับ</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-medium text-slate-700">เลือกบริการที่คุณสนใจ</label>
                        <div className="flex gap-3">
                            <label className={`flex-1 relative flex flex-col p-3 border-2 border-slate-200 rounded-xl cursor-pointer transition-all hover:bg-slate-50 ${formData.services.includes('online') ? 'border-[#4064FF] bg-[#EEF2FF]' : ''}`}>
                                <input type="checkbox" className="hidden" checked={formData.services.includes('online')} onChange={(e) => {
                                    if (e.target.checked) setFormData({ ...formData, services: [...formData.services, 'online'] });
                                    else setFormData({ ...formData, services: formData.services.filter(s => s !== 'online') });
                                }} />
                                <div className="text-[26px] mb-2">💳</div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-base font-semibold text-slate-800">ชำระเงินออนไลน์</h4>
                                    <p className="text-[12px] text-slate-500 leading-tight">เชื่อมต่อเว็บไซต์และลิงก์ชำระเงิน</p>
                                </div>
                                <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-slate-300 transition-colors ${formData.services.includes('online') ? 'bg-[#4064FF] border-[#4064FF] after:content-["✓"] after:text-white after:text-[12px] after:flex after:items-center after:justify-center after:w-full after:h-full' : ''}`}></div>
                            </label>
                            <label className={`flex-1 relative flex flex-col p-3 border-2 border-slate-200 rounded-xl cursor-pointer transition-all hover:bg-slate-50 ${formData.services.includes('edc') ? 'border-[#4064FF] bg-[#EEF2FF]' : ''}`}>
                                <input type="checkbox" className="hidden" checked={formData.services.includes('edc')} onChange={(e) => {
                                    if (e.target.checked) setFormData({ ...formData, services: [...formData.services, 'edc'] });
                                    else setFormData({ ...formData, services: formData.services.filter(s => s !== 'edc') });
                                }} />
                                <div className="text-[26px] mb-2">🔷</div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-base font-semibold text-slate-800">เครื่องรูดบัตร</h4>
                                    <p className="text-[12px] text-slate-500 leading-tight">รองรับการผ่อนชำระทุกช่องทาง</p>
                                </div>
                                <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-slate-300 transition-colors ${formData.services.includes('edc') ? 'bg-[#4064FF] border-[#4064FF] after:content-["✓"] after:text-white after:text-[12px] after:flex after:items-center after:justify-center after:w-full after:h-full' : ''}`}></div>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-2">
                        <label className="flex items-start gap-3 cursor-pointer text-[15px] text-slate-600 leading-snug select-none">
                            <input type="checkbox" className="mt-0.5 accent-[#4064FF] w-4 h-4 cursor-pointer" checked={formData.acceptPrivacy} onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })} required />
                            <span>ยินยอมรับทราบและยอมรับข้อตกลงตามนโยบาย <a href="#" className="text-[#4064FF] no-underline hover:underline">นโยบายความเป็นส่วนตัว</a></span>
                        </label>
                    </div>

                    <div className="flex items-start gap-3">
                        <label className="flex items-start gap-3 cursor-pointer text-[15px] text-slate-600 leading-snug select-none">
                            <input type="checkbox" className="mt-0.5 accent-[#4064FF] w-4 h-4 cursor-pointer" checked={formData.acceptMarketing} onChange={(e) => setFormData({ ...formData, acceptMarketing: e.target.checked })} />
                            <span>ยินยอมและรับทราบ ให้ อีสเพย์ เก็บรวบรวม ใช้ และเปิดเผย เพื่อวัตถุประสงค์ทางการตลาด</span>
                        </label>
                    </div>

                    <button type="submit" className="bg-[#4064FF] text-white border-none rounded-full font-semibold cursor-pointer transition-colors hover:bg-[#3050DD] px-12 py-4 text-xl shadow-[0_4px_16px_rgba(64,100,255,0.3)] w-full mt-4">ยืนยัน</button>

                    <p className="text-center text-base text-slate-500 mt-4 mb-2">มีบัญชีอยู่แล้ว? <a href="#" className="text-[#4064FF] font-semibold no-underline hover:underline">เข้าสู่ระบบ</a></p>
                </form>
            </div>
        </div>
    );
}
