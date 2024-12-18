import styles from '../Product/Product.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';

const ProductForm = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}) => {
  return (
    <form>
      <OptionSize
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={onSizeChange}
      />
      <OptionColor
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={onColorChange}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;
