import { useLocation } from 'react-router-dom';
import { Layout, Seo, BookingForm } from '../components';

const Booking = () => {
  const location = useLocation();

  return (
    <Layout pageId="book-now">
      <Seo />
      <section>
        <BookingForm prevLocation={location.state.prevLocation} />
      </section>
    </Layout>
  );
};

export default Booking;
