import React from 'react'
import MainBanner from '../components/MainBanner'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsLetter />
    </div>
  )
}

export default Home
