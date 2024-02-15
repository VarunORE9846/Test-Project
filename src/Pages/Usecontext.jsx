import React from 'react'
import '../Pages/styles.css'
import { datastate } from '../App'
import { useContext } from 'react'
//this page consists of implementation of usecontext,usememo,usecallback hooks
export const Usecontext = () => {
    const dataa = useContext(datastate);
    return (
        <>

            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h3 class="card-title">{dataa.Name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">{dataa.Typehook}</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex voluptates
                        fuga vero ratione nulla consectetur ad dolor, libero totam corporis hic doloremque aliquam quae et, autem,
                        reiciendis suscipit. Assumenda.
                        Deleniti omnis similique facilis vero autem.
                        Rem sapiente cumque voluptatum blanditiis, expedita aspernatur
                        eos non accusantium sint minima aut odit repudiandae. Dolore cupiditate accusamus soluta error debitis vel qui ex?</p>

                </div>
            </div>
        </>
    )
}

