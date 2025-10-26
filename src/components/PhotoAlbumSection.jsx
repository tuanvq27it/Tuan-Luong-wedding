import React from 'react';
// Giả sử bạn đã import các assets này
import TopLeftPhoto from '../assets/MCK00216.jpg'; 
import TopRightPhoto from '../assets/1.jpg';
import MiddlePhoto from '../assets/12.jpg';
import BottomLeftPhoto from '../assets/14.jpg';
import BottomRightPhoto from '../assets/7.jpg';

const PhotoAlbumSection = ({ chapterTitle, firstQuote, secondQuote }) => {
    
    // Dữ liệu mặc định
    const defaultChapterTitle = "Chapter Three";
    const defaultFirstQuote = "Em không phải là điểm cuối của tình yêu, mà là động lực nguyên sơ của nó. Vì em, anh đã yêu thế giới này.";
    const defaultSecondQuote = "* Giữa thế gian huyền náo, em là điều duy nhất đáng giá. *";

    return (
        <div className="album-section-container">
            
            {/* Khối 1: Trích dẫn mở đầu (Nền trắng) */}
            <div className="album-quote-block top-quote-block">
                <p className="album-quote script-font">
                    {firstQuote || defaultFirstQuote}
                </p>
            </div>

            {/* Khối 2: 2 ảnh nhỏ hàng trên (Nền đỏ đậm) */}
            <div className="album-photo-row top-row">
                <div className="album-photo-item small-photo-item">
                    <img src={TopLeftPhoto} alt="Album Photo 1" className="album-img-top" />
                </div>
                <div className="album-photo-item small-photo-item">
                    <img src={TopRightPhoto} alt="Album Photo 2" className="album-img-top" />
                </div>
            </div>

            {/* Khối 3: 1 ảnh lớn giữa (Nền đỏ đậm) */}
            <div className="album-photo-row middle-row">
                <div className="album-photo-item large-photo-item">
                    <img src={MiddlePhoto} alt="Album Photo 3" className="album-img" />
                </div>
            </div>
            
            {/* Khối 4: Tiêu đề chương và Trích dẫn giữa (Nền trắng) */}
            <div className="album-quote-block middle-title-block">
                <h3 className="chapter-title script-font">
                    {chapterTitle || defaultChapterTitle}
                </h3>
                <p className="album-quote serif-font">
                    {secondQuote || defaultSecondQuote}
                </p>
            </div>

            {/* Khối 5: 2 ảnh nhỏ hàng dưới (Nền đỏ đậm) */}
            <div className="album-photo-row bottom-row">
                <div className="album-photo-item small-photo-item">
                    <img src={BottomLeftPhoto} alt="Album Photo 4" className="album-img" />
                </div>
                <div className="album-photo-item small-photo-item">
                    <img src={BottomRightPhoto} alt="Album Photo 5" className="album-img" />
                </div>
            </div>

        </div>
    );
};

export default PhotoAlbumSection;