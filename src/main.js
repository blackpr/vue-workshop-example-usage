import * as timsWorkshop from "@blackpr/vue-workshop-app/workshop-app";
import "@blackpr/vue-workshop-app/dist/workshop-app.css";

// @ts-ignore
// eslint-disable-next-line no-undef
const filesInfo = WORKSHOP_FILES;
import * as backend from "./backend";

const imports = filesInfo
  .filter((item) => ["exercise", "final"].includes(item.type))
  .reduce((acc, curr) => {
    acc[curr.filePath] = () =>
      import(`@/${curr.type}/${curr.filename}${curr.ext}`);
    return acc;
  }, {});

timsWorkshop.makeWorkshopApp({
  imports,
  filesInfo,
  projectTitle: "Testing Vue 3",
  gitHubRepoUrl: "https://github.com/blackpr/vue-fundamentals",
  backend,
});
