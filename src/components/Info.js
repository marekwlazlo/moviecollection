import React from 'react'

function Info({ selected, closeInfo }) {
	return (
		<section className="info">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>Description: <br></br><br></br>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closeInfo}>close</button>
			</div>
		</section>
	)
}

export default Info