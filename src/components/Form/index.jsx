import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Input, MenuItem, Select } from '@mui/material';
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

function Form({ title, fields, handleSubmit, handleCancel }) {
  return (
    <Section>
      <FormUI id="form" action="" encType="multipart/form-data">
        <h1 className="title">{title}</h1>

        {fields.map(field => {
          if (field.fieldName === 'image') {
            return (
              <Input
                name={field.fieldName}
                type="file"
                className="image"
                key={field}
              >
                Hola
              </Input>
            );
          }

          if (field.type === 'select') {
            return (
              <Select
                labelId="select-id"
                value={field.state}
                onChange={event => {
                  field.setState(event.target.value);
                }}
                key={field.fieldName}
              >
                {field.list.map(client => (
                  <MenuItem value={client.id} key={client.id}>
                    {client.name}
                  </MenuItem>
                ))}
              </Select>
            );
          }
          return (
            <TextField
              label={field.fieldName}
              variant="outlined"
              margin="dense"
              key={field.fieldName}
              className="input"
              name={field.fieldName}
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
          <Button
            className="button"
            color="error"
            variant="contained"
            onClick={handleCancel}
          >
            Volver
          </Button>
        </div>
      </FormUI>
    </Section>
  );
}

export { Form };
