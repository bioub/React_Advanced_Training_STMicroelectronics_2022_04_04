import styles from './Select.module.css';
import React, { useState } from 'react';

type Props = {
  selected: string;
  items: string[];
  onSelected(item: string): void;
};

function Select({ selected, items, onSelected }: Props) {
  console.log('Select called');
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Select" onClick={handleOpen}>
      <div className={styles.selected}>{selected}</div>
      {open && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div className={styles.item} key={item} onClick={() => onSelected(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
