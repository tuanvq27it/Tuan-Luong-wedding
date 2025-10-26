import React from "react";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import WeddingInvitation from "./components/WeddingInvitation";
import DecorativeBorderFrame from "./components/DecorativeBorderFrame";
import LocationSection from "./components/LocationSection";
import HeroSection from "./components/HeroSection";
import PhotoAlbumSection from "./components/PhotoAlbumSection";
import GiftBox from "./components/GiftBox";

export default function App(){
  return (
    <div className="min-h-screen py-6 flex justify-center">
      <div className="invite-container">
        <Header />
        <div className="invite-card">
          <WeddingInvitation />
          <DecorativeBorderFrame /> 
          <Details />
          <DecorativeBorderFrame /> 
          <LocationSection />
          <DecorativeBorderFrame /> 
          <RSVP />
          <HeroSection />
          <PhotoAlbumSection />
          <GiftBox/>
        </div>
        <div className="invite-footer">Thank you — Hẹn gặp bạn</div>
      </div>
    </div>
  );
}
