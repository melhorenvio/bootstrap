import WelcomeComponent from 'components/Welcome'
import HelloComponent from 'components/Hello'

import Buttons from 'components/partials/Buttons'
import Forms from 'components/partials/Forms'
import Tooltip from 'components/partials/Tooltip'
import Tables from 'components/partials/Tables'

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
    path: '/tables',
    component: Tables
  },
  {
    path: '/tooltip',
    component: Tooltip
  },
  {
    path: '/hello/:name',
    component: HelloComponent
  }
]
