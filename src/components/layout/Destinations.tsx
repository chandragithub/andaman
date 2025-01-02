import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    name: "Port Blair",
    description: "Tropical paradise with beautiful beaches and rich culture.",
    image: "https://www.masstrans.in/wp-content/uploads/Port-Blair-Smart-City-1080x675.jpeg"
  },
  {
    name: "Havelock Island",
    description: "Stunning sunsets and iconic white-washed buildings.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Neil Island",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Ross Island",
    description: "Ultramodern cityscape blended with traditional culture.",
    image: "/placeholder.svg?height=300&width=400"
  }
]

export const Destinations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore some of our travelers' favorite locations
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <Card key={index} className="flex flex-col">
              <img src={destination.image} alt={destination.name} className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle>{destination.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{destination.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full mr-5 text-green-600">Call Us</Button>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

