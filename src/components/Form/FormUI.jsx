import styled from 'styled-components';

const FormUI = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 1.8rem;
    margin: 10px 0px;
  }

  & .input:last-child {
    margin-bottom: 10px;
  }

  & .button {
    margin: 10px 5px;
  }

  & .image {
    width: 100%;
    height: 150px;
    background-color: white;
  }
`;

export { FormUI };
