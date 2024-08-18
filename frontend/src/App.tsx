import './App.css'

export const App = () => {

    console.log('hello world!!!')
    console.log(import.meta.env.VITE_GITHUB_ACTIONS)

    return (
        <div>
            hello world!!!
        </div>
    )
}

export default App
