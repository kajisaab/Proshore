import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .grid_view_container {
    height: 88vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    gap: 10px;
  }

  .pagination {
  }
`;

const LoadingState = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 4rem; ;
`;

export { HomeWrapper, LoadingState };
