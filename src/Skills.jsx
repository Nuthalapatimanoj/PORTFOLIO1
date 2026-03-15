import "./Skills.css";

const Skills = () => {
  let skills = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QP4wG2DnJ7gi_F4OjFWO6PsrZQ1sjOrX4A&s",
      skills: "HTML",
    },
    {
      id: 2,
      img: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
      skills: "CSS",
    },
    {
      id: 3,
      img: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
      skills: "JavaScript",
    },
    {
      id: 4,
      img: "https://icon.icepanel.io/Technology/svg/React.svg",
      skills: "React JS",
    },
    {
      id: 5,
      img: "https://icon.icepanel.io/Technology/svg/Java.svg",
      skills: "Java",
    },
    {
      id: 6,
      img: "https://icon.icepanel.io/Technology/svg/Spring.svg",
      skills: "Spring Boot",
    },
    {
      id: 7,
      img: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
      skills: "MySQL",
    },
  ];

  console.log(skills);

  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="container">
        {skills.map((e) => {
          return (
            <div className="icons" key={e.id}>
              <img src={e.img} alt="skill-icon" />
              <h3>{e.skills}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
