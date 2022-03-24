import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Player from "./player";

function Home() {
	const [songs, setSongs] = useState([
		{
			title: "Big Poppa 2007 Remaster",
			artist: "The Notorious B.I.G",
			img_src:
				"https://static01.nyt.com/images/2021/03/03/arts/01biggie/01biggie-superJumbo.jpg?quality=75&auto=webp",
			src: "https://www.youtube.com/watch?v=QceVTChhlJM",
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
				song={songs}
				nextSongIndex={nextSongIndex}
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
			/>
		</div>
	);
}

export default Home;
