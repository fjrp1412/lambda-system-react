import React, { useContext } from 'react';
import { Section, ProductsTable } from '../../components';
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
