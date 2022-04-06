import { styled } from '@nextui-org/react';

export const FooterContainer = styled('footer',{
  background : '#666',
  boxShadow : '0 1px 1px 0 rgba(0,0,0,0,0.12)',
  boxSizing : 'border-box',
  width : '100%',
  textAlign : 'left',
  font : 'bold 16px sans-serif',
  padding : '55px 50px',
});

export const FooterLeftContainer = styled('div', {
  display : 'inline-block',
  verticalAlign : 'top',
  width : '40%',
});

export const FooterCenterContainer = styled('div',{
  display : 'inline-block',
  verticalAlign : 'top',
  width : '35%',
});

export const FooterRightContainer = styled('div', {
  display : 'inline-block',
  verticalAlign : 'top',
  width : '20%',
});

export const FooterH3Container = styled('h3', {
  color : '#ffffff',
  font : 'normal 36px Open Sans, cursive',
  margin : 0,
});

export const FooterSpanContainer = styled('span', {
  color : '#0000ff',
});

export const FooterLinksContainer = styled('p',{
  color : '#ffffff',
  margin : '20px 0 12px',
  padding : '0',
});

export const FooterAContainer = styled('a',{
  display : 'inline-block',
  lineHeight : '1.8',
  fontWeight : '400',
  textDecoration : 'none',
  color : 'inherit',
});

export const FooterCompanyNameContainer = styled('p',{
  color : '#222',
  fontSize : '14px',
  fontWeight : 'normal',
  margin : '0',
});

export const FooterIContainer = styled('i',{
  
});
