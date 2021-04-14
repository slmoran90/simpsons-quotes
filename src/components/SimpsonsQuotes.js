import React from 'react';
import Card from 'react-bootstrap/Card';

const Quotes = (props)=>{
	return(
		<Card className="w-100 my-5">
			<Card.Body>
				<div className="row">
					<div className="col-sm-12 col-md-4">
						<img src={props.character.image} alt={props.character.character}/>
					</div>
					<div className="col-sm-12 col-md-8">
						<Card.Title>{props.character.character}</Card.Title>
						<Card.Text>{props.character.quote}</Card.Text>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Quotes;
