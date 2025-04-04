import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Logo from './components/Logo'
import EventFeatures from './components/speakers'
import Agenda from './components/Agenda'
import AgendaList from './components/AgendaList'
import KeyNoteSpeakers from './components/keyNoteSpeaker'
import WhyAttend from './components/whyAttend'
import TestimonialCarousel from './components/testimony'
import RegistrationBanner from './components/timer'
import TicketOptions from './components/pricing'
import ContactPage from './components/contact'
import Footer from './components/footer'

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Logo />
      <EventFeatures />
      <Agenda />
      <AgendaList />
      <KeyNoteSpeakers />
      <WhyAttend />
      <TestimonialCarousel />
      <RegistrationBanner />
      <TicketOptions />
      <ContactPage />
      <Footer />
    </div>
  )
}
