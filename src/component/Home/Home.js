import React, { useEffect, useState } from 'react';
import Allusers from '../Allusers/Allusers';
import './Home.css'

const Home = () => {

    const [users, setUsers] = useState([])
    // console.log(users);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, [])


    const [addmembers, setAddmembers] = useState([])

    const handleAddToCart = (info) => {
        info.isAdded = true;
        // console.log(info);
        const newMember = [...addmembers, info]

        setAddmembers(newMember)
    }

    const totalMale = addmembers.filter(member => member.gender == 'male');
    // console.log(totalMale.length);

    const totalFemale = addmembers.length - totalMale.length;
    // console.log(addmembers);

    const [guider, setGuider] = useState([])

    useEffect(() => {
        fetch('./guider.JSON')
            .then(res => res.json())
            .then(result => setGuider(result))
    }, [])

    // console.log(guider);
    return (
        <div className="row">
            <h1 className="text-light text-center">Total Member: {addmembers.length}</h1>
            <h3 className="text-dark text-center">Total Male: {totalMale.length}</h3>
            <h3 className="text-dark text-center">Total Female: {totalFemale}</h3>
            <div className="col-md-9 left-site">
                <div className="row">
                    {
                        users.map(user =>
                            <Allusers handleAddToCart={handleAddToCart}
                                key={user.id.value}
                                user={user}></Allusers>)
                    }
                </div>

            </div>


            <div className="col-md-3">
                <div className="row">
                    {
                        guider.map(guid => <div className="user-car">
                            <div className="user-img">
                                <img src={guid.picture.large} alt="" />

                            </div>
                            <h5>Name:{guid.name.title} {guid.name.first} {guid.name.last}</h5>
                            <h5>Gender:{guid.gender}</h5>
                            <h5>Phone:{guid.phone}</h5>
                            <h5>Country:{guid.location.country}</h5>
                            <p><small>Email:{guid.email}</small></p>
                            <button onClick={() => handleAddToCart(guid)} className="group btn btn-info">Add To Group</button> <br />
                            <button className="details btn btn-primary">Details</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;