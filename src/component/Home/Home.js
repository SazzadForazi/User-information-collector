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
        // console.log(info);
        const newMember = [...addmembers, info]

        setAddmembers(newMember)
    }

    const totalMale = addmembers.filter(member => member.gender == 'male');
    // console.log(totalMale.length);

    const totalFemale = addmembers.length - totalMale.length;
    // console.log(addmembers);
    return (
        <div className="row">
            <h1 className="text-dark text-center">Total Member:{addmembers.length}</h1>
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

            </div>
        </div>
    );
};

export default Home;