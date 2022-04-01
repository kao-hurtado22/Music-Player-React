import React, { useState, useRef, useEffect } from "react";
import PlayerDetail from "./playerdetail";
import PlayerControl from "./playercontrol";

function Player(props) {
	const audioEl = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (isPlaying) {
			audioEl.current.play();
		} else {
			audioEl.current.pause();
		}
	});

	const SkipSong = (forwards = true) => {
		if (forwards) {
			props.setCurrentSongIndex(() => {
				let temp = props.currentSongIndex;
				temp++;

				if (temp > props.songs.length - 1) {
					temp = 0;
				}

				return temp;
			});
		} else {
			props.setCurrentSongIndex(() => {
				let temp = props.currentSongIndex;
				temp--;

				if (temp < 0) {
					temp = props.songs.length - 1;
				}

				return temp;
			});
		}
	};

	return (
		<div className="c-player">
			<audio
				src={props.songs[props.currentSongIndex].src}
				ref={audioEl}></audio>
			<h4>Playing Now</h4>
			<PlayerDetail song={props.songs[props.currentSongIndex]} />
			<PlayerControl
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				SkipSong={SkipSong}
			/>
			<p>
				<strong>Next Up:</strong>
				{props.songs[props.nextSongIndex].title} by{" "}
				{props.songs[props.nextSongIndex].artist}
			</p>
		</div>
	);
}

export default Player;
