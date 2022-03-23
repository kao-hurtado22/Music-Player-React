import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faFoward,
	faBackward,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControl() {
	return (
		<div className="c-player--controls">
			<button className="skip-btn">
				<FontAwesomeIcon icon={faBackward} />
			</button>
			<button className="skip-btn">
				<FontAwesomeIcon icon={faPlay} />
			</button>
			<button className="skip-btn">
				<FontAwesomeIcon icon={faForward} />
			</button>
			<button className="skip-btn">
				<FontAwesomeIcon icon={faBackward} />
			</button>
		</div>
	);
}

export default PlayerControl;
