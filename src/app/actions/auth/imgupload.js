
export const imgupload = async (file) => {
  const imgForm = new FormData();
  imgForm.append("image", file);

  const res = await fetch(
    process.env.NEXT_PUBLIC_IMGBB_KEY,
    {
      method: "POST",
      body: imgForm,
    }
  );

  const result = await res.json();
  if (!result.success) throw new Error("Image upload failed");

  return result.data.url; 
};
