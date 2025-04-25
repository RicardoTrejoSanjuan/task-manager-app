export const AboutMePage = () => {
  return (
    <div className='flex-1 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 p-6'>
      <div className='max-w-5xl mx-auto space-y-16'>
        {/* About Me Section */}
        <section className='text-center space-y-6'>
          <h1 className='text-5xl font-bold mb-4'>
            About <span className='text-indigo-800 dark:text-indigo-600'>Me</span>
          </h1>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            Hi, I'm <strong>Ricardo Trejo Sanjuan</strong>, a passionate developer who loves creating modern web applications. I
            specialize in <strong>React, Angular, and TypeScript</strong>, and I enjoy solving complex problems and building
            user-friendly interfaces.
          </p>
          {/* <img
            src="https://via.placeholder.com/150"
            alt="Your Profile"
            className="w-40 h-40 rounded-full mx-auto shadow-lg"
          /> */}
        </section>

        {/* Projects Section */}
        <section>
          <h2 className='text-3xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-8'>My Projects 🚀</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                name: 'Mixology Hub',
                description: 'Allows to explore a wide variety of drink recipes sourced from an external API.',
                technologies: ' React - React Router - TypeScript - Vite - Zustand - Zod',
                image: 'https://github.com/RicardoTrejoSanjuan/mixology-hub/blob/main/public/Screenshot.png?raw=true',
                link: 'https://magnificent-bombolone-192394.netlify.app/',
              },
              {
                name: 'Calorie Tracker',
                description: 'Designed to help users track their daily caloric intake and expenditure.',
                technologies: ' React - TypeScript - Vite',
                image: 'https://github.com/RicardoTrejoSanjuan/calorie-track/blob/main/public/page.png?raw=true',
                link: 'https://gentle-puppy-0e63e3.netlify.app/',
              },
              {
                name: 'GuitarLa E-commerce',
                description: 'Allows to browse products, add them to the cart, and manage the quantity of each item.',
                technologies: 'React - TypeScript - Vite - Node',
                image: 'https://github.com/RicardoTrejoSanjuan/guitarLa-ts/blob/main/public/img/Screenshot.png?raw=true',
                link: 'https://heartfelt-druid-c67a72.netlify.app/',
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition'>
                <img src={project.image} alt={project.name} className='w-full h-40 object-cover' />
                <div className='p-4'>
                  <h3 className='text-lg font-bold text-indigo-700 dark:text-indigo-400'>{project.name}</h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-2'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.split(' - ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 text-sm font-medium px-2 py-1 rounded-lg'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className='text-center space-y-6'>
          <h2 className='text-3xl font-bold text-indigo-700 dark:text-indigo-400'>Let's Connect! 🤝</h2>
          <p className='text-gray-700 dark:text-gray-300'>
            I'm always open to collaborating on exciting projects or discussing new ideas. Feel free to reach out!
          </p>
          <div className='flex justify-center space-x-4'>
            {/* GitHub */}
            <a
              href='https://github.com/RicardoTrejoSanjuan'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.12-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.59.24 2.76.12 3.05.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.24 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.98 10.98 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z' />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/ricardo-trejo-sanjuan-96616b153/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.038 0 3.6 2.001 3.6 4.604v5.588z' />
              </svg>
              LinkedIn
            </a>

            {/* Email */}
            <a
              href='mailto:trejosanjuanricardo@gmail.com'
              className='flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 12.713l11.985-8.713h-23.97l11.985 8.713zm-12-7.229v14.516l8.627-7.258-8.627-7.258zm13.373 7.258l8.627 7.258v-14.516l-8.627 7.258zm-1.373 1.229l-3.985 3.351h7.97l-3.985-3.351z' />
              </svg>
              Email Me
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
