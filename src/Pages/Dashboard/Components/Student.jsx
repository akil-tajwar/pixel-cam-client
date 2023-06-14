import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import SectionTitle from '../../Shared/SectionTitle';
import StudentDashboard from './StudentDashboard';
import Swal from 'sweetalert2';

const Student = () => {
    const { user } = useContext(AuthContext);
    const [selectClass, setSelectClass] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            console.log(user.email);
            fetch(`https://pixel-cam-server.vercel.app/selectClass?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSelectClass(data);
                    setIsLoading(false);
                })
                .catch(error => console.log(error))
        }
    }, [user?.email]);
    console.log("selectClass:", selectClass);
    

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pixel-cam-server.vercel.app/selectClass/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = selectClass.filter(dashboard => dashboard._id !== _id);
                            setSelectClass(remaining);

                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    return (
        <div className='mt-36 mb-24'>
            <SectionTitle title={'Student Dashboard'}></SectionTitle>
            <div className="border w-3/4 h-fit mx-auto border-slate-400">
                <div className='font-semibold grid grid-cols-9 justify-center items-center p-5'>
                    <p className='font-semibold'>Sl no.</p>
                    <p className=''>Image</p>
                    <p className='col-span-2 font-semibold'>Category</p>
                    <p className='text-leftfont-semibold col-span-2'>Instructor Name</p>
                    <p className='font-semibold'>Price</p>
                    <p className='font-semibold flex gap-2 justify-start'>Update/Delete</p>
                </div>
            </div>
            {
                selectClass.map(dashboard => <StudentDashboard handleDelete={handleDelete} dashboard={dashboard} key={dashboard._id}></StudentDashboard>)
            }
        </div>
    );
};

export default Student;