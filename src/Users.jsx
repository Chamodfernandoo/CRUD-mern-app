import React, { useEffect } from 'react'
import Userforn from './Userforn'
import { Link } from 'react-router-dom'
import Userstable from './Userstable'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [submited, setSubmited] = React.useState(false);
    const [isedited, setIsEdited] = React.useState(false);
    const [editedUser, setEditedUser] = React.useState({});

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axios.get('http://localhost:3001/api/users') 
            .then((response) => {
                setUsers(response.data?.response || [])

            }).catch((error) => {
                console.log(error);
            })
    }

    const addUser = (data) => {
        setSubmited(true);
         const paylord = {
             id: data.id,   
             name: data.name,
         }
        axios.post('http://localhost:3001/api/newuser', paylord)
            .then(() => {
                getUsers();
                setSubmited(false);
                isedited(false);
            }).catch((error) => {
                console.log(error);
            })  
    }

    const updateuser = (data) => {
        setSubmited(true);
        const paylord = {
            id: data.id,   
            name: data.name,
        }
        axios.put('http://localhost:3001/api/updateuser', paylord)
            .then(() => {
                getUsers();
                setSubmited(false);
                isedited(false);
            }).catch((error) => {
                console.log(error);
            })
    }

    const deleteUser = (data) => {
        axios.delete(`http://localhost:3001/api/deleteuser`, { data: { id: data.id } })
            .then(() => {
                getUsers();
            }).catch((error) => {
                console.log(error);
            })
    }

  return (
    <>
    <div className='grid grid-cols-1 '>
        <div className=''><Userforn 
            add={addUser} 
            submited={submited}
            data={editedUser}
            isedited={isedited}
            updateuser={updateuser}
            />
        </div>
        <div className='px-40'><Userstable 
            rows={users}    
            editeduser={data =>{ 
                setEditedUser(data);
                setIsEdited(true)}} 
            deleteuser={data => window.confirm('Are you sure?') && deleteUser(data)}

                />
        </div>
        <div><Link to='/' type='button' className="px-4 py-2 text-lg border border-black rounded-md bg-lime-400 ">Back to Home</Link></div>
    </div>  
    </>
  )
}

export default Users
