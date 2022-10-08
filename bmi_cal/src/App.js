import './index.css';
import React, {useState} from 'react';
 
function App() {
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = ((weight / height / height) * 10000)
      setBmi(bmi.toFixed(1))
 
      if (bmi < 25) {
        setMessage('You are in a underweight range')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are in a healthy weight range')
      } else {
        setMessage('You are in a overweight range')
      }
    }
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h1 className='center'>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Enter your height in cm :</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
 
        <div>
        <label>Enter your weight in kg :</label>
          <input value={weight} onChange={(event) => setWeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
        </div>
      </form>
 
      <div className='center'>
        <p>Your BMI is : {bmi}</p>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;