import { Link } from 'react-router-dom'
import './TravelFooter.scss'

const TravelFooter = () => {
  const travelSpecial = ['Tour packages', 'Personalized offers', 'Special deals', 'Summer holiday']
  const travelInfo = ['About us', 'FAQ', 'Terms and conditions', 'Contact']
  return (
    <footer className='footer'>
      <div className='footer-main container'>
        <h1 className='footer-title'>Travel</h1>

        <div className='footer-navigation'>
          <ol>
            { travelSpecial.map((item, index) => <li key={index}><Link to='/'>{item}</Link></li>) }
          </ol>
          <ol>
            { travelInfo.map((item, index) => <li key={index}><Link to='/'>{item}</Link></li>) }
          </ol>
        </div>
        
        <div className='footer-socials'>
          <p className='footer-socials-title'>Follow us on</p>
          <div className='footer-socials-links'>
            <Link to='https://www.instagram.com/'><img loading='lazy' width={24} height={24} src="/svg/social-instagram.svg" alt="social instagram" /></Link>
            <Link to='https://www.facebook.com/'><img loading='lazy' width={24} height={24} src="/svg/social-facebook.svg" alt="social facebook" /></Link>
            <Link to='https://twitter.com/'><img loading='lazy' width={24} height={24} src="/svg/social-twitter.svg" alt="social twitter" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TravelFooter