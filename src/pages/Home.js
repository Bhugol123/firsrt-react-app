import { Button, Input } from '@material-tailwind/react'
import { formik, useFormik } from 'formik'
import React, {useState} from 'react'


const Home = () => {

  const [user, setUser] = useState([]);
 
  const formik = useFormik({
    initialValues :{
      email: ''
    },
    onSubmit:(val)=>{
    setUser ([...user, val])
    }
  })
  
  return (
    <div className='p-4 max-w-[300px]'>

      <form onSubmit={formik.handleSubmit} className='space-y-2'>
     
          <Input
            name = 'email'
            value={formik.values.email}
            onChange={formik.handleChange}
            size="lg" label='Email' placeholder="name@mail.com"
          
          />

          <Button type='submit'size='sm'>Submit</Button>
      </form>

      <div>
        {user.map((user, i)=>{
          return <li key={i}>{user.email}</li>
        })}
      </div>
     



    </div>
  )
}

export default Home