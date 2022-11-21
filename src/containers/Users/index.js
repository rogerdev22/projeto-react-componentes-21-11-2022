// Atualizado dia 27/10/2022 as 20:17

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"


import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
 // H1,
  Image,
 // ContainerItens,
 // Button,
  //  User
  UsersComponent

} from "./styles";





function Users() {
  const [users, setUsers] = useState([]);

 const history =  useHistory()
   console.log(history)
   console.log("Backeend 3000 ")


  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
   fetchUsers()
  },[]);

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`);
    console.log("Oi, fui chamada para excluir")
   // console.log(userid)
    const newUsers = users.filter((user) => user.id !== userid);
    setUsers(newUsers);
  }
 function goBackPage() {
     history.push('/');
 }
  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens isBlur={true}>

        <H1>La casa di frango  </H1>
        <ul>

          {users.map((user) => (

            <UsersComponent key={user.id} >

              <p>{user.name}</p> <p> {user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixo" />
              </button>
            </UsersComponent>
          ))}
        </ul>


        <Button isBack={true} onClick={goBackPage} >
          
          <img alt="Seta" src={Arrow} /> Voltar para cadastro 

        </Button>

      </ContainerItens>
    </Container>

  );
}
export default Users;