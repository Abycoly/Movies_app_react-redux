import React from 'react'

function Button({ filter }) {
	return (
		<div>
			{/* TEST DRAME*/}
			<button type="button" onClick={() => filter("Comedy")}>drame</button>
		</div>
	)
}

export default Button
