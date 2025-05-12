import React from 'react';

const experiences = [
  {
    company: "Aricent Techonologies",
    position: "FullStack Developer (Senior Analyst)",
    period: "June 2022 - 2024",
    description: ["I have worked as a FullStack Developer for Capgemini Engineering, where I was involved in a client project for Samsung Research Vietnam.",
      "I have also worked onsite at Samsung Reseacrh, Vietnam to proactively address bugs, issues, and provide technical support and ensure seamless functionality.",
      "Upgraded backend architecture and implemented critical backend features, including timeslot reconfiguration, to meet customer demands and IEEE standards within tight deadlines.",
      "Developed a ReactJS frontend with Recoil for dynamic test case parameterization, automating test execution and eliminating the need for CLI-based test execution on dedicated machines.",
      "Conducted in-depth root cause analysis to identify and resolve over 15 critical bugs within 2 months.",
      "Significantly improved system efficiency, reducing Round Trip Time (RTT) by 95%.",
      "Delivered multiple crucial project releases ahead of schedule."
    ]
  },
  {
    company: "Aricent Techonologies",
    position: "Software Engineer Intern",
    period: "Jan 2022 - June 2022",
    description: ["Executed comprehensive manual regression testing of 700+ test cases to validate hardware functionality.",
      "Prepared an installer using installshield with collaboration from cross-functional teams",
      "Integrated frontend and backend services using HTTPS requests and REST APIs, reducing manual effort by 90%",
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 section-gradient-1" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-8 relative pl-8 border-l-2 border-blue-400"
            >
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-2" />
              <div className="gradient-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.position}</h3>
                <div className="text-blue-600 mb-2">{exp.company}</div>
                <div className="text-gray-500 text-sm mb-3">{exp.period}</div>
                {/* <p className="text-gray-600">{exp.description}</p> */}
                {exp.description.map((item, index)=>{
                  return(
                    <li key={index} className='text-gray-600 text-md'>{item}</li>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}