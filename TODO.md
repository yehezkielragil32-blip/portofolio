# TODO: Add Entrance Animations to All Sections

## Tasks
- [ ] Refactor Projects.tsx to use framer-motion for repeated entrance animations on scroll up/down
- [ ] Refactor Contact.tsx to use framer-motion for repeated entrance animations on scroll up/down
- [ ] Test the animations by running the development server and scrolling up/down through sections
- [ ] Verify that all components (Hero, About, Skills, Projects, Contact) animate repeatedly on scroll

## Notes
- Hero, About, and Skills already use framer-motion with once: false
- Projects and Contact currently use manual scroll listeners that only animate once
- Use consistent animation variants: opacity 0 to 1, y: 50 to 0, duration 0.6, stagger 0.2
