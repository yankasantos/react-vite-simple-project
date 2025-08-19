import Post from './components/Post'
function App() {
//   const postData =[{
//     name:'Yanka Santos',
//     description: 'Staff Software Engineer',
//     message: 'ReactJS is a powerfull libary to build a modern and performatic UI.',
// },
// {
//     name:'Renato Lelis',
//     description: 'Senior Python Software Engineer',
//     message: 'ReactJS and Python are a perfect combination to build a system with the gretest usability',
// }
// ];

  return (
    <main>
      <Post author='Yanka Santos' description= 'Staff Software Engineer' message= 'ReactJS is a powerfull libary to build a modern and performatic UI.'/>
      <Post author='Renato Lelis' description= 'Senior Python Software Engineer' message= 'ReactJS and Python are a perfect combination to build a system with the gretest usability'/>
    </main>
  )
}

export default App
