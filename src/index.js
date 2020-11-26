// here we require the module dependecie in our file
const Raact = require('react')
const ReactDOM = require('react-dom')


// here we built the component

const App = ()=>{

    return <div>Hi there</div>

} 

// herw we display our component on screen using react-dom

ReactDOM.render(
    <App />,
    document.querySelector('#root')

)