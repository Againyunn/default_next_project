// import "../styles/globals.css";
import { wrapper } from "@/store";

// css reset
import "@/styles/common/reset.css";

// common layout
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

// 멀티 레이아웃 설정
const headers = {
  H1: Header,
};

const footers = {
  F1: Footer,
};

function MyApp({ Component, pageProps }) {
  // 멀티 레이아웃 설정
  let HeaderLayout = headers[Component.header] || (() => <></>);
  let FooterLayout = footers[Component.footer] || (() => <></>);

  return (
    <div>
      <HeaderLayout />
      <Component {...pageProps} />
      <FooterLayout />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
