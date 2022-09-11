import styled from "styled-components";

function index(props) {
  return (
    <Header className="main-header">
      <div className="header-item"></div>
      <div className="header-item"></div>
      <div className="header-item"></div>
    </Header>
  );
}

export default index;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-contents: sapce-between;

  .header-item {
    width: 33.3vw;
    height: 200px;
    &:nth-child(1) {
      background-color: #00d7ff;
    }
    &:nth-child(2) {
      background-color: #00c3ff;
    }
    &:nth-child(3) {
      background-color: #00a5ff;
    }
  }
`;
