import React, { useState } from "react";

function Home() {


	const [color, setColor] = useState("");

	return (
		<div className="semaforo">
		
			{/* <img className="semaforo" src="src/assets/imagen.jpeg" alt="semaforo" /> */}

			<button
				className={`redColor ${color == "red" ? "shine" : ""}`}
				onClick={() => setColor("red")}

				
			
			>red</button>

			<button
				className={`orangeColor ${color == "orange" ? "shine" : ""}`}
				onClick={() => setColor("orange")}
			
			></button>

			<button
				className={`greenColor ${color == "green" ? "shine" : ""}`}
				onClick={() => setColor("green")}
			
			></button>

		</div>
	);

}

export default Home