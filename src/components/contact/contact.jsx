import React, { useState } from 'react'
import './contact.scss'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e50db840-d13b-11ec-a821-6590c8b23a22";


const Contact = () => {



    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        setTimeout(() => {

            setSubmitted(true);

        }, 100);

    };



    if (submitted) {
        console.log('submited');
    }


    return (
        <div className='section__padding' id="contact">
            <h2 className='gradient__text h2'>Contactez nous</h2><br />

            <div className="container">
                <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                    <div className="row">
                        <div className="col-25">
                            <label for="name">Your Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="name" name="name" placeholder="Your name.." required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder='example@gmail.com' required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} required></textarea>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "1rem" }}>
                        <input type="submit" value="Soumettre" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact