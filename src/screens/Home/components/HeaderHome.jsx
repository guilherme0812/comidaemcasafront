import React from 'react';
import DefaultButton from '../../../components/DefaultButton';
import Text from '../../../components/Text';

const HeaderHome = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2">

        <div className="flex justify-start items-center h-screen px-6">
          <div className="grid gap-12 mx-auto md:w-3/4">
            <h1 className="text-6xl font-forum">Sua doação <br /> transforma vidas</h1>
            <Text>faça a diferença na na vida dessas pessoas com apenas um clique</Text>
            <DefaultButton value="Fazer diferença" to='/instituicoes' />
          </div>
        </div>
        <div className="hidden md:block h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        </div>

      </div>
    </>
  )
}
export default HeaderHome