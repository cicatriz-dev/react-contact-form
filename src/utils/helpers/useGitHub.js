import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetUser } from '../../store/ducks/user';

const useGitHub = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(asyncGetUser(user));
    };
    fetchData();
  }, []);
};

export default useGitHub;
