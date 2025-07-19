const experiences = [
  {
    company: "Independent",
    title: "Software Developer",
    period: "April 2024 - Present",
  },
];

export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">Experience</h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp, idx) => (
          <div className="border-b flex pb-2 text-sm font-medium" key={idx}>
            <div className="flex flex-col">
              <h2>{exp.company}</h2>
              <p className="text-muted-foreground">{exp.title}</p>
            </div>
            <span className="ml-auto my-auto text-muted-foreground">
              {exp.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
