# EGI code test frontend

I built a little Game of Thrones website, powered by Gatsby. I didn't display too much data, just to make sure I don't spoil anything in case you haven't seen Game of Thrones yet 😉.

The website is available at http://egi-code-test-frontend.s3-website-us-east-1.amazonaws.com

## Client side rendered pages

Next to the pre-built static pages, there are also a few pages that are rendered only on the client side.

I used the [gatsby-plugin-create-client-paths](https://www.gatsbyjs.org/packages/gatsby-plugin-create-client-paths/) gatsby plugin to do this.
It took me a while to get it working though, becuase the url pattern I was trying to achieve was not possible.
I wanted `/categories/*` to be client side rendered, but `/categories` should have been a static prebuilt page.
This is not possible with the plugin. I think it can be possible if you change the plugin a bit. I just changed my URL structure a bit to avoid it.

## GraphQL

I'm fetching data via GraphQL on the client side, but also during the built.
The `/categories` is a static page, but it shows some data from the API that is being fetched during built time (with the [gatsby-source-graphql plugin](https://www.gatsbyjs.org/packages/gatsby-source-graphql/)).

The dynamic pages use Apollo Client. The app is wrapped with an Apollo provider and the queries are executed via a `useQuery` react hook.

## Styling

I didn't focus too much on design/styling, I just made it look decent (I'm not a designer after all).

Styling is done with css modules (on top of the default global gatsby css). I still prefer "normal" css over all the "css-in-js" solutions. I use postcss with a few plugins.

I also created a few "ui" components that can be re-used easily.

## Deployment

I used [gatsby-plugin-s3](https://www.gatsbyjs.org/packages/gatsby-plugin-s3/) to deploy it to S3. There's also a `serverless` plugin you combine with this plugin, but that just seemed to make it more complicated. The plugin on its own also works perfectly and it's very easy to install.

## Conclusion

I think Gatsby is a very powerful tool for creating static websites. It has a lot of functionality out of the box and has loads of plugins, which allow you to make very performant and optimized websites.
I do have the feeling though that it's not very well suited for making dynamic websites. I think you're better of with [nextjs](https://nextjs.org/) if you're planning on making a website that's partially dynamic, but they're very similar (certainly these days because both tools now support server-side rendering and static site generation, while they both used to do only one of those).
