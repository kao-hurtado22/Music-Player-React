import { useState } from "react";
import Player from "./player";

const Home = () => {
	const [songs, setSongs] = useState([
		{
			title: "",
			artist: "Artist 1",
			img_src: "",
			src: "",
		},
		{
			title: "",
			artist: "Artist 2",
			img_src: "",
			src: "",
		},
		{
			title: "",
			artist: "Artist 3",
			img_src: "",
			src: "",
		},
		{
			title: "",
			artist: "Artist 4",
			img_src: "",
			src: "",
		},
		{
			title: "",
			artist: "Artist 5",
			img_src: "",
			src: "",
		},
		{
			title: "",
			artist: "Artist 6",
			img_src: "",
			src: "",
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
	return (
		<div className="container">
			<player
				song={songs[currentSongIndex]}
				nextSong={songs[nextSongIndex]}
			/>
		</div>
	);
};

export default Home;
