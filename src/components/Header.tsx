import { useCurrentLesson, useStore } from "../zustands-store"

export const Header = () => {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isLoading = useStore((store) => store.isLoading)

  if (isLoading) {
    // TODO: Add skeleton loading https://tailwindcss.com/docs/animation#pulse
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo {currentModule?.title}
      </span>
    </div>
  )
}
