import { FC, lazy, memo } from 'react';
import './TravelCard.scss';
const TravelButton = lazy(() => import('../travelButton/TravelButton'))

interface TravelCardProp {
    title: string;
    image?: string;
    description?: string;
}
const TravelCard: FC<TravelCardProp> = memo(({title, image, description}) => {
  return (
    <div className='travel-card'>
      <div className="travel-card-image">
        <img src={image} loading='lazy' alt="card" />
      </div>
      <div className="travel-card-content">
        <h1 className='card-content-title'>{title}</h1>
        <p className='card-content-description'>{description}</p>
        <TravelButton title="Discover place" size='md' variant='outlined' />
      </div>
    </div>
  )
})

export default TravelCard