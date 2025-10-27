import React from "react";
import QR_CO_DAU from "../assets/QR_co_dau.jpg";

const GiftBox = () => {
  return (
    <div className="bg-white p-6 shadow QR-section">
      <div className="mt-16 flex flex-col items-center text-center">
        {/* Tiêu đề */}
        <div
          className="bg-[#6B1E1E] text-white px-6 py-2 rounded-full font-semibold mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Hộp quà mừng
        </div>

        {/* QR code */}
        <img src={QR_CO_DAU} alt="QR Cô dâu" className="w-40 h-40 mb-4" />

        {/* Thông tin */}
        <div className="text-gray-800">
          <p
            className="text-base font-medium border-b border-[#6B1E1E] inline-block pb-1 mb-2"
            style={{ fontFamily: "Playfair Display" }}
          >
            Chú rể
          </p>
          <p
            className="font-semibold text-lg"
            style={{ fontFamily: "Playfair Display" }}
          >
            Vương Quốc Tuấn
          </p>
          <p className="text-sm text-gray-600">Techcombank - 19037057235014</p>
        </div>

        <br />
        <br />
        <br />

        {/* QR code */}
        <img src={QR_CO_DAU} alt="QR Cô dâu" className="w-40 h-40 mb-4" />

        {/* Thông tin */}
        <div className="text-gray-800">
          <p
            className="text-base font-medium border-b border-[#6B1E1E] inline-block pb-1 mb-2"
            style={{ fontFamily: "Playfair Display" }}
          >
            Cô dâu
          </p>
          <p
            className="font-semibold text-lg"
            style={{ fontFamily: "Playfair Display" }}
          >
            Trương Thị Hiền Lương
          </p>
          <p className="text-sm text-gray-600">TP Bank - 03220858901</p>
        </div>

        {/* Cảm ơn */}
        <p
          className="mt-10 font-display text-2xl text-[#6B1E1E]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Thank you!
        </p>
      </div>
    </div>
  );
};

export default GiftBox;
