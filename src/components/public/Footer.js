import React from 'react';
import '@/components/public/footer.scss'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='Footer'>
            <div className='Footer-container'>
                <p>© {year} C.SULPICE</p>
                <p>Made with <FaHeart /> By <a href="https://www.linkedin.com/in/yannlecerf" rel="noreferrer" target="_blank">Conseils & Tech</a></p>
            </div>
        </div>
    );
};

export default Footer;