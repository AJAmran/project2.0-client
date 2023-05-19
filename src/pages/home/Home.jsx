import { useLoaderData } from "react-router-dom";
import e1 from "../../assets/e1.jpeg";
import PhotoGellery from "./PhotoGellery";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Home = () => {
  const alltoys = useLoaderData();
  console.log(alltoys);

  const mathToy = alltoys.filter(obj => obj.subCategory === "math").slice(0, 2);
  const scienceToy = alltoys.filter(obj => obj.subCategory === "science").slice(0, 2);
  const engineeringToy = alltoys.filter(obj => obj.subCategory === "engineering kits").slice(0, 2);
  console.log(mathToy, scienceToy, engineeringToy)


  return (
    <div>
      {/* bannaer section */}

      <div className="hero bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img src={e1} className="rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* gallery section */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center mb-3">Toys Gallery</h1>
        <PhotoGellery></PhotoGellery>
      </div>

      {/* react tab */}

      <div className="container mx-auto mt-5">
        <Tabs forceRenderTabPanel defaultIndex={1} className="border bg-slate-100 rounded-lg p-3">
          <TabList className="text-center bg-ing text-xl font-bold">
            <Tab>The toys</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList className="font-semibold text-lg">
                <Tab>Math Toys</Tab>
                <Tab>engineering toys</Tab>
                <Tab>Science Toys</Tab>
              </TabList>
              <TabPanel>
                <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                  alt="Homer Simpson"
                />
              </TabPanel>
              <TabPanel>
                <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                  alt="Marge Simpson"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Oldest child and only son of Homer and Marge; brother of Lisa
                  and Maggie.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                  alt="Bart Simpson"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Middle child and eldest daughter of Homer and Marge; sister of
                  Bart and Maggie.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                  alt="Lisa Simpson"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Youngest child and daughter of Homer and Marge; sister of Bart
                  and Lisa.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                  alt="Maggie Simpson"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
