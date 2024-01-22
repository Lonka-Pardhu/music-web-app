import appLogo from '../../media/m-app-logo.png'
import NavList from './nav-list/navList';
import { NavContainerStyled, NavHeadStyled, AppLogoContainerStyled, AppNameContainerStyled } from './navbar.styled'

export default function Navbar() {

    return (
        <NavContainerStyled>
            <NavHeadStyled>
                <AppLogoContainerStyled>
                    <img src={appLogo} alt="logo" className='main-logo' />
                </AppLogoContainerStyled>
                <AppNameContainerStyled>
                    <p>MUSIC</p>
                    <p>NINETY9</p>
                </AppNameContainerStyled>
            </NavHeadStyled>
            <NavList />
        </NavContainerStyled>
    )
}