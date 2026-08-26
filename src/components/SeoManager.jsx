import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteName = 'DevNest Eldoret'
const defaultImage = '/hero-ai-community.png'

const seoByPath = {
  '/': {
    title: 'DevNest Eldoret | AI Meetups, Workshops, and Builder Community in Eldoret',
    description:
      'DevNest Eldoret is a practical AI and digital skills community for developers, students, entrepreneurs, and founders in Eldoret. Build. Learn. Ship.',
  },
  '/meetups': {
    title: 'Meetups and Workshops | DevNest Eldoret',
    description:
      'Explore upcoming and past DevNest Eldoret meetups, including Building AI Agents, Prompt Engineering 101, and Codex Meetup at The WorkNest, Eldoret.',
  },
  '/about': {
    title: 'About DevNest Eldoret | Mission, Founders, and Community',
    description:
      'Learn about DevNest Eldoret, our mission, our founders, and how we are growing the local AI and developer ecosystem in Eldoret.',
  },
  '/contact': {
    title: 'Contact DevNest Eldoret | Partnerships, Inquiries, and Community Links',
    description:
      'Contact DevNest Eldoret for partnerships, meetup inquiries, community collaboration, and WhatsApp support from The WorkNest, Eldoret.',
  },
}

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    if (attribute === 'name') element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] ?? '')
    if (attribute === 'property') element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '')
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export default function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const seo = seoByPath[location.pathname] ?? seoByPath['/']
    const origin = window.location.origin
    const canonicalUrl = `${origin}${location.pathname}`
    const imageUrl = `${origin}${defaultImage}`

    document.title = seo.title

    setMeta('meta[name="description"]', 'name', seo.description)
    setMeta('meta[name="robots"]', 'name', 'index, follow')
    setMeta('meta[property="og:title"]', 'property', seo.title)
    setMeta('meta[property="og:description"]', 'property', seo.description)
    setMeta('meta[property="og:type"]', 'property', location.pathname === '/meetups' ? 'website' : 'website')
    setMeta('meta[property="og:url"]', 'property', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', imageUrl)
    setMeta('meta[property="og:site_name"]', 'property', siteName)
    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', seo.title)
    setMeta('meta[name="twitter:description"]', 'name', seo.description)
    setMeta('meta[name="twitter:image"]', 'name', imageUrl)

    setLink('canonical', canonicalUrl)

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: siteName,
          url: origin,
          logo: `${origin}/devnest_logo.png`,
          sameAs: [
            'https://www.linkedin.com/company/devnest-ke/',
            'https://github.com/devnest-eldoret',
            'https://www.instagram.com/devnestke/',
            'https://www.tiktok.com/@devnest.eldoret',
          ],
        },
        {
          '@type': 'Place',
          name: 'The WorkNest, Eldoret',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Eldoret',
            addressCountry: 'KE',
          },
        },
      ],
    }

    if (location.pathname === '/meetups') {
      structuredData['@graph'].push({
        '@type': 'Event',
        name: 'Building AI Agents',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        startDate: '2026-08-28T17:00:00+03:00',
        endDate: '2026-08-28T20:00:00+03:00',
        image: [imageUrl],
        description:
          'A DevNest Eldoret meetup on building AI agents, prompt architecture, tool use, and practical product workflows.',
        location: {
          '@type': 'Place',
          name: 'The WorkNest, Naivas, Elgon View Mall',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Eldoret',
            addressCountry: 'KE',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: siteName,
          url: origin,
        },
        offers: {
          '@type': 'Offer',
          url: 'https://kulevents.co.ke/events/building-ai-agents',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'KES',
        },
      })
    }

    let script = document.head.querySelector('script[data-seo="json-ld"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo', 'json-ld')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)
  }, [location.pathname])

  return null
}
