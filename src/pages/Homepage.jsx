import React from 'react'
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const navigate = useNavigate();
    const user = false;

    if (!user) {
        navigate("/auth")
    }

  return (
    <div>Homepage</div>
  )
}

export default Homepage