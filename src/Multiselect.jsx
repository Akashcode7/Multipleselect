// import React, { useState } from 'react';

// const Multiselect = ({ value, readonly }) => {
//   const [selectedValues, setSelectedValues] = useState(value);

//   const handleCheckboxChange = (event) => {
//     const { value: checkboxValue, checked } = event.target;

//     if (checked) {
//       setSelectedValues([...selectedValues, checkboxValue]);
//     } else {
//       setSelectedValues(selectedValues.filter((val) => val !== checkboxValue));
//     }
//   };

//   return (
//     <div>
//       {['1', '2', '3'].map((option) => (
//         <label key={option}>
//           <input
//             type="checkbox"
//             value={option}
//             checked={selectedValues.includes(option)}
//             onChange={handleCheckboxChange}
//             disabled={readonly}
//           />
//           {option}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default Multiselect;
import React, { useState } from 'react';

const Multiselect = ({ value, readonly }) => {
  const [selectedValues, setSelectedValues] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { id:'1',  name: 'USA' },
    { id: '2', name: 'Canada' },
    { id: '3', name: 'Australia' },
    { id: '4', name: 'Germany' },
    { id: '5', name: 'Japan' },
    { id: '6', name: 'India' },
  ];

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, checkboxValue]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== checkboxValue));
    }
  };

  const toggleDropdown = () => {
    if (!readonly) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`multiselect ${isOpen ? 'open' : ''}`}>
      <div className="multiselect-selected" onClick={toggleDropdown}>
        {selectedValues.length > 0 ? (
          <span className="multiselect-selected-values">{selectedValues.join(', ')}</span>
        ) : (
          <span className="multiselect-placeholder">Select options</span>
        )}
        <span className="multiselect-caret">&#9662;</span>
      </div>
      {isOpen && (
        <div className={`multiselect-options ${readonly ? 'readonly' : ''}`}>
          {countries.map((country) => (
            <label key={country.id} className="multiselect-option">
              <input
                type="checkbox"
                value={country.id}
                checked={selectedValues.includes(country.id)}
                onChange={handleCheckboxChange}
                disabled={readonly}
              />
              {country.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
