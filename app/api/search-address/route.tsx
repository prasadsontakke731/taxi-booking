import { NextResponse } from 'next/server';
const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);

  const serachText = searchParams.get('q');

  const res = await fetch(
    BASE_URL +
      '?q=' +
      serachText +
      '?language=en&limit=8&session_token=07d32294-04fb-4f81-88fc-8ddfa5a03c28&country=IN' +
      '&access_token=' +
      process.env.MAPBOX_ACCESS_TOKEN,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const searchResult = await res.json();
  return NextResponse.json(searchResult);
}
