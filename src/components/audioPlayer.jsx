import songOne from '../media/memory-reboot-voj.mp3'

export default function audioPlayer() {
    return (
        <>
            <div className="audio-player-container">
                <audio controls>
                    <source src={songOne} />
                </audio>
            </div>
        </>
    )
}