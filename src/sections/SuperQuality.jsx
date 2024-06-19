import { shoe8 } from "../assets/images";
import  Button  from "../components/Button";

const SuperQuality = () => {
  return (
  <section id="about-us"
  className="flex max-container justify-between max-lg:flex-col
  items-center gap-10 w-full">
    <div className="flex flex-col flex-1">
      <h2 className="font-palanquin capitalize
      text-4xl lg:max-w-lg font-bold">
        We Provide You
        <span className="text-coral-red"> Super Quality</span> shoes
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
      Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
      <div className="mt-11">
        <Button label="View details"/>
      </div>
    </div>
    <div>
      <img src={shoe8} alt="shoes" width={570} height={522} />
    </div>
  </section>
  )
}

export default SuperQuality