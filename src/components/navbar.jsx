import appLogo from '../media/m-app-logo.png'
export default function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-head">
                    <div className="app-logo-container">
                        <img src={appLogo} alt="logo" className='main-logo' />
                    </div>
                    <div className="greet-container">
                        <p>Hello</p>
                        <p>Pardhu</p>
                    </div>
                </div>
                <span className="material-symbols-outlined home">home</span>
                <span class="material-symbols-outlined">
                    explore
                </span>
            </div>
        </>
    )
}