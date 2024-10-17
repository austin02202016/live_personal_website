import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NavbarComponent } from "@/components/navbar"

interface Podcast {
  id: string
  title: string
  description: string
  imageUrl: string
  listenUrl: string
}

// C:\Users\akenn\OneDrive\Desktop\Coding\deployed_current_website\my-app\public\aidan_murphy_headshot.jpg
//C:\Users\akenn\OneDrive\Desktop\Coding\deployed_current_website\my-app\public\Untitled design (88) - Copy.png

const biggestHits: Podcast[] = [
  {
    id: "1",
    title: "Ep. 31 Entrepreneurship Isn't What You Think It Is (w/ Suyash Agrawal)",    
    description: "This week on Proof of Concept we had startup co-founder, Disruption lab executive director, and entrepreneur Suyash Agrawal on the show. We started by exploring his journey of how he began his marketing startup as a high school student and where the motive for that came from. We also dove into why he ended up dropping his startup and chose to put most of his time into Disruption lab, a club at UIUC that develops next gen technologies for companies",
    imageUrl: "/updated_banner.png",
    listenUrl: "https://open.spotify.com/episode/6QNBULh4KcuKtG9OWlgYrI?si=WOgFzr-MS-mx8FCJCcHbpg",
  },
  {
    id: "2",
    title: "Ep. 38 How Noticing a Netflix Lip-Sync Problem Led to Thousands in Revenue (w/ Shrikar Lekkala)",
    description: "On episode 38 of Proof of Concept, we had Shrikar Lekkala, an incoming junior at UIUC and Co-Founder of Metafrazo, which provides an AI Dubbing and Translation solution for educators.Since their founding, they’ve secured 5,000 MRR and have worked with content creators like Mr. Beast and Mr. NightmareIf you want to hear How Metafrazo has allowed him to take a gap semester, how it all started when he was watching an episode of Netflix’s Moneyheist, Why freestyling is important and Shrik’s past rap career, the impact being around other founders has had on him through UIUC’s iVenture program, how Metafrazo just recently closed a big deal from the school, and all of Shrikar’s predictions for Metafrazo’s future as well as how own, I’ll know you’ll enjoy this episode",
    imageUrl: "/updated_banner.png",
    listenUrl: "https://open.spotify.com/episode/6q53xS6kwqG2pSE4MFNfrt",
  },
  {
    id: "3",
    title: "Ep. 40 Our 3 Biggest Takeaways from Summer 2024",
    description: "On Episode 40 of Proof of Concept, we sat down and recorded a recap of our summers and shared a couple quick personal highlights about what we were doing. We spent most of our time talking about each of our 3 main takeaways from the summer and how we learned those takeaways from our experiences. From life lessons to personal growth we reflected on what worked for us, what didn’t, and the impact these experiences had. Wrapping up, we dove into our goals and aspirations for next summer, discussing what we want to achieve and why we think it's important for us to do so.Tune into hear about our summers and enjoy :)",
    imageUrl: "/updated_banner.png",
    listenUrl: "https://open.spotify.com/episode/6kAwOxmeLpe3SnNqbuVDId",
  },
]

const otherPodcasts = [
    {
      id: "1",
      title: "Ep. 41 How to Actually Reach your Goals",
      description: "On Episode 41 of Proof of Concept, we sat down and recorded our thoughts about why we have a podcast. We spent most of our time talking about where our motivation for the podcast comes from and why do it. We also reflected a little bit on ourselves and why we continue with Proof of Concept. We also spent some time talking a little bit about things that keep us moving forward.Tune in and enjoy :)",
      imageUrl: "/updated_banner.png",
      listenUrl: "https://open.spotify.com/episode/1VBcsGUbzqLOtVjUpOTNf2",
    },
    {
      id: "3",
      title: "Ep. 39 From Reselling Birds in Ghana to Making Millions by 23 (w/ Sharif Caesar)",
      description: "On Episode 39 of Proof of Concept, we had Sharif Caesar. A current 23-year-old Sharif was raised in Ghana and came over to the States with his dad when he was a child. After being bullied for not wearing name brand (when he came over he didn't even know what a name brand was), he decided to make money a priority. After years of scaling his brand, @realmelaninking, to over 5.4  million followers, he's been able to generate 6 figures a month. This has allowed him to retire his girl and build a 13-bedroom house for his family in Ghana. I know you guys will all enjoy this one :)",
      imageUrl: "/updated_banner.png",
      listenUrl: "https://open.spotify.com/episode/1Ct6B7mp5BngF0FQEAh8R5",
    },
    {
      id: "5",
      title: "Ep. 37 Behind the Scenes of Growing Chicago's Largest Highschool-Sports Page (w/ Derrick \"Sloche\" Echols)",
      description: "On this week of Proof of Concept we had Derrick Echols, founder of Sloche. Beginning with just his camera and him at a highschool basketball game, Sloche has since scaled to a 136K follower community. \"Community\" is used intentionally; Derrick has not only scaled followers, but true relationships as well, making him beloved and an icon in the highschool basketball community. If you want to hear how he did it all, how \"YouTube University\" played a pivotal role, how hard it was to leave his NBA dreams behind and turn to media, how at times he almost thought about quitting, and how it all came together, I know you all will enjoy. Thank you :)",
      imageUrl: "/updated_banner.png",
      listenUrl: "https://open.spotify.com/episode/69upulcyYoXERcv9UC7Che",
    },
    // Add more episodes as needed
  ];

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={podcast.imageUrl}
          alt={podcast.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2">{podcast.title}</CardTitle>
        <CardDescription>{podcast.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link href={podcast.listenUrl}>
            <Play className="mr-2 h-4 w-4" /> Listen Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function PodcastsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarComponent />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">My Podcasts</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Biggest Hits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biggestHits.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">More Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPodcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}