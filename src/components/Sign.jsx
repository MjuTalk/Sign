import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css'

const User = {
    name:'홍길동',
    major:'정보통신공학과',
    id: '60201917',
    pw: '1234'
}


export default function Sign() {
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [re_pw, setRe_pw] = useState('');
    const navigate = useNavigate();

    const handleName = (e) => {
      setName(e.target.value)
    }

    const handleMajor = (e) => {
    setMajor(e.target.value)
    }
    const handleId = (e) => {
       setId(e.target.value)
    } 

    const handlePw = (e) => {
        setPw(e.target.value)
    }

    const handleRe_pw = (e) => {
      setRe_pw(e.target.value)
    }

    const onClickConfirmButton = () => {
        if (pw === re_pw) {
            alert('회원가입되었습니다.');
            goToSignIn()
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }

    const goToMain = () => {
        navigate('/home');
    };

    const goToSignUp = () => {
        navigate('/sign-up');
    }

    const goToSignIn = () => {
        navigate('/');
    }


    /* const goToList = () => {
        if(condition) {
          fetch("http://52.79.143.176:8000/users/sign", {
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
                <label className='inputTitle'>이름</label>
                    <div className='inputWrap'>
                        <input
                            type='text'
                            className='input'
                            value={name}
                            onChange={handleName} />
                    </div>

                    <label className='inputTitle'>학과</label>
                    <div className='inputWrap'>
                        <input
                            type='text'
                            className='input'
                            value={major}
                            onChange={handleMajor} />
                    </div>
                
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
                    <label className='inputTitle'>비밀번호확인</label>
                    <div className='inputWrap'>
                        <input
                            type='password'
                            className='input'
                            value={re_pw}
                            onChange={handleRe_pw} />
                    </div>

                    <div>
                        
                        <button className='buttonWrap' onClick={onClickConfirmButton}>
                            회원가입완료
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

