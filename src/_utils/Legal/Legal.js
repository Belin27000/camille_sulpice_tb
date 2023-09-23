import React from 'react';
import './legal.scss'
import ScrollToTop from '../../components/Buttons/ScrollButton/ScrollToTop.js';

const Legal = () => {
    return (
        <div className='Legal'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - mentions légales</h1>
            <h2>SITE INTERNET</h2>
            <p>Le site www.camille-sulpice.fr est créé par Camille Sulpice et réalisé par <a href="https://www.linkedin.com/in/yannlecerf" rel="noreferrer" target="_blank">Yann LECERF - Conseils & Tech</a>.</p>
            <p>Hébergement par OVH SAS au capital de 10 000 000 € RCS Roubaix – Tourcoing 424 761 419 00045 N° TVA : FR 22 424 761 419 Siège social : 2, rue Kellermann – 59100 Roubaix – France.</p>
            <br />
            <h2>ENTREPRISE : </h2>
            <p>Camille Sulpice</p>
            <p>Siret : 830 242 590 00024</p>
            <p>Adresse : 3 bis route de Nemours 77690 La Genevraye</p>
            <br />
            <h2>DONNÉES PERSONNELLES</h2>
            <h3>1/ NATURE DES DONNÉES PERSONNELLES</h3>
            <p>Les informations recueillies sont :</p>
            <p>Les données provenant du formulaire de contact ou de demande de devis (nom, prénom, adresse, téléphone, mail, société …).</p>
            <h3>2/ UTILISATION DES DONNÉES</h3>
            <p>Les informations recueillies me permettent :</p>
            <p>De vous recontacter. </p>
            <p>En aucun cas vos données personnelles ne sont transmises à un tiers.</p>
            <p>Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en nous adressant un mail via le formulaire de contact ou en écrivant à Camille Sulpice 3Bis, route de nemours 77690 La Genevraye</p>
            <p>Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.</p>
            <ScrollToTop />
        </div>
    );
};

export default Legal;