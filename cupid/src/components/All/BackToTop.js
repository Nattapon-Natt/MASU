import React, { useEffect, useState } from 'react';
import '../CSS/BackToTop.css';

function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (1000 / 30);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <>
            {showButton && (
                <div
                    className="back-to-top"
                    onClick={scrollToTop}
                >
                    <img src="/assets/pic/idol-arrow.png" alt="Back to Top" />
                </div>
            )}
        </>
    );
}

export default BackToTop;