import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router';

const Leagues = (props) => {
    const {strLeague, strSport, idLeague} = props.league;

    const history = useHistory();
    const handleDetails = (idLeague) =>{
        history.push(`/league-details/${idLeague}`)
    }

    return (
        <div>
            <Card style={{ width: '20rem', height: '20rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title className="text-center text-dark" style={{fontSize:'2rem', fontWeight:'bold'}}>{strLeague}</Card.Title>
                    <Card.Text className="text-secondary" style={{position:'absolute', bottom:'8rem', left:'6rem'}}>Sports Type: {strSport}</Card.Text>
                    <Button style={{position:'absolute', bottom:'1rem', left:'7rem'}} onClick={()=>handleDetails(idLeague)} variant="primary">Explore <span className="mx-2"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Leagues;