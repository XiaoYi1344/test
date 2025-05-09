import { useState } from 'react';

function FruitSelector() {
    const [value, setValue] = useState('coconut');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <form onSubmit={handleChange}>
      <select value={value} onChange={handleChange}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
    </form>
  );
}

export default FruitSelector;