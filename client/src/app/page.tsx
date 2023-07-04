import qs from "qs";

const QUERY = (slug: string) =>  qs.stringify({
  filters: {
    slug: slug,
  },
  populate: {
    Blocks: {
      populate: {
        image: {
          fields: ["name", "alternativeText", "url"],
        }
      },
    }
  }
});

export async function getPage(slug: string) {
  const BASE_URL = process.env.NEXT_STRAPI_URL || "http://localhost:1337";
  const res = await fetch(BASE_URL + "/api/pages?" + QUERY(slug));
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  console.log(data, "FROM GET PAGE FUNCTION")
  return data;
}

export default async function Home() {
  const data = await getPage("home");
  const pageData = data.data[0];
  console.log(pageData, "FROM HOME PAGE")
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">{pageData.attributes.title}</h1>
      <p className="text-xl">{pageData.attributes.description}</p>
    </main>
  );
}