import React from "react";

const App = () => {
  const pets = [
    {
      name: "Bubbaa",
      age: "Juvenile <6 to 12 months>",
      location: "India",
      org: "World For All Animal Care and Adoptions",
      image: "/1.jpg",
    },
    {
      name: "Bubba",
      age: "Young adult <19 to 24 months>",
      location: "India",
      org: "World For All Animal Care and Adoptions",
      image: "/2.jpg",
    },
    {
      name: "Delilah",
      age: "Juvenile <6 to 12 months>",
      location: "India",
      org: "World For All Animal Care and Adoptions",
      image: "/3.jpg",
    },
    {
      name: "Pasta",
      age: "Juvenile <6 to 12 months>",
      location: "India",
      org: "World For All Animal Care and Adoptions",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    },
    {
      name: "Barfi",
      age: "Juvenile <6 to 12 months>",
      location: "India",
      org: "World For All Animal Care and Adoptions",
      image: "/4.jpg",
    },
    {
      name: "Jack",
      age: "Puppy <0 to 12 months>",
      location: "India",
      org: "World For All Animal Care and Adoptions",
      image: "/5.jpg",
    },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #fdf7ed;
        }
        .container {
          padding: 60px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 2.5rem;
          color: #333;
          display: inline-block;
          margin-left: 10px;
        }
        .dog-icon {
          font-size: 2.2rem;
          vertical-align: middle;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 25px;
        }
        .card {
          background-color: #fff2d9;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .info {
          padding: 15px;
        }
        .info h2 {
          margin: 0 0 5px;
          color: #333;
          font-size: 1.25rem;
        }
        .info p {
          margin: 3px 0;
          color: #555;
          font-size: 0.9rem;
        }
        .btn {
          margin-top: 10px;
          background-color: #e76f51;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.25s ease;
        }
        .btn:hover {
          background-color: #d45f44;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <span role="img" aria-label="dog" className="dog-icon">
            🐶
          </span>
          <h1>Adopt a Pet</h1>
        </div>

        <div className="grid">
          {pets.map((pet, index) => (
            <div key={index} className="card">
              <img src={pet.image} alt={pet.name} />
              <div className="info">
                <h2>{pet.name}</h2>
                <p>{pet.age}</p>
                <p>{pet.location}</p>
                <p>{pet.org}</p>
                <button className="btn">Pet Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
