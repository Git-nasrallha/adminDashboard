import React ,{useState ,useEffect} from 'react'
import {Container ,Row ,Col ,Form ,InputGroup ,Spinner} from 'react-bootstrap';
import {FaUserLock , FaUserAlt ,FaLock} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {useDispatch , useSelector} from 'react-redux';
import { register } from '../store/actions/authAction';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [registerData , setRegisterData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    password2:""
  });
  const discpatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading ,isError , isAuthontecated , errors } = useSelector(state=>state.Auth);
     
  const handelChange = (e)=>{
    setRegisterData(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const {firstName,lastName,email,password,password2} = registerData


  // function submit
  const handelSubmit=(e)=>{
    e.preventDefault();
    discpatch(register(registerData));
    setRegisterData({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      password2:""
    })
  }; //end handel submit

  useEffect(()=>{
    if(isError){
      // eslint-disable-next-line
      errors && errors.map((error,index)=>{
        return(
          toast.error(<p key={index}>{error} ! </p>, {
            position: 'top-right',
            autoClose:1000
          })
        )
      })
    };
    // check isAuthontecated
    if(isAuthontecated){
    navigate('/users/login')
 }
  },[isError , isAuthontecated , navigate,errors]);

  // check isloading
  if(isLoading){
    return <Spinner animation="border" variant="primary" />
  }

  
  return (
   <div className='register-page mt-4'>
     <Container>
      <h4 className='text-center text-capitalize mb-3'>
        welecome ,In our admin dashbord , <br/>
         <FaUserLock/> create new account 
      </h4>
      <Row>
        <Col md={{ span: 7, offset: 3}}>
          <Form onSubmit={handelSubmit} >
            <Row>
              <Col md={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-firstName">  <FaUserAlt/> </InputGroup.Text>
                  <Form.Control
                    placeholder="Please Enter Your FirstName"
                    name='firstName'
                    value={firstName}
                    onChange={handelChange}
                    aria-describedby="basic-firstName"
                  />
                </InputGroup>
              </Col>
              <Col md={6}>
              <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-lastNam">  <FaUserAlt/> </InputGroup.Text>
                  <Form.Control
                    placeholder="Please Enter Your LastName"
                    name='lastName'
                    value={lastName}
                    onChange={handelChange}
                    aria-describedby="basic-lastNam"
                  />
                </InputGroup>
                </Col>
                <Col md={12}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-email">  <AiTwotoneMail/> </InputGroup.Text>
                    <Form.Control
                      type='email'
                      placeholder="Please Enter Your Email"
                      name='email'
                      value={email}
                      onChange={handelChange}
                      aria-describedby="basic-email"
                    />
                  </InputGroup>
                </Col>
                <Col md={12}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-password">  <FaLock/> </InputGroup.Text>
                    <Form.Control
                      type='password'
                      placeholder="Please Enter Your Pasword"
                      name='password'
                      value={password}
                      onChange={handelChange}
                      aria-describedby="basic-password"
                    />
                  </InputGroup>
                </Col>
                <Col md={12}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-password2">  <FaLock/> </InputGroup.Text>
                    <Form.Control
                      type='password'
                      placeholder="Please Enter Confirme Password"
                      name='password2'
                      value={password2}
                      onChange={handelChange}
                      aria-describedby="basic-password2"
                    />
                  </InputGroup>
                </Col>
            </Row>
            <button type='submit'>Register</button>
            </Form>
        </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Register
