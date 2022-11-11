import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "6xyu11pz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-11-08",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

// https://rn-deliveroo-clonee.sanity.studio/
