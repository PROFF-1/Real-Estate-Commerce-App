import { ID } from "react-native-appwrite";
import { databases, config } from "./appwrite";
import {
  agentImages,
  galleryImages,
  propertiesImages,
  reviewImages,
} from "./data";

const COLLECTIONS = {
  AGENT: config.agentsCollectionId,
  REVIEWS: config.reviewsCollectionId,
  GALLERY: config.galleriesCollectionId,
  PROPERTY: config.propertiesCollectionId,
};

const propertyTypes = [
  "House",
  "Townhouses",
  "Condos",
  "Duplexes",
  "Studios",
  "Villa",
  "Apartments",
  "Others",
];

const facilities = [
  "Laundry",
  "Car-Parking",
  "Sports-Center",
  "Cutlery",
  "Gym",
  "Swimming-pool",
  "Wifi",
  "Pet-Center",
];

function getRandomSubset<T>(
  array: T[],
  minItems: number,
  maxItems: number
): T[] {
  if (minItems > maxItems) {
    throw new Error("minItems cannot be greater than maxItems");
  }
  if (minItems < 0 || maxItems > array.length) {
    throw new Error(
      "minItems or maxItems are out of valid range for the array"
    );
  }

  // Generate a random size for the subset within the range [minItems, maxItems]
  const subsetSize =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

  // Create a copy of the array to avoid modifying the original
  const arrayCopy = [...array];

  // Shuffle the array copy using Fisher-Yates algorithm
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[i],
    ];
  }

  // Return the first `subsetSize` elements of the shuffled array
  return arrayCopy.slice(0, subsetSize);
}

async function seed() {
  try {
    // Clear existing data from all collections
    for (const key in COLLECTIONS) {
      const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
      const documents = await databases.listDocuments(
        config.databaseId!,
        collectionId!
      );
      for (const doc of documents.documents) {
        await databases.deleteDocument(
          config.databaseId!,
          collectionId!,
          doc.$id
        );
      }
    }

    console.log("Cleared all existing data.");

    // Seed Agents
    const agents = [];
    for (let i = 1; i <= 5; i++) {
      const agent = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.AGENT!,
        ID.unique(),
        {
          name: `Agent ${i}`,
          email: `agent${i}@example.com`,
          avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
        }
      );
      agents.push(agent);
    }
    console.log(`Seeded ${agents.length} agents.`);

    // Seed Properties first since reviews need to reference them
    const properties = [];
    for (let i = 1; i <= 20; i++) {
      const assignedAgent = agents[Math.floor(Math.random() * agents.length)];
      const selectedFacilities = getRandomSubset(facilities, 3, facilities.length);
      
      const image = propertiesImages[i % propertiesImages.length];

      const property = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.PROPERTY!,
        ID.unique(),
        {
          name: `Property ${i}`,
          type: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
          description: `This is the description for Property ${i}.`,
          address: `123 Property Street, City ${i}`,
          geolocation: `192.168.1.${i}, 192.168.1.${i}`,
          price: Math.floor(Math.random() * 9000) + 1000,
          area: Math.floor(Math.random() * 3000) + 500,
          bedrooms: Math.floor(Math.random() * 5) + 1,
          bathrooms: Math.floor(Math.random() * 5) + 1,
          rating: Math.floor(Math.random() * 5) + 1,
          facilities: selectedFacilities,
          image: image,
          agent: assignedAgent.$id,
          // Don't include reviews or galleries here - handled separately
        }
      );
      properties.push(property);
      console.log(`Seeded property: ${property.name}`);
    }

    // Seed Reviews with property references (Many-to-One)
    const reviews = [];
    for (let i = 0; i < 20; i++) {
      const property = properties[Math.floor(Math.random() * properties.length)];
      const reviewCount = Math.floor(Math.random() * 3) + 2; // 2-4 reviews per property
      
      for (let j = 0; j < reviewCount; j++) {
        const review = await databases.createDocument(
          config.databaseId!,
          COLLECTIONS.REVIEWS!,
          ID.unique(),
          {
            name: `Reviewer ${i}-${j}`,
            avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
            review: `This is review ${j} for Property ${property.name}`,
            rating: Math.floor(Math.random() * 5) + 1,
            property: [property.$id]  // Reference to the property
          }
        );
        reviews.push(review);
      }
    }
    console.log(`Seeded ${reviews.length} reviews.`);

    // Seed Galleries with property references (One-to-Many)
    const galleries = [];
    for (const property of properties) {
      const galleryCount = Math.floor(Math.random() * 3) + 2; // 2-4 gallery items per property
      const assignedImages = getRandomSubset(galleryImages, galleryCount, galleryCount);
      
      for (const image of assignedImages) {
        const gallery = await databases.createDocument(
          config.databaseId!,
          COLLECTIONS.GALLERY!,
          ID.unique(),
          {
            image,
            property: property.$id  // Reference to the property
          }
        );
        galleries.push(gallery);
      }
    }
    console.log(`Seeded ${galleries.length} galleries.`);

    console.log("Data seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}
export default seed;