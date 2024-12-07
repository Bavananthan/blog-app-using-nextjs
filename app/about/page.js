'use clint'

function page() {
  return (
    <div >
        <section className="about-section py-16 px-4  h-screen bg-gray-800"  >
        <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
        <p className="text-lg text-center mb-4">
          Hi, I am Armstrong Bavananthan, a passionate Frontend Web Developer with experience in creating
          interactive and user-friendly websites. I specialize in HTML, CSS, JavaScript, and React.
        </p>
        <div className="about-content flex justify-center gap-8">
          {/* <img
            src="/maindp.jpg"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          /> */}
          <div className="bio">
            <h2 className="text-2xl text-center font-semibold">Professional Background</h2>
            <p className="text-lg mt-2">
            I am a Associate Software Engineer with experience in mobile application development using 
            Flutter and website development as a freelancer. Currently, 
            I work at Alles Pvt Ltd, where I specialize in creating user-friendly 
            mobile apps and contribute to innovative software solutions. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I build responsive and intuitive web interfaces that align with the overall product vision. My focus is on delivering engaging, user-centered designs that drive the success of each project.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page