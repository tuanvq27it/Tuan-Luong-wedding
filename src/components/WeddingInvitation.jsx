import React, { useEffect, useState } from "react";
import groom from "../assets/MCK09965.jpg"
import bride from "../assets/bride.jpg"

const WeddingInvitation = () => {
  const targetDate = new Date("2025-11-01T12:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#6b1b1b] flex justify-center py-6 px-4 mt-12 pb-1">
      <div className="bg-white rounded-t-[50px] w-full max-w-md shadow-md text-center border-t-8 border-[#6b1b1b] overflow-hidden red-separator-container">
        <div className="top-banner">
            <h2 className="font-[Satisfy] text-3xl text-black mt-4 mb-3 italic">
            Wedding Invitation
            </h2>
        </div>
        
        <div className="details-bar pt-5">
            <div className="grid grid-cols-2 gap-6 px-6">
            {/* Nhà trai */}
            <div>
                <p className="font-semibold text-blue-900 text-sm">Nhà trai</p>
                <p className="text-xs mt-1">Ông Vương Thanh Lâm</p>
                <p className="text-xs mb-9"></p>
                <img
                src={groom}
                alt="Chú rể"
                className="w-36 h-36 mx-auto rounded-full border-4 border-[#6b1b1b]"
                />
                <p className="mt-2 text-sm font-[Satisfy] text-[#6b1b1b]">
                Vương Quốc Tuấn 
                </p>
            </div>

            {/* Nhà gái */}
            <div>
                <p className="font-semibold text-blue-900 text-sm">Nhà gái</p>
                <p className="text-xs mt-1">Ông Trương Văn Khoa</p>
                <p className="text-xs mb-2">Bà Đinh Thị Hải</p>
                <img
                src={bride}
                alt="Cô dâu"
                className="w-36 h-36 mx-auto rounded-full border-4 border-[#6b1b1b]"
                />
                <p className="mt-2 text-sm font-[Satisfy] text-[#6b1b1b]">
                Trương Thị Hiền Lương
                </p>
            </div>
            </div>

            {/* Dấu & */}
            <div className="text-[#6b1b1b] text-2xl font-[Satisfy] mt-2 and">&</div>

            {/* Countdown */}
            <div className="flex justify-center gap-2 mt-3 mb-6">
            {[
                { label: "ngày", value: timeLeft.days },
                { label: "giờ", value: timeLeft.hours },
                { label: "phút", value: timeLeft.minutes },
                { label: "giây", value: timeLeft.seconds },
            ].map((item, i) => (
                <div key={i} className="bg-black text-white px-3 py-2 rounded text-sm">
                <p className="font-bold text-lg">{item.value}</p>
                <p className="text-[11px]">{item.label}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
