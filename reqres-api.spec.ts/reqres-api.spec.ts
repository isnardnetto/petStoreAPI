import { test, expect } from "@playwright/test";

const baseUrl = "https://petstore.swagger.io/v2";

test("POST includ a pet for id", async ({ request }) => {
  const addPet = await request.post(`${baseUrl}/pet`, {
    data: {
      id: 987451151515188,
      category: { id: 0, name: "string" },
      name: "Perola",
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available",
    },
  });

  expect(addPet.status()).toBe(200);
  const convertJson = await addPet.json();
  expect(convertJson.name).toBe("Perola");
  console.log(convertJson);
});

test("GET show for id", async ({ request }) => {
  const response = await request.get(`${baseUrl}/pet/987451151515188`);
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.name).toBe("Perola");
  console.log(data);
});

test("GET pet not faund for id 404", async ({ request }) => {
  const response = await request.get(`${baseUrl}/pet/98754984848484846666`);
  expect(response.status()).toBe(404);
});

test("PUT update a pet", async ({ request }) => {
  const updadePet = await request.put(`${baseUrl}/pet`, {
    data: {
      id: 987451151515188,
      category: { id: 0, name: "string" },
      name: "Guga",
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available",
    },
  });

  expect(updadePet.status()).toBe(200);
  const convertJson = await updadePet.json();
  expect(convertJson.name).toBe("Guga");
  const response = await request.get(`${baseUrl}/pet/987451151515188`);
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.name).toBe("Guga");
});
