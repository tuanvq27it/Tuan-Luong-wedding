import React from "react";
// Giả sử bạn đã import các assets này
import WeddingDress from "../assets/vay.png";
import Shoes from "../assets/giay.png";
import Ring from "../assets/nhan.png";
import Envelopes from "../assets/lixi.png";
import Bouquet from "../assets/hoa.png";
import CouplePhoto from "../assets/10.jpg"; // Ảnh cô dâu chú rể

const HeroSection = ({ groomName, brideName, quote }) => {
  // Dữ liệu mặc định
  const defaultQuote =
    "Hạnh phúc lớn nhất chính là có thể đặt tay mình vào tay em.";

  return (
    <div className="hero-section-container">
      {/* 1. KHỐI TRÊN: Đồ họa & Trích dẫn */}
      <div className="hero-top-section">
        {/* Các Icon trang trí (giả định dùng <div> với background-image hoặc SVG) */}
        <div className="decoration-icons">
          <div className="icon-set top-left">
            <img
              src={Envelopes}
              alt="Lì xì"
              className="icon small custom-img"
            />
          </div>

          <div className="icon-set top-right">
            <img src={Ring} alt="Nhẫn cưới" className="icon small custom-img" />
          </div>

          <img
            src={WeddingDress}
            alt="Váy cưới"
            className="icon dress custom-img"
          />

          <div className="icon-set bottom-left">
            <img
              src={Shoes}
              alt="Giày cưới"
              className="icon small custom-img"
            />
          </div>

          <div className="icon-set bottom-right">
            <img
              src={Bouquet}
              alt="Hoa cưới"
              className="icon small custom-img"
            />
          </div>
        </div>

        {/* Trích dẫn */}
        <p className="hero-quote font-[Satisfy]">{quote || defaultQuote}</p>
      </div>

      {/* 2. KHỐI DƯỚI: Tên & Ảnh Cặp đôi */}
      <div className="hero-bottom-section">
        <div className="names-section">
          <span className="name-script groom font-[Satisfy]">
            {groomName || "Tuấn"}
          </span>
          <span className="name-separator">&</span>
          <span className="name-script bride font-[Satisfy]">
            {brideName || "Lương"}
          </span>
        </div>

        <div className="photo-frame">
          <img src={CouplePhoto} alt="Cô dâu chú rể" className="couple-photo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
