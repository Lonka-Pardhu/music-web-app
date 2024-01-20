import appLogo from '../../media/m-app-logo.png'
import { NavContainer } from './navbar.styled'
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbPlaylist } from "react-icons/tb";

export default function Navbar() {

    const navItems = [
        { icon: <GoHome />, text: 'Home' },
        { icon: <MdOutlineExplore />, text: 'Explore' },
        { icon: <IoMdTrendingUp />, text: 'Trending' },
        { icon: <MdOutlinePodcasts />, text: 'Podcasts' },
        { icon: <MdOutlineFavoriteBorder />, text: 'Favorites' },
    ];

    return (
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
                {navItems.map((item, index) => (
                    <div className='nav-list' key={index}>
                        <span className="react-icon">
                            {item.icon}
                        </span>
                        <p>{item.text}</p>
                    </div>
                ))}
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
    )
}