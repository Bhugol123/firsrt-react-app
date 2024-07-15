import { faker } from '@faker-js/faker';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import ProfilCard from '../component/ProfilCard';

const Home = () => {

  const [users, setUsers] = useState([]);



  const handleAdd = () => {
    const newObj = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      image: faker.image.avatarLegacy()
    };
    setUsers((prev) => [...prev, newObj]);

  }

  return (
    <div className='p-4'>
     

      <div className="adds flex justify-end">
        <Button onClick={handleAdd} ripple={true} color='green'>Add User</Button>
      </div>

      <div className="users">
        {users.map((user, i) => {
          return <ProfilCard user={user}/>
        })}
      </div>



    </div>
  )
}

export default Home