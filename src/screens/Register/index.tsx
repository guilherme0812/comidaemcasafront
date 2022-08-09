import { Container } from "../../components";
import { Input, DefaultButton, Text } from '../../components'

const Register = () => {
  return (
    <Container cols={2} className="h-screen">
      <div className="grid h-screen content-center ">
        <div className="w-8/12 m-auto">
          <header className="mb-5 text-purple-500">
            <h2 className="text-5xl font-forum">Cadastro</h2>
          </header>
          <div className="mb-3 flex">
            <p className={`text-md text-indigo-500 font-dm`}>Sou uma ONG </p> [checkbox]
          </div>
          <Input className="mb-5" placeholder="Seu nome" />
          <Input className="mb-5" placeholder="Seu email" />
          <Input className="mb-5" placeholder="Senha" />

          <div className="flex gap-4">
            <DefaultButton value="Acessar" to="" className="block w-full" />
            <DefaultButton value="Cadastrar" to="" light />
          </div>
        </div>
      </div>
      <div>My Register</div>
    </Container>
  )
}
export default Register;