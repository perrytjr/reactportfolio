import React from 'react';
import Header from './Header';
import Contact from './Contact';
import data from './data';

const About = () =>{
return (
  <div>
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <div className="about_container">
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara}</p>
      <div className="about_contact">
        <Contact
          contactEmail={data.contactEmail}
          contactPara={data.contactPara}
          socialLinks={data.social}
        ></Contact>
      </div>
    </div>
  </div>
);
}
export default About;