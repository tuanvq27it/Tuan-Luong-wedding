import React, { useEffect, useState } from "react";

export default function Countdown(){
  const target = new Date("2025-11-16T17:00:00");
  const [diff, setDiff] = useState(target - new Date());

  useEffect(() => {
    const t = setInterval(() => setDiff(target - new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  if (diff <= 0) {
    return <div className="countdown-wrap">Đã diễn ra</div>;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  return (
    <div className="countdown-wrap">
      <div className="countdown-title">Wedding Invitation</div>
      <div className="countdown-grid">
        <div>
          <div className="count-box">{days}</div>
          <div className="count-label">ngày</div>
        </div>
        <div>
          <div className="count-box">{hours}</div>
          <div className="count-label">giờ</div>
        </div>
        <div>
          <div className="count-box">{minutes}</div>
          <div className="count-label">phút</div>
        </div>
        <div>
          <div className="count-box">{seconds}</div>
          <div className="count-label">giây</div>
        </div>
      </div>
    </div>
  );
}
