import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Header from "@/app/components/Header";
import Action from "@/app/components/action";
import Footer from "@/app/components/Footer";
import { EventDetails } from "./EventDetails";
import { events } from "../Events";

interface PageProps {
  searchParams: Promise<{
    id?: string | string[];
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  // Safely extract and parse the ID
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const eventId = id ? parseInt(id) : null;

  // Find the corresponding event
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div>
        <Header />
        <Banner title="Event Not Found" photo="./" />
        <div className="container mx-auto py-10 text-center">
          <p>The requested event could not be found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Banner title={event.title} photo={event.image} />
      <EventDetails />
      <Gallery photos={event.imageList} />
      <div className="my-20">
        <Action />
      </div>
      <Footer />
    </div>
  );
}
