import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function Container(props: Props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}

export default Container;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
