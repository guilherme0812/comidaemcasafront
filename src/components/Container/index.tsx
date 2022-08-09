import * as React from 'react';

interface IContainer extends React.PropsWithChildren {
  className?: string
  cols?: number
}
const Container: React.FC<IContainer> = ({ className, children, cols }) => {
  return (
    <div className={`grid grid-cols-1 md:grid md:grid-cols-${cols? cols : 1} px-6 w-11/12 m-auto ${className}`}>
      {children}
    </div>
  )
}
export default Container