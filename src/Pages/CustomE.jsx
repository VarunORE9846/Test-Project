//This is an implementation of Custom hook which has been named as "useFetch";
import React from 'react'
import useFetch from '../Components/useFetch';
import '../Pages/styles.css'

export const CustomE = () => {
    const [data] = useFetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');

    return (
        <div className="map">
            <table className="table">
                <thead >
                    <tr>
                        <th scope="col">index</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
            </table>


            {
                data.map((e, i) => {
                    return (
                        <>
                            <table className="table">

                                <tbody >
                                    <tr >
                                        <th className='tbody' scope="col" key={i}>{i + 1}</th>
                                        <td className='tbody' scope="col">{e?.firstName}</td>
                                        <td className='tbody' scope="col">{e?.lastName}</td>
                                        <td className='tbody' scope="col">{e?.email}</td>
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

