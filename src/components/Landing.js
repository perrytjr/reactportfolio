import React from 'react';
import Header from './Header'
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

import data from './data';

const Landing = ()=>{
    return(<div className="App">
    <Header name={data.name} contactEmail = {data.contactEmail}>  </Header>
      <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage} socialLinks = {data.social}></Home>
      <Work projects={data.projects}></Work>
      <Contact contactEmail = {data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social}></Contact>
    </div>)
}

export default Landing
