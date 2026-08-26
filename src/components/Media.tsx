import { imageUrl } from '../utils/imageUrl'

interface MediaProps {
  src: string
  alt?: string
  className?: string
  /** 是否让视频自动循环播放（用作封面/氛围图时开启） */
  animate?: boolean
  /** 媒体加载完成时回调（图片 onLoad，视频 onLoadedData） */
  onLoad?: () => void
}

const VIDEO_RE = /\.(mp4|mov|webm|m4v)(?:$|\?)/i

/**
 * 统一媒体渲染：.mp4/.mov/.webm 用 <video>，其它用 <img>。
 * 用于展览封面 / 展厅氛围 / 展品，兼容用户上传的图片与视频文件。
 */
export function Media({
  src,
  alt = '',
  className = '',
  animate = false,
  onLoad,
}: MediaProps) {
  const url = imageUrl(src)
  if (VIDEO_RE.test(src)) {
    return (
      <video
        src={url}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay={animate}
        onLoadedData={onLoad}
        className={className}
      />
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={onLoad}
      className={className}
    />
  )
}