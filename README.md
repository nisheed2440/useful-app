# Part 2 - Useful App

This app describes a sample situation where you import a global module, over ride its styles and text content and display it based on your needs.

To begin with clone this repository. Then `cd` into the folder where you have cloned it. Then run

```bash
npm link useful-module
```

This would link the `useful-module` to the node_modules folder without the need for publishing it to the global npm registry. Next run

```bash
npm install
```

This should install all the necessary dependancies needed for the application to run.

In order to run the application, type in the following

```bash
npm run serve
```

This should spin up the webpack dev server based on the configuration in `webpack.config.js`. The app can now be viewed @ `http://localhost:9000/webpack-dev-server`.

Once the application is rendered you will notice that there are two `style` tags being generated in the `head` tag. One comes from the imported `useful-module` and the other from the `index.scss` overrides.

The task is to remove duplicate style references of a module, which in this case is `useful-module`, keeping only the overidden styles without making changes to the source code of the `useful-module`.

So basically only one `style` tag should be present in the `head` tag which reflects the styles mentioned in `index.scss` of the `useful-app`.

