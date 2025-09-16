import { test, expect } from '@playwright/test';

const baseUrl = 'https://petstore.swagger.io/v2';

test('GET lista de usuários', async ({ request }) => {
  const response = await request.get(`${baseUrl}/user/string`);
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.username).toBe("string");
});

test('POST inserir um pet', async ({ request }) => {
    const addPet = await request.post(`${baseUrl}/pet`, {
    data:{
    id: 987451151515188,
      category: { id: 0, name: "string" },
      name: "Perola",
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available"
    }
});
    
    expect(addPet.status()).toBe(200);
    const convertJson = await addPet.json();
    expect(convertJson.name).toBe("Perola")
    console.log(convertJson);
    

});