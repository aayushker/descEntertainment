import { NextResponse } from 'next/server'

const OMDB_API_KEY = process.env.OMDB_API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(title)}`
  )

  const data = await res.json()

  return NextResponse.json(data)
}

