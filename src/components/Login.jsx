import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css'

const User = {
    id: '60201917',
    pw: '1234'
}


export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const handleId = (e) => {
        setId(e.target.value);
    }

    const handlePw = (e) => {
        setPw(e.target.value)
    }

    const onClickConfirmButton = () => {
        if (id === User.id && pw === User.pw) {
            alert('로그인에 성공했습니다.');
            goToMain()
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }

    const goToMain = () => {
        navigate('/home');
    };

    const goToSignUp = () => {
        navigate('/sign-up');
    }


    /* const goToList = () => {
        if(condition) {
          fetch("http://52.79.143.176:8000/users/login", {
            method: 'POST',
            headers: [["Content-Type", "application/json"]],
            body: JSON.stringify({
              email: id,
              password: pw
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              if(result.token !== undefined) {
                localStorage.setItem('access_token : ', result.token)
                navigate("/list-haneul");
                sessionStorage.setItem("id", id);
              }
              else {
                alert('아이디 또는 패스워드를 확인해주세요!');
              }
            }
          )
        }
      } */

    return (
        <div>
            <h1 className='titleWrap'>
                명지톡톡
            </h1>
            <div className='page'>
                <div className='contentWrap'>
                    <label className='inputTitle'>아이디</label>
                    <div className='inputWrap'>
                        <input
                            type='text'
                            className='input'
                            value={id}
                            onChange={handleId} />
                    </div>
                    <label className='inputTitle'>비밀번호</label>
                    <div className='inputWrap'>
                        <input
                            type='password'
                            className='input'
                            value={pw}
                            onChange={handlePw} />
                    </div>

                    <div>
                        <button className='buttonWrap' onClick={onClickConfirmButton}>
                            로그인
                        </button>
                        <button className='buttonWrap' onClick={goToSignUp}>
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

