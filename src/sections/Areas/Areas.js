import './areas.scss';

const areas = [
  'Bonita',
  'Camp Pendleton',
  'Cardiff',
  'Carlsbad',
  'Chula Vista',
  'Coronado',
  'Del Mar',
  'El Cajon',
  'Encinitas',
  'Escondido',
  'Fallbrook',
  'Hillcrest',
  'Imperial Beach',
  'La Jolla',
  'La Mesa',
  'Lakeside',
  'Lemon Grove',
  'Little Italy',
  'Mira Mesa',
  'Miramar',
  'Mission Beach',
  'National City',
  'North Park',
  'Ocean Beach',
  'Oceanside',
  'Pacific Beach',
  'Paradise Valley',
  'Point Loma',
  'Poway',
  'Ramona',
  'Rancho Bernardo',
  'Rancho Penasquitos',
  'Rancho Santa Fe',
  'San Diego',
  'San Diego Downtown',
  'San Marcos',
  'San Ysidro',
  'Santee',
  'Solana Beach',
  'Spring Valley',
  'Valley Center',
  'Vista',
];

const Areas = () => (
  <section className="areas">
    <div className="container">
      <h2 className="section-title">Areas We Serve</h2>

      <ul>
        {areas.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Areas;
