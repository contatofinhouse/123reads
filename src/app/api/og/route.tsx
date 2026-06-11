import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.has('title') 
      ? searchParams.get('title')?.slice(0, 100) 
      : '123reads';
      
    const subtitle = searchParams.has('subtitle')
      ? searchParams.get('subtitle')?.slice(0, 100)
      : 'Impartial AI Book Recommendations';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #f0f0f0 2%, transparent 0%), radial-gradient(circle at 75px 75px, #f0f0f0 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            fontFamily: 'sans-serif',
            padding: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#121212',
              color: 'white',
              width: '100%',
              height: '100%',
              borderRadius: '30px',
              border: '4px solid #e62429',
              boxShadow: '15px 15px 0px #e62429',
              padding: '60px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: '#e62429', marginBottom: '20px', letterSpacing: '0.1em' }}>
              123reads
            </div>
            <div
              style={{
                fontSize: title && title.length > 40 ? '60px' : '80px',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '30px',
                lineHeight: 1.1,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '32px',
                color: '#cccccc',
                fontWeight: 600,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Failed to generate OG image: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
