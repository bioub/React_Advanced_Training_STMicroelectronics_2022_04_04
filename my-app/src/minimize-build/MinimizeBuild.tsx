import React, { useRef } from 'react';
import { getRandomInt } from './random';
import { utils, writeFile } from 'xlsx';

function MinimizeBuild() {
  const tableRef = useRef<HTMLTableElement>(null);

  function handleClick() {
    // import('xlsx').then(({ utils, writeFile }) => {
      const wb = utils.table_to_book(tableRef.current, { sheet: 'Sheet JS' });
      writeFile(wb, 'SheetJSTableExport.xlsx');
    // });
  }

  return (
    <div className="MinimizeBuild">
      MinimizeBuild Component
      <p>Random : {getRandomInt(100)}</p>
      <table ref={tableRef}>
        <tbody>
          <tr>
            <td>A</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Export Excel</button>
    </div>
  );
}

export default MinimizeBuild;
