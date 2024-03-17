import React from 'react';
import './Contact.css';
import logoInstagram from './logoInstagram.png';
import logoLinkedin from './logoLinkedin.png';

export default function Contact() {
  return (
    <section id='Contato' className='contact'>
        <div className='container'>
            <div className='contact-socials'>
                <h4>Redes sociais</h4>
                <ul>
                    <li><a target='_blank' rel='noreferrer' href='https://www.instagram.com/mateusschulle'><img src={logoInstagram} alt='Logo do Instagram'></img></a></li>
                    <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mateusschulle'><img src={logoLinkedin} alt='Logo do Linkedin'></img></a></li>
                </ul>
            </div>
            <div className='contact-number'>
            <h4>Contato</h4>
                <ul>
                    <li>Telefone e Whatsapp: (47)996755643</li>
                    <li>Email: mateusschulleleite@gmail.com</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
