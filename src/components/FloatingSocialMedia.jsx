import React, { useState } from 'react';
import { MessageCircle, Instagram, Linkedin, Facebook, X } from 'lucide-react';

/**
 * FloatingSocialMedia Component
 * Displays floating social media buttons with smooth animations and tooltips
 * Highly flexible and configurable for different use cases
 */
export const FloatingSocialMedia = ({
  position = 'bottom-right',
  theme = 'dark',
  animationEnabled = true,
  showLabels = true,
  social = {
    whatsapp: { enabled: true, link: 'https://wa.me/1234567890', label: 'Chat on WhatsApp' },
    instagram: { enabled: true, link: 'https://instagram.com', label: 'Follow us on Instagram' },
    linkedin: { enabled: true, link: 'https://linkedin.com', label: 'Connect on LinkedIn' },
    facebook: { enabled: true, link: 'https://facebook.com', label: 'Like us on Facebook' },
  },
  expandOnHover = true,
  customColors = {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultColors = {
    whatsapp: '#25D366',
    instagram: '#E1306C',
    linkedin: '#0077B5',
    facebook: '#1877F2',
    primary: theme === 'dark' ? '#1F2937' : '#F3F4F6',
  };

  const colors = { ...defaultColors, ...customColors };

  const positionClasses = {
    'bottom-right': 'fixed bottom-8 right-8',
    'bottom-left': 'fixed bottom-8 left-8',
    'top-right': 'fixed top-8 right-8',
    'top-left': 'fixed top-8 left-8',
  };

  const socialLinks = [
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: social.whatsapp.label,
      link: social.whatsapp.link,
      color: colors.whatsapp,
      enabled: social.whatsapp.enabled,
    },
    {
      key: 'instagram',
      icon: Instagram,
      label: social.instagram.label,
      link: social.instagram.link,
      color: colors.instagram,
      enabled: social.instagram.enabled,
    },
    {
      key: 'linkedin',
      icon: Linkedin,
      label: social.linkedin.label,
      link: social.linkedin.link,
      color: colors.linkedin,
      enabled: social.linkedin.enabled,
    },
    {
      key: 'facebook',
      icon: Facebook,
      label: social.facebook.label,
      link: social.facebook.link,
      color: colors.facebook,
      enabled: social.facebook.enabled,
    },
  ].filter(link => link.enabled);

  const handleSocialClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`${positionClasses[position]} z-50`}
      onMouseEnter={() => expandOnHover && setIsExpanded(true)}
      onMouseLeave={() => expandOnHover && setIsExpanded(false)}
    >
      <div className="flex flex-col items-end gap-4">
        {/* Expanded Social Links */}
        <div
          className={`flex flex-col gap-3 items-end transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div key={social.key} className="flex items-center gap-3 group">
                {showLabels && (
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none">
                    {social.label}
                  </div>
                )}
                <button
                  onClick={() => handleSocialClick(social.link)}
                  style={{ backgroundColor: social.color }}
                  className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white font-semibold hover:scale-110 hover:shadow-xl transform transition-all duration-200 ${
                    animationEnabled ? 'hover:-translate-y-1' : ''
                  }`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={24} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ backgroundColor: colors.primary }}
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-gray-900 font-semibold hover:scale-110 hover:shadow-xl transform transition-all duration-200 ${
            animationEnabled && !isExpanded ? 'animate-bounce-slow' : ''
          } border-2 border-gray-200`}
          aria-label="Toggle social media menu"
          title="Connect with us"
        >
          {isExpanded ? (
            <X size={28} />
          ) : (
            <MessageCircle size={28} />
          )}
        </button>
      </div>

      {/* Background blur when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsExpanded(false)}
          style={{ pointerEvents: 'auto' }}
        />
      )}
    </div>
  );
};

export default FloatingSocialMedia;
