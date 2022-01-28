import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Input } from '@mui/material';
import { Section } from '../Section';

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

function Form({ title, fields, handleSubmit }) {
  console.log(fields);
  return (
    <Section>
      <FormUI id="form" action="" encType="multipart/form-data">
        <h1 className="title">{title}</h1>

        {fields.map(field => {
          if (field === 'image') {
            return (
              <Input name={field} type="file" className="image" key={field}>
                Hola
              </Input>
            );
          }
          return (
            <TextField
              label={field}
              variant="outlined"
              margin="dense"
              key={field}
              className="input"
              name={field}
            />
          );
        })}
        <div className="button-container">
          <Button
            className="button"
            color="success"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button className="button" color="error" variant="contained">
            Volver
          </Button>
        </div>
      </FormUI>
    </Section>
  );
}

export { Form };
