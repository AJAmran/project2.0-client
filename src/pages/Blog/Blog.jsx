import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="container mx-auto my-10">
      <div className="mb-4 border">
        <h3 className="bg-orange-500 text-white text-xl font-semibold px-2 py-3 rounded">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h3>
        <p className="px-2 py-3">
          An access token is a short-lived credential that grants permission to
          access specific resources, while a refresh token is a long-lived
          credential used to obtain new access tokens.
        </p>
        <p className="px-2 py-3">
          Access tokens are typically stored in client-side memory or session
          storage, while refresh tokens are securely stored in persistent
          storage, often as HTTP-only cookies. Proper storage and security
          measures are crucial to prevent unauthorized access and protect
          sensitive information in client-side token management.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="bg-orange-500 text-white text-xl font-semibold px-2 py-3 rounded">
          Compare SQL and NoSQL databases?
        </h3>
        <div className="grid grid-cols-2 gap-4 border">
          <div className="border px-2 py-3">
            <h1 className="font-bold">SQL Database</h1>
            <li>
              Relational database model with structured data, enforcing
              predefined schemas and relationships.
            </li>
            <li>
              Vertically scalable, requiring hardware upgrades to handle
              increased load
            </li>
            <li>
              Utilizes the standardized SQL language for querying and
              manipulating data
            </li>
          </div>
          <div className="px-2 py-3">
            <h1 className="font-bold">NoSQL databases</h1>
            <li>
              on-relational database model that offers flexibility in handling
              unstructured or semi-structured data with dynamic schemas.
            </li>
            <li>
              Horizontally scalable, allowing distribution of data across
              multiple servers for seamless scalability.
            </li>
            <li>
              Offers different query languages, such as MongoDB query language
              or Cassandra CQL, depending on the specific NoSQL database type.
            </li>
          </div>
        </div>
      </div>
      <div className="border mb-4">
        <h3 className="bg-orange-500 text-white text-xl font-semibold px-2 py-3 rounded">
          What is express js? What is Nest JS?
        </h3>
        <p className="px-2 py-3">
          {" "}
          <span className="font-bold">ExpressJs:</span> Minimalistic web
          application framework for Node.js, allowing quick development of web
          apps and APIs using JavaScript.
        </p>
        <p className="px-2 py-3">
          <span className="font-bold">NestJS:</span> Powerful framework built on
          Express.js, utilizing TypeScript. Offers structure, dependency
          injection, decorators, and modularity for scalable server-side
          applications.
        </p>
      </div>
      <div className="border">
        <h3 className="bg-orange-500 text-white text-xl font-semibold px-2 py-3 rounded">
          What is MongoDB aggregate and how does it work?
        </h3>
        <p className="px-2 py-3">
          {" "}
          <span className="font-bold">ExpressJs:</span> MongoDB aggregate
          function is used for advanced data analysis. It works by chaining
          stages in a pipeline, allowing operations like filtering, grouping,
          transforming, and aggregating data within a collection. Data flows
          through each stage, with output generated based on the defined
          operations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
