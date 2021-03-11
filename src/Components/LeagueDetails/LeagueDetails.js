import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImage from '../../Assets/male.png';
import femaleImage from '../../Assets/female.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import facebookImage from '../../Assets/Facebook.png';
import twitterImage from '../../Assets/Twitter.png';
import youtubeImage from '../../Assets/YouTube.png';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [details, setDetails] = useState([]);
    const {strLeague, intFormedYear, strCountry, strSport, strBadge, strGender, strDescriptionEN, strTwitter, strYoutube} = details;
    
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(response => response.json())
        .then(data => setDetails(data.leagues[0]));
    }, [idLeague]);

    return (
        <div>
            <div className="header">
                <div className="d-flex justify-content-center">
                    <img className="logo" style={{height:'300px'}} src={strBadge} alt=""/>
                </div>
            </div>
            <Container fluid>
                <div className="mx-auto league-info" style={{width:'90%', backgroundColor:'#845EC2', borderRadius:'30px'}}>
                    <Row classnames="test">
                        <Col md={7}>
                        <div className="m-5 text-white banner-info">
                            <h1 style={{fontWeight:'bold'}} className="pb-4">{strLeague}</h1>
                            <h3> <FontAwesomeIcon icon={faCheckCircle} /> <span style={{marginLeft:'.8rem'}}>Founded:</span> {intFormedYear}</h3>
                            <h3> <FontAwesomeIcon icon={faFlag} /> <span style={{marginLeft:'.8rem'}}>Country:</span> {strCountry}</h3>
                            <h3> <FontAwesomeIcon icon={faFutbol} /> <span style={{marginLeft:'.8rem'}}>Sport Type:</span> {strSport}</h3>
                            <h3> <FontAwesomeIcon icon={faMars} /> <span style={{marginLeft:'.8rem'}}>Gender:</span> {strGender}</h3>
                        </div>
                        </Col> 
                        <Col md={5}>
                        <div className="d-flex justify-content-end my-4">
                            {
                                strGender === "Male"?
                                <img className="banner-img" style={{height:'300px', marginRight:'2rem'}} src={maleImage} alt=""/>:
                                <img className="banner-img" style={{height:'300px', marginRight:'2rem'}} src={femaleImage} alt=""/>
                            }
                        </div>
                        </Col>                       
                    </Row>
                </div>
                <div className="mx-auto my-5 description" style={{width:'90%', fontSize:'1.5rem'}}>
                    <p className="text-secondary" style={{textAlign:'justify', lineHeight:'1.8'}}>{strDescriptionEN}</p>
                </div>
                <div className="mx-auto my-5" style={{width:'90%'}}>
                    <div className="d-flex justify-content-center">
                        <div className="social">
                           <a target="_blank" href={`https://${strTwitter}`} rel="noreferrer"> <img style={{height:'100px', marginLeft:'1rem'}} src={twitterImage} alt=""/> </a>
                        </div>
                        <div className="social">
                            <a target="_blank" href={`https://${strTwitter}`} rel="noreferrer"><img style={{height:'100px', marginLeft:'1rem'}} src={facebookImage} alt=""/></a>
                        </div>
                        <div className="social">
                            <a target="_blank" href={`https://${strYoutube}`} rel="noreferrer"><img style={{height:'100px', marginLeft:'1rem'}} src={youtubeImage} alt=""/></a>
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
    );
};

export default LeagueDetails;