import React, { useState } from 'react';

export function InstallmentModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={onClose}>
            <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 border-none rounded-full text-lg cursor-pointer z-10 flex items-center justify-center" onClick={onClose}>✕</button>
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/222a496ca_Popup-2.png" alt="Installment" className="rounded-2xl w-full block" />
            </div>
        </div>
    );
}

export function DocumentsModal({ onClose, activeTab }) {
    const [docType, setDocType] = useState('corporate'); // 'corporate' or 'individual'

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={onClose}>
            <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 border-none rounded-full text-lg cursor-pointer z-10 flex items-center justify-center" onClick={onClose}>✕</button>
                <h2 className="text-[22px] font-bold mb-1 text-[#0A47CB]">เอกสารที่ต้องเตรียม</h2>
                <p className="text-base text-slate-500 mb-6">สำหรับ{activeTab === 'edc' ? 'การสมัครใช้ EDC' : 'ลิงก์ชำระออนไลน์'}</p>

                {/* Tabs */}
                <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
                    <button
                        className={`flex-1 py-1.5 px-3 rounded-md text-base font-medium border-none cursor-pointer transition-all ${docType === 'corporate' ? 'bg-white text-[#4064FF] shadow-sm' : 'text-slate-500 bg-transparent'}`}
                        onClick={() => setDocType('corporate')}
                    >
                        นิติบุคคล
                    </button>
                    <button
                        className={`flex-1 py-1.5 px-3 rounded-md text-base font-medium border-none cursor-pointer transition-all ${docType === 'individual' ? 'bg-white text-[#4064FF] shadow-sm' : 'text-slate-500 bg-transparent'}`}
                        onClick={() => setDocType('individual')}
                    >
                        บุคคลทั่วไป
                    </button>
                </div>

                {/* Corporate Documents */}
                {docType === 'corporate' && (
                    <ul className="list-none space-y-3 mb-6">
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> หนังสือรับรองการจดทะเบียน (ไม่เกิน 3 เดือน)</li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> ภพ.20 (ภาษีมูลค่าเพิ่ม VAT)</li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> สำเนาบัญชีผู้ถือหุ้น (บอจ.5)</li>
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-green-500">✅</span> สำเนาบัตรประชาชน หรือ พาสปอร์ต</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- กรณีเจ้าของเป็นชาวต่างชาติ: แนบใบอนุญาตทำงานในไทย</div>
                        </li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> สมุดบัญชีเงินฝาก (รับเงินโอน)</li>
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-green-500">✅</span> เอกสารยืนยันที่อยู่</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- ใบเสร็จค่าสาธารณูปโภค</div>
                            <div className="ml-6 text-base text-[#5E6368]">- สัญญาเช่า/ทะเบียนบ้าน/บิลค่าไฟ</div>
                        </li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> รูปถ่ายป้ายชื่อหน้าร้าน + รูปถ่ายหน้าร้าน</li>
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-orange-500">📋</span> กรณีโอนเข้าบัญชีบุคคลที่ 3</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- รายงานการประชุม + หนังสือมอบอำนาจโอนเงิน</div>
                            <div className="ml-6 text-base text-[#5E6368]">- สำเนาบัตรประชาชนผู้รับมอบ</div>
                        </li>
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-orange-500">📋</span> กรณีมอบอำนาจให้บุคคลที่ 3</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- หนังสือมอบอำนาจ + ค่าธรรมเนียม 30 บาท</div>
                        </li>
                    </ul>
                )}

                {/* Individual Documents */}
                {docType === 'individual' && (
                    <ul className="list-none space-y-3 mb-6">
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-green-500">✅</span> สำเนาบัตรประชาชน หรือ พาสปอร์ต</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- แนบรูปถ่ายพร้อมบัตร</div>
                            <div className="ml-6 text-base text-[#5E6368]">- ชาวต่างชาติ: แนบใบอนุญาตทำงานในไทย</div>
                        </li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> สมุดบัญชีเงินฝาก (รับเงินโอน)</li>
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-green-500">✅</span> เอกสารยืนยันที่อยู่</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- ใบเสร็จค่าสาธารณูปโภค</div>
                            <div className="ml-6 text-base text-[#5E6368]">- สัญญาเช่า/ทะเบียนบ้าน/บิลค่าไฟ</div>
                        </li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> รูปถ่ายป้ายชื่อหน้าร้าน + รูปถ่ายหน้าร้าน + สินค้าในร้าน</li>
                        <li className="text-base">
                            <div className="flex items-start gap-2"><span className="text-orange-500">📋</span> กรณีโอนเข้าบัญชีบุคคลที่ 3</div>
                            <div className="ml-6 mt-1 text-base text-[#5E6368]">- หนังสือมอบอำนาจ + สำเนาบัตรผู้รับมอบ</div>
                        </li>
                        <li className="text-base flex items-start gap-2"><span className="text-green-500">✅</span> ข้อมูลสภาพของร้านค้า</li>
                    </ul>
                )}

                <div className="bg-[#EEF2FF] text-[#4064FF] text-base p-3 rounded-lg text-center font-medium">กรุณาเตรียมเอกสารให้ครบถ้วนเพื่อความสะดวกในการสมัคร</div>
            </div>
        </div>
    );
}
