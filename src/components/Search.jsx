import { React,useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import './Component.scss'

function Search() {

	const [input, setInput] = useState('');
	const navigate =  useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/results/'+ input);
	} 


  return (
		<div className='form-wrapper'>
			<form onSubmit={submitHandler} className='form'>
				<div>
					<FaSearch></FaSearch>
					<input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/>
				</div>
			</form>
		</div>
  )
}

export default Search