import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Allusers.css'
const Allusers = (props) => {

    // console.log(props.handleAddToCart);
    const { name, gender, phone, location, email, picture } = props.user;
    // console.log(name);
    return (

        <div className="col-md-4">
            <div className="user-car">
                <div className="user-img">
                    <img src={picture.large} alt="" />

                </div>
                <h5>Name:{name.title} {name.first} {name.last}</h5>
                <h5>Gender:{gender}</h5>
                <h5>Phone:{phone}</h5>
                <h5>Country:{location.country}</h5>
                <p><small>Email:{email}</small></p>
                {props.user.isAdded ? (
                    (<button className="group btn btn-danger">Already Added</button>)


                ) : <button onClick={() => props.handleAddToCart(props.user)} className="group btn btn-info">Add To Group</button>
                }
                <br />
                <ReactModal user={props.user}></ReactModal>
            </div>
        </div >


    );
};

export default Allusers;