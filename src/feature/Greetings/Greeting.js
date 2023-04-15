import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { greet } from './greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(greet());
  }, [dispatch]);

  return (
    <Section className="greeting">
      <h1>{greeting}</h1>
    </Section>
  );
};

export default Greeting;

const Section = styled.section`
  padding: 2rem 0;
  text-align: center;
  font-size: 5rem;
`;
