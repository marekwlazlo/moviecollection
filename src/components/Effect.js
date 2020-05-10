import React from 'react'

function Effect({ effect, openInfo }) {
	return (
		<div className="effect" onClick={() => openInfo(effect.imdbID)}>
			<img src={effect.Poster} alt ={effect.Title}/>
			<h3>{effect.Title}</h3>
		</div>
	)
}

export default Effect