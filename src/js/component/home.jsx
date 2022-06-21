import React from "react";
import List from "./list.jsx";
import MusicApp from "./musicapp.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<div className="position-relative m-2">
		
		<MusicApp />
		</div>
		<div className="container col-9 mb-3 text-center">
			<List />
		</div>
		
		
		</>

	);
};

export default Home;
