import "#config/load.env.js";
import "#config/sequelize.js";
import httpServer from "#config/httpServer.js";

const main = () => {
  httpServer.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
  });
};

main();
