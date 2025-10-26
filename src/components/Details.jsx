import React from 'react';
import HeartIcon from '../assets/calen_heart_1.png'; // Giả sử bạn có component/SVG cho trái tim
import img1 from '../assets/MCK00128.jpg';
import img2 from '../assets/MCK00475.jpg';
import img3 from '../assets/13.jpg';

const eventData = {
    time: "12:00",
    weekday: "Thứ 7",
    day: "01",
    month: "Tháng 11",
    year: "2025",
    // Data lịch có thể được sinh ra bằng logic JS thực tế
    calendarMonth: "11.2025"
};

const imageSrcs = [
    img1, img2, img3
];

const Details = () => {
    // Logic đơn giản để tạo mảng ngày
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    
    return (
        <div className="details-page-container">
            {/* Tiêu đề */}
            <h1 className="main-title">Trân Trọng Kính Mời</h1>

            {/* Gallery Ảnh */}
            <div className="photo-gallery">
                <img src={imageSrcs[0]} alt="Wedding Photo 1" className="gallery-img small-img" />
                <img src={imageSrcs[1]} alt="Wedding Photo 2" className="gallery-img large-img" />
                <img src={imageSrcs[2]} alt="Wedding Photo 3" className="gallery-img small-img" />
            </div>

            {/* Thông tin Sự kiện */}
            <p className="event-label">THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</p>
            <p className="event-label sub-label">Vào lúc</p>

            <div className="event-details-bar">
                <div className="detail-item time-detail">
                    {eventData.time}
                </div>
                
                <div className="detail-item date-detail">
                    <p className="weekday">{eventData.weekday}</p>
                    <p className="day-highlight">{eventData.day}</p>
                    <p className="month">{eventData.month}</p>
                </div>

                <div className="detail-item year-detail">
                    {eventData.year}
                </div>
            </div>

            {/* Widget Lịch */}
            <div className="calendar-widget">
                <div className="calendar-header">
                    {eventData.calendarMonth}
                </div>

                <div className="calendar-body">
                    <div className="day-names-row">
                        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                            <span key={day}>{day}</span>
                        ))}
                    </div>
                    
                    <div className="days-grid">
                        {/* Placeholder cho ngày mờ (ví dụ: bắt đầu từ thứ 7) */}
                        <div className="day-cell placeholder"></div>
                        <div className="day-cell placeholder"></div>
                        <div className="day-cell placeholder"></div>
                        <div className="day-cell placeholder"></div>
                        <div className="day-cell placeholder"></div>

                        {/* Số năm lớn, mờ ở trung tâm */}
                        <span className="year-overlay">{eventData.year}</span>
                        
                        {days.map(day => (
                            <div key={day} className={`day-cell ${day === 1 ? 'highlight' : ''}`}>
                                {day === 1 ? (
                                    <div className="highlight-day">
                                        <img src={HeartIcon} alt="" className='heart' />
                                        <span>{day}</span>
                                    </div>
                                ) : (
                                    <span>{day}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;