//This is an implementation of Custom hook which has been named as "useFetch";
import React from 'react'
import { useState, useEffect } from 'react'
import { Hourglass } from 'react-loader-spinner'
// import useFetch from '../Components/useFetch';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/styles.css'

export const CustomE = () => {
    // const [data] = useFetch('https://hub.dummyapis.com/employee?noofRecords=30&idStarts=1001');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function getData() {
            const call = await fetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001');
            const res = await call.json();
            setData(res);
            setLoading(false);
            toast.success("Data Retrieved successfully");
        }
        getData();

    }, [])
    return (
        <div className="map">
            <table className="table">
                <thead >
                    <tr>
                        <th className='tbody' scope="col">index</th>
                        <th className='tbody' scope="col">FirstName</th>
                        <th className='tbody' scope="col">LastName</th>
                        <th className='tbody' scope="col">Email</th>
                    </tr>
                </thead>
            </table>


            {loading ?
                <div className="hor">    <Hourglass color="blue" height={70} /></div>
                :
                data.map((e, i) => {
                    return (
                        <>
                            <table className="table">

                                <tbody >
                                    <tr >
                                        <th scope='row' className='tbody' key={i}>{i + 1}</th>
                                        <td className='tbody' >{e?.firstName}</td>
                                        <td className='tbody'>{e?.lastName}</td>
                                        <td className='tbody' >{e?.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )
                })
            }
        </div>
    )
}

