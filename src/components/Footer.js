import React from "react"
import styled from 'styled-components';
import './css/Footer.css';
const FontSize={
    fontSize: "0.8rem"
};
const Footer = () =>{
    return(
        <FooterContainer className="main-footer" id="footerNone">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="footer-middle">
         <div className="container" style={{textAlign:'left'}}>
             <hr/>
            <a href="/"><strong>정보처리방침</strong></a>
            &ensp;&ensp;<a href="/" ><strong>이용약관</strong></a>
            <p className="text-xl-left"><strong>Ewha Womans University 82People</strong><br/>(15447) 서울특별시 서대문구 대현동 이화여대길 52 Customer service: 1886-1886</p>
            
             {/*Footer Bottom*/}
             <div className="footer-bottom">
                 <p className="text-xs-left">
                 <div style={FontSize}>GBP는 플랫폼 제공자로서 프로젝트의 당사자가 아니며, 직접적인 통신판매를 진행하지 않습니다. 프로젝트의 완수 및 선물제공의 책임은 해당 프로젝트의 창작자에게 있으며, 프로젝트와 관련하여 후원자와 발생하는 법적 분쟁에 대한 책임은 해당 창작자가 부담합니다.<br/>
                   <br/> </div> &copy;{new Date().getFullYear()} Group Buying Platform For Ewha madeby82People - All Rights Reserved
                 </p>
             </div>
          </div>   
          </div>    
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer=styled.footer`
.footer-middle {
    padding-top: 1.5rem;
       text-align:left;
}
.footer-bottom{
    padding-top: 1rem;
    padding-bottom:1rem;
    text-align:left;
}
a{
    color: black;
}
a: hover{
color:gray;
}
hr{
    background-color: white;
}

`;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;