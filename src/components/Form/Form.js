import './Form.css';
import React from 'react';


const Form = ( ) => {
  return (
		<form>
			
			<div className="button-container">
				<button className="home-button">Home</button>
				<button className="random-button">Random</button>
			</div>
			<div className="dropdown-container">
				<select className='movie-title-dropdown'>
				{/* add disabled to option value after quotes */}
					<option value="" > 
						Select a Movie
					</option>
				</select>
				<select className='wow-count-dropdown' placeholder='Choose "WOW" Count'>
					<option value="" > 
							Select 'WOW' Count
						</option>
				</select>
			</div>

		</form>
  )
}

export default Form;
