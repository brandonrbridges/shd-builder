interface SpacerProps {
  children?: any
  axis?: 'x' | 'y' | 'both'
  gap?: number
}

const Spacer = ({ children, axis = 'y', gap = 4 }: SpacerProps) => {
  let axisClass = axis !== 'both' ? '-' + axis + '-' : '-'

  const spacerClass = 'space' + axisClass + gap

  return <div className={spacerClass}>{children}</div>
}

export default Spacer
