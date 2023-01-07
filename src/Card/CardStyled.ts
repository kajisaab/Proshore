import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
  height: 30vh;
  cursor: pointer;

  .image_section {
    height: 60%;
    background-color: black;

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  .details_section {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 10px;

    .details {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: flex-start;
    }

    .details span {
      color: black;
      text-decoration: none;
    }
  }
`;
