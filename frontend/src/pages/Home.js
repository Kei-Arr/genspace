import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../redux/userSlice";
import { FaUser, FaEnvelope, FaCalendar, FaShieldAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // If user is not logged in, redirect to login page
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="login-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="author-card">
              <div
                className="author-card-cover"
                style={{
                  backgroundColor: "#2C3639",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              ></div>
              <div className="author-card-profile">
                <div className="author-card-avatar">
                  <FaUser
                    size={50}
                    style={{
                      background: "#A27B5C",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h3 className="product-name">Welcome {userInfo?.fname}!</h3>
                  <button
                    onClick={handleLogout}
                    className="round-black-btn"
                    style={{
                      width: "auto",
                      padding: "8px 20px",
                      height: "auto",
                    }}
                  >
                    Logout
                  </button>
                </div>
                <div className="product-count border-product mt-4">
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>
                      <FaEnvelope className="mr-2" /> Email
                    </h6>
                    <span>{userInfo?.email}</span>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>
                      <FaCalendar className="mr-2" /> Account created
                    </h6>
                    <span>
                      {new Date(userInfo?.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {userInfo?.isAdmin && (
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>
                        <FaShieldAlt className="mr-2" /> Role
                      </h6>
                      <span
                        className="badge"
                        style={{ position: "relative", top: "0" }}
                      >
                        Administrator
                      </span>
                    </div>
                  )}
                </div>
                {userInfo?.isAdmin && (
                  <div className="alert mt-4 d-flex align-items-center">
                    <FaShieldAlt className="mr-3" />
                    <div>You have administrator privileges</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
