import React from "react";
import PlayerControl from "./playercontrol";
import PlayerDetails from "./playerdetail";

function Player(props) {
	return (
		<div className="c-player">
			<audio></audio>
			<h4>Playing Now</h4>
			<PlayerDetails song={props.song} />
			<PlayerControl song={props.song} />
			<p>
				<strong>Next Up:</strong>
				{props.nextSong.title} by {props.nextSong.artist}
			</p>
		</div>
	);
}

export default Player;
