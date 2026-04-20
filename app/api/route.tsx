export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  })
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name') ? formData.get('name') : ""
  const birthday = formData.get('birthday') ? formData.get('birthday') : ""
  const phone = formData.get('phone') ? formData.get('phone') : ""
  const country = formData.get('country') ? formData.get('country') : ""
  const address = formData.get('address') ? formData.get('address') : ""
  const group = formData.get('group') ? formData.get('group') : ""
  const begin = formData.get('begin') ? formData.get('begin') : ""
  const notes = formData.get('notes') ? formData.get('notes') : ""

  try {
    const response = {
      name,
      birthday,
      phone,
      country,
      address,
      group,
      begin,
      notes
    }

    return Response.json(response, {
      status: 200,
      headers: {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
    })
  } catch (e) {
    console.log("Something went wrong")
  }

}
