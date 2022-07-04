import React, { useRef } from 'react';
import { Button, Container , Form } from 'react-bootstrap';
import { v4 as uuidV4} from 'uuid';

export default function Login({ onIdSubmit }) {
    const idRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();

        onIdSubmit(idRef.current.value);
    }
    function createNewId (){
        onIdSubmit(uuidV4())
    }
  return (
    <Container className='d-flex align-items-center' style={{height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter our Id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
            </Form.Group>
            <Button type="submit" className='m-2'>Login</Button>
            <Button varient="secondary" onClick={createNewId}>Create A New Id</Button>
        </Form>
    </Container>
  )
}
