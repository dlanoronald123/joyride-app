import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import './Component.scss'


function Dessert() {

	const [dessert, setDessert] = useState([]);
	const [error, setError] = useState(null);

	useEffect(()=> {
		setTimeout(()=> {
				fetch(`https://api.spoonacular.com/recipes/random?apiKey=8010ba1fdf814807b31b287c16b4e96a&number=12&tags=dessert`)
					.then(res => {
						if(!res.ok){
							throw Error("Could not fetch data from API");
						}
						return res.json();
					})
					.then(data => {
						setDessert(data.recipes);
						setError(null);
					})
					.catch(err => {
						setError(err.message);
					})
		}, 1000)
	}, [])

return (
    <div>
				<div className='dessert-wrapper'>
				<h3 className='container-title'>Sweet Indulgence</h3>
				{error && <div>{error}</div>}
				<Splide options={{
					autoWidth: true,
					arrows: false,
					pagination: false,
					drag: 'free',
					gap: '4rem'
				}}>
				{dessert.map((recipe) => {
					return(
						<SplideSlide key={recipe.id}> 
						<div className='card-wrapper'>
						<Link to={'/recipe/'+ recipe.id}>
							<h1>{recipe.title}</h1>
							<img src={recipe.image} alt={recipe.title} />
							<Gradient/>
						</Link>
						</div>
						</SplideSlide>
					)
				})}
				</Splide>
				</div>
		</div>
  )
}

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default Dessert