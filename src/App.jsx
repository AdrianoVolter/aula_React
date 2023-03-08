import './App.css'
import Card from "./components/Card"

function App() {

  //const urlFerrari = "https://s2.glbimg.com/WwkvfLhK4mt40-5fkdlWSHbyJqo=/0x0:1280x921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/0/zLTv6fTfuWwIoCbUdZXA/ferrari-sf90-stradale-2020-1280-05.jpg" 
  //const h_titulo = "Carro Ferrari"
  return (
    <div className="App">
      <Card titulo="Carro Ferrari" imagem="https://s2.glbimg.com/WwkvfLhK4mt40-5fkdlWSHbyJqo=/0x0:1280x921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/0/zLTv6fTfuWwIoCbUdZXA/ferrari-sf90-stradale-2020-1280-05.jpg" 
   width={500}/>
    </div>
  )
}

export default App
