import React from 'react'


const Collaborate = () => {
    return (

        <>
            <div>
                <div className='collab-form'>
                    <div className= "mb-3 mx-auto">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-dark">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Collaborate;