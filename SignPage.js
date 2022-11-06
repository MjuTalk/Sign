import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action'
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Id, setId] = useState("") //state 초기상태는 빈칸""
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")


  const onIdHandler = (event) => { //state을 바꾸면 value가 바뀜
      setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
}

  const onSubmitHandler = (event) => {
      event.preventDefault(); //페이지 리프레시 방지
      
      let body = {
        id: Id,
        password: Password,
        name: Name
      }

      dispatch(signUser(body))
          .then(response => { 
              if(response.payload.signSuccess){
                navigate('/'); //성공시 처음 페이지로 이동
              }else{
                alert('Error')
              }
          })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>

        <form style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmitHandler} //버튼 동작하도록
        >
            <label>Id</label>
            <input type="id" value={Id} onChange={onIdHandler} />  
            <label>Password</label> 
            <input type="password" value={Password} onChange={onPasswordHandler} />
            <label>Name</label>
            <input type="name" value={Name} onChange={onNameHandler} />
            <br />
            <button type="submit">
              Login
            </button>
        </form>

    </div>
  )
}

export default SignPage