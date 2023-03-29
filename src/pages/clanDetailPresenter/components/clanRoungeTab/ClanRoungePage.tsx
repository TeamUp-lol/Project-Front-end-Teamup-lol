import React from 'react';
import ClanRoungeFeed from './components/ClanRoungeFeed';

export default function ClanRoungePage() {
  return (
    <div className="h-screen overflow-scroll scrollbar-hide lg:grid lg:grid-cols-2">
      <article className="mt-4 space-y-1">
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
      </article>
      <article className="mt-4 space-y-1">
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
        <ClanRoungeFeed />
      </article>
    </div>
  );
}
