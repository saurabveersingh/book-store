import { useState, useEffect } from "react"

export const isBigScreen = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return width >= 2800
}

//Do Not Use useCheckDevice custom hook in components. It's only meant for pages.
export const useCheckDevice = () => {
  const [device, setDevice] = useState({ isMobile: null, loader: false })

  useEffect(() => {
    let mobile_type = navigator.userAgent
    let isMobile = Boolean(mobile_type.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
    setDevice({ isMobile: isMobile, loader: true })
  }, [])

  return device
}
