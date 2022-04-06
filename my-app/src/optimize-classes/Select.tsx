import styles from './Select.module.css';
import React, { memo, useEffect, useRef, useState } from 'react';

type Props = {
  selected: string;
  items: string[];
  onSelected(item: string): void;
};

function Select({ selected, items, onSelected }: Props) {
  console.log('Select renders');
  
  const [open, setOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      console.log('document click');

      if (!hostRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Select" onClick={handleOpen} ref={hostRef}>
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

export default memo(Select);
