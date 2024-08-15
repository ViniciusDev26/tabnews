test('GET to /api/v1/status should return 200', async () => {
  const host = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
  const response = await fetch(`${host}/api/v1/status`)
  const data = await response.json()

  expect(response.status).toBe(200)
  expect(data).toEqual({ status: 'ok' })
})
