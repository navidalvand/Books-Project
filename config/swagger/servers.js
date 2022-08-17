const definition = {
  openapi: "3.0.0",
  info: {
    title: "Books Project",
    version: "1.0.0",
    description: "A simple Express Library",
  },

  servers: [
    {
      url: "http://localhost:5000",
      description: "My API",
    },
  ],
};

module.exports = {
  definition,
};
