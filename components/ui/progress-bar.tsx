type ProgressBarProps = {
  percent: number
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="h-4 w-full rounded-full bg-gray-200">
      <div
        className="relative h-full overflow-hidden rounded-full bg-neutral-800 transition-all duration-300 ease-in-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
