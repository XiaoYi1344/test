import React from 'react';

function FileUploader() {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    } else {
      console.log('No file selected.');
    }
  };

  return <input type="file" onChange={handleChange} />;
}

export default FileUploader;
