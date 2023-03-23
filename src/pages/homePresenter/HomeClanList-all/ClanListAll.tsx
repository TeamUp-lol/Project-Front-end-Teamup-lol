import React from 'react'
import ClanCardTwo from './components/ClanCardTwo'

const ClanListAll: React.FC = () => {
  return (
    <section id="list-all" className="container px-5 max-w-screen flex flex-col lg:mx-auto lg:grid lg:grid-cols-4 lg:gap-2">
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
      <ClanCardTwo />
    </section>

  )
}

export default ClanListAll