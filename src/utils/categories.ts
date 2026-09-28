import foodSvg from '../assets/food.svg'
import othersSvg from '../assets/others.svg'
import serviceSvg from '../assets/services.svg'
import transportSvg from '../assets/transport.svg'
import accomodationSvg from '../assets/accommodation.svg'

export const CATEGORIES = {
  food: {
    name: 'Meals',
    icon: foodSvg,
  },
  others: {
    name: 'Others',
    icon: othersSvg,
  },
  services: {
    name: 'Services',
    icon: serviceSvg,
  },
  transport: {
    name: 'Transport',
    icon: transportSvg,
  },
  accomodation: {
    name: 'Accomodation',
    icon: accomodationSvg,
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>
