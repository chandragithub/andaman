import { Hero } from "../layout/Hero";
import { activities, destinations, packages } from "@/Data";
import { CardCircleSection, CardSection } from "@/components/custom";

// import { GetStartedDialog } from "@/GetStarted/GetStartedDialog";
export const Home = () => {
  return (
    <div className="flex w-full flex-col">
        <main>
          <Hero/>
          <CardSection data={destinations} imageFolder={'destination'} knowMore={true} title={"Popular Destinations"} description={"Explore some of our Traveller's favourite locations"}/>
          <CardSection data={packages} imageFolder={'package'} title={"Popular Packages"} description={"Explore some of our Traveller's favourite Packages"}/>
          <CardCircleSection data={activities} title={"Popular Activities"} description={"Explore some of our Traveller's favourite activities"}/>
        </main>
    </div>
  );
}

