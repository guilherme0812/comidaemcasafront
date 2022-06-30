import DefaultButton from "../../../components/DefaultButton"

const CardInstituitions = ({name="Name", description="description"}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 rounded-lg shadow-xl">
      <div className="grid-rows-1 grid items-center justify-center">
          <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-12"></span>
      </div>
      <div className="col-span-2 grid items-center mt-4 md:mt-0">
        <h2 className="text-lg text-center md:text-left font-semibold font-dm">{name}</h2>
        <p className="text-sm text-slate-700 font-dm">{description}</p>

        <div className="flex gap-3 mt-4">
          <DefaultButton value="Doar" />
          <DefaultButton value="Sabe mais" />
        </div>
      </div>
    </div>
  )
}

export default CardInstituitions