import React, { useState, useEffect } from "react";
import Player from "./player";

function Home() {
	const [songs, setSongs] = useState([
		{
			title: "Home",
			artist: "Mario Bros",
			img_src:
				"https://pressover.news/wp-content/uploads/2021/09/71RuXB-P8lL._AC_SL1333_-1024x768.jpg",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
		},
		{
			title: "Castle",
			artist: "Mario Bros",
			img_src:
				"https://3.bp.blogspot.com/-axsHg_tnCf0/Xnye3qg-pvI/AAAAAAAANpk/6hHNNoiiuqo0BCkiuZ7rKV83Yqu5O4XHgCLcBGAsYHQ/s1600/Super%2BMario%2BAll-Stars%2B%2528Super%2BMario%2BBros%2B3%2529%2B-%2BFinal%2BBoss%2BBowser.png",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
		},
		{
			title: "Stage 2",
			artist: "Mario Bros",
			img_src:
				"https://i.blogs.es/2ed8d3/super-mario-bros-2/1366_2000.jpeg",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/stage2.mp3",
		},
		{
			title: "Under Water",
			artist: "Mario Bros",
			img_src:
				"https://i.blogs.es/89f065/130823-anatomyofmario-1801/450_1000.gif",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/underwater.mp3",
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex]);

	return (
		<div className="Home">
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default Home;
