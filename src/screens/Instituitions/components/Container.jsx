const Container = ({children, additionalStyle}) => {
  return (
    <div className="px-6">
      <div className={`flex h-screen w-11/12 m-auto ${additionalStyle}`}>
          {children}
      </div>
    </div>
  )
}
export default Container