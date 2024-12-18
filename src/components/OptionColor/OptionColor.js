import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map(color => (
          <li key={color}>
            <button
              type="button"
              className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], {
                [styles.active]: color === selectedColor,
              })}
              onClick={() => onColorChange(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
