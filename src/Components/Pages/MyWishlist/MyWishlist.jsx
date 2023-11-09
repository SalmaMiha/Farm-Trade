// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// const MyWishlist = () => {
//   const [wishlist, setWishlist] = useState([]);

//   const currentUser = useContext(AuthContext);

//   const url = `https://farm-trade-server.vercel.app/wishlist/${currentUser.user.email}`;
//   useEffect(() => {
//     axios.get(url, { withCredentials: true }).then((res) => {
//       setWishlist(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       <p>{wishlist.length}</p>
//     </div>
//   );
// };

// export default MyWishlist;
