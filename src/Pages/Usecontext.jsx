import React from 'react'
import '../Pages/styles.css'
import { Appstate } from '../App'
import { useContext } from 'react'

export const Usecontext = () => {
    const Appdata = useContext(Appstate);
    return (
        <>
            {/* <h2>{Appdata.Name}</h2>
            <h3>{Appdata.Typehook}</h3> */}
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h3 class="card-title">{Appdata.Name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">{Appdata.Typehook}</h4>
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

