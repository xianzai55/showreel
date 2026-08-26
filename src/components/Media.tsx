import { imageUrl } from '../utils/imageUrl'

interface MediaProps {
  src: string
  alt?: string
  className?: string
  /** 是否让视频自动循环播放（用作封面/氛围图时开启） */
  animate?: boolean
  /** 是否显示视频控制条（大图/灯箱查看时开启） */
  controls?: boolean
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
  controls = false,
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
        controls={controls}
        onLoadedData={onLoad}
        className={className}
      />
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      // 不使用 loading=lazy：站点图片总量可控，立即加载能避免初次进入展厅/设计集时大量占位空白
      // 同时防止在某些浏览器/视口下懒加载未触发、长时间停留在"加载中"
      decoding="sync"
      onLoad={onLoad}
      onError={onLoad}
      className={className}
    />
  )
}