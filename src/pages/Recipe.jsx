/* eslint-disable react-hooks/exhaustive-deps */
import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Pages.scss';


function Recipe() {

  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('details');
  const [error, setError] = useState(null);


  useEffect(()=> {
    fetchData(params.name);
  },[params.name])

  const fetchData = async() =>{
    await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=b7f0c04a26f74e1f8162d7dbdee250f9`)
    .then(res => {
      if(!res.ok){
        throw Error("Could not fetch data from API");
      }
      return res.json();
    })
    .then(recipeInfo => {
      setDetails(recipeInfo); 
      setError(null);
    })
    .catch(err => {
      setError(err.message)
    })
  }

  return (
    <div className='detail-wrapper'>
      {error && <div>{error}</div>}
      <div className='image-wrapper'>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <div className='info-wrapper'>
        <div className='button-wrapper'>
          <button className={activeTab === 'details' ? 'active' : ''} onClick={()=> setActiveTab('details')}>Details</button>
          <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</button>
        </div>
        {activeTab === 'details' && (
          <div>
            <h3 className="recipe-data"  dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h2>How to Cook</h2>
            <h3 className="recipe-data" dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={Math.random()}>{ingredient.original}</li>
            ))}
          </ul>
         )}
      </div>
      
    </div>
  )
}

export default Recipe