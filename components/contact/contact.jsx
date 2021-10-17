import React from 'react';
import Image from 'next/image'

import MessageBox from '../messageBox/messageBox';
import Dp from '../../public/contact/dp.png';
import LinkedIn from '../../public/contact/LinkedIn.svg'
import Facebook from '../../public/contact/facebook.svg'
import Git from '../../public/contact/git.svg'
import Instagram from '../../public/contact/instagram.svg'
import Email from '../../public/contact/email.svg'

import Styles from './contact.module.css';

const calculateAge = (birthYear) => { 
  const ageDifMs = Date.now() - birthYear;
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - birthYear);
}

const  experience = () => {
  const sdt = new Date('2019-06-27');
  const difdt = new Date(new Date() - sdt);
  const month = difdt.getMonth()+1 > 1 ? difdt.getMonth()+1 : ''
  return ((difdt.toISOString().slice(0, 4) - 1970) + " Years,       " + (month) + `${month ? ' Months' : ''}` );
}

const data = [{
  field: 'AGE',
  value: calculateAge(1996)
},
{
  field: 'ADDRESS',
  value: 'Kaippanal(H), Koovalloor P.O, Ernakulam, Kerala, India, PIN:686671 '
},
{
  field: 'E-MAIL',
  value: 'kv.abhil96@gmail.com'
},
{
  field: 'PHONE',
  value: '+91-7012366845'
},
{
  field: 'EXPERIENCE',
  value: experience()
}];

const socialMedia = [
  {
    image: LinkedIn,
    link: 'https://www.linkedin.com/in/abhil-vidhyadharan-950b65197/'
  },
  {
    image:  Facebook,
    link: 'https://www.facebook.com/kv.abhil/'
  },
  {
    image:  Git,
    link: 'https://github.com/Abhilkv?tab=repositories'
  },
  {
    image: Instagram,
    link: ''
  },
  {
    image: Email,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kv.abhil96@gmail.com'
  }
]

const About = () => {
    return (
      <div className={Styles.contactContainer} id="contact">
        <div className={Styles.dpImage}>
           <Image src={Dp} alt="Abhil" height={200} width={200} />
        </div>
        <div className={Styles.details}>
          <MessageBox message="HELLO" />
          <div className={Styles.description}>
            <span className={Styles.name}>I'm <b>Abhil K Vidhyadharan</b></span>
            <span className={Styles.position}>Software Engineer</span>
            <span className={Styles.divider} />
          </div>
          <div className={Styles.contactInfo}>
            {data.map((item) => (
              <div key={item.field} className={Styles.fieldValue}>
                <span className={Styles.field}>
                  {item.field}
                </span>
                <span className={Styles.value}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className={Styles.socialMedia}>
            {socialMedia.map((media) => (
              <a key={media.link} href={media.link} className={Styles.link} target="_blank" rel="noreferrer">
                <Image src={media.image} alt="Social Media" height={30} width={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
};

export default About;