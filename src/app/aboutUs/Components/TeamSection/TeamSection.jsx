import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';

const TeamSection = () => {
    return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TeamMemberCard
          name="Jane Doe"
          title="Founder & Farmer"
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8MnwwfHx8Mg%3D%3D"
          bio="A visionary leader with a lifelong passion for regenerative farming and community building."
        />
        <TeamMemberCard
          name="John Smith"
          title="Lead Agronomist"
          imageUrl="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8MnwwfHx8Mg%3D%3D"
          bio="Expert in soil health and crop science, ensuring every plant thrives naturally."
        />
        <TeamMemberCard
          name="Emily White"
          title="Head of Operations"
          imageUrl="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8MnwwfHx8Mg%3D%3D"
          bio="Manages our supply chain with a focus on efficiency and sustainability."
        />
      </div>
    </section>
    );
};

export default TeamSection;