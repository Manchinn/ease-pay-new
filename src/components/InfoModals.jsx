import React from 'react';

export function InstallmentModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={onClose}>
            <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 border-none rounded-full text-base cursor-pointer z-10 flex items-center justify-center" onClick={onClose}>✕</button>
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/222a496ca_Popup-2.png" alt="Installment" className="rounded-2xl w-full block" />
            </div>
        </div>
    );
}

export function DocumentsModal({ onClose, activeTab }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={onClose}>
            <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 border-none rounded-full text-base cursor-pointer z-10 flex items-center justify-center" onClick={onClose}>✕</button>
                <h2 className="text-xl font-bold mb-1">เอกสารที่ต้องเตรียม</h2>
                <p className="text-sm text-slate-500 mb-6">สำหรับ{activeTab === 'edc' ? 'เครื่องรูดบัตร EDC' : 'ลิงก์ชำระออนไลน์'}</p>
                <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
                    <button className="flex-1 py-1.5 px-3 rounded-md text-sm font-medium border-none cursor-pointer bg-white text-[#4064FF] shadow-sm">นิติบุคคล</button>
                    <button className="flex-1 py-1.5 px-3 rounded-md text-sm font-medium border-none cursor-pointer text-slate-500 bg-transparent">บุคคลทั่วไป</button>
                </div>
                <ul className="list-none space-y-3 mb-6">
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> หนังสือรับรองการจดทะเบียน (ไม่เกิน 3 เดือน)</li>
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> ภพ.20 (ภาษีมูลค่าเพิ่ม VAT)</li>
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> สำเนาบัญชีผู้ถือหุ้น (บอจ.5)</li>
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> สำเนาบัตรประชาชน หรือ พาสปอร์ต</li>
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> สมุดบัญชีเงินฝาก (รับเงินโอน)</li>
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> เอกสารยืนยันที่อยู่</li>
                    <li className="text-sm flex items-start gap-2"><span className="text-green-500">✅</span> รูปถ่ายป้ายชื่อหน้าร้าน + รูปถ่ายหน้าร้าน</li>
                </ul>
                <div className="bg-[#EEF2FF] text-[#4064FF] text-xs p-3 rounded-lg text-center font-medium">กรุณาเตรียมเอกสารให้ครบถ้วนเพื่อความสะดวกในการสมัคร</div>
            </div>
        </div>
    );
}
