import * as S from './style.ts'
import Trash from '../../assets/trash.svg'
import api from '../../services/api.js'
import {useEffect, useState, useRef} from 'react'

export default function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers(){
    let {data} = await api.get('/users')
    setUsers(data)
    console.log(users)
  }

  async function createUsers(){
    await api.post('/users', {
      nome: inputName.current.value,
      idade: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers();
  }

  async function deleteUser(id){
    await api.delete(`/users/${id}`)
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <S.Container>
        <S.Form>
          <S.Title>Cadastro de Usuários</S.Title>
          <S.TextInput placeholder='Nome' name='nome' type='text'ref={inputName}></S.TextInput>
          <S.TextInput placeholder='Idade' name='idade' type='number' ref={inputAge}></S.TextInput>
          <S.TextInput placeholder='Email' name='email' type='email' ref={inputEmail}></S.TextInput>
          <S.SignUpButton type='button' onClick={createUsers}>Cadastrar</S.SignUpButton>
        </S.Form>
        
          {users.map(user => (
            <S.InfoContainer key={user.id}>
              <S.TextContainer >
                <S.InfoText>Nome:  <S.Span>{user.name}</S.Span></S.InfoText>
                <S.InfoText>Idade: <S.Span> {user.age}</S.Span></S.InfoText>
                <S.InfoText>Email: <S.Span> {user.email}</S.Span></S.InfoText>
              </S.TextContainer>
              <S.InfoButton onClick={() => deleteUser(user.id)}>
                <S.ButtonImg src={Trash}/>
              </S.InfoButton>
            </S.InfoContainer>
          ))}
          
      </S.Container>
    </>
  )
}
