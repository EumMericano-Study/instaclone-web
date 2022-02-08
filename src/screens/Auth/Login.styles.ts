import styled from "styled-components";
import { OuterBox } from "components/elements";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const TopBox = styled(OuterBox)``;

const BottomBox = styled(OuterBox)``;

export { TopBox, BottomBox, Title };
