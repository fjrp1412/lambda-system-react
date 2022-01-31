import React, { useState, useEffect } from 'react';
import { Section } from '../../components/Section';
import { ProductsTable } from '../../components/TableComponents';
import { getProductList } from '../../utils/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { data, request } = await getProductList();
    setProducts(data.results);
  }, []);

  console.log(products);

  return (
    <Section>
      <ProductsTable
        head={['Nombre', 'Precio', 'Tax', 'presentation', 'Eliminar', 'Editar']}
        editable
        body={products}
      />
    </Section>
  );
}

export { Products };
