import React ,{useState ,useEffect} from 'react'
import {Container ,Row ,Col ,Form ,InputGroup ,Spinner} from 'react-bootstrap';
import {FaLock} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {RiLoginCircleLine} from "react-icons/ri";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { login } from '../store/actions/authAction';

const Login = () => {
  const discpatch = useDispatch();
  const navigate = useNavigate();
  const {isLoading,isError , isAuthontecated , errors} = useSelector(state=>state.Auth);

  const [loginData , setLoginData] = useState({
    email:"",
    password:""
  }) ;
  const handelChange = (e)=>{
    setLoginData(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  };

   

  const {email,password} = loginData

   const userLoing=(e)=>{
    e.preventDefault();
    discpatch(login(loginData));
    setLoginData({
      email:"",
      password:""
    })
    
   };// submit
 
   useEffect(()=>{
    if(isError){
      errors && errors.map((error,index)=>{
        return(
          toast.error(<p key={index}>{error} ! </p>, {
            position:"top-right",
            autoClose:1000
          })
        )
      })
    };
    if(isAuthontecated){
      navigate('/')
     }; 
  
   },[isError ,isAuthontecated ,navigate]);

  
   // loading
   if(isLoading){
    return <Spinner animation="border" variant="primary" />
   }

  return (
   <div className='login-page mt-5'>
     <Container>
      <h4 className='text-center text-capitalize mb-5'>
        welecome, backe <br/>
         <RiLoginCircleLine/> Login In Your account 
      </h4>
      <Row>
        <Col md={{ span: 7, offset: 3}}>
          <Form onSubmit={userLoing}>
            <Row>
              <Col md={12}>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-email">  <AiTwotoneMail/> </InputGroup.Text>
                  <Form.Control
                   aria-described by="basic-email"
                    type='email'
                    placeholder="Please Enter Your Email"
                    name='email'
                    value={email}
                    onChange={handelChange}
                  />
                </InputGroup>
              </Col>
              <Col md={12}>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-password">  <FaLock/> </InputGroup.Text>
                  <Form.Control
                   aria-describedby="basic-password"
                    type='password'
                    placeholder="Please Enter Your Pasword"
                    name='password'
                   value={password}
                   onChange={handelChange}
                  />
                </InputGroup>
              </Col>
            </Row>
            <button type='submit'>Login</button>
            </Form>
          </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Login
