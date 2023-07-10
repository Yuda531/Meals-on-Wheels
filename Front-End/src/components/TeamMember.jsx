import React, { useState } from "react";
import richie from "../img/richie.png";
import rocky from "../img/rocky.png";
import reihan from "../img/reihan.png";
import agung from "../img/agung.png";
import keymal from "../img/keymal.png";

function AboutMembers() {
  const TeamMember = ({ imgSrc, name, description }) => {
    const [isDescActive, setIsDescActive] = useState(false);

    const handleMouseEnter = () => {
      setIsDescActive(true);
    };

    const handleMouseLeave = () => {
      setIsDescActive(false);
    };

    return (
      <div className='d-flex col-12 mb-5'>
        <div
          className='col-6 memberimgs'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imgSrc} alt='' className='col-12 memberimgs' />
        </div>
        <div
          className={`descMember col-6 text-white ps-3 py-3 ${
            isDescActive ? "active" : ""
          }`}
        >
          <div className='py-5 mt-5'>
            <h1 className='display-6'>{name}</h1>
            <hr />
            <p className='lead'>{description}</p>
          </div>
        </div>
      </div>
    );
  };

  const teamMembers = [
    {
      id: 1,
      imgSrc: richie,
      name: "Rafael Richie",
      description: (
        <p className='lead'>
          Front-End <span className='text-success fw-bold'>Designer</span> and{" "}
          <span className='text-warning fw-bold'>Developer</span>.
        </p>
      ),
    },
    {
      imgSrc: agung,
      name: "Agung Yuda",
      description: (
        <p className='lead'>
          <span className='text-success fw-bold'>Functional</span> and <br />{" "}
          <span className='text-warning fw-bold'>Data</span> Analyst.
        </p>
      ),
    },
    {
      id: 3,
      imgSrc: reihan,
      name: "M. Reihan",
      description: (
        <p className='lead'>
          <span className='text-success fw-bold'>Functional</span> and <br />{" "}
          <span className='text-warning fw-bold'>UAT</span> Analyst.
        </p>
      ),
    },
    {
      id: 2,
      imgSrc: rocky,
      name: "Rocky R.",
      description: (
        <p className='lead'>
          Scenario <span className='text-success fw-bold'>Analyst</span> and{" "}
          <span className='text-warning fw-bold'>Planning</span>.
        </p>
      ),
    },
    {
      id: 5,
      imgSrc: keymal,
      name: "M. Kemal",
      description: (
        <p className='lead'>
          Back-End <span className='text-success fw-bold'>Security</span>{" "}
          <span className='text-warning fw-bold'>Analyst</span>.
        </p>
      ),
    },
  ];

  return (
    <div className='poto-team'>
      {teamMembers.map((member) => (
        <TeamMember
          key={member.id}
          imgSrc={member.imgSrc}
          name={member.name}
          description={member.description}
        />
      ))}
    </div>
  );
}

export default AboutMembers;
