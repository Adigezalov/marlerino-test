import React from 'react'

const Sort = color => {
	return (
		<svg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1V2C20 2.55228 19.5523 3 19 3H1C0.447716 3 0 2.55228 0 2V1Z'
				fill={color}
			/>
			<path
				d='M0 14C0 13.4477 0.447715 13 1 13H9C9.55228 13 10 13.4477 10 14V15C10 15.5523 9.55229 16 9 16H1C0.447716 16 0 15.5523 0 15V14Z'
				fill={color}
			/>
			<path
				d='M1 6.5C0.447715 6.5 0 6.94772 0 7.5V8.5C0 9.05228 0.447716 9.5 1 9.5H14C14.5523 9.5 15 9.05229 15 8.5V7.5C15 6.94772 14.5523 6.5 14 6.5H1Z'
				fill={color}
			/>
		</svg>
	)
}

export default Sort
