export default async function Delete(url: String, id: String) {
  const deleteFoodItem = await fetch(`/api/${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  if (!deleteFoodItem.ok) {
    throw new Error("Error while deleting data");
  }
  alert("deleted successfully");
  console.log(deleteFoodItem);
}
