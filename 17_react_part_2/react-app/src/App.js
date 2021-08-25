import './App.css'
import EffectHook from './components/EffectHook'
import Timer from './components/Timer'
import Forecast from './components/Forecast'
import SocialNetwork from './components/SocialNetwork'

function App() {
	return (
		<div className='App'>
			<EffectHook />
			<Timer />
			<Forecast />
			<SocialNetwork />
		</div>
	)
}

export default App
