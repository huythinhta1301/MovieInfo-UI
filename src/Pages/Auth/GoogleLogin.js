// import React, { useEffect } from "react";
// import { gapi } from "gapi-script";
// import GoogleLogin from "react-google-login";
// import { useDispatch } from "react-redux";
// import { GOOGLE_LOGIN } from "../../Redux/Actions/Containts";
// import GoogleButton from "react-google-button";
// import { useNavigate } from "react-router-dom";

// const GoogleLoginAuth = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLoginGG = (res) => {
//     if (res !== undefined) {
//       console.log("Success > ", res);
//       dispatch({
//         type: GOOGLE_LOGIN,
//         payload: { isSigned: true, payload: res },
//       });
//       navigate("/dashboard");
//     } else {
//       console.log("Failed > ", res);
//       alert("Login failed");
//     }
//   };
//   return (
//     <div>
//       <GoogleLogin
//         clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//         buttonText="Sign in Google"
//         onSuccess={handleLoginGG}
//         onFailure={handleLoginGG}
//         cookiePolicy={"single_host_origin"}
//         isSignedIn={false}
//       />
//     </div>
//   );
// };

// export default GoogleLoginAuth;
