
// Atualizado dia 27/10/2022 as20:52

import React, { useState, useRef } from "react";
import axios from "axios";


import { useHistory} from "react-router-dom";
//import {Link} from 'react-router-dom'
import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import Casal1 from '../../assets/casal1.svg';
import Arrow from '../../assets/arrow.svg';


import {
  Container,
 // H1,
  Image,
//  ContainerItens,
  Inputlabel,
  
  Input,
 //Button,
 // Back
 
} from "./styles";





function App() {
  const [users, setUsers] = useState([]);

  const history = useHistory();



  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
     console.log('Fui chamado para incluir ')
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
     
      age: inputAge.current.value,
    });
    //console.log(newUser)
    setUsers([...users, newUser]);

    history.push("/usuarios");

  }

  return (
    <Container>
    
      <Image alt="logo-casal1" src={Casal1} />

      <ContainerItens >

        <H1>La casa di frango, seu dados por favor :  </H1>

        <Inputlabel> Cliente</Inputlabel>
        <Input ref={inputName} placeholder="" />

        <Inputlabel>Contato</Inputlabel>
        <Input ref={inputAge} placeholder="" />

        <Button  onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />
        </Button>



      </ContainerItens>
  
    </Container>

  );
}
export default App;
