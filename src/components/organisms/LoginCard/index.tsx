import React from 'react';
import LoginForm from '../../molecules/LoginForm'
import styled from 'styled-components';


const LoginCard: React.FC = () => {
    return (
        <>
            <Card>
                <h2>Welcome !</h2>
                <LoginForm />

                <span>Não tem Conta? <a href="#">registre-se</a></span>
            </Card>

        </>
    );
}

export default LoginCard;


const Card = styled.div`
display: flex;
flex-direction:column;
 align-items: center;
 width: 40%;
 background-color: #fff;
 border-radius: 20px 0px 0px 20px;
 box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

 h2 {
     font-size: 2.5em;
     margin: 40px;
     font-weight: lighter;
 }

 span{
     position: absolute;
     margin-top: 600px;
 }
`