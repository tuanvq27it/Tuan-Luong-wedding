import React from 'react';
import { MapPin } from 'lucide-react'; // Giả sử sử dụng Lucide React cho icon (hoặc FontAwesome/SVG)

const LocationSection = () => {
    return (
        <div className="location-section">
            <h2 className="location-title">
                Địa Điểm Tổ Chức 
                {/* Icon Map Pin */}
                <MapPin size={24} className="map-icon" /> 
            </h2>
            
            <p className="location-address">
                Thôn Ngũ Sơn, Xã Thạch Thất, Hà Nội <br/>
            </p>

            <div className="map-container">
                {/* Placeholder cho Google Maps Iframe/Component */}
                <iframe
                    title="wedding-location-map"
                    className="google-map-embed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8465170364966!2d105.8459223!3d21.0118501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7979148b1d%3A0x6b829424c58f0a0d!2zNTIgUC4gTWnhu4V1IMSQw6FtLCBN4buFIFRyaSwgSGFpIELDoA!5e0!3m2!1svi!2s!4v1635393000000"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default LocationSection;