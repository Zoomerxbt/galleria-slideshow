import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$artwork')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div></div>
}
