import React from "react";
import loading from "../../Assets/load.gif";

const Preloader = ({ style }) => {
	return <img src={loading} alt="" style={style} />;
};

export default Preloader;