import Head from "next/head";
import Main from "@/components/Main";

function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Geeksloft.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}

// 멀티 레이아웃 설정
Home.header = "H1";
Home.footer = "F1";

export default Home;
