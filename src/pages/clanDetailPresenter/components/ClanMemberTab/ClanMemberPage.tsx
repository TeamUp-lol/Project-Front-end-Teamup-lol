import React from 'react';
import ClanMemberList from './components/ClanMemberList';

export default function ClanMemberPage() {
  return (
    <article className="h-screen overflow-auto scrollbar-hide lg:px-6">
      <div>
        <ul className="flex items-center h-6 mx-8 my-3 space-x-40 text-sm justify-evenly lg:hidden">
          <li>프로필</li>
          <li>티어</li>
          <li>소개</li>
        </ul>
      </div>
      <div className="space-y-1 h-96 lg:grid lg:grid-cols-5 lg:gap-5 lg:m-2 lg:justify-center">
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
        <ClanMemberList />
      </div>
    </article>
  );
}
