import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Leagues from '../Leagues/Leagues';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(response=> response.json())
        .then(data => setLeagues(data.leagues.slice(0, 200)));        
    },[])
    
    return (
        <div className="main">
            <div className="header">
                 <h1 className="title">Leagues of World</h1>
            </div>
            <Container>
                <Row className="leagues">
                    {
                        leagues.map(league=> <Col md={4} className="py-3 card-item"> <Leagues league = {league} key={league.idLeague}></Leagues></Col>)
                    }  
                </Row>
            </Container>
        </div>

    );
};

export default Home;