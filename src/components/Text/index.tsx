interface IText {
  children: any,
  chassName?: string,
}

const Text: React.FC<IText> = ({children, chassName, ...props}) => {
  return (
    <>
      <p className={`text-xl text-slate-500 font-dm ${chassName}`} {...props}>{children}</p>
    </>
  )
} 
export default Text