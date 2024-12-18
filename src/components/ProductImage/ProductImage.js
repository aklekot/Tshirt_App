import styles from './ProductImage.module.scss';

const ProductImage = ({ imagePath, title }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={imagePath}
      />
    </div>
  );
};

export default ProductImage;
