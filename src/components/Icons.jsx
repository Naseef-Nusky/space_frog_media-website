import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronUp,
  FileText,
  KeyRound,
  Layers,
  Link2,
  Mail,
  MapPin,
  Menu,
  Monitor,
  MousePointerClick,
  Phone,
  RefreshCw,
  Search,
  SearchCheck,
  ShoppingCart,
  Smartphone,
  Star,
  ThumbsUp,
  Video,
  X,
} from 'lucide-react'

const lucideIcons = {
  chart: BarChart3,
  cursor: MousePointerClick,
  refresh: RefreshCw,
  monitor: Monitor,
  search: Search,
  display: Monitor,
  mobile: Smartphone,
  cart: ShoppingCart,
  video: Video,
  phone: Phone,
  mail: Mail,
  location: MapPin,
  menu: Menu,
  close: X,
  arrow: ArrowRight,
  star: Star,
  link: Link2,
  thumbs: ThumbsUp,
  document: FileText,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  key: KeyRound,
  layers: Layers,
  searchPlus: SearchCheck,
}

const brandIcons = {
  google: (
    <path
      fill="currentColor"
      d="M12.545 10.239v3.821h5.445c-.236 1.343-1.573 3.921-5.456 3.921-3.286 0-5.963-2.719-5.963-6.073s2.677-6.073 5.963-6.073c1.864 0 3.111.795 3.827 1.471l2.572-2.471C17.691 4.201 15.256 3 12.545 3 7.021 3 2.543 7.478 2.543 13s4.478 10 10.002 10c5.772 0 9.592-4.026 9.592-9.711 0-.653-.07-1.157-.163-1.569H12.545z"
    />
  ),
  pinterest: (
    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.971 1.172-4.971s-.299-.599-.299-1.484c0-1.391.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.807 1.481 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  ),
  twitter: (
    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  facebook: (
    <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  ),
}

export function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.75 }) {
  const LucideIcon = lucideIcons[name]

  if (LucideIcon) {
    return <LucideIcon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
  }

  const brandPath = brandIcons[name]
  if (!brandPath) return null

  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {brandPath}
    </svg>
  )
}

export function IconBadge({ name, className = '', iconClassName = 'w-6 h-6' }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-2xl bg-linear-to-br from-brand/15 to-brand-dark/10 text-brand-dark shadow-sm ring-1 ring-brand/20 ${className}`}
    >
      <Icon name={name} className={iconClassName} strokeWidth={1.75} />
    </div>
  )
}
