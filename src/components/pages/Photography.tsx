const BASE    = 'https://photos.adobe.io/v2/spaces/51716ab1bf284106986eeafca6241773'
const ALBUM   = '8ffa348475174f459599bbd50ea03f06'
const API_KEY = 'LightroomMobileWeb1'

interface Photo {
  id: string
  url: string
  width: number
  height: number
  fileName: string
}

async function fetchPhotos(): Promise<Photo[]> {
  const res = await fetch(
    `${BASE}/albums/${ALBUM}/assets?embed=asset&subtype=image%3Bvideo&api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  const text = await res.text()
  const data = JSON.parse(text.replace(/^while \(1\) \{\}\n/, ''))

  return (data.resources as any[])
    .filter((r) => r.asset?.subtype === 'image')
    .map((r) => {
      const links   = r.asset.links
      const relPath = links['/rels/rendition_type/1280']?.href
      const url     = relPath ? `${BASE}/${relPath}?api_key=${API_KEY}` : null
      const payload = r.asset.payload ?? {}
      return {
        id:       r.id as string,
        url:      url as string,
        width:    payload.develop?.croppedWidth  ?? payload.importSource?.originalWidth  ?? 0,
        height:   payload.develop?.croppedHeight ?? payload.importSource?.originalHeight ?? 0,
        fileName: payload.importSource?.fileName ?? '',
      }
    })
    .filter((p) => p.url)
}

export async function Photography() {
  let photos: Photo[] = []

  try {
    photos = await fetchPhotos()
  } catch {
    return (
      <div className="flex items-center justify-center h-full text-muted opacity-50 font-mono text-sm">
        Could not load photos.
      </div>
    )
  }

  return (
    <div className="p-6 columns-1 sm:columns-2 lg:columns-3 gap-4">
      {photos.map((photo, i) => (
        <div
          key={photo.id}
          className="mb-4 break-inside-avoid rounded-[16px] overflow-hidden"
          style={{
            animation: `fadeInUp 0.5s ease-out both`,
            animationDelay: `${i * 0.04}s`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.url}
            alt={photo.fileName}
            width={photo.width || undefined}
            height={photo.height || undefined}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  )
}
