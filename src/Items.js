import React from 'react';

function Items({value,values,setValue,setValues,ids}) {
  const removeText = (ids) => {
    values.splice(ids,1)
    setValues(values)
    setValue(String(values.join('')));
  }
  return (
    <button onClick={ () => removeText(ids) } >{value}</button>
  );
}

export default Items;