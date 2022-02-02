import React from 'react';
import { TextField, Button, Input } from '@mui/material';
import { Section } from '../Section';
import { FormUI } from './FormUI';

function Form({ title, fields, handleSubmit, handleCancel, children }) {
  return (
    <Section>
      <FormUI id="form" action="" encType="multipart/form-data">
        <h1 className="title">{title}</h1>

        {children ||
          fields.map(field => {

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
