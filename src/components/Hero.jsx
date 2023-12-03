import Calculator from "./Calculator"
export default function Hero( {handleFormSubmit} ) {

    return (
        <>  
            <div className="hero">
                <div className="heroBackground">
                    <div className="logo">
                        <img src="./public/images/game-icons-abstract-082.svg" alt=""  />
                    </div>
                    <div className="heroContent">
                        <h1>Body Mass<br/>Index Calculator</h1>
                        <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                    </div>
                    <Calculator handleFormsubmit={handleFormSubmit}/>
                </div>
            </div>
        </>
    )
}