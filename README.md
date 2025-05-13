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
### Language Selector
`..\src\nextjs\src\components\LanguageSelector.tsx` implements a Language Selector Next.js component.

### Gated Content
`..\src\nextjs\src\components\GatedContentWrapper.tsx` implements a secure gate for the protected content leveraging Okta as an SSO provider. `..\src\nextjs\src\components\GatedContent.tsx` demonstrates an example of a protected content using the `GatedContentWrapper`.

# Authentication with Okta
The GatedContentWrapper ensures that only authenticated users via Okta can access some protected content / components. Its implementation is based on the [NextAuth.js](https://next-auth.js.org/getting-started/introduction) open-source authentication solution:
1. `..\src\nextjs\.env.local` specifies the Environment Variables for Okta integration
2. `..\src\nextjs\src\pages\api\auth\[...nextauth].ts` implements the NextAuth API route
3. `..\src\nextjs\src\pages\_app.tsx` sets up the Auth Provider and makes the authentication session data available throughout the component tree

   

# License
The Sitecore XM Cloud project is released under the MIT license what means that you can modify and use its code how you want even for commercial use.
