import { ButtonHTMLAttributes, FC } from 'react'
import './TravelButton.scss'

interface TravelButtonProps {
    variant?: string;
    size?: 'sm' | 'md';
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, TravelButtonProps{}

const TravelButton: FC<ButtonProps> = ({title, variant, size, ...props}) => {
  return (
    <button {...props} className={`travel-button travel-button--${variant} ${size} ${props.className || ''}`}>
      {title}
    </button>
  )
}

TravelButton.defaultProps = {
  variant: 'primary',
  size: 'sm'
}

export default TravelButton