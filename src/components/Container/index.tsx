import * as React from 'react';

interface IContainer extends React.PropsWithChildren {
  className?: string
}
const Container: React.FC<IContainer> = ({ className, children }) => {
  return (
    <div className={`md:grid md:grid-cols-2 px-6 h-screen w-11/12 m-auto ${className}`}>
      {children}
    </div>
  )
}
export default Container