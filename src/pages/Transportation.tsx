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
        <div className=''>
            <img src={img} alt={title} className='rounded-md w-80 h-60 object-cover'/>
            <div className="title text-justify">{title}</div>
            <p>{description}</p>
            {content}
        </div>
    );
};

const AirplaneContent = () => (
    <table border={1} align="center">
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
      <thead>
        <tr>
          <th>Date</th>
          <th colSpan={2}>01 Apr -<br /> 31 May</th>
          <th colSpan={2}>01 Jun -<br /> 31 Aug</th>
          <th colSpan={2}>01 Sep -<br /> 31 Oct</th>
          <th colSpan={2}>01 Nov -<br /> 31 Mar</th>
        </tr>
        <tr>
          <th>Port</th>
          <th>Arrive</th>
          <th>Depart</th>
          <th>Arrive</th>
          <th>Depart</th>
          <th>Arrive</th>
          <th>Depart</th>
          <th>Arrive</th>
          <th>Depart</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-th="Port"><strong>Bergen</strong></td>
          <td data-th="1 Apr - 31 May : Arrive">14:30</td>
          <td data-th="1 Apr - 31 May : Depart">21:30</td>
          <td data-th="1 Jun - 31 Aug : Arrive">14:30</td>
          <td data-th="1 Jun - 31 Aug : Depart">21:30</td>
          <td data-th="1 Sep - 31 Oct : Arrive">14:30</td>
          <td data-th="1 Sep - 31 Oct : Depart">21:30</td>
          <td data-th="1 Nov - 31 Mar : Arrive">14:30</td>
          <td data-th="1 Nov - 31 Mar : Depart">21:30</td>
        </tr>
        <tr>
          <td data-th="Port"><strong>Flor&oslash;</strong></td>
          <td data-th="1 Apr - 31 May : Arrive">03:30</td>
          <td data-th="1 Apr - 31 May : Depart">03:40</td>
          <td data-th="1 Jun - 31 Aug : Arrive">03:30</td>
          <td data-th="1 Jun - 31 Aug : Depart">03:40</td>
          <td data-th="1 Sep - 31 Oct : Arrive">03:30</td>
          <td data-th="1 Sep - 31 Oct : Depart">03:40</td>
          <td data-th="1 Nov - 31 Mar : Arrive">03:30</td>
          <td data-th="1 Nov - 31 Mar : Depart">03:40</td>
        </tr>
        <tr>
          <td data-th="Port"><strong>Torvik</strong></td>
          <td data-th="1 Apr - 31 May : Arrive">08:30</td>
          <td data-th="1 Apr - 31 May : Depart">08:40</td>
          <td data-th="1 Jun - 31 Aug : Arrive">08:30</td>
          <td data-th="1 Jun - 31 Aug : Depart">08:40</td>
          <td data-th="1 Sep - 31 Oct : Arrive">08:30</td>
          <td data-th="1 Sep - 31 Oct : Depart">08:40</td>
          <td data-th="1 Nov - 31 Mar : Arrive">08:30</td>
          <td data-th="1 Nov - 31 Mar : Depart">08:40</td>
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
        <section className="transport grid grid-cols-1 md:grid-cols-2 gap-6">

            <TransportationItem
              title="By airplane"
              description="Traveling through the Scandinavian region by airplane offers a unique and enriching experience due to the region's natural beauty, efficient transportation infrastructure, and the cultural diversity of its countries."
              img={Airplane}
              content={<AirplaneContent />}
            />
            <TransportationItem
              title="Responsible cruising"
              description="Enjoy the majestic landscape of the Norwegian coastline between Bergen and Kirkenes on more eco-friendly cruises by well-known operators that work closely with the local communities. Both on board the ships and when you disembark to explore, you get to savour the taste of Norway."
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