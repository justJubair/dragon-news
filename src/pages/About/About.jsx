import Navbar from "../../components/Navbar/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between mt-12 md:flex-row">
        <div>
          <h1 className="font-semibold text-xl mb-4" >Frequently Asked Questions</h1>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-6">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center px-4">
          <h1 className="text-2xl font-bold mb-4" >About Us</h1>
          <p className="text-start text-slate-500 px-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptatem officia commodi deleniti, cum optio esse, deserunt numquam voluptates minima expedita dolorum et ullam eius mollitia earum aspernatur placeat quod! Asperiores, velit? Itaque quos voluptate explicabo exercitationem ipsa voluptatibus assumenda similique numquam, dicta tempora blanditiis praesentium quas ab distinctio ex fugit consectetur quaerat hic! Nam obcaecati vero earum accusamus repudiandae, reprehenderit aliquam asperiores voluptatum expedita consequuntur velit perspiciatis praesentium in quia consequatur debitis! Cumque in saepe deleniti aliquid aperiam cupiditate veniam, suscipit voluptas vero facere officia et commodi ab placeat quidem adipisci enim! Quo tempore itaque, eaque animi sed asperiores..</p>
        </div>
      </div>
    </div>
  );
};

export default About;
