import React from 'react';
import '@/pages/Accompagnement/accompagnement.scss'

import smileyVs from '@/assets/images/Emotion/smileysheet_verySmall_190.webp'
import smileyS from '@/assets/images/Emotion/Emotions_small_296.webp'
import smileyM from '@/assets/images/Emotion/Emotions_medium_381.webp'
import smileyL from '@/assets/images/Emotion/Emotions_large_454.webp'
import smileyVl from '@/assets/images/Emotion/smileysheet_veryLarge_500.webp'
import Button from '@/components/Buttons/Button/Button.js';
import ScrollToTop from '../../components/Buttons/ScrollButton/ScrollToTop.js';

const Accompagnement = () => {
    return (
        <div className='accompagnement'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - accueil</h1>

            <h2 className='accompagnement-title' id='ancrage'>Accompagnement</h2>
            <p className="accompagnement-text">L’accompagnement que je vous propose est basé sur le modèle de Palo Alto, ensemble nous définissons votre problème, nous étudions son fonctionnement, nous regardons comment il se maintient puis nous définissons un objectif à atteindre.</p>
            <p className="accompagnement-text">La thérapie brève stratégique et systémique est une thérapie dynamique et participative, vous n’êtes pas passif mais actif dans le travail thérapeutique et dans le changement. En effet, entre chaque séance je peux vous prescrire des “tâches” à effectuer qui vous permettront de vivre des expériences différentes, de modifier la vision de votre problème, et de mettre en place des stratégies alternatives parfois à l'opposé de ce qui a déjà été tenté. </p>
            <p className="accompagnement-text">Tout cela dans l'objectif qu'un changement durable s'installe.</p>
            <div className='accompagnement-imgContainer'>
                <img
                    src={smileyL}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    srcSet={`
                ${smileyVs} 300w,
                ${smileyS} 296w,
                ${smileyM} 381w,
                ${smileyL} 454w,
                ${smileyVl}  500w`
                    }
                    width='1280'
                    height='853'
                    alt="arbre sortant a peine de terre" className="accompagnement-img" />
            </div>
            <p className="accompagnement-text">Ce modèle de thérapie s’attache à prendre en compte vos émotions, vos pensées, votre vision du monde, votre contexte relationnel, dans l'ici et maintenant, c’est pourquoi il n’existe pas une solution unique pour un problème, chaque situation, bien qu’elle ait des éléments communs, doit faire l’objet d’une analyse précise et particulière.</p>
            <p className="accompagnement-text">Bien que son nom indique qu’elle soit “brève” elle va de 1 à 10 séances espacées d’environ 15 jours, en fonction des situations et peut donc s’étaler sur plusieurs mois.</p>
            <p className="accompagnement-text">Afin de rester accessible au plus grand nombre, je vous propose des séances en visio via l’application Zoom ou Google meet. Ces séances durent entre 45 minutes et 1 heure.</p>
            <p className="accompagnement-text_price">1 séance individuelle de thérapie brève : 60€ </p>
            <p className="accompagnement-text_rdv">J'ai pris rendez-vous, comment cela va se passer ?</p>
            <ul className='accompagnement-list'>
                <li>Le règlement par virement ou paypal vous sera demandé avant le rendez-vous.</li>
                <li>Vous recevez un lien pour rejoindre la visioconférence le jour du rendez-vous.</li>
                <li>La veille ou le jour de votre rendez-vous, vous recevez un questionnaire en ligne à remplir.</li>
                <li>A l’heure du rendez-vous, nous nous rejoignons en visio et la séance démarre.</li>
            </ul>
            <Button name={'Prendre rendez-vous'} path={'/contact'} />
            <ScrollToTop />
        </div>
    );
};

export default Accompagnement;