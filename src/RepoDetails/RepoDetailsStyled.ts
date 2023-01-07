import styled from "styled-components";

export const RepoDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 24px;
  gap: 15px;
  align-items: flex-start;

  .details_container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .result {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .link_url {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;
