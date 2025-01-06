import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    github: "https://github.com/sarahj",
    linkedin: "https://linkedin.com/in/sarahj",
    email: "sarah@example.com",
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    github: "https://github.com/michaelc",
    linkedin: "https://linkedin.com/in/michaelc",
    email: "michael@example.com",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    github: "https://github.com/emilyr",
    linkedin: "https://linkedin.com/in/emilyr",
    email: "emily@example.com",
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
