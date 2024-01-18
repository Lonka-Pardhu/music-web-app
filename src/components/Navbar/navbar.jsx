import appLogo from '../../media/m-app-logo.png'
import { NavContainer } from './navbar.styled'
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbPlaylist } from "react-icons/tb";

export default function Navbar() {
    return (
        <>
            <NavContainer>
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
                        <span className="react-icon">
                            <GoHome />
                        </span>
                        <p>Home</p>
                    </div>
                    <div className='nav-list'>
                        <span className="react-icon">
                            <MdOutlineExplore />
                        </span>
                        <p>Explore</p>
                    </div>
                    <div className='nav-list'>
                        <span className="react-icon">
                            <IoMdTrendingUp />
                        </span>
                        <p>Trending</p>
                    </div>
                    <div className='nav-list'>
                        <span className="react-icon">
                            <MdOutlinePodcasts />
                        </span>
                        <p>Podcasts</p>
                    </div>
                    <div className='nav-list'>
                        <span className="react-icon">
                            <MdOutlineFavoriteBorder />
                        </span>
                        <p>Favorites</p>
                    </div>
                </div>
                <div className="nav-user-playlist-container">
                    <div className="user-playlist-heading">
                        <p>Your Playlist</p>
                    </div>

                    <div className="user-playlists-container">
                        {['userPlaylist1', 'userPlaylist2', 'userPlaylist3'].map(ele => {
                            return (
                                <div key={ele} className="u-playlist">
                                    <span className="react-icon"><TbPlaylist /></span>
                                    <p>{ele}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </NavContainer>
        </>
    )
}