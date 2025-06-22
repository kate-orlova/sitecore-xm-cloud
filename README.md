[![GitHub license](https://img.shields.io/github/license/kate-orlova/sitecore-xm-cloud.svg)](https://github.com/kate-orlova/sitecore-xm-cloud/blob/master/LICENSE)
![GitHub language count](https://img.shields.io/github/languages/count/kate-orlova/sitecore-xm-cloud.svg?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/kate-orlova/sitecore-xm-cloud.svg?style=flat)
![GitHub repo size](https://img.shields.io/github/repo-size/kate-orlova/sitecore-xm-cloud.svg?style=flat)
![GitHub contributors](https://img.shields.io/github/contributors/kate-orlova/sitecore-xm-cloud)

# Sitecore XM Cloud

# Components
This component library helps to accelerate your XM Cloud development.

## Headless SXA
### Banner
`..\src\sxa\src\components\Banner.tsx` implements a Banner JavaScript component.

## Next.js
If you are utilising the [Next.js](https://nextjs.org/) framework for front-end implementation, this section will be beneficial as it covers a selection of ready-to-use Next.js components.

### Language Selector
The Next.js framework offers built-in support for internationalisation and localisation ([i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization)) routing. To enable this functionality, you simply need to add the `i18n` configuration to your `next.config.js` file and define all the locales you intend to support within your Next.js application.

A **Language Selector** Next.js component retrieves all available languages through `router.locales`, uses `sitecoreContext` to determine the current language and handles language switching on the front-end. Its implementation can be found in `..\src\nextjs\src\components\LanguageSelector.tsx` file.

### Gated Content
`..\src\nextjs\src\components\GatedContentWrapper.tsx` implements a secure gate for the protected content leveraging Okta as an SSO provider. `..\src\nextjs\src\components\GatedContent.tsx` demonstrates an example of a protected content using the `GatedContentWrapper`.

# Authentication with Okta
The GatedContentWrapper ensures that only authenticated users via Okta can access some protected content / components. Its implementation is based on the [NextAuth.js](https://next-auth.js.org/getting-started/introduction) open-source authentication solution:
1. `..\src\nextjs\.env.local` specifies the Environment Variables for Okta integration
2. `..\src\nextjs\src\pages\api\auth\[...nextauth].ts` implements the NextAuth API route
3. `..\src\nextjs\src\pages\_app.tsx` sets up the Auth Provider and makes the authentication session data available throughout the component tree
4. `..\src\nextjs\src\components\GatedContentWrapper.tsx` implements a secure wrapper functionality to protected access to the restricted content
5. `..\src\nextjs\src\components\GatedContent.tsx` implements a gated content component using the secure wrapper

   

# License
The Sitecore XM Cloud project is released under the MIT license what means that you can modify and use its code how you want even for commercial use.
