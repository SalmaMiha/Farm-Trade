// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// const MyOrder = () => {
//   const [myOrder, setMyOrder] = useState([]);

//   const currentUser = useContext(AuthContext);

//   const url = `http://localhost:5000/myservices/${currentUser.user.email}`;
//   useEffect(() => {
//     axios.get(url, { withCredentials: true }).then((res) => {
//       setMyOrder(res.data);
//     });
//   }, []);
//   return <div></div>;
// };

// export default MyOrder;
