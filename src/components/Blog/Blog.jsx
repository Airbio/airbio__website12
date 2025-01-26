import React from 'react'
import Header from '../Home/Header'
import logo from '../../assets/images/logo.svg'

const Blog = () => {
  return (
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-screen-lg md:px-10 format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                Beyond Clean Air: What to Look for in Your Next Biosafety Cabinet
              </h1>
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
                className='mb-5 lg:w-full'
              />
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 border px-2 rounded-full"
                    src={logo}
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-medium text-gray-900 dark:text-white"
                    >
                      Airbio Technologies
                    </a>
                    <p className="text-base text-gray-500">
                      Admin
                    </p>
                    <p className="text-base text-gray-500">
                      <time
                        pubdate=""
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Jan 31, 2025.
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              {/* <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Best practices for successful prototypes
              </h1> */}
            </header>
            <p className="lead">
              In the world of microbiology, safety isn’t optional—it’s essential. Whether you're managing a high-stakes research lab or a pharmaceutical testing facility, choosing the right biosafety cabinet (BSC) is a decision that directly impacts your work's accuracy and safety. But how do you separate a mediocre BSC from one that truly stands out?
            </p>
            <p>
              Before going digital, you might benefit from scribbling down some ideas
              in a sketchbook. This way, you can think things through before
              committing to an actual design project.
            </p>
            {/* <p>
              But then I found a{" "}
              <a href="https://flowbite.com">
                component library based on Tailwind CSS called Flowbite
              </a>
              . It comes with the most commonly used UI components, such as buttons,
              navigation bars, cards, form elements, and more which are conveniently
              built with the utility classes from Tailwind CSS.
            </p> */}
            <figure>
              {/* <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
              /> */}
              {/* <figcaption>Digital art by Anonymous</figcaption> */}
            </figure>
            {/* <h2>Getting started with Flowbite</h2>
            <p>
              First of all you need to understand how Flowbite works. This library is
              not another framework. Rather, it is a set of components based on
              Tailwind CSS that you can just copy-paste from the documentation.
            </p>
            <p>
              It also includes a JavaScript file that enables interactive components,
              such as modals, dropdowns, and datepickers which you can optionally
              include into your project via CDN or NPM.
            </p> */}
            {/* <p>
              You can check out the{" "}
              <a href="https://flowbite.com/docs/getting-started/quickstart/">
                quickstart guide
              </a>{" "}
              to explore the elements by including the CDN files into your project.
              But if you want to build a project with Flowbite I recommend you to
              follow the build tools steps so that you can purge and minify the
              generated CSS.
            </p> */}
            {/* <p>
              You'll also receive a lot of useful application UI, marketing UI, and
              e-commerce pages that can help you get started with your projects even
              faster. You can check out this{" "}
              <a href="https://flowbite.com/docs/components/tables/">
                comparison table
              </a>{" "}
              to better understand the differences between the open-source and pro
              version of Flowbite.
            </p> */}
            <h1 className='font-medium text-2xl  my-5'>Key Features That Matter</h1>
            {/* <p>
              While it might seem like extra work at a first glance, here are some key
              moments in which prototyping will come in handy:
            </p> */}
            <ol>
              <li>
                <strong>Real-Time Data Management:</strong> A high-quality BSC should integrate with your Lab Information Management System (LIMS). With real-time data monitoring, you can ensure regulatory compliance and streamline lab processes.
              </li>
              <li className='my-5'>
                <strong>Stable Airflow Monitoring:</strong> Low airflow sensors with self-compensation technology provide stability, minimizing contamination risks.

              </li>
              <li>
                <strong>Energy Efficiency:</strong> Energy-efficient blowers like DEC Star Variable Speed ECM save up to 70% energy while ensuring whisper-quiet operation—a win for both your budget and your team’s focus.
              </li>
              {/* <li>
                <strong>Communicating your vision</strong>. By using an interactive
                medium to preview and test design elements, designers and developers
                can understand each other — and the project — better.
              </li> */}
            </ol>
            {/* <h3>Laying the groundwork for best design</h3>
            <p>
              Before going digital, you might benefit from scribbling down some ideas
              in a sketchbook. This way, you can think things through before
              committing to an actual design project.
            </p>
            <p>
              Let's start by including the CSS file inside the <code>head</code> tag
              of your HTML.
            </p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is unique,
              certain shapes are shared across letters. A typeface represents shared
              patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is unique,
              certain shapes are shared across letters. A typeface represents shared
              patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is unique,
              certain shapes are shared across letters. A typeface represents shared
              patterns across a collection of letters.
            </p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the beginning or
              end of a stroke on a letter. Typefaces with serifs are called serif
              typefaces. Serif fonts are classified as one of the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul> */}
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              alt=""
              className='my-5 lg:w-full'
            />
            <ol>
              {/* <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li> */}
            </ol>
            <h1 className='font-medium text-2xl my-5'>Why It Matters</h1>
            <p>
              Imagine working on groundbreaking research, only to have your results compromised by an unreliable cabinet. That’s the kind of risk you can’t afford. With advanced features like ergonomic sash designs, angular front grills for improved containment, and stainless steel work surfaces for easy cleaning, a reliable BSC doesn’t just safeguard your work—it enhances your workflow.
            </p>
            <p className='my-5'>
              Investing in the right equipment isn’t just a financial decision; it’s a professional one. After all, your lab deserves nothing but the best.
            </p>
            <p>
              Ready to elevate your lab’s safety and efficiency? Explore AirBio’s advanced biosafety cabinets today.
            </p>

            {/* <h4>Table example</h4>
            <p>
              A serif is a small shape or projection that appears at the beginning or
              end of a stroke on a letter.
            </p> */}
            {/* <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Date &amp; Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>United States</td>
                  <td>April 21, 2021</td>
                  <td>
                    <strong>$2,300</strong>
                  </td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>May 31, 2021</td>
                  <td>
                    <strong>$300</strong>
                  </td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>June 3, 2021</td>
                  <td>
                    <strong>$2,500</strong>
                  </td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>June 23, 2021</td>
                  <td>
                    <strong>$3,543</strong>
                  </td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>July 6, 2021</td>
                  <td>
                    <strong>$99</strong>
                  </td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>August 23, 2021</td>
                  <td>
                    <strong>$2,540</strong>
                  </td>
                </tr>
              </tbody>
            </table> */}
            {/* <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how
              close a prototype will be to the real deal. If you’re simply preparing a
              quick visual aid for a presentation, a low-fidelity prototype — like a
              wireframe with placeholder images and some basic text — would be more
              than enough. But if you’re going for more intricate usability testing, a
              high-fidelity prototype — with on-brand colors, fonts and imagery —
              could help get more pointed results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user flow,
              try to think as your user would when interacting with your product.
              While you can fine-tune this during beta testing, considering your
              user’s needs and habits early on will save you time by setting you on
              the right path.
            </p>
            <p>
              <strong>Start from the inside out</strong>. A nice way to both organize
              your tasks and create more user-friendly prototypes is by building your
              prototypes ‘inside out’. Start by focusing on what will be important to
              your user, like a Buy now button or an image gallery, and list each
              element by order of priority. This way, you’ll be able to create a
              prototype that puts your users’ needs at the heart of your design.
            </p>
            <p>
              And there you have it! Everything you need to design and share
              prototypes — right in Flowbite Figma.
            </p> */}

          </article>
        </div>
      </main>

    </div>
  )
}

export default Blog
