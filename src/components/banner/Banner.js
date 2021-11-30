import './Banner.css'
import logo from '../../assets/images/logo.png'

function Banner() {
    return (
        <div className={'lmj-banner'}>
            <img src={logo} alt={'La maison jungle'} className={('lmj-logo')}/>
            <h1 className={'lmj-title'}>La maison jungle</h1>
        </div>
    )
}

export default Banner