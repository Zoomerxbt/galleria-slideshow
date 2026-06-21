import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import NavBar from '#/components/NavBar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='"w-full overflow-x-hidden'>
      <NavBar />
      <Outlet />
    </div>
  )
}
