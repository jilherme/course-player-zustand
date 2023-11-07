import ReactPlayer from "react-player"
import { useAppSelector } from "../store"

export const Video = () => {
  const video = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLessonData =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLessonData
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  )
}
