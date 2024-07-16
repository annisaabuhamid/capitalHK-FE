"use client"
import { useRouter } from "next-nprogress-bar"

function NotFoundComponent() {
  const router = useRouter()

  const handleGoBack = () => {
    if (!window) return
    // check if browser has back history
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace("/")
    }
  }
  return (
    <div id="notfound">
      <div className="notfound select-none">
        <div className="notfound-404">
          <div className="h1">Oops!</div>
          <div className="h2">404 - The Page can't be found</div>
        </div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  )
}

export default NotFoundComponent
