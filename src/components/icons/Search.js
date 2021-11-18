import React from 'react'

const Search = color => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16 8C16 9.667 15.4901 11.2149 14.6178 12.4963L19.7072 17.5856C20.0977 17.9761 20.0977 18.6093 19.7072 18.9998L19.0001 19.7069C18.6095 20.0975 17.9764 20.0975 17.5858 19.7069L12.4966 14.6177C11.2151 15.4901 9.66711 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z'
				fill={color}
			/>
		</svg>
	)
}

export default Search
