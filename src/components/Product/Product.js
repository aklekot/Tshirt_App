import { useState, useMemo } from 'react';
import styles from '../Product/Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

 /* const getPrice = () => {
    return basePrice + selectedSize.additionalPrice;
  };*/

  const price = useMemo(() => {
    return basePrice + selectedSize.additionalPrice;
  }, [basePrice, selectedSize]); 

 
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const imagePath = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`;

  return (
    <article className={styles.product}>
      <ProductImage imagePath={imagePath} title={title} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          onSizeChange={handleSizeChange}
          onColorChange={setSelectedColor}
        />
      </div>
    </article>
  );
};

export default Product;
