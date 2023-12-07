import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './navigation/Auth';
import Main from './navigation/Main';
import { checkToken } from './redux/actions/actions';
import './App.css';

export default function App() {
  const { auth } = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  return auth ? <Main /> : <Auth />;
}
