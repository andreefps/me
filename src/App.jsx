import { Card } from './components/Card'
import './index.css'

function App() {
  return (
    <>
      <div className="hero flex justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="http://www.github.com/andreefps.png" />
              </div>
            </div>
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="divider py-4"></div>
      <div className="grid grid-flow-col justify-center gap-4">
        <Card
          title={'Jogou Onde ?'}
          description={
            'Game app for guesssing the correct teams based on players'
          }
        />

        <Card
          title={'Jogou Onde ?'}
          description={
            'Game app for guesssing the correct teams based on players'
          }
        />
        <Card
          title={'Jogou Onde ?'}
          description={
            'Game app for guesssing the correct teams based on players'
          }
        />
      </div>
    </>
  )
}

export default App
