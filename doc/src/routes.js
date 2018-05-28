import WelcomeComponent from 'components/Welcome'
import HelloComponent from 'components/Hello'

import Buttons from 'components/partials/Buttons'
import Forms from 'components/partials/Forms'

export default [
  {
    path: '/',
    component: WelcomeComponent
  },
  {
    path: '/buttons',
    component: Buttons
  },
  {
    path: '/forms',
    component: Forms
  },
  {
    path: '/hello/:name',
    component: HelloComponent
  }
]
