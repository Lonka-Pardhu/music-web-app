import { useState } from 'react'
import Songs from '../songs'
import AudioPlayer from '../Audio-Player/audioPlayer';
import { SongsListWrapperStyled, SongContainerStyled, SongDetailsContainerStyled, SongDurationContainerStyled, SongImgContainerStyled, SongNameArtistStyled } from './songsList.styled';

export default function SongsList() {

    const [clickedSong, setClickedSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleSongClick = (song) => {
        setClickedSong(song);
        if (!isPlaying) {
            setIsPlaying(isPlaying => !isPlaying)
        }
    }
    return (
        <SongsListWrapperStyled>
            {Songs.map(song => (
                <SongContainerStyled key={song.id} onClick={() => { handleSongClick(song) }}>
                    <SongDetailsContainerStyled>
                        <SongImgContainerStyled>
                            <img src={song.songImage} alt="albumImage" />
                        </SongImgContainerStyled>
                        <SongNameArtistStyled>
                            <p>{song.songName}</p>
                            <p>{song.artist}</p>
                        </SongNameArtistStyled>
                    </SongDetailsContainerStyled>
                    <SongDurationContainerStyled>
                        <p>{song.duration}</p>
                    </SongDurationContainerStyled>
                </SongContainerStyled>
            ))}
            {/* <AudioPlayer /> */}
            {clickedSong ?
                (<AudioPlayer
                    pickedSong={clickedSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying} />
                ) : (
                    <AudioPlayer />)}
        </SongsListWrapperStyled>
    )
}