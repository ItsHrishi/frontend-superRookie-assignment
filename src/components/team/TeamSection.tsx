import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "Ganesham Pareek",
    role: "Software Developer",
    image: "https://iili.io/2gKfVQp.jpg",
    github: "https://github.com/Ganesham09",
    linkedin: "https://www.linkedin.com/in/ganeshamp2/",
    email: "work.ganeshampareek@gmail.com",
  },
  {
    name: "Hrishikesh Gaikwad",
    role: "Software Developer",
    image: "https://iili.io/2gKxn3B.jpg",
    github: "https://github.com/ItsHrishi",
    linkedin: "https://www.linkedin.com/in/hrishikesh-sacchidanand-gaikwad/",
    email: "ghrishikesh77@gmail.com",
  },
  {
    name: "Sahil Gupta",
    role: "Backend Developer",
    image: "https://iili.io/2gKxB4V.jpg",
    github: "https://github.com/Sahil2012",
    linkedin: "https://linkedin.com/in/emilyr",
    email: "sahilhsgupta7@gmail.com",
  },
];

const TeamSection = () => {
  return (
    <section
      className="py-12 px-6 bg-gray-50 dark:bg-dark-200 "
      id="team"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
