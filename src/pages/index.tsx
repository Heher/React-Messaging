import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Layout from '../components/Layout';

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Index: React.FC = () => (
  <Layout>
    <PageWrapper>
      <Container />
    </PageWrapper>
  </Layout>
);

export default Index;
