import { FooterAContainer, FooterCenterContainer, FooterCompanyAboutContainer, FooterCompanyAboutSpanContainer, FooterCompanyNameContainer, FooterContainer, FooterH3Container, FooterH3SpanContainer, FooterIcons, FooterIconsAContainer, FooterIContainer, FooterLeftContainer, FooterLinksContainer, FooterPAContainer, FooterPContainer, FooterPSpanContainer, FooterRightContainer } from './styled';



export default function Footer(){
    return (
        <>
            <FooterContainer>

                <FooterLeftContainer>

                    <img src='../images/logo.png'></img>

                    <FooterLinksContainer>
                        <a href="#" className="link-1">Home</a>
        
                        <FooterAContainer>Blog</FooterAContainer>
    
                        <FooterAContainer>Pricing</FooterAContainer>
    
                        <FooterAContainer>About</FooterAContainer>
        
                        <FooterAContainer>Faq</FooterAContainer>
        
                        <FooterAContainer>Contact</FooterAContainer>
                    </FooterLinksContainer>

                    <FooterCompanyNameContainer>Company Name © 2015</FooterCompanyNameContainer>
                </FooterLeftContainer>

                <FooterCenterContainer>

                    <div>
                        <FooterIContainer></FooterIContainer>
                        <FooterPContainer><FooterPSpanContainer>C/Andres es un bobin Nº 69</FooterPSpanContainer> Petrer, Alicante</FooterPContainer>
                    </div>

                    <div>
                        <FooterIContainer></FooterIContainer>
                        <FooterPContainer>+34 674117895</FooterPContainer>
                    </div>

                    <div>
                        <FooterIContainer></FooterIContainer>
                        <FooterPContainer><FooterPAContainer>rglnotes@gmail.com</FooterPAContainer></FooterPContainer>
                    </div>

                </FooterCenterContainer>

                <FooterRightContainer>

                    <FooterCompanyAboutContainer>
                    <FooterCompanyAboutSpanContainer>Somos una compañia formada por un bobo y uno no bobo</FooterCompanyAboutSpanContainer>
                    El bobo es muy bobo y el no bobo es muy guapo.
                    </FooterCompanyAboutContainer>

                    <FooterIcons>

                        <FooterIconsAContainer><i className="fa fa-facebook"></i></FooterIconsAContainer>
                        <FooterIconsAContainer><i className="fa fa-twitter"></i></FooterIconsAContainer>
                        <FooterIconsAContainer><i className="fa fa-linkedin"></i></FooterIconsAContainer>
                        <FooterIconsAContainer><i className="fa fa-github"></i></FooterIconsAContainer>

                    </FooterIcons>

                </FooterRightContainer>

            </FooterContainer>
        </>
    );
}