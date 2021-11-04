import styled from "styled-components";

export const CardContainer = styled.article`
  width: 100%;
  max-height: 200px;
  background-color: ${(props) => props.theme.color.paper};
  color: ${(props) => props.theme.color.text};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow.default};
  padding: 1em;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
  padding-bottom: 0.25em;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  width: 100%;

  & span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const CardContent = styled.main`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300;
  }
`;

export const CardMedia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CardAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1em;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;
