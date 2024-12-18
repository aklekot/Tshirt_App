import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => (
          <li key={size.name}>
            <button
              type="button"
              className={clsx({ [styles.active]: size.name === selectedSize.name })}
              onClick={() => onSizeChange(size)}
            >
              {size.name} (+{size.additionalPrice}$)
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionSize;
