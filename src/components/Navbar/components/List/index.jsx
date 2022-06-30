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

  console.log(isUserAuthenticated)

  return (
    <ul className={`block md:flex gap-6 ${visibleMobile && 'pt-5'}`}>
      <li className='font-md cursor-pointer py-2 md:py-0'>História</li>
      <li className='font-md cursor-pointer py-2 md:py-0'>Doas</li>
      <li className='font-md cursor-pointer py-2 md:py-0'>Contato</li>
      <AccountLi />
    </ul>
  )
}
export default List