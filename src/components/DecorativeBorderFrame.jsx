// Trong file component viền
const DecorativeBorderFrame = ({ children }) => {
    return (
        <div className="decorative-border-frame">
            {/* Element phụ để tạo chấm tròn bên trái */}
            <div className="left-dot"></div> 
            
            {/* Nội dung chính của thiệp */}
            {children}
        </div>
    );
};

export default DecorativeBorderFrame;