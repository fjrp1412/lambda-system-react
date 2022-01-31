import React, { useContext } from 'react';
import { Section } from '../../components/Section';
import { ProductsTable } from '../../components/TableComponents';
import { AppContext } from '../../context';

function Products() {
  const { products, loading } = useContext(AppContext);

  return (
    <Section>
      {!loading && (
        <ProductsTable
          head={[
            'Nombre',
            'Precio',
            'Tax',
            'presentation',
            'Eliminar',
            'Editar',
          ]}
          editable
          body={products.results}
        />
      )}
    </Section>
  );
}

export { Products };
