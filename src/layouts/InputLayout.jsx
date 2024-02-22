import React from 'react';
function InputLayout({ items, children, className }) {

  const gridClasses = {
    1: "gap-4 grid grid-cols-1",
    2: "gap-4 grid sm:grid grid-cols-2",
    3: "gap-4 grid sm:grid grid-cols-3",
  }
  

  return (
    <div className={`${gridClasses} ${className} ${gridClasses[items]}`}>
      {children}
    </div>
  );
}

export default InputLayout;
