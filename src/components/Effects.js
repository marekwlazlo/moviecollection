import React from 'react'

import Effect from './Effect'

function Effects ({ effects, openInfo }) {
	return (
		<section className="effects">
			{effects.map(effect => (
				<Effect key={effect.imdbID} effect={effect} openInfo={openInfo} />
			))}
		</section>
	)
}

export default Effects