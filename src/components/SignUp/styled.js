import { styled } from '@nextui-org/react';

export const BackgroundColor = styled('div', {
	position: 'fixed',
	top: 0,
	left: 0,
	height: '100%',
	width: '100%',
	background:
		'radial-gradient(circle, rgba(244,137,141,1) 0%, rgba(66,139,166,1) 100%)',
});

export const MessageError = styled('span', {
	fontSize: '12px',
	textAlign: 'center',
	color: '#FE6D73',
});
