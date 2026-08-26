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

function videoPoster(src: string): string | undefined {
  // 自动寻找与视频同名的 .jpg 作为首帧封面，避免视频未加载时黑屏
  const poster = src.replace(/\.(mp4|mov|webm|m4v)(?:$|\?)/i, '.jpg')
  if (poster !== src) return imageUrl(poster)
  return undefined
}

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
        preload={animate ? 'auto' : 'metadata'}
        autoPlay={animate}
        controls={controls}
        poster={videoPoster(src)}
        onLoadedData={onLoad}
        className={className}
      />
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      // 懒加载 + 异步解码：初始仅加载视口内图片，显著降低展厅/设计集首屏加载量
      // 视口外的图片在滚动到附近时再加载，避免一次性拉取全部媒体导致的卡顿
      loading="lazy"
      decoding="async"
      onLoad={onLoad}
      onError={onLoad}
      className={className}
      // 图片保护：禁止右键菜单、拖拽保存与选中，降低被访问者直接下载的概率
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
      }}
    />
  )
}