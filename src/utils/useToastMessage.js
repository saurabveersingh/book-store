import { useEffect, useState } from "react"

const useToastMessage = () => {
  const [fixedErrorDiv, setFixedErrorDiv] = useState("")

  useEffect(() => {
    setFixedErrorDiv(document.getElementById("fixed-error-div"))
  }, [])

  const hideMessage = () => {
    setTimeout(function () {
      if (fixedErrorDiv) {
        fixedErrorDiv.classList.add("fade_msg")
      }
    }, 51000000)

    setTimeout(function () {
      if (fixedErrorDiv) {
        fixedErrorDiv.innerHTML = ""
      }
      if (document.getElementsByClassName("fade_msg")[0]) {
        document.getElementsByClassName("fade_msg")[0].classList.remove("fade_msg")
      }
    }, 5000)
  }

  const toastMessage = {
    success: (msg) => {
      if (fixedErrorDiv) {
        fixedErrorDiv.innerHTML =
          '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
          '<button type="button" class="btn-close" aria-label="Close" onClick="javascript:(document.getElementById(\'fixed-error-div\').innerHTML=\'\')" style="padding-top: 0.5rem;">' +
          '<span aria-hidden="true">×</span></button>' +
          msg +
          "</div>"
        hideMessage()
      }
    },
    error: (error) => {
      if (fixedErrorDiv) {
        fixedErrorDiv.innerHTML =
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick="javascript:(document.getElementById(\'fixed-error-div\').innerHTML=\'\')" style="padding-top: 0.5rem;">' +
          '<span aria-hidden="true">×</span></button>' +
          error +
          "</div>"
        hideMessage()
      }
    },
  }

  return toastMessage
}

export default useToastMessage
