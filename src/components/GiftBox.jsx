import React from "react";

const GiftBox = () => {
  return (
    <div className="bg-white p-6 shadow QR-section">
      <div className="mt-16 flex flex-col items-center text-center">
        {/* Tiêu đề */}
        <div className="bg-[#6B1E1E] text-white px-6 py-2 rounded-full font-semibold mb-6">
          Hộp quà mừng
        </div>

        {/* QR code */}
        <img
          src="/qr-code-bride.png"
          alt="QR Cô dâu"
          className="w-40 h-40 mb-4"
        />

        {/* Thông tin */}
        <div className="text-gray-800">
          <p className="text-base font-medium border-b border-[#6B1E1E] inline-block pb-1 mb-2">
            Cô dâu
          </p>
          <p className="font-semibold text-lg">Đặng Phương Nga</p>
          <p className="text-sm text-gray-600">
            Techcombank - 19037057235014
          </p>
        </div>

        <br />
        <br />
        <br />

        {/* QR code */}
        <img
          src="/qr-code-bride.png"
          alt="QR Cô dâu"
          className="w-40 h-40 mb-4"
        />

        {/* Thông tin */}
        <div className="text-gray-800">
          <p className="text-base font-medium border-b border-[#6B1E1E] inline-block pb-1 mb-2">
            Cô dâu
          </p>
          <p className="font-semibold text-lg">Đặng Phương Nga</p>
          <p className="text-sm text-gray-600">
            Techcombank - 19037057235014
          </p>
        </div>

        {/* Cảm ơn */}
        <p className="mt-10 font-display text-2xl text-[#6B1E1E]">Thank you!</p>
      </div>
    </div>
  );
};

export default GiftBox;
