import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Share.css';

function Share() {
    const shareUrl = window.location.href; // ดึงลิงก์ปัจจุบัน

    const handleFacebookShare = () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
    };
  
    const handleTwitterShare = () => {
      window.open(`https://twitter.com/intent/tweet?text=${shareUrl}`, '_blank');
    };
  
    const handleLineShare = () => {
      window.open(`https://social-plugins.line.me/share?url=${shareUrl}`, '_blank');
    };
  
    const handleCopyLink = () => {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          // แสดงข้อความแจ้งให้ทราบว่าคัดลอกสำเร็จ
        //   alert('ลิงก์ถูกคัดลอกแล้ว!');
        })
        .catch(err => {
          console.error('ไม่สามารถคัดลอกลิงก์ได้', err);
        });
    };
    return (
        <div className="regis-share">
            <div className="share-container"> {/* เพิ่ม div container */}
                <Link className="backto-home" to="/login" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    พูดคุยกับแม่สื่อ
                </Link>
                <div className="share-link">
                    <strong>SHAER :</strong>
                    <a className="img-link" onClick={handleFacebookShare}>
                        <img src="/assets/pic/facebook-app-symbol.png" width="18px" alt="Facebook" />
                    </a>
                    <a className="img-link" onClick={handleTwitterShare}>
                        <img src="/assets/pic/twitter.png" width="18px" alt="Twitter" />
                    </a>
                    <a className="img-link" onClick={handleLineShare}>
                        <img src="/assets/pic/line (2).png" width="18px" alt="Line" />
                    </a>
                    <a className="img-link" onClick={handleCopyLink}>
                        <img src="/assets/pic/network.png" width="18px" alt="Network" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Share;