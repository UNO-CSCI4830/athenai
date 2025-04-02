import React from 'react';
import PostCard from '../components/PostCard';
import groupBanner from '../assets/groupBanner.jpg'
import groupImage from '../assets/athenaiLogo.jpg'

export function GroupsPage() {
  return (
    <div className="min-h-screen flex font-sans text-white bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 p-6 backdrop-blur-md bg-white/5 border-r border-white/10 min-h-screen">
        <h1 className="text-2xl font-bold mb-10">Groups</h1>
        <ul className="space-y-4 text-sm">
          <SidebarLink href="/" icon="🏠" label="Home" />
          <SidebarLink icon="🔍" label="Find A Group" /> {/*dont have pages yet, will have to wait for backend*/}
          <SidebarLink icon="👤" label="My Groups" />
          <SidebarLink icon="✍️" label="My Postings" />
          <SidebarLink icon="🔔" label="Interactions" />
        </ul>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Group Banner */}
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${groupBanner})` }}
        ></div>

        {/* Group Info (Below Banner) */}
        <div className="bg-gray-800 px-10 py-6 border-b border-gray-700 flex items-center gap-6">
        <img
            src={groupImage}
            alt="Group Icon"
            className="w-24 h-24 rounded-full object-cover border border-gray-500"
        />
          <div>
            <h1 className="text-3xl font-bold justify-center">AthenA.I.</h1>
            <p className="text-sm text-gray-300 justify-center">A group for the developers of AthenA.I.</p>
          </div>
        </div>

        {/* Posts Section (Scrollable) */}
        <main className="flex-1 overflow-y-auto px-10 py-8 flex flex-col items-center">
          <div className="space-y-6 w-full max-w-2xl">
            <PostCard
              username="Alex Johnson"
              degree="Computer Science"
              content="Just finished our group project milestone! 🎉"
              avatarColor="bg-blue-600"
            />
            <PostCard
              username="Maria Lopez"
              degree="Psychology"
              content="Anyone up for a study session this weekend?"
              avatarColor="bg-pink-600"
            />
            <PostCard
              username="David Kim"
              degree="Mechanical Engineering"
              content="Shared some resources on fluid dynamics in the group files."
              avatarColor="bg-green-600"
            />
            {/* Add more posts here */}
          </div>
        </main>
      </div>
    </div>
  );
}


function SidebarLink({ href, icon, label }: { href: string; icon: string; label: string }) {
    return (
      <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
        <a href={href} className="flex items-center gap-2">
          <span>{icon}</span> {label}
        </a>
      </li>
    );
  }