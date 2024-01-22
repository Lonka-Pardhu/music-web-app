import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbPlaylist } from "react-icons/tb";
import { NavListContainerStyled, NavListStyled, UserPlaylistContainerStyled, UserPlaylistHeadingStyled, UserPlayListWrapperStyled, UserPlaylistStyled } from "./navList.styled";

export default function NavList() {

    const navListItems = [
        { icon: <GoHome />, text: 'Home' },
        { icon: <MdOutlineExplore />, text: 'Explore' },
        { icon: <IoMdTrendingUp />, text: 'Trending' },
        { icon: <MdOutlinePodcasts />, text: 'Podcasts' },
        { icon: <MdOutlineFavoriteBorder />, text: 'Favorites' },
    ];

    return (
        <>
            <NavListContainerStyled>
                {navListItems.map((item, index) => (
                    <NavListStyled key={index}>
                        <span className="react-icon">
                            {item.icon}
                        </span>
                        <p>{item.text}</p>
                    </NavListStyled>
                ))}
            </NavListContainerStyled>

            <UserPlaylistContainerStyled>
                <UserPlaylistHeadingStyled>
                    <p>Your Playlist</p>
                </UserPlaylistHeadingStyled>

                <UserPlayListWrapperStyled>
                    {['userPlaylist1', 'userPlaylist2', 'userPlaylist3'].map(ele => {
                        return (
                            <UserPlaylistStyled key={ele}>
                                <span className="react-icon"><TbPlaylist /></span>
                                <p>{ele}</p>
                            </UserPlaylistStyled>
                        )
                    })}
                </UserPlayListWrapperStyled>
            </UserPlaylistContainerStyled>
        </>
    )
}