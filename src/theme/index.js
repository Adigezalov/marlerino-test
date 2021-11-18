import {createTheming} from '@callstack/react-theme-provider'

export const index = {
	palette: {
		background: '#D2D2D2',
		black: {
			w100: '#6F6F72',
			w200: '#4B4C4F',
			w300: '#2F3033',
			w400: '#121417',
		},
		white: {
			w100: '#C4C2C4',
			w200: '#DDDBDC',
			w300: '#EAE8E9',
			w400: '#F6F4F5',
		},
		blue: {
			w100: '#C6CCEC',
			w200: '#95A4E3',
			w300: '#657CDA',
			w400: '#3454D1',
		},
		yellow: {
			w100: '#F8E5BB',
			w200: '#F9D682',
			w300: '#FBC748',
			w400: '#FCB80E',
		},
		green: {
			w100: '#D3ECC1',
			w200: '#B1E48D',
			w300: '#8EDC59',
			w400: '#6BD425',
		},
		red: {
			w100: '#F5C8BD',
			w200: '#F59B84',
			w300: '#F46F4C',
			w400: '#F34213',
		},
	},
	typography: {
		h1: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '24pt',
			lineHeight: '24pt',
			fontWeight: 600,
		},
		h2: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '20pt',
			lineHeight: '20pt',
			fontWeight: 600,
		},
		h3: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '16pt',
			lineHeight: '16pt',
			fontWeight: 600,
		},
		h4: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '14pt',
			lineHeight: '14pt',
			fontWeight: 600,
		},
		h5: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '12pt',
			lineHeight: '12pt',
			fontWeight: 600,
		},
		p1: {
			fontFamily: 'Gilroy-Regular',
			fontSize: '20pt',
			lineHeight: '20pt',
			fontWeight: 400,
		},
		p2: {
			fontFamily: 'Gilroy-Regular',
			fontSize: '16pt',
			lineHeight: '16pt',
			fontWeight: 400,
		},
		p3: {
			fontFamily: 'Gilroy-Regular',
			fontSize: '14pt',
			lineHeight: '14pt',
			fontWeight: 400,
		},
		p4: {
			fontFamily: 'Gilroy-Regular',
			fontSize: '12pt',
			lineHeight: '12pt',
			fontWeight: 400,
		},
		l1: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '20pt',
			lineHeight: '20pt',
			fontWeight: 600,
			textDecoration: 'underline',
		},
		l2: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '16pt',
			lineHeight: '16pt',
			fontWeight: 600,
			textDecoration: 'underline',
		},
		l3: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '14pt',
			lineHeight: '14pt',
			fontWeight: 600,
			textDecoration: 'underline',
		},
		l4: {
			fontFamily: 'Gilroy-Medium',
			fontSize: '12pt',
			lineHeight: '12pt',
			fontWeight: 600,
			textDecoration: 'underline',
		},
	},
	dimensions: {
		pv: 40,
		ph: 48,
		width_menu: 280,
	},
}

export const {ThemeProvider, withTheme, useTheme} = createTheming(index)
