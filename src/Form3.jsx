import { useState } from 'react';

function Reservation() {
  const [formData, setFormData] = useState({
    isGoing: true,
    numberOfGuests: 2,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={formData.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={formData.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}

export default Reservation;