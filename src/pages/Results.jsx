import {React, useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom'

import './Pages.scss'

function Results() {

const [serchedRecipes, setSerchedRecipes] = useState([]);
const [error, setError] = useState(null);

let params = useParams();

useEffect(()=> {
    getResults(params.search);
},[params.search])

const  getResults = async(name) => {
	await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b7f0c04a26f74e1f8162d7dbdee250f9&query=${name}&number=12`)
	.then(res => {
		if(!res.ok){
			throw Error("Could not fetch data from API");
		}
		return res.json();
	})
	.then(recipes => {
		setSerchedRecipes(recipes.results); 
		setError(null);
	})
	.catch(err => {
		setError(err.message)
	})
}

  return (
		<div className='cuisine-wrapper'>
			{error && <div>{error}</div>}
			{serchedRecipes.map((item) => {
				return(
					<div className='card-cuisine-wrapper' key={item.id}>
						<Link to={'/recipe/'+ item.id}> 
							<img src={item.image} alt="item.title" />
							<h4>{item.title}</h4>
						</Link>
					</div>
				)
			})}
		</div>
  )
}

export default Results