import { useState } from 'react'
import Images from './ImageParser'
import ServiceCards from './ServiceCards'
import './App.css'
import SocialProof from './SocialProof'

function App() {
  const [count, setCount] = useState(0)

const Services = [
  {id: 1, title:"DEVELOPMENT", image: Images.developmentImage, description: "Full-Stack web development and AI integration", action: "Read more", isFeatured: "yes"},
  {id: 1, title:"UI/UX", image: Images.uiuxImage, description: "Exceptional UI/UX design AI tool to ease but perfect design practices", action: "Get tool", isFeatured: "yes"},
  {id: 1, title:"SEO", image: Images.SeoImage, description: "Search Engine at maximum optimaize technique to improve site visibility", action: "Get started", isFeatured: "no"}
]

const ClientSocialProof = [
  {id: 1, name: "Apex Craft"},
  {id: 2, name: "Digiface int"},
  {id: 3, name: "Gracious Ltd"},
  {id: 4, name: "GamaTech"},
  {id: 5, name: "Sudangi art"}
]

  return (
  <>
  <h1 className='text-4xl'>Service Cards</h1>
  <p>The services we offer...</p>
    <div className="grid md:grid-cols-3 max-md:grid-rows mt-4 gap-36 max-md:gap-18 max-sm:mt-16">
      {Services.map(service => (
       <ServiceCards
        key={service.id}
        image={service.image}
        title={service.title}
        description={service.description}
        action={service.action}
        isFeatured={service.isFeatured}
       />
      ))}
      {/* {console.log(isFeatured)} */}
    </div>
<h1 className='text-4xl'>Social Proof</h1>
<p>People we have worked with...</p>
    <div className='flex flex-wrap justify-evenly'>
      {ClientSocialProof.map(client=>(
        <SocialProof
        key={client.id}
        name={client.name}
        />
      ))}
    </div>
  </>
  )
}

export default App
