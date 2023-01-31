import {React, useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import './Pages.scss';

function Cuisine() {

	const [cuisine, setCuisine] = useState([]);
	const [error, setError] = useState(null);
	

	let params = useParams();

	useEffect(()=> {
		getCuisine(params.type);
	},[params.type])

	const  getCuisine = async(name) => {
		await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b7f0c04a26f74e1f8162d7dbdee250f9&cuisine=${name}&number=12`)
			.then(res => {
				if(!res.ok){
					throw Error("Could not fetch data from API");
				}
				return res.json();
			})
			.then(recipes => {
				setCuisine(recipes.results); 
				setError(null);
			})
			.catch(err => {
				setError(err.message)
			})
		}

  return (
		
    <motion.div className='cuisine-wrapper' animate={{opacity: 1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
			{error && <div>{error}</div>}
			{cuisine.map((item) => {
				return(
					<div className='card-cuisine-wrapper' key={item.id}>
						<Link to={'/recipe/'+ item.id}> 
							<img src={item.image} alt="item.title" />
							<h4>{item.title}</h4>
						</Link>
					</div>
				)
			})}
    </motion.div>
  )
}

export default Cuisine