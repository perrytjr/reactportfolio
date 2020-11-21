import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
const Home = ({name, paragraph, authorImage, contactEmail, socialLinks})=>{

    return(
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
            < h1 > Hello I 'm <br></br> <span>{name}</span></h1>
            <p>{paragraph}</p>
            <div className="social_links">
            <ul>
            <li>
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url}>
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
          </div>
          </div>

            <div className="image_container">
                <img src={authorImage} alt="Author"></img>
                <div className="bg"></div>
            </div>
            
        </div>
        
        
       
      
   
    </div>
    );
}

export default Home;