import styled from "styled-components";

export const ReposWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .header_section {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .dropdown_wrapper {
    position: relative;
  }

  .button_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    outline: 0;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: aliceblue;
    cursor: pointer;
  }

  .button_container span {
    font-size: 1.2rem;
  }

  .overflow_container {
    position: absolute;
    top: 40px;
    background-color: gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 5px;

    span {
      padding: 10px 0;
      width: 20vw;
      cursor: pointer;
    }

    span:hover {
      background-color: green;
    }
  }

  .grid_view_container {
    height: 88vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    gap: 10px;
  }
`;

export const InputWrapper = styled.input`
  display: flex;
  padding: 12px 24px;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
`;

export const RepoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
  height: 30vh;
  cursor: pointer;

  span {
    text-decoration: none !important;
    color: #212121;
  }
  .details_container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .result {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
