import { FooterAContainer, FooterCenterContainer, FooterCompanyNameContainer, FooterContainer, FooterH3Container, FooterH3SpanContainer, FooterIContainer, FooterLeftContainer, FooterLinksContainer, FooterPAContainer, FooterPContainer, FooterPSpanContainer, FooterRightContainer } from './styled';



export default function Footer(){
    return (
        <>
            <FooterContainer>

                <FooterLeftContainer>

                    <FooterH3Container>Company<FooterH3SpanContainer>logo</FooterH3SpanContainer></FooterH3Container>

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
                        <FooterPContainer><FooterPSpanContainer>444 S. Cedros Ave</FooterPSpanContainer> Solana Beach, California</FooterPContainer>
                    </div>

                    <div>
                        <FooterIContainer></FooterIContainer>
                        <FooterPContainer>+1.555.555.5555</FooterPContainer>
                    </div>

                    <div>
                        <FooterIContainer></FooterIContainer>
                        <FooterPContainer><FooterPAContainer>support@company.com</FooterPAContainer></FooterPContainer>
                    </div>

                </FooterCenterContainer>

                <FooterRightContainer>

                    <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </FooterRightContainer>

            </FooterContainer>
        </>
    );
}