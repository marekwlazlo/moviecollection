import React from 'react'

function Search ({ handleInput, searching }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="enter the name of the film, for example hobbit" 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={searching}
			/>
		</section>
	)
}

export default Search