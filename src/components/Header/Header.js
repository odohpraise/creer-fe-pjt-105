import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { VscBell } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Header = ({ landingPage }) => {

    const InAppHeader = () => {
        return (
            <>
                <div className='headerLeft'>
                    <div className='logo'>
                        <Link to='/creer-fe-pjt-105/homepage'>
                            <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
                        </Link>
                    </div>
                </div>
                <div className='headerCenter'>
                    <div className='searchBox'>
                        <BsSearch className='searchIcon' size='0.9em'/>
                        <input type='text' placeholder='Search posts, answers, communities...' />
                    </div>
                </div>
                <div className='headerRight'>
                    <div className='notification'>
                        <VscBell className='notificationIcon' size='1.7em'/>
                        <span>1</span>
                    </div>
                    <div className='profileImage'>
                        <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' />
                    </div>
                </div>  
            </>

        )
    }


    const LandingPageHeader = () => {
        return(
            <>
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='creer logo'/>
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>Contact us</li>
                        <li>FAQs</li>
                        <li className='headerBtn loginBtn'><Link to='/creer-fe-pjt-105/signin' style={{color:'#000'}}>Login</Link></li>
                        <li className='headerBtn signUpBtn'><Link to='/creer-fe-pjt-105/signup' style={{color:'#fff'}}>Get Started</Link></li>
                    </ul>
                </div>
            </>
        )
    }


    return (
        <div className='header'>
            {landingPage 
            ? 
             <LandingPageHeader />
            : 
             <InAppHeader />
            }
        </div>
    )
}

export default Header;


{/* <div className='header'>
                
        </div> */}
