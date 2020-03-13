# SwagHelloCody

A headless sample implementation inspired by the "Hello Dolly" wordpress plugin.

**TL;DR**: We've provided the end-to-end path for integrating a custom Shopware 6 plugin with your frontend based on [Shopware-PWA](https://github.com/DivanteLtd/shopware-pwa)

## Structure of the plugin

We've separated the plugin into different parts to accomodate the extensions within different domains of the application.

### Template

You can define custom components and configure their injection points (slots) within the theme you are using. These slots are not yet final. The pwa-related plugin resources should reside within `src/Resources/app/pwa`. There is a `config.json` file which maps your components to their intended theme slots.

### API

The PWA communicates to Shopware 6 through the Sales Channel API (Store API). Whenever your plugin requires custom interactions/logic with or on the backend side, you have to provide endpoints to allow for that. In this plugin the corresponding endpoints are defined in [RandomPhraseController](https://github.com/elkmod/SwagHelloCody/blob/master/src/Controller/RandomPhraseController.php#L28)

### Business Logic

This is not PWA-specific, but _please_ separate business logic and controllers. This example is certainly over-engineered in this respect, however please try to follow this within your project for multiple reasons. Business logic is placed within [RandomPhraseGenerator](https://github.com/elkmod/SwagHelloCody/blob/master/src/Content/RandomPhraseGenerator.php)

## Where do the parts connect?

Since your Shopware application and the PWA can (and probably should) run on different servers, you will need to connect both parts at build time. Below is a simple outline of this process:

 1. The [Shopware-PWA](https://github.com/elkmod/SwagVueStorefront) plugin is installed within the Shopware instance
 2. Your custom extension is installed and activated within the Shopware instance
 3. The server that builds (! not the one that serves) your PWA is connected with Shopware through the Admin API, so it can request the plugin and its resources.
 4. Based on the plugin resources (components, configurations) your PWA application will be built and can be served afterwards.
