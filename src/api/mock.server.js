import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      fruit: Model
    },

    routes() {
      this.namespace = "api";
      // this.timing = 0000;
      this.resource("fruits");
    },

    seeds(server) {
      [...Array(10)].forEach((_) => {
        server.create("fruit", {
          id: faker.random.uuid(),
          name: faker.random.word(),
          image: faker.random.image(),
          price: faker.commerce.price()
          // description: faker.commerce.productDescription()
        });
      });
    }
  });
}
