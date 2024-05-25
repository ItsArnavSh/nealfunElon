import Offer from './offer'
export default function App()
{
  return(
    <>
    <h1 className = "text-red-500">
      Hello World
      </h1>
      <div className = "w-100 m-10 flex flex-row">
      <Offer />
      <Offer />
      </div>
    </>
  )
}