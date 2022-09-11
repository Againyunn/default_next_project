import styled from "styled-components";

function index(props) {
  return (
    <Footer className="main-footer">
      <div className="footer-item"></div>
      <div className="footer-item"></div>
      <div className="footer-item"></div>
    </Footer>
  );
}

export default index;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-contents: sapce-between;

  .footer-item {
    width: 33.3vw;
    height: 200px;
    &:nth-child(1) {
      background-color: #61f3eb;
    }
    &:nth-child(2) {
      background-color: #48dad2;
    }
    &:nth-child(3) {
      background-color: #20b2aa;
    }
  }
`;
