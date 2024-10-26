
export default async function deleteMenuSectorBack(rubro: string, sectoresArray: string[]) {
  const res = await fetch(`http://localhost:3000/api/menu-sectores/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rubro, sectoresArray })
  });

  const response = await res.json()
  return response
}
