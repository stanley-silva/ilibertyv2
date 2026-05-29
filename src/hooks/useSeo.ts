import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

/**
 * Custom hook to dynamically manage page SEO (title and meta description)
 * 
 * @param title Page specific title
 * @param description Page specific meta description for SEO indexation
 */
export default function useSeo({ title, description }: SeoProps) {
  useEffect(() => {
    const baseTitle = 'iLiberty Tecnologia';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
