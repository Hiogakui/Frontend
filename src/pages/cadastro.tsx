import styles from "@/assets/css/cadastro.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import cadas_img from "@/assets/img/img_cadastro.jpg"
import SucessAlert from "@/assets/components/alerts/sucessAlert.module";
import ErroAlert from "@/assets/components/alerts/erroAlert.module";
import Link from 'next/link';
import '../assets/css/globals.css';
import Imagem from 'next/image'
import {useState, useEffect} from 'react';
import { requestPOST } from "@/utils/request";

export default function Cadastro() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usersExists, setUsersExists] = useState(false);
    const [usersCadSucces, setUsersCadSucces] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    useEffect(()=>{
      setUsersExists(false);
      // console.log(firstName,lastName,email,password)
    },[firstName,lastName,email,password]);

    const validateForm = () => {
      const errors = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
  
      if (!firstName.trim()) {
        errors.firstName = 'Campo Nome é obrigatório.';
      }
      if (!lastName.trim()) {
        errors.lastName = 'Campo Sobrenome é obrigatório.';
      }
      if (!email.trim()) {
        errors.email = 'Campo Email é obrigatório.';
      } else if (!isValidEmail(email)) {
        errors.email = 'Formato de e-mail inválido.';
      }
      if (!password.trim()) {
        errors.password = 'Campo Senha é obrigatório.';
      } else if (password.length < 6) {
        errors.password = 'A senha deve ter pelo menos 6 caracteres.';
      }
  
      setErrorMessages(errors);
      return Object.values(errors).every((error) => !error);
    };
  
    const isValidEmail = (email:any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    async function buttonRegister() {
      if (!validateForm()) {
        return;
      }

      try{
        const reponseAPI = await requestPOST({
          route: '/register',
          body: {
            first_name: firstName,
            last_name: lastName,
            email,
            password
          }
        });
        localStorage.setItem("data", JSON.stringify(reponseAPI))
        // console.log(reponseAPI)
        setUsersCadSucces(true)
        setTimeout(() => {
          setUsersCadSucces(false)
        }, 4000);
        // push("/home");
      }catch(e){
        setUsersExists(true);
      }
    }

    return (
          <main>
            <div className={styles.div_img}>
                <Imagem className={styles.img}
                  src={cadas_img}
                  alt="Imagem de uma garota sentada mexendo num notebook" 
                />
            </div>

            <div className={styles.box}>
              {usersCadSucces && <SucessAlert mensagem={"Cadastro feito com sucesso"}/>}
              {usersExists && <ErroAlert mensagem={"Esse e-mail já está cadastrado"}/>}
              <FormCard title="Cadastre-se">
              <div>
                  <div className={styles.half}>
                    <Input 
                      fullWidth name="nome"  
                      label="Nome *" 
                      type="text" 
                      id="nome"
                      inputValue={firstName} 
                      functionEdicion={setFirstName}
                      autoFocus
                    />
                    <span className={styles.error}>{errorMessages.firstName}</span>
                  </div>
                  <div className={styles.half2}>
                    <Input 
                      fullWidth name="sobrenome"  
                      label="Sobrenome *" 
                      type="text" 
                      id="sobrenome" 
                      inputValue={lastName} 
                      functionEdicion={setLastName}
                      autoFocus
                    />
                    <span className={styles.error}>{errorMessages.lastName}</span>
                  </div>
                  <div className={styles.form}>
                    <Input name="email"
                      label="Email Address" 
                      type="email" id="email" 
                      inputValue={email} 
                      functionEdicion={setEmail} 
                      autoFocus
                    />
                    <span className={styles.error}>{errorMessages.email}</span>
                    <Password name="password" 
                      label="Password" 
                      inputValue={password} 
                      functionEdicion={setPassword} 
                      id="password"
                    />
                    <span className={styles.error}>{errorMessages.password}</span>
                    <Button 
                      type="submit" 
                      value="CADASTRAR"
                      Password={password}
                      Email={email}
                      onClick={() => buttonRegister()}
                    />
                    <Link className={styles.link} href="/login" passHref>Faça Login</Link>
                  </div>
                </div>
              </FormCard>
            </div>
          </main>
    );
  }