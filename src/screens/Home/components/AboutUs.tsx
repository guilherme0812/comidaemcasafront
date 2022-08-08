import React from 'react';
import Woman from "../../../assets/images/mulher-abracando-planeta.png"
import DefaultButton from '../../../components/DefaultButton';
import Text from '../../../components/Text';

const AboutUs = () => {
  return (
    <div>
      <div className='md:grid md:grid-cols-2'>
        <div className="flex justify-center md:justify-end items-center md:h-screen px-6">
          <img className='w-10/12' src={Woman} alt="" />
        </div>
        <div className="flex justify-start items-center h-screen px-6">
          <div className='grid gap-8 mx-auto md:w-3/4'>

            <div>
              <h2 className='text-4xl serif text-indigo-500 font-forum'>Quem somos ?</h2>
              <div className='w-3/12 my-5 border-b-4 border-indigo-500'></div>
            </div>
            <Text>Lorem ipsum dolor sit amet. Sed ducimus repellat non numquam laborum ea repellendus dolor aut recusandae a necessitatibus quisquam </Text>
            <Text>Lorem ipsum dolor sit amet. Sed ducimus repellat non numquam laborum ea repellendus dolor aut recusandae a necessitatibus quisquam </Text>
            <DefaultButton value="Visualizar ONGs" to='/instituicoes' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs