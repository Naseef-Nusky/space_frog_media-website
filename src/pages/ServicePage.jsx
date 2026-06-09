import { useParams, Navigate } from 'react-router-dom'
import { servicePages } from '../data/content'
import ServiceDetail from '../components/ServiceDetail'

export default function ServicePage() {
  const { slug } = useParams()
  const page = servicePages[slug]

  if (!page) {
    return <Navigate to="/" replace />
  }

  return <ServiceDetail page={page} />
}
