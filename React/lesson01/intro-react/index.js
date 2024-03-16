// const h1=document.createElement('h1')
// const root=document.getElementById('root')

// root.append(h1)

const root=document.getElementById('root')

const h1=React.createElement('h1',{style:{color:'red'}},['hello world'])

ReactDOM.createRoot(root).render(h1)
