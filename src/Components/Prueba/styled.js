import { styled } from '@stitches/react';

export const StyledParagraph = styled('p', {
	fontWeight: 'bold',
	color: 'BlueViolet',
	'&.parrafoGrande': {
		fontSize: '30px',
	},
	'&.personalizado': {
		color: 'Aquamarine',
		backgroundColor: 'Black',
		fontFamily: 'cursive',
		fontStyle: 'italic',
		textAlign: 'center',
	},
});
