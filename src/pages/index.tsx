import Hero from '../components/Hero';
import Services from '../components/services';
import FeaturedDoctors from '../components/FeaturedDoctors';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedDoctors />
      <Testimonials/>
      <BlogPreview/>
      <Newsletter/>
      
    </>
  );
}
