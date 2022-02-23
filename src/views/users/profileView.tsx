import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { RouteProps } from 'react-router-dom';
import View from '../../components/view/View';

interface UserInfo {
  id: string,
  fullName: string,
  firstName: string,
  middleName: string,
  lastName: string,
  email: string,
  intro: string,
  mobile: string,
  profile?: string,
  createdAt: string,
  updatedAt: string,
}


const ProfileView = () => {
  const [ variable, setVariable ] = useState<boolean>(true);
  const [users, setUsers ] = useState<UserInfo[] | undefined>(undefined);

  

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data?.users);
    }
    // do the deed
    fetchUser();

    // kutsutakse välja kui komponent eemaldatakse lehelt
    return () => {
      
    }
    // sõltuvad muutujad (useEffect kutsutuakse välja kui sõltuva muutuja sisu muutub)
  }, [setUsers]);

  if(!users){
    return <TailSpin />
  }

  return (
    <View>
      <ul>
        {users.map((user, index)=> 
          <li key={index}><p>{user.fullName}</p></li>
        )}
      </ul>
    </View>
  );
}

export default ProfileView;