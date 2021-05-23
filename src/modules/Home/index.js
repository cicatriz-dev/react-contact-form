import React from 'react';
import ReactLoading from 'react-loading';
import useGitHub from '../../utils/helpers/useGitHub';

const Home = () => {
  const { response, error, isLoading } = useGitHub('pedrocmello');

  return (
    <>
      {isLoading && !response ? (
        <ReactLoading type="spin" color="#000000" width={50} height={50} />
      ) : (
        <div>
          <h1>{response?.name}</h1>
        </div>
      )}
    </>
  );
};

export default Home;
