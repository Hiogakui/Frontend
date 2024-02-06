import styles from "@/assets/css/login.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import SucessAlert from "@/assets/components/alerts/sucessAlert.module";
import ErroAlert from "@/assets/components/alerts/erroAlert.module";
import Load from "@/assets/components/load/load.module";
import Link from 'next/link';
import Google from "@/assets/img/lg_google.png"
import login_img from "@/assets/img/img_login.jpg"
import Imagem from 'next/image'
import '../assets/css/globals.css';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import {requestPOST, setToken, requestGET} from '../utils/request';

export default function Login() {
    const { push } = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [faledTryLogin, setFaledTryLogin] = useState(false);
    const [isLoged, setIsLoged] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
      email: '',
      password: '',
    });

    useEffect(() => {
        setFaledTryLogin(false);
        //console.log(email,password)
      },
      [email, password]
    );

    useEffect(() => {
        if(isLoged) {
          setTimeout(() => {
            push("/home");
          }, 3000);
        }
      },
      [isLoged,push]
    );

    const validateForm = () => {
      const errors = {
        email: '',
        password: '',
      };
  
      if (!email.trim()) {
        errors.email = 'Email não pode ser vazio';
      } else if (!isValidEmail(email)) {
        errors.email = 'Formato de Email inválido.';
      }
      if (!password.trim()) {
        errors.password = 'Senha não pode ser vazia';
      }
  
      setErrorMessages(errors);
      return Object.values(errors).every((error) => !error);
    };

    const isValidEmail = (email:any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };


    async function butonLogin(){
      if (!validateForm()) {
        return;
      }

      try {
        const userData = {email, password}
        const responseAPIlogin = await requestPOST({route: '/login', body: {email, password}});

        localStorage.setItem('token', JSON.stringify(responseAPIlogin.token));
        setToken(responseAPIlogin.token);
        const responseAPIvalidate = await requestGET('/login/validate');
        localStorage.setItem('user', JSON.stringify(responseAPIvalidate));
        setIsLoged(true);

        //console.log(respnseAPI);
      } catch (e) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setFaledTryLogin(true);
        setIsLoged(false);
      }
    };

    return (
      <main>
        <div className={styles.div_img}>
              <Imagem className={styles.img}
                src={login_img}
                alt="Imagem cartoon de três pessoas adicionando imagens diretamente 
                com aa mãos num monito gigante " 
              />
            </div>
          <div className={styles.box}>
          {isLoged ? (
            <>
              <SucessAlert mensagem={"Logado com sucesso!"}/>
              <Load />
            </>
          ) : null}
            {faledTryLogin && <ErroAlert mensagem={"Login ou senha inválidos!"}/>}

            <FormCard title="Entre no Orange Portfólio">
              <div  className={styles.form}>
                <button className={styles.google}>
                  <Imagem
                    src={Google}
                    alt="Logo da empresa Google" 
                    style={{ width:'auto', height:'1.3rem', marginRight: '1.7em', marginBottom:'-0.4em'}}

                  />
                  Entrar com Google
                </button>
                <p className={styles.text}>Faça login com email</p>

                <Input 
                  name="email" 
                  label="Email Address" 
                  type="email" 
                  id="email" 
                  inputValue={email} 
                  functionEdicion={setEmail} 
                  autoFocus
                />
                <span className={styles.error}>{errorMessages.email}</span>
                <Password 
                  name="password" 
                  label="Password" 
                  id="password" 
                  inputValue={password} 
                  functionEdicion={setPassword} 
                />
                <span className={styles.error}>{errorMessages.password}</span>
                <Button 
                  type="submit" 
                  value="ENTRAR"
                  Email={email}
                  Password={password}
                  onClick={() => butonLogin()}/>
                <Link className={styles.link} href="/cadastro" passHref>Cadastre-se</Link>
              </div>
            </FormCard>
          </div>
        </main>
    );
  }