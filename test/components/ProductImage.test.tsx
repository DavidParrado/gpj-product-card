import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage img="http://hola.jpg"/>
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2} >
        {() => (
          <ProductImage />
        )}
      </ProductCard>
    )
    expect(wrapper).toMatchSnapshot();
  });
});
