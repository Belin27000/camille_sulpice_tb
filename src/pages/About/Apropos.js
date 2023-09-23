import React from 'react';
import './aPropos.scss'
import ProfilPicVs from '../../assets/images/profil/Profile_verySmall_200.webp'
import ProfilPicS from '../../assets/images/profil/Profile_small_768.webp'
import ProfilPicM from '../../assets/images/profil/Profile_medium_998.webp'
import ProfilPicL from '../../assets/images/profil/Profile_large_1262.webp'
import ProfilPicEl from '../../assets/images/profil/Profile_extraLarge_1507.webp'
import ProfilPicSl from '../../assets/images/profil/Profile_superLarge_2031.webp'
import ProfilPicXxL from '../../assets/images/profil/Profile_xxxxL_2100.webp'
import Button from '@/components/Buttons/Button/Button.js';
import ScrollToTop from '../../components/Buttons/ScrollButton/ScrollToTop.js';

const Apropos = () => {
    const age = ((new Date().getTime() - new Date("10 December 1985").getTime()) / 31536000000).toFixed(0)
    console.log(age);


    return (
        <div className='about'>
            <h2 className='about-title'>Qui suis-je ?</h2>
            <p className="about-text">Je suis Camille Sulpice, j’ai {age} ans. </p>

            <img className="about-img"
                src={ProfilPicXxL}
                sizes="(max-width: 2100px) 100vw, 2100px"
                srcSet={`
                ${ProfilPicVs} 200w,
                ${ProfilPicS} 768w,
                ${ProfilPicM} 998w,
                ${ProfilPicL} 1262w,
                ${ProfilPicEl} 1507w,
                ${ProfilPicSl} 2031w,
                ${ProfilPicSl} 2100w`}
                width='1469'
                height='1469'
                alt="Portrait de Camille Sulpice" />
            <h3>Formations :</h3>
            <ul className='about-list'>
                <li className='about-list-item'>Formation de formateurs / Ingénierie de formation - Septembre 2020 - Attribut conseils</li>
                <li className='about-list-item'>ADVP et la démarche éducative expérientielle en orientation - Décembre 2020 - Le patio formation
                </li>
                <li className='about-list-item'>Clinicien de la relation Niveau fondement - 2022-2023 - LACT</li>
                <li className='about-list-item'>Clinicien de la relation Niveau pratique - 2023-2024 - LACT</li>
                <li className='about-list-item'>Palo Alto dans le monde médical : Pathologies et douleurs chroniques - Septembre 2023 - Nathalie Goujon</li>
                <li className='about-list-item'>Masterclass dépression et troubles anxieux - Septembre 2023 - Giorgio Nardone</li>
            </ul>
            <p className="about-text">Depuis le début de ma carrière professionnelle, je suis dans l’accompagnement.</p>
            <p className="about-text">J’ai démarré ma carrière dans la gestion de projet informatique où ma mission était d’accompagner les collaborateurs de l’entreprise à définir un besoin, une solution technique, et de travailler ensuite avec les équipes informatiques au développement de la solution. Il me fallait aussi accompagner les collaborateurs dans la conduite du changement.
            </p>
            <p className="about-text">Je me suis ensuite reconverti vers l’accompagnement professionnel et entrepris un parcours de formations pour devenir Consultante en bilan de compétences, métier que j’exerce depuis 2016. Toujours dans une optique de développement, et de perfectionnement, j’ai souhaité continuer de me former afin d’avoir un accompagnement le plus précis possible, axé sur le relationnel, le cognitif, la prise en compte des émotions, et non uniquement sur l’utilisation d’outils ou de supports pédagogiques. Je voulais aller plus loin dans les bilans avec les personnes.
            </p>
            <p className="about-text">C’est pourquoi j’ai entrepris la formation de Praticien en thérapie brève stratégique et systémique, afin d’avoir une approche globale.
            </p>
            <h3 className='about-title-perso'>Et personnellement ? </h3>
            <p className="about-text">Au fur et à mesure de cette formation, des principes acquis, et des mises en pratique en bilan de compétences, j’ai ressenti l’envie d’aller plus loin, et de proposer d’autres types d’accompagnements concernant la sphère personnelle et non plus uniquement professionnelle.</p>
            <p className="about-text">Atteinte d’endométriose j’ai vécu les impacts de cette maladie, dans ma vie personnelle et professionnelle. C’est là que l’idée m’est venue, de dédier cette pratique aux femmes atteintes d’endométriose. C’est à ce moment que toute ma démarche à fait sens, c’est également un défi personnel, puisque cette maladie se transforme, pour moi, en une force et en quelque chose de plus positif.
            </p>
            <Button name={'Endométriose'} path={'/endometriose'} />
            <p className="about-text">Si vous êtes atteinte d’endométriose ou d’adénomyose ou d’une autre pathologie, je peux vous aider. </p>
            <Button name={'Prendre rendez-vous'} path={'/contact'} />
            <ScrollToTop />
        </div>
    );
};

export default Apropos;