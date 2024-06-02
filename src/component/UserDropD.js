import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [option, setOption] = useState()

  function handleChange(event) {
    setOption(event.target.value)
  }
  console.log(option);
  return (
    <div>
      <Form.Select aria-label="Default select example" name='option' onChange={handleChange}>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>


    </div>

  );
}

export default BasicExample;