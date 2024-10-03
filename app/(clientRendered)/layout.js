'use client'
import SideBar from '../(Components)/side-bar/side-bar-student';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

export default function StudentLayout({ children }) {
    return (
      <>
          <Provider store={store}>
            {children}
          </Provider>,
      </>
    );
  }