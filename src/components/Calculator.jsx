import React, { useState } from 'react';
export default function Calculator() {
    const [weight, setWeight] = useState(80);
    const [height, setHeight] = useState(185);
    const [bmi, setBmi] = useState(23.37);
    const [result, setResult] = useState('Normal weight');
    const [unit, setUnit] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const h = height ;
        const b = weight / ((h * h) / 100000);
        setBmi(b.toFixed(2));
        if (b < 18.5) {
            setResult('Underweight');
        } else if (b >= 18.5 && b < 25) {
            setResult('Normal weight');
        } else if (b >= 25 && b < 30) {
            setResult('Overweight');
        } else {
            setResult('Obesity');
        }
    };
    

    return (
        <form className="form" onChange={handleSubmit} autoComplete='off'>
            <div className="formTitle">Enter your details below</div>
            <div className="unitSelection">
                <div className="unitOption">
                    <label onClick={() => {setUnit(true)}}><input type="radio" name="unit" id="metric" defaultChecked />Metric</label>
                </div>
                <div className="unitOption">
                    <label onClick={() => {setUnit(false)}}><input type="radio" name="unit" id="imperial" />Imperial</label>
                </div>
            </div>
            <div className="measurementContainer">
                <div className="measurement">
                    <h4>Height</h4>
                    {unit ? 
                        <div className="measurementValue">
                            <input type="number" name="cm" value={height} onChange={(e) => setHeight(e.target.value)}/>
                            <p>cm</p>
                        </div>
                        : 
                        <div className="measurementValue">
                            <input type="number" name="inc" value={height} onChange={(e) => setHeight(e.target.value)}/>
                            <p>inc</p> 
                        </div>
                    }  
                </div>


                <div className="measurement">
                    <h4>weight</h4>

                    {unit ? 
                        <div className="measurementValue">
                            <input type="number" name="kg" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                            <p>kg</p>
                        </div>
                        : 
                        <div className="measurementValue">
                            <input type="number" name="lbs" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                            <p>lbs</p>
                        </div>
                    }  

                </div>
            </div>
            
            <div className="result">
                <div className="resultValue">
                    <div className="resultLabel">Your BMI is...</div>
                    <div className="resultBmi">{bmi}</div>
                </div>
                <div className="resultDescription">
                    <span>Your BMI suggests you’re a {result}. Your ideal weight is between </span>
                    <span className="resultIdealWeight">63.3kgs - 85.2kgs.</span>
                </div>
            </div>

            
        </form>

    )
}