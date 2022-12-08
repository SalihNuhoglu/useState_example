import React , {useState} from "react";
import Header from "./components/header";
import Form from "./components/form";


function App() { 
   const [username,setUsername]=useState("");
   return(
     <div>
      <Header username={username}/>
      <Form setUsername={setUsername}/>
     </div>
   );
  
};
export default App;
