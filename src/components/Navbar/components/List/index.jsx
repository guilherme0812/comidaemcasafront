import { useState, useEffect } from "react"
import { isAuthenticated } from "../../../../services/auth"

const List = ({ visibleMobile }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
  const AccountLi = () => (
    <li className='font-md cursor-pointer py-2 md:py-0 border-t-2 md:border-0'>
      {isUserAuthenticated ? 'Acessar conta' : 'Criar conta'}
    </li>
  )

  useEffect(() => {
    setIsUserAuthenticated(isAuthenticated())
  }, []);

  return (
    <div className="col-span-3 md:col-span-2 pt-5 md:pt-0 md:place-self-end">
      <ul className={`block md:flex gap-6`}>
        <li className='font-md cursor-pointer py-2 md:py-0'>História</li>
        <li className='font-md cursor-pointer py-2 md:py-0'>Doas</li>
        <li className='font-md cursor-pointer py-2 md:py-0'>Contato</li>
        <AccountLi />
      </ul>
    </div>
  )
}
export default List