export default function AboutUs() {
  const teamMembers = [
    {
        name: 'Jane Doe',
        title: 'Co-Founder & CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia dictum lorem, in commodo quam posuere ac. Quisque facilisis, enim a tincidunt fermentum, mauris ipsum.'
    },
    {
        name: 'John Smith',
        title: 'CTO',
        description: 'Curabitur at semper erat. Sed eu augue at arcu efficitur tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
];

const sections = [
    {
        title: 'Our Mission',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc ut lorem scelerisque fermentum. Ut non ante eget libero tempus sollicitudin in sed turpis.'
    },
    {
        title: 'Our Values',
        content: 'Vivamus facilisis, mauris nec blandit malesuada, purus ex faucibus elit, in vehicula ex nulla et orci. Maecenas vel lacinia nulla, sit amet congue ipsum.'
    },
];


  return (
      <section className="m-4 mx-auto md:w-3/4 gap-5 rounded-lg bg-white p-6 text-zinc-800 shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">About Groovz</h1>

          <p className="text-zinc-700 mb-6 mx-auto w-full sm:w-4/6 lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus mauris vel ornare scelerisque. Vivamus eget justo nunc. Praesent tempus sed elit sit amet aliquam. Nulla facilisi. Sed eu libero vel nunc commodo congue at nec dui. Fusce a turpis eros, sed vehicula justo.
          </p>

          
          {sections.map((section, index) => (
              <div key={index}>
                  <h2 className="text-2xl font-semibold mb-4 text-center">{section.title}</h2>
                  <p className="text-zinc-700 mb-6 mx-auto w-full sm:w-4/6 lg:w-1/2">{section.content}</p>
              </div>
          ))}

          <h2 className="text-2xl font-semibold m-12 text-center">Meet The Team</h2>
          <div className="text-zinc-700 mx-auto w-full sm:w-4/6 lg:w-1/2 mb-16">
              {teamMembers.map((member, index) => (
                  <div key={index} className="mb-4">
                      <strong className="text-xl">{member.name} - {member.title}:</strong>
                      <p>{member.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
}
