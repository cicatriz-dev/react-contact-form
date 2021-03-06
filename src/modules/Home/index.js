import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import Card from '../../utils/components/Card';
import Header from '../../utils/components/Header';
import useGitHub from '../../utils/helpers/useGitHub';

const Home = () => {
  const userState = useSelector((state) => state.user);
  useGitHub('pedrocmello');

  return (
    <>
      {userState.isLoading && !userState.user && <ReactLoading type="spin" color="#000000" width={50} height={50} />}
      {!userState.isLoading && userState.error && <div>Usuário não encontrado :(</div>}
      {!userState.isLoading && userState.user && (
        <div>
          <Header username={userState?.user?.name} />
          <Card>Teste</Card>
        </div>
      )}
    </>
  );
};

export default Home;
