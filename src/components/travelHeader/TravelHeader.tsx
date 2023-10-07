import { lazy } from 'react';
import './TravelHeader.scss'
import { Link } from 'react-router-dom';
const TravelButton = lazy(() => import('../travelButton/TravelButton'))

const TravelFunction = () => {
  const navigationTabs = ['home', 'about', 'tour packages', 'contact']
  return (
    <header className='header container'>
      <h1 className='header-title'><Link to='/'>Travel</Link></h1>
      <nav className='header-navigation'>
        <ol className='header-navigation-tabs'>
          {
            navigationTabs.map((tab, index) => {
              return(
                <li key={index}><Link to='/'>{tab}</Link></li>
              )
            })
          }
        </ol>
        <a href='#places'><TravelButton title='Explore places' /></a>
      </nav>
      <img className='header-menu' src="/svg/th-menu.svg" width={24} height={24} alt="menu" />
    </header>
  )
}

export default TravelFunction