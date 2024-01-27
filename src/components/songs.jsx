import lucidDreams from '../media/lucid-dreams.jpg'
import theRealSlimShady from '../media/the-real-slim-shady.jpg'
import memoryReboot from '../media/memory-reboot.jpg'
import runaway from '../media/runaway.jpg'
import starboy from '../media/starboy.jpg'
import theSearch from '../media/the-search.jpg'
import blindingLights from '../media/blinding-lights.jpg'
import blindingLightsSong from '../media/blinding-lights-weekend.mp3'
import lucidDreamsSong from '../media/lucid-dreams-juice-wrld.mp3'
import realSlimShadySong from '../media/real-slim-shady-eminem.mp3'
import memoryRebootSong from '../media/memory-reboot-voj.mp3'
import runawaySong from '../media/runaway-kanye-west.mp3'
import starboySong from '../media/starboy-weekend.mp3'
import searchSong from '../media/the-search-nf.mp3'

const songsData = [
    {
        id: 1,
        songName: 'Lucid Dreams',
        artist: 'Juice WRLD',
        audioFile: [lucidDreamsSong],
        songImage: [lucidDreams],
        duration: '03:50'
    },
    {
        id: 2,
        songName: 'Blinding Lights',
        artist: 'The Weekend',
        audioFile: [blindingLightsSong],
        songImage: [blindingLights],
        duration: '03:23'
    },
    {
        id: 3,
        songName: 'The Real Slim Shady',
        artist: 'Eminem',
        audioFile: [realSlimShadySong],
        songImage: [theRealSlimShady],
        duration: '04:44'
    },
    {
        id: 4,
        songName: 'Memory Reboot',
        artist: 'VOJ',
        audioFile: [memoryRebootSong],
        songImage: [memoryReboot],
        duration: '03:28'
    },
    {
        id: 5,
        songName: 'Runaway',
        artist: 'Kanye West',
        audioFile: [runawaySong],
        songImage: [runaway],
        duration: '09:07'
    },
    {
        id: 6,
        songName: 'Starboy',
        artist: 'The Weekend',
        audioFile: [starboySong],
        songImage: [starboy],
        duration: '03:51'
    },
    {
        id: 7,
        songName: 'The Search',
        artist: 'NF',
        audioFile: [searchSong],
        songImage: [theSearch],
        duration: '04:51'
    }
];
export default songsData;