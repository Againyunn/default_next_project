import { useEffect, useState } from "react";

import styled from "styled-components";

function PlainReactLaunches() {
  // client side rendering
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v3/launches");
    const data = await res.json();

    setData(data);
  };

  if (data == null) {
    return null;
  }

  return (
    <LaunchWrap>
      <ul>
        {data.map((launch, index) => (
          <li key={index}>
            {index + 1}.{launch.mission_name}
          </li>
        ))}
      </ul>
    </LaunchWrap>
  );
}

export default PlainReactLaunches;

const LaunchWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00d7ff;
  color: #fff;

  li {
    margin-left: 100px;
    list-style: none;
  }
`;

// // SSR 적용
// export async function getServerSideProps(context) {
//   const res = await fetch("https://api.spacexdata.com/v3/launches");
//   const data = await res.json();

//   console.log("getServerSideProps");

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

// // Cached SSR 적용
// export async function getStaticProps(context) {
//   const res = await fetch("https://api.spacexdata.com/v3/launches");
//   const data = await res.json();

//   console.log("getServerSideProps");

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
