import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qynxnhz9',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: 'skqKaYrDKn9U04yp2SVUM6EptxaEdoNpxJ8hasq75TSb6KFpA9DDwBUxTmbkDlxUTqpynYc4o0r5l1Trreafh1bDq0R100lI7GmtwI3Dghxg3RC3SFvV6DqEqcFCLmsodaypbcOqyjDEylmpaNXnlYVZQxb7m9LW0pPLq6shVcz5bTanL4i4'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);