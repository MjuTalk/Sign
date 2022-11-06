import axios from 'axios'
import{
    SIGN_USER
} from './types';

export function SignUser(dataToSubmit){
    
    const request = axios.post('/api/users/login', dataToSubmit) //서버에 이름과 비번 보내기
        .then(response => response.data ) //서버에서 받은 data를 request에 저장
    
    return { //reducer에 넘겨주기
        type: SIGN_USER,
        payload: request
    }
}