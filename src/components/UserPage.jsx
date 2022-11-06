import React, {useState, useEffect} from 'react';

 function UserPage() {

  const [data, setData] = React.useState([]);

  const [user] = useState("isaacton");
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://api.github.com/`${user}`/${isaacton}/repos?per_page=6&sort=updated`")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchLocation();
  }, []);

  if (!data.length) return <div>Loading...</div>;

  return (
    <div>
       Name: {data[0].name}
        <br />
        Email: {data[0].email}
        <br />
        Phone: {data[0].phone}
        <br />
        Address: {data[0].address.street}
    </div>
  )
}

export default UserPage;