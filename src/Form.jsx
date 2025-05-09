import { useState } from 'react';
import FileUploader from './FileUploader';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A name was submitted: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <br/>
      <label>
        Text_area:
        <textarea value={value} onChange={handleChange} />
      </label>
      <div>
        <h1>Upload a file</h1>
        <FileUploader />
    </div>
    </form>
  );
}

export default NameForm;