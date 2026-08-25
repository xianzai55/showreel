import { motion } from 'framer-motion'
import { EditorialImage } from './EditorialImage'
import { Section, SectionLabel, SectionTitle } from './Section'
import type { EditorialSection as SectionType, ProjectImage } from '../data/projects'

interface EditorialSectionProps {
  section: SectionType
  accent?: string
  onImageClick: (image: ProjectImage, localIndex: number) => void
}

const textVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

function TextBlock({ label, title, text, accent }: { label?: string; title?: string; text?: string; accent?: string }) {
  return (
    <div className="max-w-md">
      {label && <SectionLabel label={label} accent={accent} />}
      {title && <SectionTitle>{title}</SectionTitle>}
      {text && (
        <motion.p {...textVariants} className="text-sm md:text-base text-rice/75 leading-relaxed">
          {text}
        </motion.p>
      )}
    </div>
  )
}

export function EditorialSection({ section, accent, onImageClick }: EditorialSectionProps) {
  const images = section.images || []

  const handleClick = (img: ProjectImage, offset: number) => {
    onImageClick(img, offset)
  }

  switch (section.type) {
    case 'statement':
      return (
        <Section compact>
          <div className="max-w-3xl mx-auto text-center">
            {section.label && <SectionLabel label={section.label} accent={accent} />}
            {section.title && <SectionTitle className="md:text-4xl">{section.title}</SectionTitle>}
            {section.text && (
              <motion.p {...textVariants} className="text-lg md:text-xl text-rice/80 leading-relaxed font-light">
                {section.text}
              </motion.p>
            )}
          </div>
        </Section>
      )

    case 'split':
      return (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
            {images[0] && (
              <div className="flex justify-center md:justify-start">
                <EditorialImage image={images[0]} onClick={() => handleClick(images[0], 0)} />
              </div>
            )}
          </div>
        </Section>
      )

    case 'text-image':
      return (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
            {images[0] && (
              <div className="flex justify-center md:justify-end">
                <EditorialImage image={images[0]} onClick={() => handleClick(images[0], 0)} />
              </div>
            )}
          </div>
        </Section>
      )

    case 'image-text':
      return (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {images[0] && (
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <EditorialImage image={images[0]} onClick={() => handleClick(images[0], 0)} />
              </div>
            )}
            <div className="order-1 md:order-2">
              <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
            </div>
          </div>
        </Section>
      )

    case 'duo':
      return (
        <Section>
          <div className="mb-10 md:mb-14">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {images.map((img, i) => (
              <div key={img.src} className="flex justify-center">
                <EditorialImage image={img} onClick={() => handleClick(img, i)} />
              </div>
            ))}
          </div>
        </Section>
      )

    case 'trio':
      return (
        <Section>
          <div className="mb-10 md:mb-14">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
            {images.map((img, i) => (
              <div key={img.src} className="flex justify-center">
                <EditorialImage image={img} onClick={() => handleClick(img, i)} />
              </div>
            ))}
          </div>
        </Section>
      )

    case 'mosaic':
      return (
        <Section>
          <div className="mb-10 md:mb-14">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-end">
            {images.map((img, i) => (
              <EditorialImage key={img.src} image={img} onClick={() => handleClick(img, i)} />
            ))}
          </div>
        </Section>
      )

    case 'single':
      return (
        <Section>
          <div className="mb-10 md:mb-14">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
          </div>
          {images[0] && (
            <div className="flex justify-center">
              <EditorialImage image={images[0]} onClick={() => handleClick(images[0], 0)} />
            </div>
          )}
        </Section>
      )

    case 'full':
      return (
        <Section>
          <div className="mb-10 md:mb-14">
            <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
          </div>
          {images[0] && (
            <div className="flex justify-center">
              <EditorialImage image={{ ...images[0], size: 'xl' }} onClick={() => handleClick(images[0], 0)} />
            </div>
          )}
        </Section>
      )

    case 'caption':
      return (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 md:col-start-2">
              <TextBlock label={section.label} title={section.title} text={section.text} accent={accent} />
            </div>
            {images[0] && (
              <div className="md:col-span-6 flex justify-center md:justify-start">
                <EditorialImage image={images[0]} onClick={() => handleClick(images[0], 0)} />
              </div>
            )}
          </div>
        </Section>
      )

    default:
      return null
  }
}
