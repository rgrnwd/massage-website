import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.ABOUT_US_ROUTE} element={<About />} />
                <Route path={ROUTES.SERVICES_ROUTE} element={<Services />} />
                <Route path={ROUTES.BOOKING_ROUTE} element={<Book />} />
                <Route path={ROUTES.CONTACT_ROUTE} element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
