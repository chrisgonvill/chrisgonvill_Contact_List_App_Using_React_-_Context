import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Card = () => {
    const { store, actions } = useContext(Context)

    console.log(store.Contacts)

    useEffect(() => {
        actions.getContacts()
    }, [])

    const handleDelete = (contactId) => {
        actions.deleteContact(contactId); // Envía la solicitud para eliminar el contacto con el ID específico
    };

    return (
        <div className="container">
            {store.Contacts.map((item, index) => (

                <div className="card mb-3" style={{ maxwWidth: "540px" }} key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cdn.icon-icons.com/icons2/1042/PNG/512/Contact_Icon_icon-icons.com_76434.png" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="Full Name">{item.full_name}</h2>
                                <h2 className="Email">{item.email}</h2>
                                <h2 className="Phone Number">{item.phone}</h2>
                                <h2 className="Agenda Slug">{item.agenda_slug}</h2>
                                <h2 className="Address">{item.address}</h2>
                                <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Borrar Contacto</button>


                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};