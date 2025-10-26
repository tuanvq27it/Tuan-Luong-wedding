import React, { useRef, useState } from "react";
import { Music2, Pause } from "lucide-react"; // icon từ lucide-react
import couple from "../assets/7.jpg"
import songhi from "../assets/songhi.png"

const Header = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <header className="relative bg-[#6b1b1b] text-white text-center overflow-hidden mb-2">
      {/* Nhạc nền */}
      <audio ref={audioRef} loop>
        <source src="/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Nút nhạc */}
      <button
        onClick={toggleMusic}
        className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 transition"
      >
        {isPlaying ? (
          <Pause className="text-white w-4 h-4" />
        ) : (
          <Music2 className="text-white w-4 h-4" />
        )}
      </button>

      {/* Chữ Save the Date */}
      <div className="pt-6">
        <p className="font-[Satisfy] text-xl italic">Save The Date</p>
        <p className="text-[#fff] font-light tracking-widest border border-dashed border-[#fff] inline-block px-3 py-1 mt-1 text-sm">
          01 . 11 . 2025
        </p>
      </div>

      {/* Tên cô dâu chú rể */}
      <h1 className="font-[Satisfy] text-3xl mt-3">
        Quốc Tuấn <span className="mx-2">-</span> Hiền Lương
      </h1>

      {/* Hình cô dâu chú rể */}
      <div className="relative mt-3">
        <img
          src={couple}
          alt="Couple"
          className="mx-auto w-72 md:w-80 object-contain drop-shadow-xl"
        />
        {/* Hình chữ song hỷ */}
        <img
          src={songhi}
          alt="Song Hỷ"
          className="absolute right-10 bottom-10 w-20 opacity-90"
        />
      </div>
    </header>
  );
};

export default Header;
