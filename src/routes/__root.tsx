import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import '../styles.css'
import NavBar from '#/components/NavBar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='"w-full m-auto max-w-360 overflow-x-hidden'>
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}
