export default function ContentSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-center">What I&apos;m up to these days</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Promoting college entrepreneurship through <a href="https://open.spotify.com/show/6s4SW9OcCX16BCgEXStCJo" className="text-gray-400 hover:underline">Proof of Concept</a>, my podcast and media company</li>
            <li>Venture Scout for <a href="https://somacap.com/" className="text-gray-400 hover:underline">Soma Capital</a></li>
            <li>Media and branding consultant for <a href="https://www.innovomarkets.com/" className="text-gray-400 hover:underline">Innovo Markets</a></li>
            <li>Helping grow and secure partnerships for <a href="https://www.instagram.com/illinirunclub/" className="text-gray-400 hover:underline">Illini Run Club</a></li>
            <li>Member of <a href="https://www.pct-illinois.com/" className="text-gray-400 hover:underline">Phi Chi Theta Professional Business Fraternity</a></li>
            <li>Hosting biweekly hangouts for UIUC&apos;s most killer content-creators, entrepreneurs, and builders</li>
            <li>Finance Major, Computer Science Minor w/ Concentration in Commercial Real Estate @ UIUC</li>
          </ul>
        </div>

        <div className="w-px bg-gray-300 hidden md:block"></div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-center">Past-seasons</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Previous caddy at the <a href="https://www.top100golfcourses.com/golf-course/old-elm" className="text-gray-400 hover:underline">Old Elm Club</a> in Lake Forest, met some really wise retired CEOs</li>
            <li>Recruited speakers for <a href="https://www.linkedin.com/company/illinois-sports-business-conference/mycompany/" className="text-gray-400 hover:underline">Illinois Sports Business Conference and moderated a convo with Chris Gronkowski</a></li>
            <li>Knocked 1000s of doors as a Sales Representative for <a href="https://blueravensolar.com/illinois/chicago/" className="text-gray-400 hover:underline">Blue Raven Solar</a></li>
            <li>Co-Founded <a href="https://www.linkedin.com/company/reach-fam/mycompany/" className="text-gray-400 hover:underline">REACH</a> (Nationwide Social Media Club) @ UIUC</li>
            <li>Co-Founder of Defined Trajectory Personal Training (We learned a lot of what-not-to-do)</li>
            <li>Co-Founder of Set Sail Solutions SMMA (Again learned a lot of what-not-to-do)</li>
            <li>Frozen Department Shelve-Stocker for 3 Years at Marianos</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

