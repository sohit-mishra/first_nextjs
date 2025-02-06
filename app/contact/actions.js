"use server"; 

export async function createPost(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  try {
    return { success: "Your message has been sent!" };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { error: "Something went wrong. Try again later." };
  }
}
