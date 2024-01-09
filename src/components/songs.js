import lucidDreams from '../media/lucid-dreams.jpg'
import theRealSlimShady from '../media/the-real-slim-shady.jpg'
import memoryReboot from '../media/memory-reboot.jpg'
import runaway from '../media/runaway.jpg'
import starboy from '../media/starboy.jpg'
import theSearch from '../media/the-search.jpg'

const songsData = [
    {
        id: 1,
        songName: 'Lucid Dreams',
        artist: 'Juice WRLD',
        audioFile: '../media/lucid-dreams-juice-wrld.mp3',
        songImage: [lucidDreams],
        duration: '04:00'
    },
    {
        id: 2,
        songName: 'The Real Slim Shady',
        artist: 'Eminem',
        audioFile: '../media/real-slim-shady-eminem.mp3',
        songImage: [theRealSlimShady],
        duration: '04:44'
    },
    {
        id: 3,
        songName: 'Memory Reboot',
        artist: 'VOJ',
        audioFile: '../media/memory-reboot-voj.mp3',
        songImage: [memoryReboot],
        duration: '03:09'
    },
    {
        id: 4,
        songName: 'Runaway',
        artist: 'Kanye West',
        audioFile: '../media/runaway-kanye-west.mp3',
        songImage: [runaway],
        duration: '09:07'
    },
    {
        id: 5,
        songName: 'Starboy',
        artist: 'The Weekend',
        audioFile: '../media/starboy-weekend.mp3',
        songImage: [starboy],
        duration: '03:50'
    },
    {
        id: 6,
        songName: 'The Search',
        artist: 'NF',
        audioFile: '../media/the-search-nf.mp3',
        songImage: [theSearch],
        duration: '04:08'
    }
];
export default songsData;