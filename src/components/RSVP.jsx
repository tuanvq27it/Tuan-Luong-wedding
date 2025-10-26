import React, { useState } from 'react';
import DoubleHappiness from '../assets/songhi.png'; // Giả sử đã import chữ Hỷ

const RSVP = () => {
    const [name, setName] = useState('');
    const [attendance, setAttendance] = useState('yes');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý dữ liệu form ở đây (Gửi lên API, Google Sheet, hoặc console log)
        console.log({ name, attendance });
        alert(`Cảm ơn ${name}! Đã gửi xác nhận.`);
        // Reset form
        setName('');
        setAttendance('yes');
    };

    return (
        <div className="rsvp-section">
            <h2 className="rsvp-title">Xác nhận tham dự</h2>
            
            <img 
                src={DoubleHappiness} 
                alt="Double Happiness Symbol" 
                className="happiness-icon" 
            />

            <div className="rsvp-card">
                <form onSubmit={handleSubmit} className="rsvp-form">
                    
                    <label htmlFor="name-input" className="form-label">Họ và tên</label>
                    <input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên của bạn"
                        required
                        className="form-input"
                    />

                    <div className="radio-group">
                        <label className="form-label">Bạn sẽ tham dự chứ?</label>
                        
                        <label className="radio-option">
                            <input
                                type="radio"
                                value="yes"
                                checked={attendance === 'yes'}
                                onChange={() => setAttendance('yes')}
                            />
                            Có, tôi sẽ tham dự
                        </label>

                        <label className="radio-option">
                            <input
                                type="radio"
                                value="no"
                                checked={attendance === 'no'}
                                onChange={() => setAttendance('no')}
                            />
                            Tôi bận, rất tiếc không thể tham dự
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        GỬI XÁC NHẬN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RSVP;