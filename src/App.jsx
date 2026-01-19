import React, { useState, useEffect, useRef } from 'react';


export default function App() {
  const [activeTab, setActiveTab] = useState('edc'); // 'edc' or 'link'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showInstallmentModal, setShowInstallmentModal] = useState(false);
  const [showDocumentsModal, setShowDocumentsModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isTabSticky, setIsTabSticky] = useState(false);
  const tabRef = useRef(null);

  // Form state
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

  // ตรวจจับว่า tab ชน header หรือยัง
  useEffect(() => {
    const handleScroll = () => {
      if (tabRef.current) {
        const tabTop = tabRef.current.getBoundingClientRect().top;
        setIsTabSticky(tabTop <= 56); // 56px = header height
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 0));
    if (touchStart - touchEnd < -75) setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 3));
  };

  const edcSlides = [
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/359381252_image13.png", alt: "EDC Payment" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/8361f5fbd_Frame21094.png", alt: "ขาย จ่าย จบ" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/096c0d275_Frame21091.png", alt: "รองรับทุกธนาคาร" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/03b003a42_Frame21093.png", alt: "เงินโอนทุกวัน" }
  ];

  const faqItems = [
    { q: "หากพบปัญหาในการใช้งาน สามารถติดต่อได้ที่ไหน", a: "สามารถติดต่อได้ที่ 065-687-6620, 02-683-6600 ต่อ 14 เวลาให้บริการ จันทร์-อาทิตย์ 9.00 - 21.00 น." },
    { q: "อยากสมัครใช้งาน Ease Pay ต้องทำอย่างไร", a: "ร้านค้าสามารถกรอก ส่งเอกสารการสมัครเจ้าหน้าที่จะติดต่อประสานงานดำเนินการให้เร็วที่สุดสามารถดูขั้นตอนการสมัครใช้งาน Ease Payได้ที่นี่" },
    { q: "เอกสารที่ต้องใช้ในการสมัคร Ease Pay มีอะไรบ้าง", a: "เอกสารที่ต้องเตรียมสำหรับสมัคร Ease Pay สามารถดูได้ที่นี่" },
    { q: "Ease Pay โอนเงินให้ร้านค้าเมื่อไหร่", a: "ร้านค้าจะได้รับเงินในวันถัดไป T+1 สามารถดูรายละเอียดตารางการนำส่งเงินให้ร้านค้าของ Ease Pay ที่นี่" }
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="max-w-[480px] mx-auto bg-gray-50 min-h-screen relative font-['Noto_Sans_Thai']">
      {/* Header */}
      {/* Header */}
      <header className="flex justify-between items-center px-5 py-3 bg-white sticky top-0 z-[100]">
        <div className="flex items-center">
          <img src="/images/LOGO.png" alt="ease pay" className="h-6 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white border-[1.5px] border-[#4064FF] rounded-lg px-4 py-2 text-sm font-medium text-[#4064FF] hover:bg-gray-100 transition-all">สมัครฟรี</button>
          <button className="flex flex-col justify-center gap-[5px] w-6 h-6 bg-transparent border-none cursor-pointer p-0">
            <span className="block w-full h-[2px] bg-slate-800 rounded-[1px]"></span>
            <span className="block w-full h-[2px] bg-slate-800 rounded-[1px]"></span>
            <span className="block w-full h-[2px] bg-slate-800 rounded-[1px]"></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="text-center pt-8 px-4 pb-6 bg-gradient-to-b from-[#EEF2FF] to-white">
        <h1 className="text-[32px] font-bold text-[#4064FF] mb-2">{activeTab === 'edc' ? 'Ease Pay' : 'Payment Link'}</h1>
        <p className="text-slate-500 mb-6">{activeTab === 'edc' ? 'รับชำระเงินง่าย ได้ทุกธนาคาร' : 'รับเงินง่าย ส่งได้ทุกช่องทาง'}</p>
        <div className="max-w-[480px] mx-auto mb-6">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/ac5164d5b_.png" alt="Person holding phone" className="rounded-2xl" />
        </div>
        <button className="bg-[#4064FF] text-white border-none rounded-full font-semibold cursor-pointer transition-colors hover:bg-[#3050DD] px-12 py-4 text-lg shadow-[0_4px_16px_rgba(64,100,255,0.3)]" onClick={() => setShowRegisterModal(true)}>สมัครเลย</button>
      </section>

      {/* Sticky Tab Buttons */}
      <div ref={tabRef} className={`flex h-[72px] px-4 justify-between items-center shrink-0 self-stretch bg-white transition-all duration-200 ${isTabSticky ? 'sticky top-[56px] left-0 right-0 max-w-[480px] mx-auto z-[99] border-t border-slate-200 shadow-sm' : ''}`}>
        <div className="flex w-full gap-2">
          <button
            className={`flex-1 bg-white border-2 border-slate-200 rounded-xl py-3 px-4 text-left cursor-pointer transition-all duration-200 ${activeTab === 'edc' ? 'border-[#4064FF] border-l-4 bg-[#EEF2FF]' : ''}`}
            onClick={() => setActiveTab('edc')}
          >
            <h3 className={`text-sm font-semibold text-slate-800 mb-0.5 ${activeTab === 'edc' ? '!text-[#4064FF]' : ''}`}>เครื่องรูดบัตร</h3>
            <p className="text-xs text-slate-500">EDC</p>
          </button>
          <button
            className={`flex-1 bg-white border-2 border-slate-200 rounded-xl py-3 px-4 text-left cursor-pointer transition-all duration-200 ${activeTab === 'link' ? 'border-[#4064FF] border-l-4 bg-[#EEF2FF]' : ''}`}
            onClick={() => setActiveTab('link')}
          >
            <h3 className={`text-sm font-semibold text-slate-800 mb-0.5 ${activeTab === 'link' ? '!text-[#4064FF]' : ''}`}>ลิงก์ชำระออนไลน์</h3>
            <p className="text-xs text-slate-500">ส่งลิงก์รับเงิน</p>
          </button>
        </div>
      </div>
      {/* Placeholder เมื่อ tab sticky เพื่อไม่ให้ content กระโดด */}
      {isTabSticky && <div className="h-[72px]"></div>}

      {/* ============ EDC Content ============ */}
      {activeTab === 'edc' && (
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
          {/* Comparison Section */}
          <section className="py-8 px-4 bg-gradient-to-b from-white to-[#EEF2FF]">
            <h2 className="text-2xl font-bold text-center mb-2">Ease Pay<br />แตกต่างเจ้าอื่นยังไง</h2>
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/4bd1de1f9_S__50888749.jpg" alt="Comparison" className="w-full h-auto block" />
            </div>
          </section>

          {/* Benefits Section */}
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
      )}

      {/* ============ Payment Link Content ============ */}
      {activeTab === 'link' && (
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
      )}

      {/* ============ Common Sections ============ */}
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

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-slate-200">
        <p className="text-[#4064FF] font-medium mb-2">📞 092-641-4296</p>
        <p className="text-green-600 font-medium mb-6">💬 Line: @doctorease</p>
        <p className="text-lg font-bold mb-1">ease pay</p>
        <p className="text-xs text-slate-500">© 2025 Ease Pay. All rights reserved.</p>
      </footer>

      {/* Modals */}
      {showInstallmentModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={() => setShowInstallmentModal(false)}>
          <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 border-none rounded-full text-base cursor-pointer z-10 flex items-center justify-center" onClick={() => setShowInstallmentModal(false)}>✕</button>
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/222a496ca_Popup-2.png" alt="Installment" className="rounded-2xl w-full block" />
          </div>
        </div>
      )}

      {showDocumentsModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={() => setShowDocumentsModal(false)}>
          <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 border-none rounded-full text-base cursor-pointer z-10 flex items-center justify-center" onClick={() => setShowDocumentsModal(false)}>✕</button>
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
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]" onClick={() => setShowRegisterModal(false)}>
          <div className="bg-white rounded-2xl relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-100 sticky top-0 bg-white z-10">
              <img src="/images/LOGO.png" alt="ease pay" className="h-5 w-auto" />
              <button className="bg-slate-100 border-none rounded px-2 py-1 text-xs font-medium cursor-pointer">🇹🇭 TH</button>
            </div>

            <h2 className="text-xl font-bold px-6 pt-6 pb-2">สนใจเปิดบัญชี Ease Pay</h2>

            <form className="p-6 pt-4 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('ส่งข้อมูลสำเร็จ!'); setShowRegisterModal(false); }}>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">ชื่อ-นามสกุล</label>
                <input type="text" className="p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ระบุชื่อ-นามสกุล" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">ชื่อบริษัท / ชื่อร้านค้า</label>
                <input type="text" className="p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ระบุชื่อบริษัท / ชื่อร้านค้าสำหรับบุคคลธรรมดา" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">อีเมล</label>
                <input type="email" className="p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="youremail@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">เบอร์โทรศัพท์</label>
                <input type="tel" className="p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="012-345-6789" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">หมวดหมู่ธุรกิจ</label>
                <input type="text" className="p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ค้นหาหรือระบุหมวดหมู่ธุรกิจ" value={formData.businessCategory} onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">เว็บไซต์ / โซเชียลมีเดียธุรกิจ</label>
                <div className="relative">
                  <input type="text" className="w-full p-3 pr-16 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#4064FF] focus:ring-2 focus:ring-[#EEF2FF] transition-all" placeholder="ระบุเว็บไซต์ / โซเชียลมีเดียธุรกิจ" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">ไม่บังคับ</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">เลือกบริการที่คุณสนใจ</label>
                <div className="flex gap-3">
                  <label className={`flex-1 relative flex flex-col p-3 border-2 border-slate-200 rounded-xl cursor-pointer transition-all hover:bg-slate-50 ${formData.services.includes('online') ? 'border-[#4064FF] bg-[#EEF2FF]' : ''}`}>
                    <input type="checkbox" className="hidden" checked={formData.services.includes('online')} onChange={(e) => {
                      if (e.target.checked) setFormData({ ...formData, services: [...formData.services, 'online'] });
                      else setFormData({ ...formData, services: formData.services.filter(s => s !== 'online') });
                    }} />
                    <div className="text-2xl mb-2">💳</div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-semibold text-slate-800">ชำระเงินออนไลน์</h4>
                      <p className="text-[10px] text-slate-500 leading-tight">เชื่อมต่อเว็บไซต์และลิงก์ชำระเงิน</p>
                    </div>
                    <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-slate-300 transition-colors ${formData.services.includes('online') ? 'bg-[#4064FF] border-[#4064FF] after:content-["✓"] after:text-white after:text-[10px] after:flex after:items-center after:justify-center after:w-full after:h-full' : ''}`}></div>
                  </label>
                  <label className={`flex-1 relative flex flex-col p-3 border-2 border-slate-200 rounded-xl cursor-pointer transition-all hover:bg-slate-50 ${formData.services.includes('edc') ? 'border-[#4064FF] bg-[#EEF2FF]' : ''}`}>
                    <input type="checkbox" className="hidden" checked={formData.services.includes('edc')} onChange={(e) => {
                      if (e.target.checked) setFormData({ ...formData, services: [...formData.services, 'edc'] });
                      else setFormData({ ...formData, services: formData.services.filter(s => s !== 'edc') });
                    }} />
                    <div className="text-2xl mb-2">🔷</div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-semibold text-slate-800">เครื่องรูดบัตร</h4>
                      <p className="text-[10px] text-slate-500 leading-tight">รองรับการผ่อนชำระทุกช่องทาง</p>
                    </div>
                    <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-slate-300 transition-colors ${formData.services.includes('edc') ? 'bg-[#4064FF] border-[#4064FF] after:content-["✓"] after:text-white after:text-[10px] after:flex after:items-center after:justify-center after:w-full after:h-full' : ''}`}></div>
                  </label>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-2">
                <label className="flex items-start gap-3 cursor-pointer text-[13px] text-slate-600 leading-snug select-none">
                  <input type="checkbox" className="mt-0.5 accent-[#4064FF] w-4 h-4 cursor-pointer" checked={formData.acceptPrivacy} onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })} required />
                  <span>ยินยอมรับทราบและยอมรับข้อตกลงตามนโยบาย <a href="#" className="text-[#4064FF] no-underline hover:underline">นโยบายความเป็นส่วนตัว</a></span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <label className="flex items-start gap-3 cursor-pointer text-[13px] text-slate-600 leading-snug select-none">
                  <input type="checkbox" className="mt-0.5 accent-[#4064FF] w-4 h-4 cursor-pointer" checked={formData.acceptMarketing} onChange={(e) => setFormData({ ...formData, acceptMarketing: e.target.checked })} />
                  <span>ยินยอมและรับทราบ ให้ อีสเพย์ เก็บรวบรวม ใช้ และเปิดเผย เพื่อวัตถุประสงค์ทางการตลาด</span>
                </label>
              </div>

              <div className="hidden flex-col items-center gap-2 py-4 text-center animate-fade-in">
                <span className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl mb-2">✓</span>
                <span className="text-lg font-bold text-slate-800">Success!</span>
                <div className="text-xs text-slate-500 mt-2">
                  <a href="#" className="text-slate-500 mx-1 hover:text-[#4064FF]">Privacy</a> · <a href="#" className="text-slate-500 mx-1 hover:text-[#4064FF]">Terms</a>
                </div>
              </div>

              <button type="submit" className="bg-[#4064FF] text-white border-none rounded-full font-semibold cursor-pointer transition-colors hover:bg-[#3050DD] px-12 py-4 text-lg shadow-[0_4px_16px_rgba(64,100,255,0.3)] w-full mt-4">ยืนยัน</button>

              <p className="text-center text-sm text-slate-500 mt-4 mb-2">มีบัญชีอยู่แล้ว? <a href="#" className="text-[#4064FF] font-semibold no-underline hover:underline">เข้าสู่ระบบ</a></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}