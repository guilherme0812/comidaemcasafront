import CardInstituitions from "./CardInstituitions"
import Container from "./Container"

const Instituitions = () => {
  return (
    <>
      <Container additionalStyle="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-16">
        <CardInstituitions name="Nome da empresa" description="Lorem ipsum dolor sit amet. Ea animi molestiae non enim impedit ab blanditiis eius ut earum quisquam"/>
        <CardInstituitions name="Nome da empresa" description="Lorem ipsum dolor sit amet. Ea animi molestiae non enim impedit ab blanditiis eius ut earum quisquam"/>
        <CardInstituitions name="Nome da empresa" description="Lorem ipsum dolor sit amet. Ea animi molestiae non enim impedit ab blanditiis eius ut earum quisquam"/>
        <CardInstituitions name="Nome da empresa" description="Lorem ipsum dolor sit amet. Ea animi molestiae non enim impedit ab blanditiis eius ut earum quisquam"/>
      </Container>
    </>
  )
}
export default Instituitions