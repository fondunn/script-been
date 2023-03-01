import React from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/Catalog/Catalog'

const Home = () => {
  return (
    <Layout
      title='Home'
      description={`Welcome to our e-commerce coffee shop, where every sip is a journey to the finest flavors and aromas from around the world. Imagine walking through a lush coffee plantation, breathing in the fragrant air of freshly roasted beans, and experiencing the richness of our expertly crafted blends. Our virtual shelves are stocked with the best coffee beans sourced from the most exotic locations, roasted to perfection and delivered straight to your doorstep. From bold and robust to smooth and delicate, we have a brew to suit every taste and occasion. At our e-commerce coffee shop, we believe that coffee is not just a beverage, but an experience that should be savored and enjoyed. That's why we have a team of dedicated baristas who are passionate about their craft and are always ready to guide you through our collection. So, whether you're looking for a quick caffeine fix, a luxurious treat or a special gift for a coffee lover, you'll find everything you need at our e-commerce coffee shop. Come join us on a journey of discovery and indulge in the world's most beloved beverage, one cup at a time.`}
    >
      <Catalog />
    </Layout>
  )
}

export default Home
