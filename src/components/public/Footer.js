import React from 'react';
import '@/components/public/footer.scss'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='Footer'>
            © {year} C.SULPICE
        </div>
    );
};

export default Footer;