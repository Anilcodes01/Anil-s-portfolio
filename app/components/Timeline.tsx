

export default function Timeline() {
  const timelines = [
    {
      title: "Learning Phase (Dec 2023 - Present)",
      description:
        "This was the time when I was just learning and building small projects of my own. I was learning through Harkirat's cohort 2.0 and Hitesh sir's YouTube videos. I heavily focused on learning only during this time and made my core fundamentals strong.",
    },
    {
      title: "Applied learning and Freelancing (Jan 2024 - Present)",
      description:
        "This was the time when I was applying whatever I have learned in building large web applications like Social media application, Health appication with AI integration, Ecommerce application. I aslo worked on real world web apps during this time.",
    },
  ];

  return (
    <div className="flex font-nunito font-bold flex-col gap-4">
      <h1 className="text-3xl">Timeline</h1>
      <div className="flex flex-col mt-2 gap-8">
        {timelines.map((timeline) => (
            <div key={timeline.title} className="border rounded-3xl p-4 flex flex-col gap-4 border-gray-400">
                <h1 className="text-2xl font-bold">
                    {timeline.title}
                </h1>
                <p className="font-bold text-gray-400 font-nunito">
                    {timeline.description}
                </p>
            </div>
        ))}
      </div>
    </div>
  );
}
