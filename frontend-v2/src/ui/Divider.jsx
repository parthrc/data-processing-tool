import styled from "styled-components";

const StyledDividerMargin = styled.div`
  margin-top: ${(props) => props.mtop};
  margin-bottom: ${(props) => props.mbot};
  margin-left: ${(props) => props.mleft};
  margin-right: ${(props) => props.mright};

  width: 100%;
`;

function Divider({ mtop, mbot, mleft, mright }) {
  return (
    <StyledDividerMargin
      mtop={mtop}
      mbot={mbot}
      mright={mright}
      mleft={mleft}
    ></StyledDividerMargin>
  );
}

export default Divider;
