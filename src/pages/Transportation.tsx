import React, { } from 'react';
import Airplane from '../img/transportation/airplane.jpg';
import Boat from '../img/transportation/boat.jpg';
import Bus from '../img/transportation/bus.jpg';
import Train from '../img/transportation/train.jpg';


interface TransportationProps {
    title: string;
    description: string;
    img: string;
    content: JSX.Element;
}

const TransportationItem: React.FC<TransportationProps> = ({ title, description, img, content }) => {
    return (
        <div className='xl:h-[38rem] lg:h-[42rem] md:h-[40rem] w-4/5 flex flex-col justify-center items-center m-2 p-4 border rounded-md border-color-blue'>
            <img src={img} alt={title} className='rounded-md w-80 h-60 object-cover'/>
            <div className="title text-justify font-semibold pt-2 text-lg">{title}</div>
            <p className="p-2 text-justify">{description}</p>
            <div className="text-sm">{content}</div>
        </div>
    );
};

const AirplaneContent = () => (
    <table align="center">
      <thead>
        <tr>
          <th>The airlines going to Scandinavia</th>
          <th>Price range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://www.klm.com/home/sg/en">
              <span>KLM flights</span>
            </a>
          </td>
          <td>Premium</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.lufthansa.com/sg/en/homepage">
              <span>Lufthansa flights</span>
            </a>
          </td>
          <td>Premium</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.finnair.com">
              <span>Finnair flights</span>
            </a>
          </td>
          <td>Premium</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.flysas.com/en/">
              <span>Scandinavian airlines</span>
            </a>
          </td>
          <td>Economic</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.airbaltic.com/en-ZZ/index">
              <span>airBaltic</span>
            </a>
          </td>
          <td>Economic</td>
        </tr>
      </tbody>
    </table>
);
  
const BoatContent = () => (
    <table border={1} align="center">
      <tbody>
        <tr>
          <td>
            <a href="https://www.hurtigruten.com/en">
              <span>Hurtigruten</span>
            </a>
          </td>
          <td>
            Norwegian Fjords and Northern Lights Cruises
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.royalcaribbean.com/baltic-cruises">
              <span>Royal Caribbean</span>
            </a>
          </td>
          <td>
            The Baltic Sea and Scandinavian Cruises
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.celebritycruises.com/destinations/european-cruises/scandinavia-cruise/">
              <span>Celebrity Cruises</span>
            </a>
          </td>
          <td>
            Discover Historic European Wonders on a Scandinavia Cruise
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.princess.com/en-int/cruise-destinations/europe-cruises/scandinavia-baltics">
              <span>Princess</span>
            </a>
          </td>
          <td>
            Unpack once and visit seven different Scandinavian countries
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.vikingcruises.co.uk/oceans/cruise-destinations/scandinavia/index.html">
              <span>Viking Cruises</span>
            </a>
          </td>
          <td>
            Discover the world's most beautiful and historic cities, from Stockholm to Bergen
          </td>
        </tr>
      </tbody>
    </table>
);
  
const TrainContent = () => (
    <table border={1} align="center">
      <thead>
        <tr>
          <th>Country</th>
          <th>Route</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={3}>Norway</th>
          <td>Oslo to Myrdal</td>
          <td>4h40</td>
        </tr>
        <tr>
          <td>Oslo to Bergen</td>
          <td>6h30</td>
        </tr>
        <tr>
          <td>Tronheim to Oslo</td>
          <td>6h45</td>
        </tr>
        <tr>
          <th rowSpan={2}>Sweden</th>
          <td>Stockholm to Gothenburg</td>
          <td>3h05</td>
        </tr>
        <tr>
          <td>Copenhagen to Stockholm</td>
          <td>5h35</td>
        </tr>
        <tr>
          <th rowSpan={2}>Finland</th>
          <td>Helsinki to Oulu</td>
          <td>5h45</td>
        </tr>
        <tr>
          <td>Rovaniemi to Helsinki</td>
          <td>Overnight</td>
        </tr>
      </tbody>
    </table>
);
  
const BusContent = () => (
    <table border={1} align="center">
      <thead>
        <tr>
            <th>Ticketing website</th>
            <th>Scope</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://www.busbud.com/en/bus-company/tk-scandinavia">
              <span>Busbud</span>
            </a>
          </td>
          <td>Global</td>
        </tr>
        <tr>
          <td>
            <a href="https://global.flixbus.com/holiday-destinations/scandinavia">
              <span>FlixBus</span>
            </a>
          </td>
          <td>Global</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.scandlines.com/groups/busrates">
              <span>Scandlines</span>
            </a>
          </td>
          <td>Scandinavia</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.nor-way.no/en/#/?showEarlierDepartureTrips=0&showLaterDepartureTrips=0&showEarlierReturnTrips=0&showLaterReturnTrips=0">
              <span>NOR&sdot;WAY</span>
            </a>
          </td>
          <td>Norway</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.checkmybus.com/sweden">
              <span>CheckMyBus</span>
            </a>
          </td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>
            <a href="https://matkahuolto.fi/en/">
              <span>Matkahuolto</span>
            </a>
          </td>
          <td>Finland</td>
        </tr>
      </tbody>
    </table>
);
  
const Transportation = () => {
    return (
      <div className="h-full">
        <section className="transport grid lg:grid-cols-2 md:grid-cols-1 place-items-center">

            <TransportationItem
              title="By airplane"
              description="Traveling through the Scandinavian region by airplane offers a unique and enriching experience due to the region's natural beauty, efficient transportation infrastructure, and the cultural diversity of its countries."
              img={Airplane}
              content={<AirplaneContent />}
            />
            <TransportationItem
              title="Responsible cruising"
              description="Enjoy the majestic landscape of the Norwegian coastline between Bergen and Kirkenes on more eco-friendly cruises by well-known operators that work closely with the local communities. Both on board the ships and when you disembark to explore, you get to savour the taste of Scandinavia."
              img={Boat}
              content={<BoatContent />}
            />
            <TransportationItem
              title="Take a train like locals"
              description="An extensive rail network links Scandinavian countries and the rest of Europe. Most train journeys from the continent are overnight, and you will find sleeping compartments on all of them. Discount passes are available for train travel in Europe."
              img={Train}
              content={<TrainContent />}
            />
            <TransportationItem
              title="Hop on a bus"
              description="You can reach Norway by bus from Sweden, Denmark, Finland, and Russia. Bus service from Gothenburg in Sweden and Copenhagen in Denmark is almost hourly. The service from Stockholm is also far more frequent than the train. Different operators offer cheap bus tickets between the large cities in Norway, Denmark and Sweden."
              img={Bus}
              content={<BusContent />}
            />

        </section>
      </div>
    );
};
  
  export default Transportation;