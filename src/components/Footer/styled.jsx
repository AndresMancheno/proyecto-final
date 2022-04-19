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

export const FooterH3SpanContainer = styled('span', {
  color : '#0000ff',
});

export const FooterPSpanContainer = styled('span', {
  display : 'block',
  fontWeight : 'normal',
  fontSize : '14px',
  lineHeight : '2',
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
    '&:before':{
      content : '|',
      fontWeight : '300',
      fontSize : '20px',
      left : '0',
      color: '#fff',
      display: 'inline-block',
      paddingRight : '5px',
    }
});

export const FooterPAContainer = styled('a', {
  color : '#0000ff',
  textDecoration : 'none',
});

export const FooterCompanyNameContainer = styled('p',{
  color : '#222',
  fontSize : '14px',
  fontWeight : 'normal',
  margin : '0',
});

export const FooterIContainer = styled('i',{
  backgroundColor : '#33383b',
  color : '#ffffff',
  fontSize : '25px',
  width : '38px',
  height : '38px',
  borderRadius :  '50%',
  textAlign : 'center',
  lineHeight : '42px',
  margin : '10px 15px',
  verticalAlign : 'middle',
});

export const FooterPContainer = styled('p', {
  display : 'inline-block',
  color : '#ffffff',
  fontWeight : '400',
});

export const FooterLink1Container = styled('a', {
  '&:before' : {
    content : 'none',
  }
});

export const FooterCompanyAboutContainer = styled('p', {
  lineHeight : '20px',
  color : '#92999f',
  fontSize : '13px',
  fontWeight : 'normal',
  margin : 0,
});

export const FooterCompanyAboutSpanContainer = styled('span', {
  display : 'block',
  color : '#ffffff',
  fontSize : '14px',
  fontWeight : 'bold',
  marginBottom : '20px',
});

export const FooterIcons = styled('div',{
  marginTop : '25px',
});

export const FooterIconsAContainer = styled('a', {
  display : 'inline-block',
  width: '35px',
  height : '35px',
  cursor : 'pointer',
  backgroundColor : '#33383b',
  borderRadius : '2px',
  fontSize : '20px',
  color : '#ffffff',
  textAlign : 'center',
  lineHeight : '35px',
  marginRight : '3px',
  margintBottom : '5px',
  
});
