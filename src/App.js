import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Quotes from './components/SimpsonsQuotes';
import {useState, useEffect} from 'react';
import Spinner from './components/Spinner';

function App() {
	const [character, setCharacter] = useState({});
	const [loadSpinner, setLoadSpinner] = useState(false);

	useEffect(()=>{
		consultAPI();
	}, []);

	const consultAPI = async() =>{
		setLoadSpinner(true);
		const answer = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
		const data = await answer.json();
		setTimeout(()=>{
			setCharacter(data[0]);
			setLoadSpinner(false);
		}, 2000);
	};

	return(
	  	<section className='container my-5 d-flex flex-column align-items-center'>
	  		<img src={process.env.PUBLIC_URL+'logo.png'} alt="logo simpsons" className="w-75 img-fluid my-4"/>
	  		<Button variant="warning" className="text-light mb-5" onClick={()=> consultAPI()}>Obtener frase</Button>
		  	{loadSpinner ? <Spinner/> : <Quotes character={character}/>}
	  	</section>
	);
}

export default App;
