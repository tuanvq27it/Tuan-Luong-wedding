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
                Tại Nhà Trai: Thôn Ngũ Sơn, Xã Thạch Thất, Hà Nội <br/>
            </p>

            <div className="map-container mb-8">
                {/* Placeholder cho Google Maps Iframe/Component */}
                <iframe
                    title="wedding-location-map"
                    className="google-map-embed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.816638993023!2d105.55418706215664!3d21.062013398474186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134598267cd42f9%3A0x843730b63590812c!2zQ2jDuWEgTmfFqSBTxqFu!5e0!3m2!1sen!2s!4v1761574575084!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <p className="location-address mt-8">
                Tại Nhà Gái: Thôn Đọ, Xã Nghĩa Trụ, Văn Giang <br/>
            </p>

            <div className="map-container">
                {/* Placeholder cho Google Maps Iframe/Component */}
                <iframe
                    title="wedding-location-map"
                    className="google-map-embed"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4459.081221559888!2d106.00410699999999!3d20.935886999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU2JzA5LjIiTiAxMDbCsDAwJzE0LjgiRQ!5e1!3m2!1svi!2s!4v1761574622954!5m2!1svi!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default LocationSection;