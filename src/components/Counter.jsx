import React from 'react';
import { Card, Button, Alert, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './../actions/actions';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <Card bg='dark' className='mx-auto w-50'>
      <Card.Body className='mx-auto'>
        <Alert variant='info'>
          <Badge pill variant='success'>
            {counter}
          </Badge>
        :{' '}Count
        </Alert>
        <Button
          variant='danger'
          className='fa fa-plus m-2'
          onClick={() => dispatch(increment(3))}
        />
        <Button
          variant='danger'
          className='fa fa-minus m-2'
          onClick={() => dispatch(decrement(2))}
        />
        <Card>
          <Button onClick={() => dispatch(sign_in())}>Login</Button>
          {login ? (
            <Alert variant='info'>
              <p>You are loged in</p>
            </Alert>
          ) : null}
        </Card>
      </Card.Body>
    </Card>
  );
};

export default Counter;
