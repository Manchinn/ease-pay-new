import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('edc'); // 'edc' or 'link'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showInstallmentModal, setShowInstallmentModal] = useState(false);
  const [showDocumentsModal, setShowDocumentsModal] = useState(false);
  const [isTabSticky, setIsTabSticky] = useState(false);
  const tabRef = useRef(null);

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
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-wrap">
          <div className="logo-icon">E</div>
          <span className="logo-text">ease pay</span>
        </div>
        <button className="btn-primary btn-sm">สมัครฟรี</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">{activeTab === 'edc' ? 'Ease Pay' : 'Payment Link'}</h1>
        <p className="hero-subtitle">{activeTab === 'edc' ? 'รับชำระเงินง่าย ได้ทุกธนาคาร' : 'รับเงินง่าย ส่งได้ทุกช่องทาง'}</p>
        <div className="hero-image">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/ac5164d5b_.png" alt="Person holding phone" />
        </div>
        <button className="btn-primary btn-lg">สมัครเลย</button>
      </section>

      {/* Sticky Tab Buttons */}
      <div ref={tabRef} className={`tab-wrapper ${isTabSticky ? 'sticky' : ''}`}>
        <div className="feature-btns">
          <button className={`feature-btn ${activeTab === 'edc' ? 'active' : ''}`} onClick={() => setActiveTab('edc')}>
            <h3>เครื่องรูดบัตร</h3>
            <p>EDC</p>
          </button>
          <button className={`feature-btn ${activeTab === 'link' ? 'active' : ''}`} onClick={() => setActiveTab('link')}>
            <h3>ลิงก์ชำระออนไลน์</h3>
            <p>ส่งลิงก์รับเงิน</p>
          </button>
        </div>
      </div>
      {/* Placeholder เมื่อ tab sticky เพื่อไม่ให้ content กระโดด */}
      {isTabSticky && <div className="tab-placeholder"></div>}

      {/* ============ EDC Content ============ */}
      {activeTab === 'edc' && (
        <>
          {/* EDC Section with Carousel */}
          <section className="edc-section">
            <h2 className="section-title">เครื่องรูดบัตร EDC</h2>
            <p className="section-subtitle">รับชำระเงินได้ทุกช่องทาง ในเครื่องเดียว</p>
            <div className="carousel" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <img src={edcSlides[currentSlide].src} alt={edcSlides[currentSlide].alt} />
            </div>
            <div className="dots">
              {edcSlides.map((_, i) => (
                <button key={i} className={`dot ${currentSlide === i ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
              ))}
            </div>
          </section>

          {/* Comparison Section */}
          <section className="comparison-section">
            <h2 className="section-title">Ease Pay<br />แตกต่างเจ้าอื่นยังไง</h2>
            <div className="comparison-img">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/4bd1de1f9_S__50888749.jpg" alt="Comparison" />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <h2 className="section-title"><span className="text-blue">ง่ายกว่า เร็วกว่า</span> โอนเงินทุกวัน</h2>
            <div className="benefit-cards">
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <div><h3>ฟรีค่าบริการรายเดือน</h3><p>เมื่อมียอดธุรกรรมขั้นต่ำ 100,000 บาทต่อเดือน</p></div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📞</div>
                <div><h3>บริการ Call Center</h3><p>มีเจ้าหน้าที่บริการตลอด 24 ชั่วโมง</p></div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <div><h3>ลดขั้นตอน ขอเครื่องไว</h3><p>ขอเครื่อง EDC ได้ง่ายและสะดวกขึ้น ไม่ต้องวุ่นวายติดต่อหลายธนาคาร</p></div>
              </div>
            </div>
          </section>

          {/* 3 Steps Section */}
          <section className="steps-section">
            <h2 className="section-title text-blue">3 ขั้นตอน</h2>
            <div className="steps">
              <div className="step"><div className="step-icon">📝</div><p>กรอกข้อมูล</p></div>
              <div className="step"><div className="step-icon">✅</div><p>อนุมัติ</p></div>
              <div className="step"><div className="step-icon">📦</div><p>ใช้งานได้เลย</p></div>
            </div>
            <button className="btn-outline" onClick={() => setShowDocumentsModal(true)}>เอกสารการสมัคร <span className="plus-icon">+</span></button>
          </section>

          {/* Business Cards */}
          <section className="business-section">
            <h2 className="section-title">Ease Pay รองรับทุกธุรกิจ</h2>
            <div className="business-cards">
              <div className="business-card">
                <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&h=400&fit=crop" alt="สปา" />
                <div className="business-info"><p>คลินิก / สปา</p><ul><li>ใช้งานง่าย</li><li>รองรับผ่อนชำระ</li></ul></div>
              </div>
              <div className="business-card">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop" alt="ร้านอาหาร" />
                <div className="business-info"><p>ร้านอาหาร / คาเฟ่</p><ul><li>มีโปรโมชั่นตลอด</li><li>ชำระได้เร็ว</li></ul></div>
              </div>
              <div className="business-card">
                <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&h=400&fit=crop" alt="ร้านค้า" />
                <div className="business-info"><p>ร้านค้าปลีก</p><ul><li>POS+EDC+QR ครบ</li><li>ขายได้ทันที</li></ul></div>
              </div>
            </div>
          </section>

          {/* Commission Section */}
          <section className="commission-section">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/9734718a7_Screenshot2569-01-12at174812.png" alt="Commission" />
            <button className="btn-outline" onClick={() => setShowInstallmentModal(true)}>อัตราผ่อนชำระ <span className="plus-icon">+</span></button>
          </section>

          {/* EMV Section */}
          <section className="emv-section">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/7e256b798_Frame21111-2.png" alt="EMV Security" />
          </section>
        </>
      )}

      {/* ============ Payment Link Content ============ */}
      {activeTab === 'link' && (
        <>
          <section className="link-section">
            <h2 className="section-title">ลิงก์ชำระออนไลน์</h2>
            <p className="section-subtitle">แค่ส่งลิงก์ ลูกค้าก็จ่ายได้ทันที ไม่ต้องมีหน้าร้าน</p>
            <div className="link-features">
              <div className="link-feature">
                <div className="link-icon">🔗</div>
                <h3>สร้างลิงก์ง่าย</h3>
                <p>กรอกจำนวนเงิน กดสร้างลิงก์ ส่งให้ลูกค้าได้เลย</p>
              </div>
              <div className="link-feature">
                <div className="link-icon">💳</div>
                <h3>รับชำระได้หลายช่องทาง</h3>
                <p>บัตรเครดิต, บัตรเดบิต, QR PromptPay</p>
              </div>
              <div className="link-feature">
                <div className="link-icon">📱</div>
                <h3>ส่งได้ทุกช่องทาง</h3>
                <p>LINE, Facebook, SMS, Email หรือ QR Code</p>
              </div>
              <div className="link-feature">
                <div className="link-icon">📊</div>
                <h3>ติดตามยอดขายง่าย</h3>
                <p>ดูรายงานการขายได้แบบ Real-time</p>
              </div>
            </div>
          </section>

          {/* Link Benefits */}
          <section className="benefits-section">
            <h2 className="section-title"><span className="text-blue">เหมาะสำหรับ</span></h2>
            <div className="benefit-cards">
              <div className="benefit-card">
                <div className="benefit-icon">🛒</div>
                <div><h3>ขายของออนไลน์</h3><p>ไม่ต้องมีหน้าร้าน ส่งลิงก์รับเงินได้ทันที</p></div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏠</div>
                <div><h3>ธุรกิจบริการ</h3><p>รับจองล่วงหน้า เก็บมัดจำผ่านลิงก์</p></div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">👥</div>
                <div><h3>Freelance</h3><p>รับงาน ส่งลิงก์เรียกเก็บเงินได้เลย</p></div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="steps-section">
            <h2 className="section-title text-blue">วิธีใช้งาน</h2>
            <div className="steps">
              <div className="step"><div className="step-icon">1️⃣</div><p>สร้างลิงก์</p></div>
              <div className="step"><div className="step-icon">2️⃣</div><p>ส่งให้ลูกค้า</p></div>
              <div className="step"><div className="step-icon">3️⃣</div><p>รับเงิน!</p></div>
            </div>
            <button className="btn-primary btn-lg">สมัครใช้งานฟรี</button>
          </section>
        </>
      )}

      {/* ============ Common Sections ============ */}
      {/* Did You Know */}
      <section className="know-section">
        <div className="know-card">
          <h3>รู้หรือไม่?</h3>
          <p className="text-blue"><strong>30% ของลูกค้าเปลี่ยนใจยกเลิกการซื้อ</strong></p>
          <p>เพราะไม่มีวิธีชำระเงินที่ต้องการ</p>
          <p className="text-green"><strong>เพิ่มการกลับมาซื้อซ้ำถึง 12% ↑</strong></p>
        </div>
        <div className="cta-image">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/03d3344db_Gemini_Generated_Image_j8w75fj8w75fj8w7.png" alt="CTA" />
          <div className="cta-overlay">
            <h4>ให้ทุกการขาย<br />เกิดได้ง่ายขึ้น</h4>
            <p>ด้วยระบบจ่ายเงิน<br />ที่ใช่กว่า เร็วกว่า</p>
            <button className="btn-primary btn-sm">เริ่มใช้งานฟรี</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title-left">คำถามที่พบบ่อย FAQ</h2>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {item.q}
                <span className={`faq-arrow ${openFaq === i ? 'open' : ''}`}>▼</span>
              </button>
              {openFaq === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="contact-phone">📞 092-641-4296</p>
        <p className="contact-line">💬 Line: @doctorease</p>
        <p className="footer-brand">ease pay</p>
        <p className="footer-copy">© 2025 Ease Pay. All rights reserved.</p>
      </footer>

      {/* Modals */}
      {showInstallmentModal && (
        <div className="modal-overlay" onClick={() => setShowInstallmentModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowInstallmentModal(false)}>✕</button>
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6961e4107ad4474b9708017a/222a496ca_Popup-2.png" alt="Installment" />
          </div>
        </div>
      )}

      {showDocumentsModal && (
        <div className="modal-overlay" onClick={() => setShowDocumentsModal(false)}>
          <div className="modal-content modal-docs" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDocumentsModal(false)}>✕</button>
            <h2>เอกสารที่ต้องเตรียม</h2>
            <p className="modal-subtitle">สำหรับ{activeTab === 'edc' ? 'เครื่องรูดบัตร EDC' : 'ลิงก์ชำระออนไลน์'}</p>
            <div className="doc-tabs">
              <button className="doc-tab active">นิติบุคคล</button>
              <button className="doc-tab">บุคคลทั่วไป</button>
            </div>
            <ul className="doc-list">
              <li>✅ หนังสือรับรองการจดทะเบียน (ไม่เกิน 3 เดือน)</li>
              <li>✅ ภพ.20 (ภาษีมูลค่าเพิ่ม VAT)</li>
              <li>✅ สำเนาบัญชีผู้ถือหุ้น (บอจ.5)</li>
              <li>✅ สำเนาบัตรประชาชน หรือ พาสปอร์ต</li>
              <li>✅ สมุดบัญชีเงินฝาก (รับเงินโอน)</li>
              <li>✅ เอกสารยืนยันที่อยู่</li>
              <li>✅ รูปถ่ายป้ายชื่อหน้าร้าน + รูปถ่ายหน้าร้าน</li>
            </ul>
            <div className="doc-note">กรุณาเตรียมเอกสารให้ครบถ้วนเพื่อความสะดวกในการสมัคร</div>
          </div>
        </div>
      )}
    </div>
  );
}