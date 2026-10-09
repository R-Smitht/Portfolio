import React, {useState, useEffect} from "react";
import { averageHexColors } from "../../../portfolio-backend/colorMath";

export default function ColorAverage() {
  // 1. Create state variables to hold the API data, loading state, and errors
  const [colorData, setColorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Use useEffect to run the fetch call when the component mounts
  useEffect(() => {
    // Replace 3000 with your actual backend port if it's different
    fetch('http://localhost:3000/api/colors/average')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setColorData(data); // Save the { averageColor, totalSubmissions } object
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // The empty array ensures this only runs once when the page loads

  // 3. Handle loading and error states in your UI
  if (loading) return <p>Loading average color...</p>;
  if (error) return <p>Error: {error}</p>;

    return (
    <>
        
    </>
)
}
