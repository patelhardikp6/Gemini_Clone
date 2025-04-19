
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDqB_0s_PrO62KATfVeBxQVEtsXxwKkQu4" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    // contents: "Explain how AI works in a few words",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}


export default main;