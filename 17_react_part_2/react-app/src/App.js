import './App.css'
import EffectHook from './components/EffectHook'
import Timer from './components/Timer'
import Forecast from './components/Forecast'
import SocialNetwork from './components/SocialNetwork'
import PageTitleFunction from './components/PageTitleFunction'

function App() {
	return (
		<div className='App'>
			<EffectHook />
			<Timer />
			<Forecast />
			<SocialNetwork />
			<PageTitleFunction />
		</div>
	)
}

export default App
