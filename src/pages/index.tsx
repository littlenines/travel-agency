import { lazy } from 'react'
import TravelButton from '../components/travelButton/TravelButton'
const TravelCard = lazy(() => import('../components/travelCard/TravelCard'))
import places from '../config/places.json'

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className='hero-main container'>
          <h1 className='hero-main-title'>Book an exclusive</h1>
          <h2 className='hero-main-subtitle'>home for your personal travel</h2>
          <p className='hero-main-description'>Each property is hand-picked,</p>
          <p className='hero-main-description span'>personally visited and cannot be found elsewhere.</p>
          <TravelButton title="Explore homes" />
        </div>
      </section>
      
      <section className='recommended container' id='places'>
        <h1 className='recommended-title'>Most famous places</h1>
        <p className='recommended-subtitle'>Recommended</p>

        <div className='recommended-places'>
          {places.map((place, index) => 
            <TravelCard key={index}
              image={place.image}
              title={place.title}
              description={place.description}/>
          )}
        </div>
      </section>
      
    </>
  )
}

export default Home