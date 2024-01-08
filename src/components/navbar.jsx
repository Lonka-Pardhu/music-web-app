import appLogo from '../media/m-app-logo.png'
export default function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-head">
                    <div className="app-logo-container">
                        <img src={appLogo} alt="logo" className='main-logo' />
                    </div>
                    <div className="app-name-container">
                        <p>MUSIC</p>
                        <p>NINETY9</p>
                    </div>
                </div>
                <div className="nav-list-container">
                    <div className='nav-list'>
                        <span className="material-symbols-outlined home">home</span>
                        <p>Home</p>
                    </div>
                    <div className='nav-list'>
                        <span className="material-symbols-outlined">explore</span>
                        <p>Explore</p>
                    </div>
                    <div className='nav-list'>
                        <span className='material-symbols-outlined'>trending_up</span>
                        <p>Trending</p>
                    </div>
                    <div className='nav-list'>
                        <span className='material-symbols-outlined'>podcasts</span>
                        <p>Podcasts</p>
                    </div>
                    <div className='nav-list'>
                        <span className='material-symbols-outlined'>favorite</span>
                        <p>Favorites</p>
                    </div>
                </div>
                <div className="nav-user-playlist-container">
                    <div className="user-playlist-heading">
                        <p>Your Playlist</p>
                    </div>

                    <div className="user-playlists-container">
                        <div className="u-playlist-one u-playlist">
                            <span className="material-symbols-outlined">sort</span>
                            <p>user playlist1</p>
                        </div>
                        <div className="u-playlist-two u-playlist">
                            <span className="material-symbols-outlined">sort</span>
                            <p>user playlist2</p>
                        </div>
                        <div className="u-playlist-three u-playlist">
                            <span className="material-symbols-outlined">sort</span>
                            <p>user playlist3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}