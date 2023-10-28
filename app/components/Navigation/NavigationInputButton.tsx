

const NavigationInputButton = ({submitAreaChanges}:{submitAreaChanges:()=>void}) => (
  <div className="my-5 flex justify-center">
    <button 
      className="bg-blue-300 px-10 py-3 rounded shadow shadow-black"
      onClick={()=>submitAreaChanges()}
    >
      Ok
    </button>
  </div>
)

export default NavigationInputButton